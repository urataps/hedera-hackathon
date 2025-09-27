import { HardhatRuntimeEnvironment } from 'hardhat/types';
/**
 * Enhanced exec wrapper with improved error handling
 * @param command - The command to execute
 * @param description - Human-readable description of what the command does
 * @returns Promise that resolves with stdout or rejects with enhanced error
 */
export declare const execWithErrorHandling: (command: string, description?: string) => Promise<string>;
/**
 * Validates Ethereum addresses and provides helpful error messages
 * @param address - The address to validate
 * @param paramName - The parameter name for error messages
 * @param hre - Hardhat runtime environment for address validation
 * @param allowZeroAddress - Whether to allow zero address (default: true)
 */
export declare const validateAddress: (address: string, paramName: string, hre: HardhatRuntimeEnvironment, allowZeroAddress?: boolean) => void;
/**
 * Validates deployment parameters and provides warnings for zero addresses
 * @param params - Object containing parameter names and addresses to validate
 * @param hre - Hardhat runtime environment
 * @param options - Validation options
 */
export declare const validateDeploymentParams: (params: Record<string, string>, hre: HardhatRuntimeEnvironment, options?: {
    allowZeroAddress?: boolean;
    warnOnZeroAddress?: boolean;
    strict?: boolean;
}) => void;
