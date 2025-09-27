import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface ISsiManagementInterface extends utils.Interface {
    functions: {
        "addIssuer(address)": FunctionFragment;
        "getIssuerListCount()": FunctionFragment;
        "getIssuerListMembers(uint256,uint256)": FunctionFragment;
        "getRevocationRegistryAddress()": FunctionFragment;
        "isIssuer(address)": FunctionFragment;
        "removeIssuer(address)": FunctionFragment;
        "setRevocationRegistryAddress(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addIssuer" | "getIssuerListCount" | "getIssuerListMembers" | "getRevocationRegistryAddress" | "isIssuer" | "removeIssuer" | "setRevocationRegistryAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "addIssuer", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getIssuerListCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIssuerListMembers", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getRevocationRegistryAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "isIssuer", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeIssuer", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setRevocationRegistryAddress", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addIssuer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIssuerListCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIssuerListMembers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRevocationRegistryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isIssuer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeIssuer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRevocationRegistryAddress", data: BytesLike): Result;
    events: {
        "AddedToIssuerList(address,address)": EventFragment;
        "RemovedFromIssuerList(address,address)": EventFragment;
        "RevocationRegistryUpdated(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddedToIssuerList"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemovedFromIssuerList"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RevocationRegistryUpdated"): EventFragment;
}
export interface AddedToIssuerListEventObject {
    operator: string;
    issuer: string;
}
export type AddedToIssuerListEvent = TypedEvent<[
    string,
    string
], AddedToIssuerListEventObject>;
export type AddedToIssuerListEventFilter = TypedEventFilter<AddedToIssuerListEvent>;
export interface RemovedFromIssuerListEventObject {
    operator: string;
    issuer: string;
}
export type RemovedFromIssuerListEvent = TypedEvent<[
    string,
    string
], RemovedFromIssuerListEventObject>;
export type RemovedFromIssuerListEventFilter = TypedEventFilter<RemovedFromIssuerListEvent>;
export interface RevocationRegistryUpdatedEventObject {
    oldRegistryAddress: string;
    newRegistryAddress: string;
}
export type RevocationRegistryUpdatedEvent = TypedEvent<[
    string,
    string
], RevocationRegistryUpdatedEventObject>;
export type RevocationRegistryUpdatedEventFilter = TypedEventFilter<RevocationRegistryUpdatedEvent>;
export interface ISsiManagement extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISsiManagementInterface;
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
        addIssuer(_issuer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getIssuerListCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            issuerListCount_: BigNumber;
        }>;
        getIssuerListMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            members_: string[];
        }>;
        getRevocationRegistryAddress(overrides?: CallOverrides): Promise<[string] & {
            revocationRegistryAddress_: string;
        }>;
        isIssuer(_issuer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        removeIssuer(_issuer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setRevocationRegistryAddress(_revocationRegistryAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addIssuer(_issuer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getIssuerListCount(overrides?: CallOverrides): Promise<BigNumber>;
    getIssuerListMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getRevocationRegistryAddress(overrides?: CallOverrides): Promise<string>;
    isIssuer(_issuer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    removeIssuer(_issuer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setRevocationRegistryAddress(_revocationRegistryAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addIssuer(_issuer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        getIssuerListCount(overrides?: CallOverrides): Promise<BigNumber>;
        getIssuerListMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getRevocationRegistryAddress(overrides?: CallOverrides): Promise<string>;
        isIssuer(_issuer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        removeIssuer(_issuer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setRevocationRegistryAddress(_revocationRegistryAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AddedToIssuerList(address,address)"(operator?: PromiseOrValue<string> | null, issuer?: PromiseOrValue<string> | null): AddedToIssuerListEventFilter;
        AddedToIssuerList(operator?: PromiseOrValue<string> | null, issuer?: PromiseOrValue<string> | null): AddedToIssuerListEventFilter;
        "RemovedFromIssuerList(address,address)"(operator?: PromiseOrValue<string> | null, issuer?: PromiseOrValue<string> | null): RemovedFromIssuerListEventFilter;
        RemovedFromIssuerList(operator?: PromiseOrValue<string> | null, issuer?: PromiseOrValue<string> | null): RemovedFromIssuerListEventFilter;
        "RevocationRegistryUpdated(address,address)"(oldRegistryAddress?: PromiseOrValue<string> | null, newRegistryAddress?: PromiseOrValue<string> | null): RevocationRegistryUpdatedEventFilter;
        RevocationRegistryUpdated(oldRegistryAddress?: PromiseOrValue<string> | null, newRegistryAddress?: PromiseOrValue<string> | null): RevocationRegistryUpdatedEventFilter;
    };
    estimateGas: {
        addIssuer(_issuer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getIssuerListCount(overrides?: CallOverrides): Promise<BigNumber>;
        getIssuerListMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRevocationRegistryAddress(overrides?: CallOverrides): Promise<BigNumber>;
        isIssuer(_issuer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        removeIssuer(_issuer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setRevocationRegistryAddress(_revocationRegistryAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addIssuer(_issuer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getIssuerListCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIssuerListMembers(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRevocationRegistryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isIssuer(_issuer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeIssuer(_issuer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setRevocationRegistryAddress(_revocationRegistryAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
