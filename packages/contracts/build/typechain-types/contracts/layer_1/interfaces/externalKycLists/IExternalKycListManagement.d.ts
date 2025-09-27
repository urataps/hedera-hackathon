import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IExternalKycListManagementInterface extends utils.Interface {
    functions: {
        "addExternalKycList(address)": FunctionFragment;
        "getExternalKycListsCount()": FunctionFragment;
        "getExternalKycListsMembers(uint256,uint256)": FunctionFragment;
        "initialize_ExternalKycLists(address[])": FunctionFragment;
        "isExternalKycList(address)": FunctionFragment;
        "isExternallyGranted(address,uint8)": FunctionFragment;
        "removeExternalKycList(address)": FunctionFragment;
        "updateExternalKycLists(address[],bool[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addExternalKycList" | "getExternalKycListsCount" | "getExternalKycListsMembers" | "initialize_ExternalKycLists" | "isExternalKycList" | "isExternallyGranted" | "removeExternalKycList" | "updateExternalKycLists"): FunctionFragment;
    encodeFunctionData(functionFragment: "addExternalKycList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getExternalKycListsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getExternalKycListsMembers", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize_ExternalKycLists", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "isExternalKycList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isExternallyGranted", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "removeExternalKycList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateExternalKycLists", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]): string;
    decodeFunctionResult(functionFragment: "addExternalKycList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExternalKycListsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExternalKycListsMembers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize_ExternalKycLists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isExternalKycList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isExternallyGranted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeExternalKycList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateExternalKycLists", data: BytesLike): Result;
    events: {
        "AddedToExternalKycLists(address,address)": EventFragment;
        "ExternalKycListsUpdated(address,address[],bool[])": EventFragment;
        "RemovedFromExternalKycLists(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedToExternalKycLists"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExternalKycListsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedFromExternalKycLists"): EventFragment;
}
export interface AddedToExternalKycListsEventObject {
    operator: string;
    kycList: string;
}
export type AddedToExternalKycListsEvent = TypedEvent<[
    string,
    string
], AddedToExternalKycListsEventObject>;
export type AddedToExternalKycListsEventFilter = TypedEventFilter<AddedToExternalKycListsEvent>;
export interface ExternalKycListsUpdatedEventObject {
    operator: string;
    kycLists: string[];
    actives: boolean[];
}
export type ExternalKycListsUpdatedEvent = TypedEvent<[
    string,
    string[],
    boolean[]
], ExternalKycListsUpdatedEventObject>;
export type ExternalKycListsUpdatedEventFilter = TypedEventFilter<ExternalKycListsUpdatedEvent>;
export interface RemovedFromExternalKycListsEventObject {
    operator: string;
    kycList: string;
}
export type RemovedFromExternalKycListsEvent = TypedEvent<[
    string,
    string
], RemovedFromExternalKycListsEventObject>;
export type RemovedFromExternalKycListsEventFilter = TypedEventFilter<RemovedFromExternalKycListsEvent>;
export interface IExternalKycListManagement extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IExternalKycListManagementInterface;
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
        addExternalKycList(_kycList: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getExternalKycListsCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            externalKycListsCount_: BigNumber;
        }>;
        getExternalKycListsMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            members_: string[];
        }>;
        initialize_ExternalKycLists(_kycLists: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isExternalKycList(_kycList: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isExternallyGranted(_account: PromiseOrValue<string>, _kycStatus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        removeExternalKycList(_kycList: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateExternalKycLists(_kycLists: PromiseOrValue<string>[], _actives: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addExternalKycList(_kycList: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getExternalKycListsCount(overrides?: CallOverrides): Promise<BigNumber>;
    getExternalKycListsMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    initialize_ExternalKycLists(_kycLists: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isExternalKycList(_kycList: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isExternallyGranted(_account: PromiseOrValue<string>, _kycStatus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    removeExternalKycList(_kycList: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateExternalKycLists(_kycLists: PromiseOrValue<string>[], _actives: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addExternalKycList(_kycList: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        getExternalKycListsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getExternalKycListsMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        initialize_ExternalKycLists(_kycLists: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        isExternalKycList(_kycList: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isExternallyGranted(_account: PromiseOrValue<string>, _kycStatus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        removeExternalKycList(_kycList: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        updateExternalKycLists(_kycLists: PromiseOrValue<string>[], _actives: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AddedToExternalKycLists(address,address)"(operator?: PromiseOrValue<string> | null, kycList?: null): AddedToExternalKycListsEventFilter;
        AddedToExternalKycLists(operator?: PromiseOrValue<string> | null, kycList?: null): AddedToExternalKycListsEventFilter;
        "ExternalKycListsUpdated(address,address[],bool[])"(operator?: PromiseOrValue<string> | null, kycLists?: null, actives?: null): ExternalKycListsUpdatedEventFilter;
        ExternalKycListsUpdated(operator?: PromiseOrValue<string> | null, kycLists?: null, actives?: null): ExternalKycListsUpdatedEventFilter;
        "RemovedFromExternalKycLists(address,address)"(operator?: PromiseOrValue<string> | null, kycList?: null): RemovedFromExternalKycListsEventFilter;
        RemovedFromExternalKycLists(operator?: PromiseOrValue<string> | null, kycList?: null): RemovedFromExternalKycListsEventFilter;
    };
    estimateGas: {
        addExternalKycList(_kycList: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getExternalKycListsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getExternalKycListsMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize_ExternalKycLists(_kycLists: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isExternalKycList(_kycList: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isExternallyGranted(_account: PromiseOrValue<string>, _kycStatus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        removeExternalKycList(_kycList: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateExternalKycLists(_kycLists: PromiseOrValue<string>[], _actives: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addExternalKycList(_kycList: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getExternalKycListsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExternalKycListsMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize_ExternalKycLists(_kycLists: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isExternalKycList(_kycList: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isExternallyGranted(_account: PromiseOrValue<string>, _kycStatus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeExternalKycList(_kycList: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateExternalKycLists(_kycLists: PromiseOrValue<string>[], _actives: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
