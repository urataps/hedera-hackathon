import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export type AdditionalSecurityDataStruct = {
    countriesControlListType: PromiseOrValue<boolean>;
    listOfCountries: PromiseOrValue<string>;
    info: PromiseOrValue<string>;
};
export type AdditionalSecurityDataStructOutput = [boolean, string, string] & {
    countriesControlListType: boolean;
    listOfCountries: string;
    info: string;
};
export type FactoryRegulationDataStruct = {
    regulationType: PromiseOrValue<BigNumberish>;
    regulationSubType: PromiseOrValue<BigNumberish>;
    additionalSecurityData: AdditionalSecurityDataStruct;
};
export type FactoryRegulationDataStructOutput = [
    number,
    number,
    AdditionalSecurityDataStructOutput
] & {
    regulationType: number;
    regulationSubType: number;
    additionalSecurityData: AdditionalSecurityDataStructOutput;
};
export declare namespace ITREXFactory {
    type TokenDetailsStruct = {
        owner: PromiseOrValue<string>;
        name: PromiseOrValue<string>;
        symbol: PromiseOrValue<string>;
        decimals: PromiseOrValue<BigNumberish>;
        irs: PromiseOrValue<string>;
        ONCHAINID: PromiseOrValue<string>;
        irAgents: PromiseOrValue<string>[];
        tokenAgents: PromiseOrValue<string>[];
        complianceModules: PromiseOrValue<string>[];
        complianceSettings: PromiseOrValue<BytesLike>[];
    };
    type TokenDetailsStructOutput = [
        string,
        string,
        string,
        number,
        string,
        string,
        string[],
        string[],
        string[],
        string[]
    ] & {
        owner: string;
        name: string;
        symbol: string;
        decimals: number;
        irs: string;
        ONCHAINID: string;
        irAgents: string[];
        tokenAgents: string[];
        complianceModules: string[];
        complianceSettings: string[];
    };
    type ClaimDetailsStruct = {
        claimTopics: PromiseOrValue<BigNumberish>[];
        issuers: PromiseOrValue<string>[];
        issuerClaims: PromiseOrValue<BigNumberish>[][];
    };
    type ClaimDetailsStructOutput = [
        BigNumber[],
        string[],
        BigNumber[][]
    ] & {
        claimTopics: BigNumber[];
        issuers: string[];
        issuerClaims: BigNumber[][];
    };
}
export declare namespace TREXFactoryAts {
    type TokenDetailsAtsStruct = {
        owner: PromiseOrValue<string>;
        irs: PromiseOrValue<string>;
        ONCHAINID: PromiseOrValue<string>;
        irAgents: PromiseOrValue<string>[];
        tokenAgents: PromiseOrValue<string>[];
        complianceModules: PromiseOrValue<string>[];
        complianceSettings: PromiseOrValue<BytesLike>[];
    };
    type TokenDetailsAtsStructOutput = [
        string,
        string,
        string,
        string[],
        string[],
        string[],
        string[]
    ] & {
        owner: string;
        irs: string;
        ONCHAINID: string;
        irAgents: string[];
        tokenAgents: string[];
        complianceModules: string[];
        complianceSettings: string[];
    };
}
export declare namespace TRexIFactory {
    type ResolverProxyConfigurationStruct = {
        key: PromiseOrValue<BytesLike>;
        version: PromiseOrValue<BigNumberish>;
    };
    type ResolverProxyConfigurationStructOutput = [string, BigNumber] & {
        key: string;
        version: BigNumber;
    };
    type SecurityDataStruct = {
        arePartitionsProtected: PromiseOrValue<boolean>;
        isMultiPartition: PromiseOrValue<boolean>;
        resolver: PromiseOrValue<string>;
        resolverProxyConfiguration: TRexIFactory.ResolverProxyConfigurationStruct;
        rbacs: TRexIResolverProxy.RbacStruct[];
        isControllable: PromiseOrValue<boolean>;
        isWhiteList: PromiseOrValue<boolean>;
        maxSupply: PromiseOrValue<BigNumberish>;
        erc20MetadataInfo: TRexIERC20.ERC20MetadataInfoStruct;
        clearingActive: PromiseOrValue<boolean>;
        internalKycActivated: PromiseOrValue<boolean>;
        externalPauses: PromiseOrValue<string>[];
        externalControlLists: PromiseOrValue<string>[];
        externalKycLists: PromiseOrValue<string>[];
        erc20VotesActivated: PromiseOrValue<boolean>;
        compliance: PromiseOrValue<string>;
        identityRegistry: PromiseOrValue<string>;
    };
    type SecurityDataStructOutput = [
        boolean,
        boolean,
        string,
        TRexIFactory.ResolverProxyConfigurationStructOutput,
        TRexIResolverProxy.RbacStructOutput[],
        boolean,
        boolean,
        BigNumber,
        TRexIERC20.ERC20MetadataInfoStructOutput,
        boolean,
        boolean,
        string[],
        string[],
        string[],
        boolean,
        string,
        string
    ] & {
        arePartitionsProtected: boolean;
        isMultiPartition: boolean;
        resolver: string;
        resolverProxyConfiguration: TRexIFactory.ResolverProxyConfigurationStructOutput;
        rbacs: TRexIResolverProxy.RbacStructOutput[];
        isControllable: boolean;
        isWhiteList: boolean;
        maxSupply: BigNumber;
        erc20MetadataInfo: TRexIERC20.ERC20MetadataInfoStructOutput;
        clearingActive: boolean;
        internalKycActivated: boolean;
        externalPauses: string[];
        externalControlLists: string[];
        externalKycLists: string[];
        erc20VotesActivated: boolean;
        compliance: string;
        identityRegistry: string;
    };
    type BondDataStruct = {
        security: TRexIFactory.SecurityDataStruct;
        bondDetails: TRexIBondRead.BondDetailsDataStruct;
        couponDetails: TRexIBondRead.CouponDetailsDataStruct;
    };
    type BondDataStructOutput = [
        TRexIFactory.SecurityDataStructOutput,
        TRexIBondRead.BondDetailsDataStructOutput,
        TRexIBondRead.CouponDetailsDataStructOutput
    ] & {
        security: TRexIFactory.SecurityDataStructOutput;
        bondDetails: TRexIBondRead.BondDetailsDataStructOutput;
        couponDetails: TRexIBondRead.CouponDetailsDataStructOutput;
    };
    type EquityDataStruct = {
        security: TRexIFactory.SecurityDataStruct;
        equityDetails: TRexIEquity.EquityDetailsDataStruct;
    };
    type EquityDataStructOutput = [
        TRexIFactory.SecurityDataStructOutput,
        TRexIEquity.EquityDetailsDataStructOutput
    ] & {
        security: TRexIFactory.SecurityDataStructOutput;
        equityDetails: TRexIEquity.EquityDetailsDataStructOutput;
    };
}
export declare namespace TRexIResolverProxy {
    type RbacStruct = {
        role: PromiseOrValue<BytesLike>;
        members: PromiseOrValue<string>[];
    };
    type RbacStructOutput = [string, string[]] & {
        role: string;
        members: string[];
    };
}
export declare namespace TRexIERC20 {
    type ERC20MetadataInfoStruct = {
        name: PromiseOrValue<string>;
        symbol: PromiseOrValue<string>;
        isin: PromiseOrValue<string>;
        decimals: PromiseOrValue<BigNumberish>;
    };
    type ERC20MetadataInfoStructOutput = [
        string,
        string,
        string,
        number
    ] & {
        name: string;
        symbol: string;
        isin: string;
        decimals: number;
    };
}
export declare namespace TRexIBondRead {
    type BondDetailsDataStruct = {
        currency: PromiseOrValue<BytesLike>;
        nominalValue: PromiseOrValue<BigNumberish>;
        startingDate: PromiseOrValue<BigNumberish>;
        maturityDate: PromiseOrValue<BigNumberish>;
    };
    type BondDetailsDataStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        currency: string;
        nominalValue: BigNumber;
        startingDate: BigNumber;
        maturityDate: BigNumber;
    };
    type CouponDetailsDataStruct = {
        couponFrequency: PromiseOrValue<BigNumberish>;
        couponRate: PromiseOrValue<BigNumberish>;
        firstCouponDate: PromiseOrValue<BigNumberish>;
    };
    type CouponDetailsDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        couponFrequency: BigNumber;
        couponRate: BigNumber;
        firstCouponDate: BigNumber;
    };
}
export declare namespace TRexIEquity {
    type EquityDetailsDataStruct = {
        votingRight: PromiseOrValue<boolean>;
        informationRight: PromiseOrValue<boolean>;
        liquidationRight: PromiseOrValue<boolean>;
        subscriptionRight: PromiseOrValue<boolean>;
        conversionRight: PromiseOrValue<boolean>;
        redemptionRight: PromiseOrValue<boolean>;
        putRight: PromiseOrValue<boolean>;
        dividendRight: PromiseOrValue<BigNumberish>;
        currency: PromiseOrValue<BytesLike>;
        nominalValue: PromiseOrValue<BigNumberish>;
    };
    type EquityDetailsDataStructOutput = [
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        number,
        string,
        BigNumber
    ] & {
        votingRight: boolean;
        informationRight: boolean;
        liquidationRight: boolean;
        subscriptionRight: boolean;
        conversionRight: boolean;
        redemptionRight: boolean;
        putRight: boolean;
        dividendRight: number;
        currency: string;
        nominalValue: BigNumber;
    };
}
export interface TREXFactoryAtsInterface extends utils.Interface {
    functions: {
        "deployTREXSuite(string,(address,string,string,uint8,address,address,address[],address[],address[],bytes[]),(uint256[],address[],uint256[][]))": FunctionFragment;
        "deployTREXSuiteAtsBond(string,(address,address,address,address[],address[],address[],bytes[]),(uint256[],address[],uint256[][]),((bool,bool,address,(bytes32,uint256),(bytes32,address[])[],bool,bool,uint256,(string,string,string,uint8),bool,bool,address[],address[],address[],bool,address,address),(bytes3,uint256,uint256,uint256),(uint256,uint256,uint256)),(uint8,uint8,(bool,string,string)))": FunctionFragment;
        "deployTREXSuiteAtsEquity(string,(address,address,address,address[],address[],address[],bytes[]),(uint256[],address[],uint256[][]),((bool,bool,address,(bytes32,uint256),(bytes32,address[])[],bool,bool,uint256,(string,string,string,uint8),bool,bool,address[],address[],address[],bool,address,address),(bool,bool,bool,bool,bool,bool,bool,uint8,bytes3,uint256)),(uint8,uint8,(bool,string,string)))": FunctionFragment;
        "getIdFactory()": FunctionFragment;
        "getImplementationAuthority()": FunctionFragment;
        "getToken(string)": FunctionFragment;
        "owner()": FunctionFragment;
        "recoverContractOwnership(address,address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAtsFactory(address)": FunctionFragment;
        "setIdFactory(address)": FunctionFragment;
        "setImplementationAuthority(address)": FunctionFragment;
        "tokenDeployed(string)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deployTREXSuite" | "deployTREXSuiteAtsBond" | "deployTREXSuiteAtsEquity" | "getIdFactory" | "getImplementationAuthority" | "getToken" | "owner" | "recoverContractOwnership" | "renounceOwnership" | "setAtsFactory" | "setIdFactory" | "setImplementationAuthority" | "tokenDeployed" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "deployTREXSuite", values: [
        PromiseOrValue<string>,
        ITREXFactory.TokenDetailsStruct,
        ITREXFactory.ClaimDetailsStruct
    ]): string;
    encodeFunctionData(functionFragment: "deployTREXSuiteAtsBond", values: [
        PromiseOrValue<string>,
        TREXFactoryAts.TokenDetailsAtsStruct,
        ITREXFactory.ClaimDetailsStruct,
        TRexIFactory.BondDataStruct,
        FactoryRegulationDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "deployTREXSuiteAtsEquity", values: [
        PromiseOrValue<string>,
        TREXFactoryAts.TokenDetailsAtsStruct,
        ITREXFactory.ClaimDetailsStruct,
        TRexIFactory.EquityDataStruct,
        FactoryRegulationDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "getIdFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getImplementationAuthority", values?: undefined): string;
    encodeFunctionData(functionFragment: "getToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "recoverContractOwnership", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAtsFactory", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setIdFactory", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setImplementationAuthority", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "tokenDeployed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "deployTREXSuite", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployTREXSuiteAtsBond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployTREXSuiteAtsEquity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getIdFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getImplementationAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoverContractOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAtsFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIdFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setImplementationAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenDeployed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "Deployed(address)": EventFragment;
        "IdFactorySet(address)": EventFragment;
        "ImplementationAuthoritySet(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "TREXSuiteDeployed(address,address,address,address,address,address,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdFactorySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ImplementationAuthoritySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TREXSuiteDeployed"): EventFragment;
}
export interface DeployedEventObject {
    _addr: string;
}
export type DeployedEvent = TypedEvent<[string], DeployedEventObject>;
export type DeployedEventFilter = TypedEventFilter<DeployedEvent>;
export interface IdFactorySetEventObject {
    _idFactory: string;
}
export type IdFactorySetEvent = TypedEvent<[string], IdFactorySetEventObject>;
export type IdFactorySetEventFilter = TypedEventFilter<IdFactorySetEvent>;
export interface ImplementationAuthoritySetEventObject {
    _implementationAuthority: string;
}
export type ImplementationAuthoritySetEvent = TypedEvent<[
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
export interface TREXSuiteDeployedEventObject {
    _token: string;
    _ir: string;
    _irs: string;
    _tir: string;
    _ctr: string;
    _mc: string;
    _salt: string;
}
export type TREXSuiteDeployedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    string,
    string
], TREXSuiteDeployedEventObject>;
export type TREXSuiteDeployedEventFilter = TypedEventFilter<TREXSuiteDeployedEvent>;
export interface TREXFactoryAts extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TREXFactoryAtsInterface;
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
        deployTREXSuite(_salt: PromiseOrValue<string>, _tokenDetails: ITREXFactory.TokenDetailsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deployTREXSuiteAtsBond(_salt: PromiseOrValue<string>, _tokenDetails: TREXFactoryAts.TokenDetailsAtsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, _bondData: TRexIFactory.BondDataStruct, _factoryRegulationData: FactoryRegulationDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deployTREXSuiteAtsEquity(_salt: PromiseOrValue<string>, _tokenDetails: TREXFactoryAts.TokenDetailsAtsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, _equityData: TRexIFactory.EquityDataStruct, _factoryRegulationData: FactoryRegulationDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getIdFactory(overrides?: CallOverrides): Promise<[string]>;
        getImplementationAuthority(overrides?: CallOverrides): Promise<[string]>;
        getToken(_salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        recoverContractOwnership(_contract: PromiseOrValue<string>, _newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAtsFactory(_atsFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setIdFactory(_idFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setImplementationAuthority(_implementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        tokenDeployed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    deployTREXSuite(_salt: PromiseOrValue<string>, _tokenDetails: ITREXFactory.TokenDetailsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deployTREXSuiteAtsBond(_salt: PromiseOrValue<string>, _tokenDetails: TREXFactoryAts.TokenDetailsAtsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, _bondData: TRexIFactory.BondDataStruct, _factoryRegulationData: FactoryRegulationDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deployTREXSuiteAtsEquity(_salt: PromiseOrValue<string>, _tokenDetails: TREXFactoryAts.TokenDetailsAtsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, _equityData: TRexIFactory.EquityDataStruct, _factoryRegulationData: FactoryRegulationDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getIdFactory(overrides?: CallOverrides): Promise<string>;
    getImplementationAuthority(overrides?: CallOverrides): Promise<string>;
    getToken(_salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    recoverContractOwnership(_contract: PromiseOrValue<string>, _newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAtsFactory(_atsFactory: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setIdFactory(_idFactory: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setImplementationAuthority(_implementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    tokenDeployed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        deployTREXSuite(_salt: PromiseOrValue<string>, _tokenDetails: ITREXFactory.TokenDetailsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, overrides?: CallOverrides): Promise<void>;
        deployTREXSuiteAtsBond(_salt: PromiseOrValue<string>, _tokenDetails: TREXFactoryAts.TokenDetailsAtsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, _bondData: TRexIFactory.BondDataStruct, _factoryRegulationData: FactoryRegulationDataStruct, overrides?: CallOverrides): Promise<void>;
        deployTREXSuiteAtsEquity(_salt: PromiseOrValue<string>, _tokenDetails: TREXFactoryAts.TokenDetailsAtsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, _equityData: TRexIFactory.EquityDataStruct, _factoryRegulationData: FactoryRegulationDataStruct, overrides?: CallOverrides): Promise<void>;
        getIdFactory(overrides?: CallOverrides): Promise<string>;
        getImplementationAuthority(overrides?: CallOverrides): Promise<string>;
        getToken(_salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        recoverContractOwnership(_contract: PromiseOrValue<string>, _newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAtsFactory(_atsFactory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setIdFactory(_idFactory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setImplementationAuthority(_implementationAuthority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        tokenDeployed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deployed(address)"(_addr?: PromiseOrValue<string> | null): DeployedEventFilter;
        Deployed(_addr?: PromiseOrValue<string> | null): DeployedEventFilter;
        "IdFactorySet(address)"(_idFactory?: null): IdFactorySetEventFilter;
        IdFactorySet(_idFactory?: null): IdFactorySetEventFilter;
        "ImplementationAuthoritySet(address)"(_implementationAuthority?: null): ImplementationAuthoritySetEventFilter;
        ImplementationAuthoritySet(_implementationAuthority?: null): ImplementationAuthoritySetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "TREXSuiteDeployed(address,address,address,address,address,address,string)"(_token?: PromiseOrValue<string> | null, _ir?: null, _irs?: null, _tir?: null, _ctr?: null, _mc?: null, _salt?: PromiseOrValue<string> | null): TREXSuiteDeployedEventFilter;
        TREXSuiteDeployed(_token?: PromiseOrValue<string> | null, _ir?: null, _irs?: null, _tir?: null, _ctr?: null, _mc?: null, _salt?: PromiseOrValue<string> | null): TREXSuiteDeployedEventFilter;
    };
    estimateGas: {
        deployTREXSuite(_salt: PromiseOrValue<string>, _tokenDetails: ITREXFactory.TokenDetailsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deployTREXSuiteAtsBond(_salt: PromiseOrValue<string>, _tokenDetails: TREXFactoryAts.TokenDetailsAtsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, _bondData: TRexIFactory.BondDataStruct, _factoryRegulationData: FactoryRegulationDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deployTREXSuiteAtsEquity(_salt: PromiseOrValue<string>, _tokenDetails: TREXFactoryAts.TokenDetailsAtsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, _equityData: TRexIFactory.EquityDataStruct, _factoryRegulationData: FactoryRegulationDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getIdFactory(overrides?: CallOverrides): Promise<BigNumber>;
        getImplementationAuthority(overrides?: CallOverrides): Promise<BigNumber>;
        getToken(_salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        recoverContractOwnership(_contract: PromiseOrValue<string>, _newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAtsFactory(_atsFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setIdFactory(_idFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setImplementationAuthority(_implementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        tokenDeployed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deployTREXSuite(_salt: PromiseOrValue<string>, _tokenDetails: ITREXFactory.TokenDetailsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deployTREXSuiteAtsBond(_salt: PromiseOrValue<string>, _tokenDetails: TREXFactoryAts.TokenDetailsAtsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, _bondData: TRexIFactory.BondDataStruct, _factoryRegulationData: FactoryRegulationDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deployTREXSuiteAtsEquity(_salt: PromiseOrValue<string>, _tokenDetails: TREXFactoryAts.TokenDetailsAtsStruct, _claimDetails: ITREXFactory.ClaimDetailsStruct, _equityData: TRexIFactory.EquityDataStruct, _factoryRegulationData: FactoryRegulationDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getIdFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getImplementationAuthority(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getToken(_salt: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recoverContractOwnership(_contract: PromiseOrValue<string>, _newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAtsFactory(_atsFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setIdFactory(_idFactory: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setImplementationAuthority(_implementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        tokenDeployed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
