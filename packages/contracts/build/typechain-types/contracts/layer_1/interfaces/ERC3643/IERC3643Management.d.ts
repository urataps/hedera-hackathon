import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IERC3643ManagementInterface extends utils.Interface {
    functions: {
        "addAgent(address)": FunctionFragment;
        "initialize_ERC3643(address,address)": FunctionFragment;
        "recoveryAddress(address,address,address)": FunctionFragment;
        "removeAgent(address)": FunctionFragment;
        "setCompliance(address)": FunctionFragment;
        "setIdentityRegistry(address)": FunctionFragment;
        "setName(string)": FunctionFragment;
        "setOnchainID(address)": FunctionFragment;
        "setSymbol(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAgent" | "initialize_ERC3643" | "recoveryAddress" | "removeAgent" | "setCompliance" | "setIdentityRegistry" | "setName" | "setOnchainID" | "setSymbol"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAgent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialize_ERC3643", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "recoveryAddress", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "removeAgent", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setCompliance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setIdentityRegistry", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setName", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setOnchainID", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setSymbol", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addAgent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize_ERC3643", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoveryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAgent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCompliance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIdentityRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOnchainID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSymbol", data: BytesLike): Result;
    events: {
        "AgentAdded(address)": EventFragment;
        "AgentRemoved(address)": EventFragment;
        "IdentityRegistryAdded(address)": EventFragment;
        "RecoverySuccess(address,address,address)": EventFragment;
        "UpdatedTokenInformation(string,string,uint8,string,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AgentAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AgentRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityRegistryAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecoverySuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedTokenInformation"): EventFragment;
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
export interface IdentityRegistryAddedEventObject {
    identityRegistry: string;
}
export type IdentityRegistryAddedEvent = TypedEvent<[
    string
], IdentityRegistryAddedEventObject>;
export type IdentityRegistryAddedEventFilter = TypedEventFilter<IdentityRegistryAddedEvent>;
export interface RecoverySuccessEventObject {
    _lostWallet: string;
    _newWallet: string;
    _investorOnchainID: string;
}
export type RecoverySuccessEvent = TypedEvent<[
    string,
    string,
    string
], RecoverySuccessEventObject>;
export type RecoverySuccessEventFilter = TypedEventFilter<RecoverySuccessEvent>;
export interface UpdatedTokenInformationEventObject {
    newName: string;
    newSymbol: string;
    newDecimals: number;
    newVersion: string;
    newOnchainID: string;
}
export type UpdatedTokenInformationEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    string
], UpdatedTokenInformationEventObject>;
export type UpdatedTokenInformationEventFilter = TypedEventFilter<UpdatedTokenInformationEvent>;
export interface IERC3643Management extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC3643ManagementInterface;
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
        initialize_ERC3643(_compliance: PromiseOrValue<string>, _identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recoveryAddress(_lostWallet: PromiseOrValue<string>, _newWallet: PromiseOrValue<string>, _investorOnchainID: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setCompliance(_compliance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setName(_name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setOnchainID(_onchainID: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSymbol(_symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize_ERC3643(_compliance: PromiseOrValue<string>, _identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recoveryAddress(_lostWallet: PromiseOrValue<string>, _newWallet: PromiseOrValue<string>, _investorOnchainID: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setCompliance(_compliance: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setName(_name: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setOnchainID(_onchainID: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSymbol(_symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addAgent(_agent: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initialize_ERC3643(_compliance: PromiseOrValue<string>, _identityRegistry: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        recoveryAddress(_lostWallet: PromiseOrValue<string>, _newWallet: PromiseOrValue<string>, _investorOnchainID: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        removeAgent(_agent: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setCompliance(_compliance: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setName(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setOnchainID(_onchainID: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setSymbol(_symbol: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AgentAdded(address)"(_agent?: PromiseOrValue<string> | null): AgentAddedEventFilter;
        AgentAdded(_agent?: PromiseOrValue<string> | null): AgentAddedEventFilter;
        "AgentRemoved(address)"(_agent?: PromiseOrValue<string> | null): AgentRemovedEventFilter;
        AgentRemoved(_agent?: PromiseOrValue<string> | null): AgentRemovedEventFilter;
        "IdentityRegistryAdded(address)"(identityRegistry?: PromiseOrValue<string> | null): IdentityRegistryAddedEventFilter;
        IdentityRegistryAdded(identityRegistry?: PromiseOrValue<string> | null): IdentityRegistryAddedEventFilter;
        "RecoverySuccess(address,address,address)"(_lostWallet?: null, _newWallet?: null, _investorOnchainID?: null): RecoverySuccessEventFilter;
        RecoverySuccess(_lostWallet?: null, _newWallet?: null, _investorOnchainID?: null): RecoverySuccessEventFilter;
        "UpdatedTokenInformation(string,string,uint8,string,address)"(newName?: PromiseOrValue<string> | null, newSymbol?: PromiseOrValue<string> | null, newDecimals?: null, newVersion?: null, newOnchainID?: PromiseOrValue<string> | null): UpdatedTokenInformationEventFilter;
        UpdatedTokenInformation(newName?: PromiseOrValue<string> | null, newSymbol?: PromiseOrValue<string> | null, newDecimals?: null, newVersion?: null, newOnchainID?: PromiseOrValue<string> | null): UpdatedTokenInformationEventFilter;
    };
    estimateGas: {
        addAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize_ERC3643(_compliance: PromiseOrValue<string>, _identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recoveryAddress(_lostWallet: PromiseOrValue<string>, _newWallet: PromiseOrValue<string>, _investorOnchainID: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setCompliance(_compliance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setName(_name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setOnchainID(_onchainID: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSymbol(_symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize_ERC3643(_compliance: PromiseOrValue<string>, _identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recoveryAddress(_lostWallet: PromiseOrValue<string>, _newWallet: PromiseOrValue<string>, _investorOnchainID: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeAgent(_agent: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setCompliance(_compliance: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setName(_name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setOnchainID(_onchainID: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSymbol(_symbol: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
