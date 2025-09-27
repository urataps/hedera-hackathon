import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface IIdentityRegistryStorageInterface extends utils.Interface {
    functions: {
        "addIdentityToStorage(address,address,uint16)": FunctionFragment;
        "bindIdentityRegistry(address)": FunctionFragment;
        "linkedIdentityRegistries()": FunctionFragment;
        "modifyStoredIdentity(address,address)": FunctionFragment;
        "modifyStoredInvestorCountry(address,uint16)": FunctionFragment;
        "removeIdentityFromStorage(address)": FunctionFragment;
        "storedIdentity(address)": FunctionFragment;
        "storedInvestorCountry(address)": FunctionFragment;
        "unbindIdentityRegistry(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addIdentityToStorage" | "bindIdentityRegistry" | "linkedIdentityRegistries" | "modifyStoredIdentity" | "modifyStoredInvestorCountry" | "removeIdentityFromStorage" | "storedIdentity" | "storedInvestorCountry" | "unbindIdentityRegistry"): FunctionFragment;
    encodeFunctionData(functionFragment: "addIdentityToStorage", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "bindIdentityRegistry", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "linkedIdentityRegistries", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyStoredIdentity", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "modifyStoredInvestorCountry", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "removeIdentityFromStorage", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "storedIdentity", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "storedInvestorCountry", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unbindIdentityRegistry", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addIdentityToStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bindIdentityRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "linkedIdentityRegistries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyStoredIdentity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyStoredInvestorCountry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeIdentityFromStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storedIdentity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storedInvestorCountry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unbindIdentityRegistry", data: BytesLike): Result;
    events: {
        "CountryModified(address,uint16)": EventFragment;
        "IdentityModified(address,address)": EventFragment;
        "IdentityRegistryBound(address)": EventFragment;
        "IdentityRegistryUnbound(address)": EventFragment;
        "IdentityStored(address,address)": EventFragment;
        "IdentityUnstored(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CountryModified"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityModified"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityRegistryBound"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityRegistryUnbound"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityStored"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityUnstored"): EventFragment;
}
export interface CountryModifiedEventObject {
    investorAddress: string;
    country: number;
}
export type CountryModifiedEvent = TypedEvent<[
    string,
    number
], CountryModifiedEventObject>;
export type CountryModifiedEventFilter = TypedEventFilter<CountryModifiedEvent>;
export interface IdentityModifiedEventObject {
    oldIdentity: string;
    newIdentity: string;
}
export type IdentityModifiedEvent = TypedEvent<[
    string,
    string
], IdentityModifiedEventObject>;
export type IdentityModifiedEventFilter = TypedEventFilter<IdentityModifiedEvent>;
export interface IdentityRegistryBoundEventObject {
    identityRegistry: string;
}
export type IdentityRegistryBoundEvent = TypedEvent<[
    string
], IdentityRegistryBoundEventObject>;
export type IdentityRegistryBoundEventFilter = TypedEventFilter<IdentityRegistryBoundEvent>;
export interface IdentityRegistryUnboundEventObject {
    identityRegistry: string;
}
export type IdentityRegistryUnboundEvent = TypedEvent<[
    string
], IdentityRegistryUnboundEventObject>;
export type IdentityRegistryUnboundEventFilter = TypedEventFilter<IdentityRegistryUnboundEvent>;
export interface IdentityStoredEventObject {
    investorAddress: string;
    identity: string;
}
export type IdentityStoredEvent = TypedEvent<[
    string,
    string
], IdentityStoredEventObject>;
export type IdentityStoredEventFilter = TypedEventFilter<IdentityStoredEvent>;
export interface IdentityUnstoredEventObject {
    investorAddress: string;
    identity: string;
}
export type IdentityUnstoredEvent = TypedEvent<[
    string,
    string
], IdentityUnstoredEventObject>;
export type IdentityUnstoredEventFilter = TypedEventFilter<IdentityUnstoredEvent>;
export interface IIdentityRegistryStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IIdentityRegistryStorageInterface;
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
        addIdentityToStorage(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        linkedIdentityRegistries(overrides?: CallOverrides): Promise<[string[]]>;
        modifyStoredIdentity(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        modifyStoredInvestorCountry(_userAddress: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeIdentityFromStorage(_userAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        storedIdentity(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        storedInvestorCountry(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
        unbindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addIdentityToStorage(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    linkedIdentityRegistries(overrides?: CallOverrides): Promise<string[]>;
    modifyStoredIdentity(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    modifyStoredInvestorCountry(_userAddress: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeIdentityFromStorage(_userAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    storedIdentity(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    storedInvestorCountry(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    unbindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addIdentityToStorage(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        bindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        linkedIdentityRegistries(overrides?: CallOverrides): Promise<string[]>;
        modifyStoredIdentity(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        modifyStoredInvestorCountry(_userAddress: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        removeIdentityFromStorage(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        storedIdentity(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        storedInvestorCountry(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        unbindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CountryModified(address,uint16)"(investorAddress?: PromiseOrValue<string> | null, country?: PromiseOrValue<BigNumberish> | null): CountryModifiedEventFilter;
        CountryModified(investorAddress?: PromiseOrValue<string> | null, country?: PromiseOrValue<BigNumberish> | null): CountryModifiedEventFilter;
        "IdentityModified(address,address)"(oldIdentity?: PromiseOrValue<string> | null, newIdentity?: PromiseOrValue<string> | null): IdentityModifiedEventFilter;
        IdentityModified(oldIdentity?: PromiseOrValue<string> | null, newIdentity?: PromiseOrValue<string> | null): IdentityModifiedEventFilter;
        "IdentityRegistryBound(address)"(identityRegistry?: PromiseOrValue<string> | null): IdentityRegistryBoundEventFilter;
        IdentityRegistryBound(identityRegistry?: PromiseOrValue<string> | null): IdentityRegistryBoundEventFilter;
        "IdentityRegistryUnbound(address)"(identityRegistry?: PromiseOrValue<string> | null): IdentityRegistryUnboundEventFilter;
        IdentityRegistryUnbound(identityRegistry?: PromiseOrValue<string> | null): IdentityRegistryUnboundEventFilter;
        "IdentityStored(address,address)"(investorAddress?: PromiseOrValue<string> | null, identity?: PromiseOrValue<string> | null): IdentityStoredEventFilter;
        IdentityStored(investorAddress?: PromiseOrValue<string> | null, identity?: PromiseOrValue<string> | null): IdentityStoredEventFilter;
        "IdentityUnstored(address,address)"(investorAddress?: PromiseOrValue<string> | null, identity?: PromiseOrValue<string> | null): IdentityUnstoredEventFilter;
        IdentityUnstored(investorAddress?: PromiseOrValue<string> | null, identity?: PromiseOrValue<string> | null): IdentityUnstoredEventFilter;
    };
    estimateGas: {
        addIdentityToStorage(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        linkedIdentityRegistries(overrides?: CallOverrides): Promise<BigNumber>;
        modifyStoredIdentity(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        modifyStoredInvestorCountry(_userAddress: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeIdentityFromStorage(_userAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        storedIdentity(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        storedInvestorCountry(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        unbindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addIdentityToStorage(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        linkedIdentityRegistries(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyStoredIdentity(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        modifyStoredInvestorCountry(_userAddress: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeIdentityFromStorage(_userAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        storedIdentity(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        storedInvestorCountry(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unbindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
