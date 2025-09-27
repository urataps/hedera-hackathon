import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export declare namespace ITREXImplementationAuthority {
    type VersionStruct = {
        major: PromiseOrValue<BigNumberish>;
        minor: PromiseOrValue<BigNumberish>;
        patch: PromiseOrValue<BigNumberish>;
    };
    type VersionStructOutput = [number, number, number] & {
        major: number;
        minor: number;
        patch: number;
    };
    type TREXContractsStruct = {
        tokenImplementation: PromiseOrValue<string>;
        ctrImplementation: PromiseOrValue<string>;
        irImplementation: PromiseOrValue<string>;
        irsImplementation: PromiseOrValue<string>;
        tirImplementation: PromiseOrValue<string>;
        mcImplementation: PromiseOrValue<string>;
    };
    type TREXContractsStructOutput = [
        string,
        string,
        string,
        string,
        string,
        string
    ] & {
        tokenImplementation: string;
        ctrImplementation: string;
        irImplementation: string;
        irsImplementation: string;
        tirImplementation: string;
        mcImplementation: string;
    };
}
export interface TREXImplementationAuthorityInterface extends utils.Interface {
    functions: {
        "addAndUseTREXVersion((uint8,uint8,uint8),(address,address,address,address,address,address))": FunctionFragment;
        "addTREXVersion((uint8,uint8,uint8),(address,address,address,address,address,address))": FunctionFragment;
        "changeImplementationAuthority(address,address)": FunctionFragment;
        "fetchVersion((uint8,uint8,uint8))": FunctionFragment;
        "getCTRImplementation()": FunctionFragment;
        "getContracts((uint8,uint8,uint8))": FunctionFragment;
        "getCurrentVersion()": FunctionFragment;
        "getIRImplementation()": FunctionFragment;
        "getIRSImplementation()": FunctionFragment;
        "getMCImplementation()": FunctionFragment;
        "getReferenceContract()": FunctionFragment;
        "getTIRImplementation()": FunctionFragment;
        "getTREXFactory()": FunctionFragment;
        "getTokenImplementation()": FunctionFragment;
        "isReferenceContract()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setIAFactory(address)": FunctionFragment;
        "setTREXFactory(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "useTREXVersion((uint8,uint8,uint8))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAndUseTREXVersion" | "addTREXVersion" | "changeImplementationAuthority" | "fetchVersion" | "getCTRImplementation" | "getContracts" | "getCurrentVersion" | "getIRImplementation" | "getIRSImplementation" | "getMCImplementation" | "getReferenceContract" | "getTIRImplementation" | "getTREXFactory" | "getTokenImplementation" | "isReferenceContract" | "owner" | "renounceOwnership" | "setIAFactory" | "setTREXFactory" | "transferOwnership" | "useTREXVersion"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAndUseTREXVersion", values: [
        ITREXImplementationAuthority.VersionStruct,
        ITREXImplementationAuthority.TREXContractsStruct
    ]): string;
    encodeFunctionData(functionFragment: "addTREXVersion", values: [
        ITREXImplementationAuthority.VersionStruct,
        ITREXImplementationAuthority.TREXContractsStruct
    ]): string;
    encodeFunctionData(functionFragment: "changeImplementationAuthority", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fetchVersion", values: [ITREXImplementationAuthority.VersionStruct]): string;
    encodeFunctionData(functionFragment: "getCTRImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "getContracts", values: [ITREXImplementationAuthority.VersionStruct]): string;
    encodeFunctionData(functionFragment: "getCurrentVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIRImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "getIRSImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMCImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReferenceContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTIRImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTREXFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokenImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "isReferenceContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setIAFactory", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setTREXFactory", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "useTREXVersion", values: [ITREXImplementationAuthority.VersionStruct]): string;
    decodeFunctionResult(functionFragment: "addAndUseTREXVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addTREXVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeImplementationAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fetchVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCTRImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIRImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIRSImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMCImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReferenceContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTIRImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTREXFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isReferenceContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIAFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTREXFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "useTREXVersion", data: BytesLike): Result;
    events: {
        "IAFactorySet(address)": EventFragment;
        "ImplementationAuthorityChanged(address,address)": EventFragment;
        "ImplementationAuthoritySet(bool,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TREXFactorySet(address)": EventFragment;
        "TREXVersionAdded(tuple,tuple)": EventFragment;
        "TREXVersionFetched(tuple,tuple)": EventFragment;
        "VersionUpdated(tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IAFactorySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ImplementationAuthorityChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ImplementationAuthoritySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TREXFactorySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TREXVersionAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TREXVersionFetched"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VersionUpdated"): EventFragment;
}
export interface IAFactorySetEventObject {
    iaFactory: string;
}
export type IAFactorySetEvent = TypedEvent<[string], IAFactorySetEventObject>;
export type IAFactorySetEventFilter = TypedEventFilter<IAFactorySetEvent>;
export interface ImplementationAuthorityChangedEventObject {
    _token: string;
    _newImplementationAuthority: string;
}
export type ImplementationAuthorityChangedEvent = TypedEvent<[
    string,
    string
], ImplementationAuthorityChangedEventObject>;
export type ImplementationAuthorityChangedEventFilter = TypedEventFilter<ImplementationAuthorityChangedEvent>;
export interface ImplementationAuthoritySetEventObject {
    referenceStatus: boolean;
    trexFactory: string;
}
export type ImplementationAuthoritySetEvent = TypedEvent<[
    boolean,
    string
], ImplementationAuthoritySetEventObject>;
export type ImplementationAuthoritySetEventFilter = TypedEventFilter<ImplementationAuthoritySetEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface TREXFactorySetEventObject {
    trexFactory: string;
}
export type TREXFactorySetEvent = TypedEvent<[
    string
], TREXFactorySetEventObject>;
export type TREXFactorySetEventFilter = TypedEventFilter<TREXFactorySetEvent>;
export interface TREXVersionAddedEventObject {
    version: ITREXImplementationAuthority.VersionStructOutput;
    trex: ITREXImplementationAuthority.TREXContractsStructOutput;
}
export type TREXVersionAddedEvent = TypedEvent<[
    ITREXImplementationAuthority.VersionStructOutput,
    ITREXImplementationAuthority.TREXContractsStructOutput
], TREXVersionAddedEventObject>;
export type TREXVersionAddedEventFilter = TypedEventFilter<TREXVersionAddedEvent>;
export interface TREXVersionFetchedEventObject {
    version: ITREXImplementationAuthority.VersionStructOutput;
    trex: ITREXImplementationAuthority.TREXContractsStructOutput;
}
export type TREXVersionFetchedEvent = TypedEvent<[
    ITREXImplementationAuthority.VersionStructOutput,
    ITREXImplementationAuthority.TREXContractsStructOutput
], TREXVersionFetchedEventObject>;
export type TREXVersionFetchedEventFilter = TypedEventFilter<TREXVersionFetchedEvent>;
export interface VersionUpdatedEventObject {
    version: ITREXImplementationAuthority.VersionStructOutput;
}
export type VersionUpdatedEvent = TypedEvent<[
    ITREXImplementationAuthority.VersionStructOutput
], VersionUpdatedEventObject>;
export type VersionUpdatedEventFilter = TypedEventFilter<VersionUpdatedEvent>;
export interface TREXImplementationAuthority extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TREXImplementationAuthorityInterface;
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
        addAndUseTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, _trex: ITREXImplementationAuthority.TREXContractsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        addTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, _trex: ITREXImplementationAuthority.TREXContractsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        changeImplementationAuthority(_token: PromiseOrValue<string>, _newImplementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fetchVersion(_version: ITREXImplementationAuthority.VersionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCTRImplementation(overrides?: CallOverrides): Promise<[string]>;
        getContracts(_version: ITREXImplementationAuthority.VersionStruct, overrides?: CallOverrides): Promise<[ITREXImplementationAuthority.TREXContractsStructOutput]>;
        getCurrentVersion(overrides?: CallOverrides): Promise<[ITREXImplementationAuthority.VersionStructOutput]>;
        getIRImplementation(overrides?: CallOverrides): Promise<[string]>;
        getIRSImplementation(overrides?: CallOverrides): Promise<[string]>;
        getMCImplementation(overrides?: CallOverrides): Promise<[string]>;
        getReferenceContract(overrides?: CallOverrides): Promise<[string]>;
        getTIRImplementation(overrides?: CallOverrides): Promise<[string]>;
        getTREXFactory(overrides?: CallOverrides): Promise<[string]>;
        getTokenImplementation(overrides?: CallOverrides): Promise<[string]>;
        isReferenceContract(overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setIAFactory(iaFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTREXFactory(trexFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        useTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addAndUseTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, _trex: ITREXImplementationAuthority.TREXContractsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    addTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, _trex: ITREXImplementationAuthority.TREXContractsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    changeImplementationAuthority(_token: PromiseOrValue<string>, _newImplementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fetchVersion(_version: ITREXImplementationAuthority.VersionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCTRImplementation(overrides?: CallOverrides): Promise<string>;
    getContracts(_version: ITREXImplementationAuthority.VersionStruct, overrides?: CallOverrides): Promise<ITREXImplementationAuthority.TREXContractsStructOutput>;
    getCurrentVersion(overrides?: CallOverrides): Promise<ITREXImplementationAuthority.VersionStructOutput>;
    getIRImplementation(overrides?: CallOverrides): Promise<string>;
    getIRSImplementation(overrides?: CallOverrides): Promise<string>;
    getMCImplementation(overrides?: CallOverrides): Promise<string>;
    getReferenceContract(overrides?: CallOverrides): Promise<string>;
    getTIRImplementation(overrides?: CallOverrides): Promise<string>;
    getTREXFactory(overrides?: CallOverrides): Promise<string>;
    getTokenImplementation(overrides?: CallOverrides): Promise<string>;
    isReferenceContract(overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setIAFactory(iaFactory: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTREXFactory(trexFactory: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    useTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addAndUseTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, _trex: ITREXImplementationAuthority.TREXContractsStruct, overrides?: CallOverrides): Promise<void>;
        addTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, _trex: ITREXImplementationAuthority.TREXContractsStruct, overrides?: CallOverrides): Promise<void>;
        changeImplementationAuthority(_token: PromiseOrValue<string>, _newImplementationAuthority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        fetchVersion(_version: ITREXImplementationAuthority.VersionStruct, overrides?: CallOverrides): Promise<void>;
        getCTRImplementation(overrides?: CallOverrides): Promise<string>;
        getContracts(_version: ITREXImplementationAuthority.VersionStruct, overrides?: CallOverrides): Promise<ITREXImplementationAuthority.TREXContractsStructOutput>;
        getCurrentVersion(overrides?: CallOverrides): Promise<ITREXImplementationAuthority.VersionStructOutput>;
        getIRImplementation(overrides?: CallOverrides): Promise<string>;
        getIRSImplementation(overrides?: CallOverrides): Promise<string>;
        getMCImplementation(overrides?: CallOverrides): Promise<string>;
        getReferenceContract(overrides?: CallOverrides): Promise<string>;
        getTIRImplementation(overrides?: CallOverrides): Promise<string>;
        getTREXFactory(overrides?: CallOverrides): Promise<string>;
        getTokenImplementation(overrides?: CallOverrides): Promise<string>;
        isReferenceContract(overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setIAFactory(iaFactory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setTREXFactory(trexFactory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        useTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "IAFactorySet(address)"(iaFactory?: PromiseOrValue<string> | null): IAFactorySetEventFilter;
        IAFactorySet(iaFactory?: PromiseOrValue<string> | null): IAFactorySetEventFilter;
        "ImplementationAuthorityChanged(address,address)"(_token?: PromiseOrValue<string> | null, _newImplementationAuthority?: PromiseOrValue<string> | null): ImplementationAuthorityChangedEventFilter;
        ImplementationAuthorityChanged(_token?: PromiseOrValue<string> | null, _newImplementationAuthority?: PromiseOrValue<string> | null): ImplementationAuthorityChangedEventFilter;
        "ImplementationAuthoritySet(bool,address)"(referenceStatus?: null, trexFactory?: null): ImplementationAuthoritySetEventFilter;
        ImplementationAuthoritySet(referenceStatus?: null, trexFactory?: null): ImplementationAuthoritySetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "TREXFactorySet(address)"(trexFactory?: PromiseOrValue<string> | null): TREXFactorySetEventFilter;
        TREXFactorySet(trexFactory?: PromiseOrValue<string> | null): TREXFactorySetEventFilter;
        "TREXVersionAdded(tuple,tuple)"(version?: ITREXImplementationAuthority.VersionStruct | null, trex?: ITREXImplementationAuthority.TREXContractsStruct | null): TREXVersionAddedEventFilter;
        TREXVersionAdded(version?: ITREXImplementationAuthority.VersionStruct | null, trex?: ITREXImplementationAuthority.TREXContractsStruct | null): TREXVersionAddedEventFilter;
        "TREXVersionFetched(tuple,tuple)"(version?: ITREXImplementationAuthority.VersionStruct | null, trex?: ITREXImplementationAuthority.TREXContractsStruct | null): TREXVersionFetchedEventFilter;
        TREXVersionFetched(version?: ITREXImplementationAuthority.VersionStruct | null, trex?: ITREXImplementationAuthority.TREXContractsStruct | null): TREXVersionFetchedEventFilter;
        "VersionUpdated(tuple)"(version?: ITREXImplementationAuthority.VersionStruct | null): VersionUpdatedEventFilter;
        VersionUpdated(version?: ITREXImplementationAuthority.VersionStruct | null): VersionUpdatedEventFilter;
    };
    estimateGas: {
        addAndUseTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, _trex: ITREXImplementationAuthority.TREXContractsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        addTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, _trex: ITREXImplementationAuthority.TREXContractsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        changeImplementationAuthority(_token: PromiseOrValue<string>, _newImplementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fetchVersion(_version: ITREXImplementationAuthority.VersionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCTRImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        getContracts(_version: ITREXImplementationAuthority.VersionStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getIRImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        getIRSImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        getMCImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        getReferenceContract(overrides?: CallOverrides): Promise<BigNumber>;
        getTIRImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        getTREXFactory(overrides?: CallOverrides): Promise<BigNumber>;
        getTokenImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        isReferenceContract(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setIAFactory(iaFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTREXFactory(trexFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        useTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addAndUseTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, _trex: ITREXImplementationAuthority.TREXContractsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        addTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, _trex: ITREXImplementationAuthority.TREXContractsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        changeImplementationAuthority(_token: PromiseOrValue<string>, _newImplementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fetchVersion(_version: ITREXImplementationAuthority.VersionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCTRImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContracts(_version: ITREXImplementationAuthority.VersionStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIRImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getIRSImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMCImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReferenceContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTIRImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTREXFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isReferenceContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setIAFactory(iaFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTREXFactory(trexFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        useTREXVersion(_version: ITREXImplementationAuthority.VersionStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
