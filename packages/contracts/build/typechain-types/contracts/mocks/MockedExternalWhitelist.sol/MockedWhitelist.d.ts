import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MockedWhitelistInterface extends utils.Interface {
    functions: {
        "addToWhitelist(address)": FunctionFragment;
        "isAuthorized(address)": FunctionFragment;
        "removeFromWhitelist(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addToWhitelist" | "isAuthorized" | "removeFromWhitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "addToWhitelist", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isAuthorized", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeFromWhitelist", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addToWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAuthorized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFromWhitelist", data: BytesLike): Result;
    events: {
        "AddedToWhitelist(address)": EventFragment;
        "RemovedFromWhitelist(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedToWhitelist"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedFromWhitelist"): EventFragment;
}
export interface AddedToWhitelistEventObject {
    account: string;
}
export type AddedToWhitelistEvent = TypedEvent<[
    string
], AddedToWhitelistEventObject>;
export type AddedToWhitelistEventFilter = TypedEventFilter<AddedToWhitelistEvent>;
export interface RemovedFromWhitelistEventObject {
    account: string;
}
export type RemovedFromWhitelistEvent = TypedEvent<[
    string
], RemovedFromWhitelistEventObject>;
export type RemovedFromWhitelistEventFilter = TypedEventFilter<RemovedFromWhitelistEvent>;
export interface MockedWhitelist extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockedWhitelistInterface;
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
        addToWhitelist(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isAuthorized(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        removeFromWhitelist(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addToWhitelist(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isAuthorized(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    removeFromWhitelist(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addToWhitelist(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isAuthorized(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        removeFromWhitelist(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddedToWhitelist(address)"(account?: PromiseOrValue<string> | null): AddedToWhitelistEventFilter;
        AddedToWhitelist(account?: PromiseOrValue<string> | null): AddedToWhitelistEventFilter;
        "RemovedFromWhitelist(address)"(account?: PromiseOrValue<string> | null): RemovedFromWhitelistEventFilter;
        RemovedFromWhitelist(account?: PromiseOrValue<string> | null): RemovedFromWhitelistEventFilter;
    };
    estimateGas: {
        addToWhitelist(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isAuthorized(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        removeFromWhitelist(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addToWhitelist(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isAuthorized(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeFromWhitelist(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
