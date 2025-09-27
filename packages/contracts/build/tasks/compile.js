"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const task_names_1 = require("hardhat/builtin-tasks/task-names");
const config_1 = require("hardhat/config");
const fs_1 = tslib_1.__importDefault(require("fs"));
const glob_1 = require("glob");
const path_1 = tslib_1.__importDefault(require("path"));
(0, config_1.task)(task_names_1.TASK_COMPILE, "Replace 'interface' with 'interfaces' in TypeChain generated files to avoid compilation errors", async function (taskArguments, hre, runSuper) {
    await runSuper(taskArguments);
    await hre.run('erc3643-clone-interfaces');
    const PATTERN = `${hre.config.typechain.outDir}/**/*.ts`;
    patchTypeChainFiles(PATTERN);
});
function patchTypeChainFiles(pattern) {
    const files = (0, glob_1.sync)(pattern, { nodir: true });
    files.forEach((file) => {
        let text = fs_1.default.readFileSync(file, 'utf8');
        const orig = text;
        text = text.replace(/\b(import\s+type\s+\*\s+as\s+)interface(\s+from\s+['"]\.\/interface['"])/g, '$1interfaces$2');
        text = text.replace(/\b(export\s+type\s+\{\s*)interface(\s*\})/g, '$1interfaces$2');
        text = text.replace(/\b(export\s+\*\s+as\s+)interface(\s+from\s+['"]\.\/interface['"])/g, '$1interfaces$2');
        if (text !== orig) {
            fs_1.default.writeFileSync(file, text, 'utf8');
            console.log(`Patched ${file}`);
        }
    });
}
(0, config_1.task)('erc3643-clone-interfaces', async (_, hre) => {
    const targetDir = hre.config.paths.sources + '/factory/ERC3643/interfaces';
    const interfacesToClone = [
        { original: 'IAccessControl' },
        { original: 'IBondRead' },
        {
            original: 'IBusinessLogicResolver',
            removeHierarchy: false,
        },
        {
            original: 'IDiamondCutManager',
            removeImports: false,
        },
        {
            original: 'IDiamondLoupe',
            removeHierarchy: false,
        },
        { original: 'IEquity' },
        { original: 'IFactory', removeImports: false },
        { original: 'IResolverProxy' },
        { original: 'IStaticFunctionSelectors' },
        {
            original: 'contracts/layer_1/interfaces/ERC1400/IERC20.sol:IERC20',
            removeImports: false,
        },
    ];
    const normalized = interfacesToClone.map((i) => ({
        original: i.original,
        removeImports: i.removeImports ?? true,
        changePragma: i.changePragma ?? true,
        removeHierarchy: i.removeHierarchy ?? true,
    }));
    const constants = [
        { src: 'layer_3/constants/regulation', dst: 'regulation' },
        { src: 'layer_1/constants/roles', dst: 'roles' },
    ];
    function rewriteImports(source) {
        // 1. Eliminar cualquier import a ficheros *StorageWrapper.sol
        source = source.replace(/^\s*import\s+[^;]*StorageWrapper\.sol['"];\s*$/gm, '');
        // 2. Reescribir el resto de imports
        return source.replace(/import\s*\{([^}]+)\}\s*from\s*['"](.+\/)?([^/]+)\.sol['"];/gm, (_match, names, _path, filePath) => {
            const fileNoExt = filePath.replace(/\.sol$/, '');
            const rewritten = names
                .split(',')
                .map((n) => n.trim())
                .filter((n) => n.length > 0)
                .map((n) => {
                const isConstant = constants.some((c) => filePath.includes(c.src.split('/').pop() || c));
                return isConstant ? n : `TRex${n} as ${n}`;
            })
                .join(', ');
            return `import {${rewritten}} from './${fileNoExt}.sol';`;
        });
    }
    await Promise.all(normalized.map(async (i) => {
        const originalArtifact = await hre.artifacts.readArtifact(i.original);
        let erc3643Artifact;
        try {
            const parts = i.original.split(':');
            erc3643Artifact = await hre.artifacts.readArtifact('TRex' + parts[parts.length - 1]);
        }
        catch {
            console.log(`Contract ${i.original} in ERC3643/interfaces not found, will be generated`);
        }
        const shouldGenerate = !erc3643Artifact ||
            JSON.stringify(originalArtifact.abi) !==
                JSON.stringify(erc3643Artifact.abi);
        if (!shouldGenerate) {
            console.log(`Did not generate ${i.original} because an up-to-date version already exists`);
            return;
        }
        let source = fs_1.default.readFileSync(originalArtifact.sourceName, 'utf8');
        if (i.removeImports) {
            source = source.replace(/^\s*import\s+[^;]+;\s*$/gm, '');
        }
        else {
            source = rewriteImports(source);
        }
        if (i.changePragma) {
            source = source.replace(/^pragma solidity\s+[^;]+;/m, 'pragma solidity ^0.8.17;');
        }
        // Renombrar interface/contract y eliminar herencia en un solo paso
        source = source.replace(new RegExp(`(contract|interface)\\s+${originalArtifact.contractName}\\b(\\s+is[^\\{]+)?`, 'm'), `$1 TRex${originalArtifact.contractName}`);
        const targetPath = `${targetDir}/${originalArtifact.contractName}.sol`;
        fs_1.default.writeFileSync(targetPath, source, 'utf8');
        console.log(`Generated: ${targetPath}`);
    }));
    for (const c of constants) {
        const src = path_1.default.join(hre.config.paths.sources, `${c.src}.sol`);
        const dst = path_1.default.join(targetDir, `${c.dst}.sol`);
        if (fs_1.default.existsSync(src)) {
            let content = fs_1.default.readFileSync(src, 'utf8');
            content = content.replace(/^pragma solidity\s+[^;]+;/m, 'pragma solidity ^0.8.17;');
            fs_1.default.writeFileSync(dst, content, 'utf8');
            console.log(`Copied constant with updated pragma: ${dst}`);
        }
        else {
            console.warn(`Not found: ${src}`);
        }
    }
    const { execWithErrorHandling } = await Promise.resolve().then(() => tslib_1.__importStar(require('./utils/errorHandling')));
    try {
        await execWithErrorHandling('npx prettier --write ./contracts/factory/ERC3643/interfaces', 'Prettier code formatting');
        console.log('✅ Successfully formatted ERC3643 interface files');
    }
    catch (error) {
        console.error('Failed to format ERC3643 interface files');
        throw error;
    }
});
