import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace IBusinessLogicResolver {
    type BusinessLogicRegistryDataStruct = {
        businessLogicKey: PromiseOrValue<BytesLike>;
        businessLogicAddress: PromiseOrValue<string>;
    };
    type BusinessLogicRegistryDataStructOutput = [string, string] & {
        businessLogicKey: string;
        businessLogicAddress: string;
    };
}
export declare namespace IDiamondCutManager {
    type FacetConfigurationStruct = {
        id: PromiseOrValue<BytesLike>;
        version: PromiseOrValue<BigNumberish>;
    };
    type FacetConfigurationStructOutput = [string, BigNumber] & {
        id: string;
        version: BigNumber;
    };
}
export declare namespace IDiamondLoupe {
    type FacetStruct = {
        id: PromiseOrValue<BytesLike>;
        addr: PromiseOrValue<string>;
        selectors: PromiseOrValue<BytesLike>[];
        interfaceIds: PromiseOrValue<BytesLike>[];
    };
    type FacetStructOutput = [string, string, string[], string[]] & {
        id: string;
        addr: string;
        selectors: string[];
        interfaceIds: string[];
    };
}
export interface IBusinessLogicResolverInterface extends utils.Interface {
    functions: {
        "addSelectorsToBlacklist(bytes32,bytes4[])": FunctionFragment;
        "cancelBatchConfiguration(bytes32)": FunctionFragment;
        "checkResolverProxyConfigurationRegistered(bytes32,uint256)": FunctionFragment;
        "createBatchConfiguration(bytes32,(bytes32,uint256)[],bool)": FunctionFragment;
        "createConfiguration(bytes32,(bytes32,uint256)[])": FunctionFragment;
        "getBusinessLogicCount()": FunctionFragment;
        "getBusinessLogicKeys(uint256,uint256)": FunctionFragment;
        "getConfigurations(uint256,uint256)": FunctionFragment;
        "getConfigurationsLength()": FunctionFragment;
        "getFacetAddressByConfigurationIdVersionAndFacetId(bytes32,uint256,bytes32)": FunctionFragment;
        "getFacetAddressesByConfigurationIdAndVersion(bytes32,uint256,uint256,uint256)": FunctionFragment;
        "getFacetByConfigurationIdVersionAndFacetId(bytes32,uint256,bytes32)": FunctionFragment;
        "getFacetIdByConfigurationIdVersionAndSelector(bytes32,uint256,bytes4)": FunctionFragment;
        "getFacetIdsByConfigurationIdAndVersion(bytes32,uint256,uint256,uint256)": FunctionFragment;
        "getFacetSelectorsByConfigurationIdVersionAndFacetId(bytes32,uint256,bytes32,uint256,uint256)": FunctionFragment;
        "getFacetSelectorsLengthByConfigurationIdVersionAndFacetId(bytes32,uint256,bytes32)": FunctionFragment;
        "getFacetsByConfigurationIdAndVersion(bytes32,uint256,uint256,uint256)": FunctionFragment;
        "getFacetsLengthByConfigurationIdAndVersion(bytes32,uint256)": FunctionFragment;
        "getLatestVersion()": FunctionFragment;
        "getLatestVersionByConfiguration(bytes32)": FunctionFragment;
        "getSelectorsBlacklist(bytes32,uint256,uint256)": FunctionFragment;
        "getVersionStatus(uint256)": FunctionFragment;
        "initialize_BusinessLogicResolver()": FunctionFragment;
        "isResolverProxyConfigurationRegistered(bytes32,uint256)": FunctionFragment;
        "registerBusinessLogics((bytes32,address)[])": FunctionFragment;
        "removeSelectorsFromBlacklist(bytes32,bytes4[])": FunctionFragment;
        "resolveBusinessLogicByVersion(bytes32,uint256)": FunctionFragment;
        "resolveLatestBusinessLogic(bytes32)": FunctionFragment;
        "resolveResolverProxyCall(bytes32,uint256,bytes4)": FunctionFragment;
        "resolveSupportsInterface(bytes32,uint256,bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addSelectorsToBlacklist" | "cancelBatchConfiguration" | "checkResolverProxyConfigurationRegistered" | "createBatchConfiguration" | "createConfiguration" | "getBusinessLogicCount" | "getBusinessLogicKeys" | "getConfigurations" | "getConfigurationsLength" | "getFacetAddressByConfigurationIdVersionAndFacetId" | "getFacetAddressesByConfigurationIdAndVersion" | "getFacetByConfigurationIdVersionAndFacetId" | "getFacetIdByConfigurationIdVersionAndSelector" | "getFacetIdsByConfigurationIdAndVersion" | "getFacetSelectorsByConfigurationIdVersionAndFacetId" | "getFacetSelectorsLengthByConfigurationIdVersionAndFacetId" | "getFacetsByConfigurationIdAndVersion" | "getFacetsLengthByConfigurationIdAndVersion" | "getLatestVersion" | "getLatestVersionByConfiguration" | "getSelectorsBlacklist" | "getVersionStatus" | "initialize_BusinessLogicResolver" | "isResolverProxyConfigurationRegistered" | "registerBusinessLogics" | "removeSelectorsFromBlacklist" | "resolveBusinessLogicByVersion" | "resolveLatestBusinessLogic" | "resolveResolverProxyCall" | "resolveSupportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "addSelectorsToBlacklist", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "cancelBatchConfiguration", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "checkResolverProxyConfigurationRegistered", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createBatchConfiguration", values: [
        PromiseOrValue<BytesLike>,
        IDiamondCutManager.FacetConfigurationStruct[],
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "createConfiguration", values: [
        PromiseOrValue<BytesLike>,
        IDiamondCutManager.FacetConfigurationStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "getBusinessLogicCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBusinessLogicKeys", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getConfigurations", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getConfigurationsLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFacetAddressByConfigurationIdVersionAndFacetId", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getFacetAddressesByConfigurationIdAndVersion", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getFacetByConfigurationIdVersionAndFacetId", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getFacetIdByConfigurationIdVersionAndSelector", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getFacetIdsByConfigurationIdAndVersion", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getFacetSelectorsByConfigurationIdVersionAndFacetId", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getFacetSelectorsLengthByConfigurationIdVersionAndFacetId", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "getFacetsByConfigurationIdAndVersion", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getFacetsLengthByConfigurationIdAndVersion", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getLatestVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLatestVersionByConfiguration", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getSelectorsBlacklist", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getVersionStatus", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "initialize_BusinessLogicResolver", values?: undefined): string;
    encodeFunctionData(functionFragment: "isResolverProxyConfigurationRegistered", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "registerBusinessLogics", values: [IBusinessLogicResolver.BusinessLogicRegistryDataStruct[]]): string;
    encodeFunctionData(functionFragment: "removeSelectorsFromBlacklist", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "resolveBusinessLogicByVersion", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "resolveLatestBusinessLogic", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "resolveResolverProxyCall", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "resolveSupportsInterface", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "addSelectorsToBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelBatchConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkResolverProxyConfigurationRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createBatchConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBusinessLogicCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBusinessLogicKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfigurations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfigurationsLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFacetAddressByConfigurationIdVersionAndFacetId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFacetAddressesByConfigurationIdAndVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFacetByConfigurationIdVersionAndFacetId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFacetIdByConfigurationIdVersionAndSelector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFacetIdsByConfigurationIdAndVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFacetSelectorsByConfigurationIdVersionAndFacetId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFacetSelectorsLengthByConfigurationIdVersionAndFacetId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFacetsByConfigurationIdAndVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFacetsLengthByConfigurationIdAndVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLatestVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLatestVersionByConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSelectorsBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVersionStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize_BusinessLogicResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isResolverProxyConfigurationRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerBusinessLogics", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSelectorsFromBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveBusinessLogicByVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveLatestBusinessLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveResolverProxyCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveSupportsInterface", data: BytesLike): Result;
    events: {
        "BusinessLogicsRegistered(tuple[],uint256)": EventFragment;
        "DiamondBatchConfigurationCanceled(bytes32)": EventFragment;
        "DiamondBatchConfigurationCreated(bytes32,tuple[],bool,uint256)": EventFragment;
        "DiamondConfigurationCreated(bytes32,tuple[],uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BusinessLogicsRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiamondBatchConfigurationCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiamondBatchConfigurationCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiamondConfigurationCreated"): EventFragment;
}
export interface BusinessLogicsRegisteredEventObject {
    businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStructOutput[];
    newLatestVersion: BigNumber;
}
export type BusinessLogicsRegisteredEvent = TypedEvent<[
    IBusinessLogicResolver.BusinessLogicRegistryDataStructOutput[],
    BigNumber
], BusinessLogicsRegisteredEventObject>;
export type BusinessLogicsRegisteredEventFilter = TypedEventFilter<BusinessLogicsRegisteredEvent>;
export interface DiamondBatchConfigurationCanceledEventObject {
    configurationId: string;
}
export type DiamondBatchConfigurationCanceledEvent = TypedEvent<[
    string
], DiamondBatchConfigurationCanceledEventObject>;
export type DiamondBatchConfigurationCanceledEventFilter = TypedEventFilter<DiamondBatchConfigurationCanceledEvent>;
export interface DiamondBatchConfigurationCreatedEventObject {
    configurationId: string;
    facetConfigurations: IDiamondCutManager.FacetConfigurationStructOutput[];
    _isLastBatch: boolean;
    version: BigNumber;
}
export type DiamondBatchConfigurationCreatedEvent = TypedEvent<[
    string,
    IDiamondCutManager.FacetConfigurationStructOutput[],
    boolean,
    BigNumber
], DiamondBatchConfigurationCreatedEventObject>;
export type DiamondBatchConfigurationCreatedEventFilter = TypedEventFilter<DiamondBatchConfigurationCreatedEvent>;
export interface DiamondConfigurationCreatedEventObject {
    configurationId: string;
    facetConfigurations: IDiamondCutManager.FacetConfigurationStructOutput[];
    version: BigNumber;
}
export type DiamondConfigurationCreatedEvent = TypedEvent<[
    string,
    IDiamondCutManager.FacetConfigurationStructOutput[],
    BigNumber
], DiamondConfigurationCreatedEventObject>;
export type DiamondConfigurationCreatedEventFilter = TypedEventFilter<DiamondConfigurationCreatedEvent>;
export interface IBusinessLogicResolver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBusinessLogicResolverInterface;
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
        addSelectorsToBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, _facetConfigurations: IDiamondCutManager.FacetConfigurationStruct[], _isLastBatch: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createConfiguration(_configurationId: PromiseOrValue<BytesLike>, _facetConfigurations: IDiamondCutManager.FacetConfigurationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getBusinessLogicCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            businessLogicCount_: BigNumber;
        }>;
        getBusinessLogicKeys(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            businessLogicKeys_: string[];
        }>;
        getConfigurations(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            configurationIds_: string[];
        }>;
        getConfigurationsLength(overrides?: CallOverrides): Promise<[BigNumber] & {
            configurationsLength_: BigNumber;
        }>;
        getFacetAddressByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            facetAddress_: string;
        }>;
        getFacetAddressesByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            facetAddresses_: string[];
        }>;
        getFacetByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            IDiamondLoupe.FacetStructOutput
        ] & {
            facet_: IDiamondLoupe.FacetStructOutput;
        }>;
        getFacetIdByConfigurationIdVersionAndSelector(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            facetId_: string;
        }>;
        getFacetIdsByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            facetIds_: string[];
        }>;
        getFacetSelectorsByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            facetSelectors_: string[];
        }>;
        getFacetSelectorsLengthByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            facetSelectorsLength_: BigNumber;
        }>;
        getFacetsByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IDiamondLoupe.FacetStructOutput[]
        ] & {
            facets_: IDiamondLoupe.FacetStructOutput[];
        }>;
        getFacetsLengthByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            facetsLength_: BigNumber;
        }>;
        getLatestVersion(overrides?: CallOverrides): Promise<[BigNumber] & {
            latestVersion_: BigNumber;
        }>;
        getLatestVersionByConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            latestVersion_: BigNumber;
        }>;
        getSelectorsBlacklist(_configurationId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            selectors_: string[];
        }>;
        getVersionStatus(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number] & {
            status_: number;
        }>;
        initialize_BusinessLogicResolver(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        registerBusinessLogics(_businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeSelectorsFromBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resolveBusinessLogicByVersion(_businessLogicKey: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            businessLogicAddress_: string;
        }>;
        resolveLatestBusinessLogic(_businessLogicKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            businessLogicAddress_: string;
        }>;
        resolveResolverProxyCall(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string] & {
            facetAddress_: string;
        }>;
        resolveSupportsInterface(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean] & {
            exists_: boolean;
        }>;
    };
    addSelectorsToBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, _facetConfigurations: IDiamondCutManager.FacetConfigurationStruct[], _isLastBatch: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createConfiguration(_configurationId: PromiseOrValue<BytesLike>, _facetConfigurations: IDiamondCutManager.FacetConfigurationStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getBusinessLogicCount(overrides?: CallOverrides): Promise<BigNumber>;
    getBusinessLogicKeys(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getConfigurations(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getConfigurationsLength(overrides?: CallOverrides): Promise<BigNumber>;
    getFacetAddressByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getFacetAddressesByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getFacetByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput>;
    getFacetIdByConfigurationIdVersionAndSelector(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getFacetIdsByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getFacetSelectorsByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getFacetSelectorsLengthByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getFacetsByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput[]>;
    getFacetsLengthByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getLatestVersion(overrides?: CallOverrides): Promise<BigNumber>;
    getLatestVersionByConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getSelectorsBlacklist(_configurationId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getVersionStatus(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    initialize_BusinessLogicResolver(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    registerBusinessLogics(_businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeSelectorsFromBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resolveBusinessLogicByVersion(_businessLogicKey: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    resolveLatestBusinessLogic(_businessLogicKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    resolveResolverProxyCall(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    resolveSupportsInterface(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        addSelectorsToBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        cancelBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        checkResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, _facetConfigurations: IDiamondCutManager.FacetConfigurationStruct[], _isLastBatch: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        createConfiguration(_configurationId: PromiseOrValue<BytesLike>, _facetConfigurations: IDiamondCutManager.FacetConfigurationStruct[], overrides?: CallOverrides): Promise<void>;
        getBusinessLogicCount(overrides?: CallOverrides): Promise<BigNumber>;
        getBusinessLogicKeys(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getConfigurations(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getConfigurationsLength(overrides?: CallOverrides): Promise<BigNumber>;
        getFacetAddressByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getFacetAddressesByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getFacetByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput>;
        getFacetIdByConfigurationIdVersionAndSelector(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getFacetIdsByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getFacetSelectorsByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getFacetSelectorsLengthByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getFacetsByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IDiamondLoupe.FacetStructOutput[]>;
        getFacetsLengthByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getLatestVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getLatestVersionByConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getSelectorsBlacklist(_configurationId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getVersionStatus(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        initialize_BusinessLogicResolver(overrides?: CallOverrides): Promise<boolean>;
        isResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        registerBusinessLogics(_businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStruct[], overrides?: CallOverrides): Promise<void>;
        removeSelectorsFromBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        resolveBusinessLogicByVersion(_businessLogicKey: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        resolveLatestBusinessLogic(_businessLogicKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        resolveResolverProxyCall(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        resolveSupportsInterface(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "BusinessLogicsRegistered(tuple[],uint256)"(businessLogics?: null, newLatestVersion?: null): BusinessLogicsRegisteredEventFilter;
        BusinessLogicsRegistered(businessLogics?: null, newLatestVersion?: null): BusinessLogicsRegisteredEventFilter;
        "DiamondBatchConfigurationCanceled(bytes32)"(configurationId?: null): DiamondBatchConfigurationCanceledEventFilter;
        DiamondBatchConfigurationCanceled(configurationId?: null): DiamondBatchConfigurationCanceledEventFilter;
        "DiamondBatchConfigurationCreated(bytes32,tuple[],bool,uint256)"(configurationId?: null, facetConfigurations?: null, _isLastBatch?: null, version?: null): DiamondBatchConfigurationCreatedEventFilter;
        DiamondBatchConfigurationCreated(configurationId?: null, facetConfigurations?: null, _isLastBatch?: null, version?: null): DiamondBatchConfigurationCreatedEventFilter;
        "DiamondConfigurationCreated(bytes32,tuple[],uint256)"(configurationId?: null, facetConfigurations?: null, version?: null): DiamondConfigurationCreatedEventFilter;
        DiamondConfigurationCreated(configurationId?: null, facetConfigurations?: null, version?: null): DiamondConfigurationCreatedEventFilter;
    };
    estimateGas: {
        addSelectorsToBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, _facetConfigurations: IDiamondCutManager.FacetConfigurationStruct[], _isLastBatch: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createConfiguration(_configurationId: PromiseOrValue<BytesLike>, _facetConfigurations: IDiamondCutManager.FacetConfigurationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getBusinessLogicCount(overrides?: CallOverrides): Promise<BigNumber>;
        getBusinessLogicKeys(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getConfigurations(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getConfigurationsLength(overrides?: CallOverrides): Promise<BigNumber>;
        getFacetAddressByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getFacetAddressesByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFacetByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getFacetIdByConfigurationIdVersionAndSelector(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getFacetIdsByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFacetSelectorsByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFacetSelectorsLengthByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getFacetsByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getFacetsLengthByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getLatestVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getLatestVersionByConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getSelectorsBlacklist(_configurationId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVersionStatus(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize_BusinessLogicResolver(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        registerBusinessLogics(_businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeSelectorsFromBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resolveBusinessLogicByVersion(_businessLogicKey: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        resolveLatestBusinessLogic(_businessLogicKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        resolveResolverProxyCall(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        resolveSupportsInterface(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addSelectorsToBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, _facetConfigurations: IDiamondCutManager.FacetConfigurationStruct[], _isLastBatch: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createConfiguration(_configurationId: PromiseOrValue<BytesLike>, _facetConfigurations: IDiamondCutManager.FacetConfigurationStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getBusinessLogicCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBusinessLogicKeys(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConfigurations(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConfigurationsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFacetAddressByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFacetAddressesByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFacetByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFacetIdByConfigurationIdVersionAndSelector(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFacetIdsByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFacetSelectorsByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFacetSelectorsLengthByConfigurationIdVersionAndFacetId(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _facetId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFacetsByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFacetsLengthByConfigurationIdAndVersion(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLatestVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLatestVersionByConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSelectorsBlacklist(_configurationId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVersionStatus(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize_BusinessLogicResolver(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerBusinessLogics(_businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeSelectorsFromBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resolveBusinessLogicByVersion(_businessLogicKey: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolveLatestBusinessLogic(_businessLogicKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolveResolverProxyCall(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolveSupportsInterface(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
