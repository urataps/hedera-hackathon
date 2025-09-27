import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface ILockInterface extends utils.Interface {
    functions: {
        "getLockCountFor(address)": FunctionFragment;
        "getLockCountForByPartition(bytes32,address)": FunctionFragment;
        "getLockFor(address,uint256)": FunctionFragment;
        "getLockForByPartition(bytes32,address,uint256)": FunctionFragment;
        "getLockedAmountFor(address)": FunctionFragment;
        "getLockedAmountForByPartition(bytes32,address)": FunctionFragment;
        "getLocksIdFor(address,uint256,uint256)": FunctionFragment;
        "getLocksIdForByPartition(bytes32,address,uint256,uint256)": FunctionFragment;
        "lock(uint256,address,uint256)": FunctionFragment;
        "lockByPartition(bytes32,uint256,address,uint256)": FunctionFragment;
        "release(uint256,address)": FunctionFragment;
        "releaseByPartition(bytes32,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getLockCountFor" | "getLockCountForByPartition" | "getLockFor" | "getLockForByPartition" | "getLockedAmountFor" | "getLockedAmountForByPartition" | "getLocksIdFor" | "getLocksIdForByPartition" | "lock" | "lockByPartition" | "release" | "releaseByPartition"): FunctionFragment;
    encodeFunctionData(functionFragment: "getLockCountFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getLockCountForByPartition", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getLockFor", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getLockForByPartition", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getLockedAmountFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getLockedAmountForByPartition", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getLocksIdFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getLocksIdForByPartition", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "lock", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "lockByPartition", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "release", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "releaseByPartition", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "getLockCountFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLockCountForByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLockFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLockForByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLockedAmountFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLockedAmountForByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocksIdFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLocksIdForByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "releaseByPartition", data: BytesLike): Result;
    events: {
        "LockByPartitionReleased(address,address,bytes32,uint256)": EventFragment;
        "LockedByPartition(address,address,bytes32,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "LockByPartitionReleased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LockedByPartition"): EventFragment;
}
export interface LockByPartitionReleasedEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    lockId: BigNumber;
}
export type LockByPartitionReleasedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], LockByPartitionReleasedEventObject>;
export type LockByPartitionReleasedEventFilter = TypedEventFilter<LockByPartitionReleasedEvent>;
export interface LockedByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    lockId: BigNumber;
    amount: BigNumber;
    expirationTimestamp: BigNumber;
}
export type LockedByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], LockedByPartitionEventObject>;
export type LockedByPartitionEventFilter = TypedEventFilter<LockedByPartitionEvent>;
export interface ILock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILockInterface;
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
        getLockCountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            lockCount_: BigNumber;
        }>;
        getLockCountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            lockCount_: BigNumber;
        }>;
        getLockFor(_tokenHolder: PromiseOrValue<string>, _lockId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount_: BigNumber;
            expirationTimestamp_: BigNumber;
        }>;
        getLockForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _lockId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount_: BigNumber;
            expirationTimestamp_: BigNumber;
        }>;
        getLockedAmountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount_: BigNumber;
        }>;
        getLockedAmountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount_: BigNumber;
        }>;
        getLocksIdFor(_tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            locksId_: BigNumber[];
        }>;
        getLocksIdForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            locksId_: BigNumber[];
        }>;
        lock(_amount: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        lockByPartition(_partition: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        release(_lockId: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        releaseByPartition(_partition: PromiseOrValue<BytesLike>, _lockId: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getLockCountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getLockCountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getLockFor(_tokenHolder: PromiseOrValue<string>, _lockId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount_: BigNumber;
        expirationTimestamp_: BigNumber;
    }>;
    getLockForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _lockId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount_: BigNumber;
        expirationTimestamp_: BigNumber;
    }>;
    getLockedAmountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getLockedAmountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getLocksIdFor(_tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    getLocksIdForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    lock(_amount: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    lockByPartition(_partition: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    release(_lockId: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    releaseByPartition(_partition: PromiseOrValue<BytesLike>, _lockId: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getLockCountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLockCountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLockFor(_tokenHolder: PromiseOrValue<string>, _lockId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount_: BigNumber;
            expirationTimestamp_: BigNumber;
        }>;
        getLockForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _lockId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount_: BigNumber;
            expirationTimestamp_: BigNumber;
        }>;
        getLockedAmountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLockedAmountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLocksIdFor(_tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        getLocksIdForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        lock(_amount: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            lockId_: BigNumber;
        }>;
        lockByPartition(_partition: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            lockId_: BigNumber;
        }>;
        release(_lockId: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        releaseByPartition(_partition: PromiseOrValue<BytesLike>, _lockId: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "LockByPartitionReleased(address,address,bytes32,uint256)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, lockId?: null): LockByPartitionReleasedEventFilter;
        LockByPartitionReleased(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, lockId?: null): LockByPartitionReleasedEventFilter;
        "LockedByPartition(address,address,bytes32,uint256,uint256,uint256)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, lockId?: null, amount?: null, expirationTimestamp?: null): LockedByPartitionEventFilter;
        LockedByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, lockId?: null, amount?: null, expirationTimestamp?: null): LockedByPartitionEventFilter;
    };
    estimateGas: {
        getLockCountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLockCountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLockFor(_tokenHolder: PromiseOrValue<string>, _lockId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getLockForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _lockId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getLockedAmountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLockedAmountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getLocksIdFor(_tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getLocksIdForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        lock(_amount: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        lockByPartition(_partition: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        release(_lockId: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        releaseByPartition(_partition: PromiseOrValue<BytesLike>, _lockId: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getLockCountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLockCountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLockFor(_tokenHolder: PromiseOrValue<string>, _lockId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLockForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _lockId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLockedAmountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLockedAmountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLocksIdFor(_tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLocksIdForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lock(_amount: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        lockByPartition(_partition: PromiseOrValue<BytesLike>, _amount: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, _expirationTimestamp: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        release(_lockId: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        releaseByPartition(_partition: PromiseOrValue<BytesLike>, _lockId: PromiseOrValue<BigNumberish>, _tokenHolder: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
