import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export type HoldStruct = {
    amount: PromiseOrValue<BigNumberish>;
    expirationTimestamp: PromiseOrValue<BigNumberish>;
    escrow: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    data: PromiseOrValue<BytesLike>;
};
export type HoldStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    string
] & {
    amount: BigNumber;
    expirationTimestamp: BigNumber;
    escrow: string;
    to: string;
    data: string;
};
export type HoldIdentifierStruct = {
    partition: PromiseOrValue<BytesLike>;
    tokenHolder: PromiseOrValue<string>;
    holdId: PromiseOrValue<BigNumberish>;
};
export type HoldIdentifierStructOutput = [string, string, BigNumber] & {
    partition: string;
    tokenHolder: string;
    holdId: BigNumber;
};
export interface IHoldTokenHolderInterface extends utils.Interface {
    functions: {
        "createHoldByPartition(bytes32,(uint256,uint256,address,address,bytes))": FunctionFragment;
        "createHoldFromByPartition(bytes32,address,(uint256,uint256,address,address,bytes),bytes)": FunctionFragment;
        "executeHoldByPartition((bytes32,address,uint256),address,uint256)": FunctionFragment;
        "reclaimHoldByPartition((bytes32,address,uint256))": FunctionFragment;
        "releaseHoldByPartition((bytes32,address,uint256),uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createHoldByPartition" | "createHoldFromByPartition" | "executeHoldByPartition" | "reclaimHoldByPartition" | "releaseHoldByPartition"): FunctionFragment;
    encodeFunctionData(functionFragment: "createHoldByPartition", values: [PromiseOrValue<BytesLike>, HoldStruct]): string;
    encodeFunctionData(functionFragment: "createHoldFromByPartition", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        HoldStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "executeHoldByPartition", values: [
        HoldIdentifierStruct,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "reclaimHoldByPartition", values: [HoldIdentifierStruct]): string;
    encodeFunctionData(functionFragment: "releaseHoldByPartition", values: [HoldIdentifierStruct, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "createHoldByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createHoldFromByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeHoldByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reclaimHoldByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "releaseHoldByPartition", data: BytesLike): Result;
    events: {
        "HeldByPartition(address,address,bytes32,uint256,tuple,bytes)": EventFragment;
        "HeldFromByPartition(address,address,bytes32,uint256,tuple,bytes)": EventFragment;
        "HoldByPartitionExecuted(address,bytes32,uint256,uint256,address)": EventFragment;
        "HoldByPartitionReclaimed(address,address,bytes32,uint256,uint256)": EventFragment;
        "HoldByPartitionReleased(address,bytes32,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "HeldByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HeldFromByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HoldByPartitionExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HoldByPartitionReclaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "HoldByPartitionReleased"): EventFragment;
}
export interface HeldByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    holdId: BigNumber;
    hold: HoldStructOutput;
    operatorData: string;
}
export type HeldByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    HoldStructOutput,
    string
], HeldByPartitionEventObject>;
export type HeldByPartitionEventFilter = TypedEventFilter<HeldByPartitionEvent>;
export interface HeldFromByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    holdId: BigNumber;
    hold: HoldStructOutput;
    operatorData: string;
}
export type HeldFromByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    HoldStructOutput,
    string
], HeldFromByPartitionEventObject>;
export type HeldFromByPartitionEventFilter = TypedEventFilter<HeldFromByPartitionEvent>;
export interface HoldByPartitionExecutedEventObject {
    tokenHolder: string;
    partition: string;
    holdId: BigNumber;
    amount: BigNumber;
    to: string;
}
export type HoldByPartitionExecutedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string
], HoldByPartitionExecutedEventObject>;
export type HoldByPartitionExecutedEventFilter = TypedEventFilter<HoldByPartitionExecutedEvent>;
export interface HoldByPartitionReclaimedEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    holdId: BigNumber;
    amount: BigNumber;
}
export type HoldByPartitionReclaimedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], HoldByPartitionReclaimedEventObject>;
export type HoldByPartitionReclaimedEventFilter = TypedEventFilter<HoldByPartitionReclaimedEvent>;
export interface HoldByPartitionReleasedEventObject {
    tokenHolder: string;
    partition: string;
    holdId: BigNumber;
    amount: BigNumber;
}
export type HoldByPartitionReleasedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], HoldByPartitionReleasedEventObject>;
export type HoldByPartitionReleasedEventFilter = TypedEventFilter<HoldByPartitionReleasedEvent>;
export interface IHoldTokenHolder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IHoldTokenHolderInterface;
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
        createHoldByPartition(_partition: PromiseOrValue<BytesLike>, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createHoldFromByPartition(_partition: PromiseOrValue<BytesLike>, _from: PromiseOrValue<string>, _hold: HoldStruct, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        executeHoldByPartition(_holdIdentifier: HoldIdentifierStruct, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        reclaimHoldByPartition(_holdIdentifier: HoldIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        releaseHoldByPartition(_holdIdentifier: HoldIdentifierStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createHoldByPartition(_partition: PromiseOrValue<BytesLike>, _hold: HoldStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createHoldFromByPartition(_partition: PromiseOrValue<BytesLike>, _from: PromiseOrValue<string>, _hold: HoldStruct, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    executeHoldByPartition(_holdIdentifier: HoldIdentifierStruct, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    reclaimHoldByPartition(_holdIdentifier: HoldIdentifierStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    releaseHoldByPartition(_holdIdentifier: HoldIdentifierStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createHoldByPartition(_partition: PromiseOrValue<BytesLike>, _hold: HoldStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            holdId_: BigNumber;
        }>;
        createHoldFromByPartition(_partition: PromiseOrValue<BytesLike>, _from: PromiseOrValue<string>, _hold: HoldStruct, _operatorData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            holdId_: BigNumber;
        }>;
        executeHoldByPartition(_holdIdentifier: HoldIdentifierStruct, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        reclaimHoldByPartition(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<boolean>;
        releaseHoldByPartition(_holdIdentifier: HoldIdentifierStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "HeldByPartition(address,address,bytes32,uint256,tuple,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, holdId?: null, hold?: null, operatorData?: null): HeldByPartitionEventFilter;
        HeldByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, holdId?: null, hold?: null, operatorData?: null): HeldByPartitionEventFilter;
        "HeldFromByPartition(address,address,bytes32,uint256,tuple,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, holdId?: null, hold?: null, operatorData?: null): HeldFromByPartitionEventFilter;
        HeldFromByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, holdId?: null, hold?: null, operatorData?: null): HeldFromByPartitionEventFilter;
        "HoldByPartitionExecuted(address,bytes32,uint256,uint256,address)"(tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, holdId?: null, amount?: null, to?: null): HoldByPartitionExecutedEventFilter;
        HoldByPartitionExecuted(tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, holdId?: null, amount?: null, to?: null): HoldByPartitionExecutedEventFilter;
        "HoldByPartitionReclaimed(address,address,bytes32,uint256,uint256)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, holdId?: null, amount?: null): HoldByPartitionReclaimedEventFilter;
        HoldByPartitionReclaimed(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, holdId?: null, amount?: null): HoldByPartitionReclaimedEventFilter;
        "HoldByPartitionReleased(address,bytes32,uint256,uint256)"(tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, holdId?: null, amount?: null): HoldByPartitionReleasedEventFilter;
        HoldByPartitionReleased(tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, holdId?: null, amount?: null): HoldByPartitionReleasedEventFilter;
    };
    estimateGas: {
        createHoldByPartition(_partition: PromiseOrValue<BytesLike>, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createHoldFromByPartition(_partition: PromiseOrValue<BytesLike>, _from: PromiseOrValue<string>, _hold: HoldStruct, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        executeHoldByPartition(_holdIdentifier: HoldIdentifierStruct, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        reclaimHoldByPartition(_holdIdentifier: HoldIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        releaseHoldByPartition(_holdIdentifier: HoldIdentifierStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createHoldByPartition(_partition: PromiseOrValue<BytesLike>, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createHoldFromByPartition(_partition: PromiseOrValue<BytesLike>, _from: PromiseOrValue<string>, _hold: HoldStruct, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        executeHoldByPartition(_holdIdentifier: HoldIdentifierStruct, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        reclaimHoldByPartition(_holdIdentifier: HoldIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        releaseHoldByPartition(_holdIdentifier: HoldIdentifierStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
