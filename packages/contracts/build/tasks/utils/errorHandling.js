"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeploymentParams = exports.validateAddress = exports.execWithErrorHandling = void 0;
const _scripts_1 = require("@scripts");
const child_process_1 = require("child_process");
/**
 * Enhanced exec wrapper with improved error handling
 * @param command - The command to execute
 * @param description - Human-readable description of what the command does
 * @returns Promise that resolves with stdout or rejects with enhanced error
 */
const execWithErrorHandling = (command, description = 'command') => {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Failed to execute ${description}: ${command}`);
                console.error(`Error details: ${error.message}`);
                console.error(`Exit code: ${error.code}`);
                if (error.signal) {
                    console.error(`Killed by signal: ${error.signal}`);
                }
                return reject(new Error(`${description} failed: ${error.message}`));
            }
            if (stderr) {
                console.warn(`${description} warnings/errors: ${stderr}`);
                // Don't reject on stderr alone, as many tools output warnings to stderr
            }
            if (stdout.trim()) {
                console.log(`${description} output: ${stdout}`);
            }
            resolve(stdout);
        });
    });
};
exports.execWithErrorHandling = execWithErrorHandling;
/**
 * Validates Ethereum addresses and provides helpful error messages
 * @param address - The address to validate
 * @param paramName - The parameter name for error messages
 * @param hre - Hardhat runtime environment for address validation
 * @param allowZeroAddress - Whether to allow zero address (default: true)
 */
const validateAddress = (address, paramName, hre, allowZeroAddress = true) => {
    if (!allowZeroAddress && address === _scripts_1.ADDRESS_ZERO) {
        throw new Error(`${paramName} cannot be zero address`);
    }
    if (address !== _scripts_1.ADDRESS_ZERO && !hre.ethers.utils.isAddress(address)) {
        throw new Error(`Invalid address format for ${paramName}: ${address}`);
    }
};
exports.validateAddress = validateAddress;
/**
 * Validates deployment parameters and provides warnings for zero addresses
 * @param params - Object containing parameter names and addresses to validate
 * @param hre - Hardhat runtime environment
 * @param options - Validation options
 */
const validateDeploymentParams = (params, hre, options = {}) => {
    const { allowZeroAddress = true, warnOnZeroAddress = true, strict = false, } = options;
    console.log('📋 Deployment Parameter Validation:');
    for (const [paramName, address] of Object.entries(params)) {
        // Validate address format
        (0, exports.validateAddress)(address, paramName, hre, allowZeroAddress);
        // Warn about zero addresses if enabled
        if (warnOnZeroAddress && address === _scripts_1.ADDRESS_ZERO) {
            const level = strict ? 'ERROR' : 'WARNING';
            console.warn(`⚠️  ${level}: ${paramName} is set to zero address. This may not be intended for production deployments.`);
            if (strict) {
                throw new Error(`${paramName} cannot be zero address in strict mode`);
            }
        }
        console.log(`   ✅ ${paramName}: ${address}`);
    }
};
exports.validateDeploymentParams = validateDeploymentParams;
