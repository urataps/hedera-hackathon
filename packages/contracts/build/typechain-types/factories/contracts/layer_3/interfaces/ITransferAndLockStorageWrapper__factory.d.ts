import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITransferAndLockStorageWrapper, ITransferAndLockStorageWrapperInterface } from "../../../../contracts/layer_3/interfaces/ITransferAndLockStorageWrapper";
export declare class ITransferAndLockStorageWrapper__factory {
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationTimestamp";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lockId";
            readonly type: "uint256";
        }];
        readonly name: "PartitionTransferredAndLocked";
        readonly type: "event";
    }];
    static createInterface(): ITransferAndLockStorageWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITransferAndLockStorageWrapper;
}
