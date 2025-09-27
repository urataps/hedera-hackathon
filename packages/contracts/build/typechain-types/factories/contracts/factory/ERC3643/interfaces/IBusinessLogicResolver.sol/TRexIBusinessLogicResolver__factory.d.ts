import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { TRexIBusinessLogicResolver, TRexIBusinessLogicResolverInterface } from "../../../../../../contracts/factory/ERC3643/interfaces/IBusinessLogicResolver.sol/TRexIBusinessLogicResolver";
export declare class TRexIBusinessLogicResolver__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "businessLogicKey";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "businessLogicAddress";
                readonly type: "address";
            }];
            readonly indexed: false;
            readonly internalType: "struct TRexIBusinessLogicResolver.BusinessLogicRegistryData[]";
            readonly name: "businessLogics";
            readonly type: "tuple[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newLatestVersion";
            readonly type: "uint256";
        }];
        readonly name: "BusinessLogicsRegistered";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_configurationId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes4[]";
            readonly name: "_selectors";
            readonly type: "bytes4[]";
        }];
        readonly name: "addSelectorsToBlacklist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBusinessLogicCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "businessLogicCount_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_pageIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pageLength";
            readonly type: "uint256";
        }];
        readonly name: "getBusinessLogicKeys";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "businessLogicKeys_";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLatestVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "latestVersion_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_configurationId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pageIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pageLength";
            readonly type: "uint256";
        }];
        readonly name: "getSelectorsBlacklist";
        readonly outputs: readonly [{
            readonly internalType: "bytes4[]";
            readonly name: "selectors_";
            readonly type: "bytes4[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_version";
            readonly type: "uint256";
        }];
        readonly name: "getVersionStatus";
        readonly outputs: readonly [{
            readonly internalType: "enum TRexIBusinessLogicResolver.VersionStatus";
            readonly name: "status_";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "initialize_BusinessLogicResolver";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "success_";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "businessLogicKey";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "businessLogicAddress";
                readonly type: "address";
            }];
            readonly internalType: "struct TRexIBusinessLogicResolver.BusinessLogicRegistryData[]";
            readonly name: "_businessLogics";
            readonly type: "tuple[]";
        }];
        readonly name: "registerBusinessLogics";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_configurationId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes4[]";
            readonly name: "_selectors";
            readonly type: "bytes4[]";
        }];
        readonly name: "removeSelectorsFromBlacklist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_businessLogicKey";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_version";
            readonly type: "uint256";
        }];
        readonly name: "resolveBusinessLogicByVersion";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "businessLogicAddress_";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_businessLogicKey";
            readonly type: "bytes32";
        }];
        readonly name: "resolveLatestBusinessLogic";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "businessLogicAddress_";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): TRexIBusinessLogicResolverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TRexIBusinessLogicResolver;
}
