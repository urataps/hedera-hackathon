import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace ITransferAndLock {
    type TransferAndLockStructStruct = {
        from: PromiseOrValue<string>;
        to: PromiseOrValue<string>;
        amount: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
        expirationTimestamp: PromiseOrValue<BigNumberish>;
    };
    type TransferAndLockStructStructOutput = [
        string,
        string,
        BigNumber,
        string,
        BigNumber
    ] & {
        from: string;
        to: string;
        amount: BigNumber;
        data: string;
        expirationTimestamp: BigNumber;
    };
}
export interface ITransferAndLockInterface extends utils.Interface {
    functions: {
        "protectedTransferAndLock((address,address,uint256,bytes,uint256),uint256,uint256,bytes)": FunctionFragment;
        "protectedTransferAndLockByPartition(bytes32,(address,address,uint256,bytes,uint256),uint256,uint256,bytes)": FunctionFragment;
        "transferAndLock(address,uint256,bytes,uint256)": FunctionFragment;
        "transferAndLockByPartition(bytes32,address,uint256,bytes,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "protectedTransferAndLock" | "protectedTransferAndLockByPartition" | "transferAndLock" | "transferAndLockByPartition"): FunctionFragment;
    encodeFunctionData(functionFragment: "protectedTransferAndLock", values: [
        ITransferAndLock.TransferAndLockStructStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "protectedTransferAndLockByPartition", values: [
        PromiseOrValue<BytesLike>,
        ITransferAndLock.TransferAndLockStructStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "transferAndLock", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "transferAndLockByPartition", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "protectedTransferAndLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protectedTransferAndLockByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAndLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAndLockByPartition", data: BytesLike): Result;
    events: {};
}
export interface ITransferAndLock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITransferAndLockInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        protectedTransferAndLock(_transferAndLockData: ITransferAndLock.TransferAndLockStructStruct, _deadline: PromiseOrValue<BigNumberish>, _nounce: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        protectedTransferAndLockByPartition(_partition: PromiseOrValue<BytesLike>, _transferAndLockData: ITransferAndLock.TransferAndLockStructStruct, _deadline: PromiseOrValue<BigNumberish>, _nounce: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferAndLock(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferAndLockByPartition(_partition: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    protectedTransferAndLock(_transferAndLockData: ITransferAndLock.TransferAndLockStructStruct, _deadline: PromiseOrValue<BigNumberish>, _nounce: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    protectedTransferAndLockByPartition(_partition: PromiseOrValue<BytesLike>, _transferAndLockData: ITransferAndLock.TransferAndLockStructStruct, _deadline: PromiseOrValue<BigNumberish>, _nounce: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferAndLock(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferAndLockByPartition(_partition: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        protectedTransferAndLock(_transferAndLockData: ITransferAndLock.TransferAndLockStructStruct, _deadline: PromiseOrValue<BigNumberish>, _nounce: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            lockId_: BigNumber;
        }>;
        protectedTransferAndLockByPartition(_partition: PromiseOrValue<BytesLike>, _transferAndLockData: ITransferAndLock.TransferAndLockStructStruct, _deadline: PromiseOrValue<BigNumberish>, _nounce: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            lockId_: BigNumber;
        }>;
        transferAndLock(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            lockId_: BigNumber;
        }>;
        transferAndLockByPartition(_partition: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            lockId_: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        protectedTransferAndLock(_transferAndLockData: ITransferAndLock.TransferAndLockStructStruct, _deadline: PromiseOrValue<BigNumberish>, _nounce: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        protectedTransferAndLockByPartition(_partition: PromiseOrValue<BytesLike>, _transferAndLockData: ITransferAndLock.TransferAndLockStructStruct, _deadline: PromiseOrValue<BigNumberish>, _nounce: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferAndLock(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferAndLockByPartition(_partition: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        protectedTransferAndLock(_transferAndLockData: ITransferAndLock.TransferAndLockStructStruct, _deadline: PromiseOrValue<BigNumberish>, _nounce: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        protectedTransferAndLockByPartition(_partition: PromiseOrValue<BytesLike>, _transferAndLockData: ITransferAndLock.TransferAndLockStructStruct, _deadline: PromiseOrValue<BigNumberish>, _nounce: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferAndLock(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferAndLockByPartition(_partition: PromiseOrValue<BytesLike>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
