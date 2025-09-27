import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IExternalPauseManagementInterface extends utils.Interface {
    functions: {
        "addExternalPause(address)": FunctionFragment;
        "getExternalPausesCount()": FunctionFragment;
        "getExternalPausesMembers(uint256,uint256)": FunctionFragment;
        "initialize_ExternalPauses(address[])": FunctionFragment;
        "isExternalPause(address)": FunctionFragment;
        "removeExternalPause(address)": FunctionFragment;
        "updateExternalPauses(address[],bool[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addExternalPause" | "getExternalPausesCount" | "getExternalPausesMembers" | "initialize_ExternalPauses" | "isExternalPause" | "removeExternalPause" | "updateExternalPauses"): FunctionFragment;
    encodeFunctionData(functionFragment: "addExternalPause", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getExternalPausesCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getExternalPausesMembers", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize_ExternalPauses", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "isExternalPause", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeExternalPause", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateExternalPauses", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]): string;
    decodeFunctionResult(functionFragment: "addExternalPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExternalPausesCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExternalPausesMembers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize_ExternalPauses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isExternalPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeExternalPause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateExternalPauses", data: BytesLike): Result;
    events: {
        "AddedToExternalPauses(address,address)": EventFragment;
        "ExternalPausesUpdated(address,address[],bool[])": EventFragment;
        "RemovedFromExternalPauses(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedToExternalPauses"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExternalPausesUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedFromExternalPauses"): EventFragment;
}
export interface AddedToExternalPausesEventObject {
    operator: string;
    pause: string;
}
export type AddedToExternalPausesEvent = TypedEvent<[
    string,
    string
], AddedToExternalPausesEventObject>;
export type AddedToExternalPausesEventFilter = TypedEventFilter<AddedToExternalPausesEvent>;
export interface ExternalPausesUpdatedEventObject {
    operator: string;
    pauses: string[];
    actives: boolean[];
}
export type ExternalPausesUpdatedEvent = TypedEvent<[
    string,
    string[],
    boolean[]
], ExternalPausesUpdatedEventObject>;
export type ExternalPausesUpdatedEventFilter = TypedEventFilter<ExternalPausesUpdatedEvent>;
export interface RemovedFromExternalPausesEventObject {
    operator: string;
    pause: string;
}
export type RemovedFromExternalPausesEvent = TypedEvent<[
    string,
    string
], RemovedFromExternalPausesEventObject>;
export type RemovedFromExternalPausesEventFilter = TypedEventFilter<RemovedFromExternalPausesEvent>;
export interface IExternalPauseManagement extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IExternalPauseManagementInterface;
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
        addExternalPause(_pause: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getExternalPausesCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            externalPausesCount_: BigNumber;
        }>;
        getExternalPausesMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            members_: string[];
        }>;
        initialize_ExternalPauses(_pauses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isExternalPause(_pause: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        removeExternalPause(_pause: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateExternalPauses(_pauses: PromiseOrValue<string>[], _actives: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addExternalPause(_pause: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getExternalPausesCount(overrides?: CallOverrides): Promise<BigNumber>;
    getExternalPausesMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    initialize_ExternalPauses(_pauses: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isExternalPause(_pause: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    removeExternalPause(_pause: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateExternalPauses(_pauses: PromiseOrValue<string>[], _actives: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addExternalPause(_pause: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        getExternalPausesCount(overrides?: CallOverrides): Promise<BigNumber>;
        getExternalPausesMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        initialize_ExternalPauses(_pauses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        isExternalPause(_pause: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        removeExternalPause(_pause: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        updateExternalPauses(_pauses: PromiseOrValue<string>[], _actives: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AddedToExternalPauses(address,address)"(operator?: PromiseOrValue<string> | null, pause?: null): AddedToExternalPausesEventFilter;
        AddedToExternalPauses(operator?: PromiseOrValue<string> | null, pause?: null): AddedToExternalPausesEventFilter;
        "ExternalPausesUpdated(address,address[],bool[])"(operator?: PromiseOrValue<string> | null, pauses?: null, actives?: null): ExternalPausesUpdatedEventFilter;
        ExternalPausesUpdated(operator?: PromiseOrValue<string> | null, pauses?: null, actives?: null): ExternalPausesUpdatedEventFilter;
        "RemovedFromExternalPauses(address,address)"(operator?: PromiseOrValue<string> | null, pause?: null): RemovedFromExternalPausesEventFilter;
        RemovedFromExternalPauses(operator?: PromiseOrValue<string> | null, pause?: null): RemovedFromExternalPausesEventFilter;
    };
    estimateGas: {
        addExternalPause(_pause: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getExternalPausesCount(overrides?: CallOverrides): Promise<BigNumber>;
        getExternalPausesMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize_ExternalPauses(_pauses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isExternalPause(_pause: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        removeExternalPause(_pause: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateExternalPauses(_pauses: PromiseOrValue<string>[], _actives: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addExternalPause(_pause: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getExternalPausesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExternalPausesMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize_ExternalPauses(_pauses: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isExternalPause(_pause: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeExternalPause(_pause: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateExternalPauses(_pauses: PromiseOrValue<string>[], _actives: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
