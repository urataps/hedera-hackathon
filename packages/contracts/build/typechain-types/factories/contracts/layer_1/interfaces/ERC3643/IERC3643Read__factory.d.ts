import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC3643Read, IERC3643ReadInterface } from "../../../../../contracts/layer_1/interfaces/ERC3643/IERC3643Read";
export declare class IERC3643Read__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "compliance";
        readonly outputs: readonly [{
            readonly internalType: "contract ICompliance";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "identityRegistry";
        readonly outputs: readonly [{
            readonly internalType: "contract IIdentityRegistry";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_wallet";
            readonly type: "address";
        }];
        readonly name: "isAddressRecovered";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_agent";
            readonly type: "address";
        }];
        readonly name: "isAgent";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "onchainID";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IERC3643ReadInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC3643Read;
}
