import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBond, IBondInterface } from "../../../../../contracts/layer_2/interfaces/bond/IBond";
export declare class IBond__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_partition";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "redeemAtMaturityByPartition";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "recordDate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executionDate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "rate";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBondRead.Coupon";
            readonly name: "_newCoupon";
            readonly type: "tuple";
        }];
        readonly name: "setCoupon";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "success_";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "couponID_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_maturityDate";
            readonly type: "uint256";
        }];
        readonly name: "updateMaturityDate";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "success_";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IBondInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBond;
}
