import { Contract, ContractFactory } from 'ethers';
import DeployContractCommand from './commands/DeployContractCommand';
import DeployContractWithLibraryCommand from './commands/DeployContractWithLibraryCommand';
import DeployContractResult from './results/DeployContractResult';
import { DeployContractWithFactoryCommand, DeployContractWithFactoryResult, DeployAtsContractsCommand, DeployAtsContractsResult, DeployAtsFullInfrastructureCommand, DeployAtsFullInfrastructureResult } from '@scripts';
import Environment from './Environment';
export declare let environment: Environment;
export declare function deployAtsFullInfrastructure({ signer, network, useDeployed, useEnvironment, timeTravelEnabled, partialBatchDeploy, }: DeployAtsFullInfrastructureCommand): Promise<DeployAtsFullInfrastructureResult>;
export declare function deployAtsContracts({ signer, network, useDeployed, timeTravelEnabled, }: DeployAtsContractsCommand): Promise<DeployAtsContractsResult>;
export declare function deployContractWithFactory<F extends ContractFactory, C extends Contract = ReturnType<F['attach']>>({ factory, signer, args, overrides, withProxy, deployedContract, }: DeployContractWithFactoryCommand<F>): Promise<DeployContractWithFactoryResult<C>>;
/**
 * Deploys a smart contract and optionally its proxy and proxy admin.
 *
 * @param {DeployContractCommand} params - The deployment parameters.
 * @param {ContractName} params.name - The name of the contract to deploy.
 * @param {Signer} params.signer - The signer to use for the deployment.
 * @param {Array<any>} params.args - The arguments to pass to the contract constructor.
 * @returns {Promise<DeployContractResult>} A promise that resolves to the deployment result.
 *
 * @example
 * const result = await deployContract({
 *   name: 'MyContract',
 *   signer: mySigner,
 *   args: [arg1, arg2],
 * });
 */
export declare function deployContract({ name, signer, args, }: DeployContractCommand): Promise<DeployContractResult>;
/**
 * Deploys a contract with linked libraries.
 *
 * @param {DeployContractWithLibraryCommand} params - The deployment parameters.
 * @param {ContractName} params.name - The name of the contract to deploy.
 * @param {Signer} params.signer - The signer to use for deployment.
 * @param {Array<any>} params.args - The arguments to pass to the contract constructor.
 * @param {LibraryName[]} params.libraries - Array of library names to deploy and link.
 * @returns {Promise<DeployContractResult>} A promise that resolves to the deployment result.
 *
 * @example
 * const result = await deployContractWithLibraries({
 *   name: 'TREXFactoryAts',
 *   signer: mySigner,
 *   args: [arg1, arg2, arg3],
 *   libraries: ['SecurityDeploymentLib']
 * });
 */
export declare function deployContractWithLibraries({ name, signer, args, libraries, }: DeployContractWithLibraryCommand): Promise<DeployContractResult>;
