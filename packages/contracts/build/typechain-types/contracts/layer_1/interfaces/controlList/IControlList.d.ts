import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IControlListInterface extends utils.Interface {
    functions: {
        "addToControlList(address)": FunctionFragment;
        "getControlListCount()": FunctionFragment;
        "getControlListMembers(uint256,uint256)": FunctionFragment;
        "getControlListType()": FunctionFragment;
        "initialize_ControlList(bool)": FunctionFragment;
        "isInControlList(address)": FunctionFragment;
        "removeFromControlList(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addToControlList" | "getControlListCount" | "getControlListMembers" | "getControlListType" | "initialize_ControlList" | "isInControlList" | "removeFromControlList"): FunctionFragment;
    encodeFunctionData(functionFragment: "addToControlList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getControlListCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getControlListMembers", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getControlListType", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize_ControlList", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "isInControlList", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeFromControlList", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addToControlList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getControlListCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getControlListMembers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getControlListType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize_ControlList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInControlList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFromControlList", data: BytesLike): Result;
    events: {
        "AddedToControlList(address,address)": EventFragment;
        "RemovedFromControlList(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedToControlList"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedFromControlList"): EventFragment;
}
export interface AddedToControlListEventObject {
    operator: string;
    account: string;
}
export type AddedToControlListEvent = TypedEvent<[
    string,
    string
], AddedToControlListEventObject>;
export type AddedToControlListEventFilter = TypedEventFilter<AddedToControlListEvent>;
export interface RemovedFromControlListEventObject {
    operator: string;
    account: string;
}
export type RemovedFromControlListEvent = TypedEvent<[
    string,
    string
], RemovedFromControlListEventObject>;
export type RemovedFromControlListEventFilter = TypedEventFilter<RemovedFromControlListEvent>;
export interface IControlList extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IControlListInterface;
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
        addToControlList(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getControlListCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            controlListCount_: BigNumber;
        }>;
        getControlListMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            members_: string[];
        }>;
        getControlListType(overrides?: CallOverrides): Promise<[boolean]>;
        initialize_ControlList(_isWhiteList: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isInControlList(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        removeFromControlList(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addToControlList(_account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getControlListCount(overrides?: CallOverrides): Promise<BigNumber>;
    getControlListMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getControlListType(overrides?: CallOverrides): Promise<boolean>;
    initialize_ControlList(_isWhiteList: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isInControlList(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    removeFromControlList(_account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addToControlList(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        getControlListCount(overrides?: CallOverrides): Promise<BigNumber>;
        getControlListMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getControlListType(overrides?: CallOverrides): Promise<boolean>;
        initialize_ControlList(_isWhiteList: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        isInControlList(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        removeFromControlList(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AddedToControlList(address,address)"(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null): AddedToControlListEventFilter;
        AddedToControlList(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null): AddedToControlListEventFilter;
        "RemovedFromControlList(address,address)"(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null): RemovedFromControlListEventFilter;
        RemovedFromControlList(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null): RemovedFromControlListEventFilter;
    };
    estimateGas: {
        addToControlList(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getControlListCount(overrides?: CallOverrides): Promise<BigNumber>;
        getControlListMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getControlListType(overrides?: CallOverrides): Promise<BigNumber>;
        initialize_ControlList(_isWhiteList: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isInControlList(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        removeFromControlList(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addToControlList(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getControlListCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getControlListMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getControlListType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize_ControlList(_isWhiteList: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isInControlList(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeFromControlList(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
