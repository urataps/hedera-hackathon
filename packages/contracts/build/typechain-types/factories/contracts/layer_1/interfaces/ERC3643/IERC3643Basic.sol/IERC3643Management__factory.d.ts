import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC3643Management, IERC3643ManagementInterface } from "../../../../../../contracts/layer_1/interfaces/ERC3643/IERC3643Basic.sol/IERC3643Management";
export declare class IERC3643Management__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "AddressNotVerified";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotRecoverWallet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ComplianceCallFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ComplianceNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IdentityRegistryCallFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InputAmountsArrayLengthMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InputBoolArrayLengthMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WalletRecovered";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_agent";
            readonly type: "address";
        }];
        readonly name: "AgentAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_agent";
            readonly type: "address";
        }];
        readonly name: "AgentRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "identityRegistry";
            readonly type: "address";
        }];
        readonly name: "IdentityRegistryAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_lostWallet";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_newWallet";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_investorOnchainID";
            readonly type: "address";
        }];
        readonly name: "RecoverySuccess";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "newName";
            readonly type: "string";
        }, {
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "newSymbol";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "newDecimals";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "newVersion";
            readonly type: "string";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOnchainID";
            readonly type: "address";
        }];
        readonly name: "UpdatedTokenInformation";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_agent";
            readonly type: "address";
        }];
        readonly name: "addAgent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_compliance";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_identityRegistry";
            readonly type: "address";
        }];
        readonly name: "initialize_ERC3643";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_lostWallet";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_newWallet";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_investorOnchainID";
            readonly type: "address";
        }];
        readonly name: "recoveryAddress";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_agent";
            readonly type: "address";
        }];
        readonly name: "removeAgent";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_compliance";
            readonly type: "address";
        }];
        readonly name: "setCompliance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_identityRegistry";
            readonly type: "address";
        }];
        readonly name: "setIdentityRegistry";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }];
        readonly name: "setName";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_onchainID";
            readonly type: "address";
        }];
        readonly name: "setOnchainID";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
        }];
        readonly name: "setSymbol";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IERC3643ManagementInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC3643Management;
}
