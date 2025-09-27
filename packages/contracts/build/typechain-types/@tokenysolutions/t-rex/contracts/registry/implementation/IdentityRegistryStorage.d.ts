import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface IdentityRegistryStorageInterface extends utils.Interface {
    functions: {
        "addAgent(address)": FunctionFragment;
        "addIdentityToStorage(address,address,uint16)": FunctionFragment;
        "bindIdentityRegistry(address)": FunctionFragment;
        "init()": FunctionFragment;
        "isAgent(address)": FunctionFragment;
        "linkedIdentityRegistries()": FunctionFragment;
        "modifyStoredIdentity(address,address)": FunctionFragment;
        "modifyStoredInvestorCountry(address,uint16)": FunctionFragment;
        "owner()": FunctionFragment;
        "removeAgent(address)": FunctionFragment;
        "removeIdentityFromStorage(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "storedIdentity(address)": FunctionFragment;
        "storedInvestorCountry(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unbindIdentityRegistry(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAgent" | "addIdentityToStorage" | "bindIdentityRegistry" | "init" | "isAgent" | "linkedIdentityRegistries" | "modifyStoredIdentity" | "modifyStoredInvestorCountry" | "owner" | "removeAgent" | "removeIdentityFromStorage" | "renounceOwnership" | "storedIdentity" | "storedInvestorCountry" | "transferOwnership" | "unbindIdentityRegistry"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAgent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "addIdentityToStorage", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "bindIdentityRegistry", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "init", values?: undefined): string;
    encodeFunctionData(functionFragment: "isAgent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "linkedIdentityRegistries", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyStoredIdentity", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "modifyStoredInvestorCountry", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAgent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeIdentityFromStorage", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "storedIdentity", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "storedInvestorCountry", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unbindIdentityRegistry", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addAgent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addIdentityToStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bindIdentityRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAgent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "linkedIdentityRegistries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyStoredIdentity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyStoredInvestorCountry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAgent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeIdentityFromStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storedIdentity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storedInvestorCountry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unbindIdentityRegistry", data: BytesLike): Result;
    events: {
        "AgentAdded(address)": EventFragment;
        "AgentRemoved(address)": EventFragment;
        "CountryModified(address,uint16)": EventFragment;
        "IdentityModified(address,address)": EventFragment;
        "IdentityRegistryBound(address)": EventFragment;
        "IdentityRegistryUnbound(address)": EventFragment;
        "IdentityStored(address,address)": EventFragment;
        "IdentityUnstored(address,address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AgentAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgentRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CountryModified"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityModified"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityRegistryBound"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityRegistryUnbound"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityStored"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityUnstored"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface AgentAddedEventObject {
    _agent: string;
}
export type AgentAddedEvent = TypedEvent<[string], AgentAddedEventObject>;
export type AgentAddedEventFilter = TypedEventFilter<AgentAddedEvent>;
export interface AgentRemovedEventObject {
    _agent: string;
}
export type AgentRemovedEvent = TypedEvent<[string], AgentRemovedEventObject>;
export type AgentRemovedEventFilter = TypedEventFilter<AgentRemovedEvent>;
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
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface IdentityRegistryStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IdentityRegistryStorageInterface;
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
        addAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addIdentityToStorage(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isAgent(_agent: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        linkedIdentityRegistries(overrides?: CallOverrides): Promise<[string[]]>;
        modifyStoredIdentity(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        modifyStoredInvestorCountry(_userAddress: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        removeAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeIdentityFromStorage(_userAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        storedIdentity(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        storedInvestorCountry(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unbindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addIdentityToStorage(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    init(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isAgent(_agent: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    linkedIdentityRegistries(overrides?: CallOverrides): Promise<string[]>;
    modifyStoredIdentity(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    modifyStoredInvestorCountry(_userAddress: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    removeAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeIdentityFromStorage(_userAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    storedIdentity(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    storedInvestorCountry(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unbindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addAgent(_agent: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        addIdentityToStorage(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        bindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        init(overrides?: CallOverrides): Promise<void>;
        isAgent(_agent: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        linkedIdentityRegistries(overrides?: CallOverrides): Promise<string[]>;
        modifyStoredIdentity(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        modifyStoredInvestorCountry(_userAddress: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        removeAgent(_agent: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        removeIdentityFromStorage(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        storedIdentity(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        storedInvestorCountry(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unbindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AgentAdded(address)"(_agent?: PromiseOrValue<string> | null): AgentAddedEventFilter;
        AgentAdded(_agent?: PromiseOrValue<string> | null): AgentAddedEventFilter;
        "AgentRemoved(address)"(_agent?: PromiseOrValue<string> | null): AgentRemovedEventFilter;
        AgentRemoved(_agent?: PromiseOrValue<string> | null): AgentRemovedEventFilter;
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
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        addAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addIdentityToStorage(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isAgent(_agent: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        linkedIdentityRegistries(overrides?: CallOverrides): Promise<BigNumber>;
        modifyStoredIdentity(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        modifyStoredInvestorCountry(_userAddress: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        removeAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeIdentityFromStorage(_userAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        storedIdentity(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        storedInvestorCountry(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unbindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addIdentityToStorage(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        init(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isAgent(_agent: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        linkedIdentityRegistries(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyStoredIdentity(_userAddress: PromiseOrValue<string>, _identity: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        modifyStoredInvestorCountry(_userAddress: PromiseOrValue<string>, _country: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeIdentityFromStorage(_userAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        storedIdentity(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        storedInvestorCountry(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unbindIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
