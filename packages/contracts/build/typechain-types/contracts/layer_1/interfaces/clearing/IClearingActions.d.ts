import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace IClearing {
    type ClearingOperationIdentifierStruct = {
        clearingOperationType: PromiseOrValue<BigNumberish>;
        partition: PromiseOrValue<BytesLike>;
        tokenHolder: PromiseOrValue<string>;
        clearingId: PromiseOrValue<BigNumberish>;
    };
    type ClearingOperationIdentifierStructOutput = [
        number,
        string,
        string,
        BigNumber
    ] & {
        clearingOperationType: number;
        partition: string;
        tokenHolder: string;
        clearingId: BigNumber;
    };
}
export interface IClearingActionsInterface extends utils.Interface {
    functions: {
        "activateClearing()": FunctionFragment;
        "approveClearingOperationByPartition((uint8,bytes32,address,uint256))": FunctionFragment;
        "cancelClearingOperationByPartition((uint8,bytes32,address,uint256))": FunctionFragment;
        "deactivateClearing()": FunctionFragment;
        "initializeClearing(bool)": FunctionFragment;
        "isClearingActivated()": FunctionFragment;
        "reclaimClearingOperationByPartition((uint8,bytes32,address,uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "activateClearing" | "approveClearingOperationByPartition" | "cancelClearingOperationByPartition" | "deactivateClearing" | "initializeClearing" | "isClearingActivated" | "reclaimClearingOperationByPartition"): FunctionFragment;
    encodeFunctionData(functionFragment: "activateClearing", values?: undefined): string;
    encodeFunctionData(functionFragment: "approveClearingOperationByPartition", values: [IClearing.ClearingOperationIdentifierStruct]): string;
    encodeFunctionData(functionFragment: "cancelClearingOperationByPartition", values: [IClearing.ClearingOperationIdentifierStruct]): string;
    encodeFunctionData(functionFragment: "deactivateClearing", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeClearing", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "isClearingActivated", values?: undefined): string;
    encodeFunctionData(functionFragment: "reclaimClearingOperationByPartition", values: [IClearing.ClearingOperationIdentifierStruct]): string;
    decodeFunctionResult(functionFragment: "activateClearing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveClearingOperationByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelClearingOperationByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deactivateClearing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeClearing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isClearingActivated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reclaimClearingOperationByPartition", data: BytesLike): Result;
    events: {
        "ClearingActivated(address)": EventFragment;
        "ClearingDeactivated(address)": EventFragment;
        "ClearingOperationApproved(address,address,bytes32,uint256,uint8)": EventFragment;
        "ClearingOperationCanceled(address,address,bytes32,uint256,uint8)": EventFragment;
        "ClearingOperationReclaimed(address,address,bytes32,uint256,uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClearingActivated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearingDeactivated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearingOperationApproved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearingOperationCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearingOperationReclaimed"): EventFragment;
}
export interface ClearingActivatedEventObject {
    operator: string;
}
export type ClearingActivatedEvent = TypedEvent<[
    string
], ClearingActivatedEventObject>;
export type ClearingActivatedEventFilter = TypedEventFilter<ClearingActivatedEvent>;
export interface ClearingDeactivatedEventObject {
    operator: string;
}
export type ClearingDeactivatedEvent = TypedEvent<[
    string
], ClearingDeactivatedEventObject>;
export type ClearingDeactivatedEventFilter = TypedEventFilter<ClearingDeactivatedEvent>;
export interface ClearingOperationApprovedEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    clearingOperationType: number;
}
export type ClearingOperationApprovedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], ClearingOperationApprovedEventObject>;
export type ClearingOperationApprovedEventFilter = TypedEventFilter<ClearingOperationApprovedEvent>;
export interface ClearingOperationCanceledEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    clearingOperationType: number;
}
export type ClearingOperationCanceledEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], ClearingOperationCanceledEventObject>;
export type ClearingOperationCanceledEventFilter = TypedEventFilter<ClearingOperationCanceledEvent>;
export interface ClearingOperationReclaimedEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    clearingOperationType: number;
}
export type ClearingOperationReclaimedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], ClearingOperationReclaimedEventObject>;
export type ClearingOperationReclaimedEventFilter = TypedEventFilter<ClearingOperationReclaimedEvent>;
export interface IClearingActions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IClearingActionsInterface;
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
        activateClearing(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        approveClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deactivateClearing(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeClearing(_activateClearing: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isClearingActivated(overrides?: CallOverrides): Promise<[boolean]>;
        reclaimClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    activateClearing(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    approveClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deactivateClearing(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeClearing(_activateClearing: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isClearingActivated(overrides?: CallOverrides): Promise<boolean>;
    reclaimClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        activateClearing(overrides?: CallOverrides): Promise<boolean>;
        approveClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: CallOverrides): Promise<boolean>;
        cancelClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: CallOverrides): Promise<boolean>;
        deactivateClearing(overrides?: CallOverrides): Promise<boolean>;
        initializeClearing(_activateClearing: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        isClearingActivated(overrides?: CallOverrides): Promise<boolean>;
        reclaimClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ClearingActivated(address)"(operator?: PromiseOrValue<string> | null): ClearingActivatedEventFilter;
        ClearingActivated(operator?: PromiseOrValue<string> | null): ClearingActivatedEventFilter;
        "ClearingDeactivated(address)"(operator?: PromiseOrValue<string> | null): ClearingDeactivatedEventFilter;
        ClearingDeactivated(operator?: PromiseOrValue<string> | null): ClearingDeactivatedEventFilter;
        "ClearingOperationApproved(address,address,bytes32,uint256,uint8)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, clearingId?: null, clearingOperationType?: null): ClearingOperationApprovedEventFilter;
        ClearingOperationApproved(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, clearingId?: null, clearingOperationType?: null): ClearingOperationApprovedEventFilter;
        "ClearingOperationCanceled(address,address,bytes32,uint256,uint8)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, clearingId?: null, clearingOperationType?: null): ClearingOperationCanceledEventFilter;
        ClearingOperationCanceled(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, clearingId?: null, clearingOperationType?: null): ClearingOperationCanceledEventFilter;
        "ClearingOperationReclaimed(address,address,bytes32,uint256,uint8)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, clearingId?: null, clearingOperationType?: null): ClearingOperationReclaimedEventFilter;
        ClearingOperationReclaimed(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, clearingId?: null, clearingOperationType?: null): ClearingOperationReclaimedEventFilter;
    };
    estimateGas: {
        activateClearing(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        approveClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deactivateClearing(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeClearing(_activateClearing: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isClearingActivated(overrides?: CallOverrides): Promise<BigNumber>;
        reclaimClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        activateClearing(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        approveClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deactivateClearing(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeClearing(_activateClearing: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isClearingActivated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reclaimClearingOperationByPartition(_clearingOperationIdentifier: IClearing.ClearingOperationIdentifierStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
