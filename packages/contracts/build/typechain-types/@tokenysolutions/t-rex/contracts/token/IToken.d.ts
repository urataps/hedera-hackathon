import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface ITokenInterface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "batchBurn(address[],uint256[])": FunctionFragment;
        "batchForcedTransfer(address[],address[],uint256[])": FunctionFragment;
        "batchFreezePartialTokens(address[],uint256[])": FunctionFragment;
        "batchMint(address[],uint256[])": FunctionFragment;
        "batchSetAddressFrozen(address[],bool[])": FunctionFragment;
        "batchTransfer(address[],uint256[])": FunctionFragment;
        "batchUnfreezePartialTokens(address[],uint256[])": FunctionFragment;
        "burn(address,uint256)": FunctionFragment;
        "compliance()": FunctionFragment;
        "decimals()": FunctionFragment;
        "forcedTransfer(address,address,uint256)": FunctionFragment;
        "freezePartialTokens(address,uint256)": FunctionFragment;
        "getFrozenTokens(address)": FunctionFragment;
        "identityRegistry()": FunctionFragment;
        "isFrozen(address)": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "onchainID()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "recoveryAddress(address,address,address)": FunctionFragment;
        "setAddressFrozen(address,bool)": FunctionFragment;
        "setCompliance(address)": FunctionFragment;
        "setIdentityRegistry(address)": FunctionFragment;
        "setName(string)": FunctionFragment;
        "setOnchainID(address)": FunctionFragment;
        "setSymbol(string)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "unfreezePartialTokens(address,uint256)": FunctionFragment;
        "unpause()": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "batchBurn" | "batchForcedTransfer" | "batchFreezePartialTokens" | "batchMint" | "batchSetAddressFrozen" | "batchTransfer" | "batchUnfreezePartialTokens" | "burn" | "compliance" | "decimals" | "forcedTransfer" | "freezePartialTokens" | "getFrozenTokens" | "identityRegistry" | "isFrozen" | "mint" | "name" | "onchainID" | "pause" | "paused" | "recoveryAddress" | "setAddressFrozen" | "setCompliance" | "setIdentityRegistry" | "setName" | "setOnchainID" | "setSymbol" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "unfreezePartialTokens" | "unpause" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "batchBurn", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "batchForcedTransfer", values: [
        PromiseOrValue<string>[],
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "batchFreezePartialTokens", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "batchMint", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "batchSetAddressFrozen", values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]): string;
    encodeFunctionData(functionFragment: "batchTransfer", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "batchUnfreezePartialTokens", values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "compliance", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "forcedTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "freezePartialTokens", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getFrozenTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "identityRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "isFrozen", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "onchainID", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "recoveryAddress", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setAddressFrozen", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setCompliance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setIdentityRegistry", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setName", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setOnchainID", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setSymbol", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "unfreezePartialTokens", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchForcedTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchFreezePartialTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchSetAddressFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchUnfreezePartialTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compliance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forcedTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freezePartialTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFrozenTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "identityRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onchainID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recoveryAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressFrozen", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCompliance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setIdentityRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOnchainID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSymbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unfreezePartialTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {
        "AddressFrozen(address,bool,address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "ComplianceAdded(address)": EventFragment;
        "IdentityRegistryAdded(address)": EventFragment;
        "Paused(address)": EventFragment;
        "RecoverySuccess(address,address,address)": EventFragment;
        "TokensFrozen(address,uint256)": EventFragment;
        "TokensUnfrozen(address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "UpdatedTokenInformation(string,string,uint8,string,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddressFrozen"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ComplianceAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IdentityRegistryAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RecoverySuccess"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensFrozen"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensUnfrozen"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedTokenInformation"): EventFragment;
}
export interface AddressFrozenEventObject {
    _userAddress: string;
    _isFrozen: boolean;
    _owner: string;
}
export type AddressFrozenEvent = TypedEvent<[
    string,
    boolean,
    string
], AddressFrozenEventObject>;
export type AddressFrozenEventFilter = TypedEventFilter<AddressFrozenEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ComplianceAddedEventObject {
    _compliance: string;
}
export type ComplianceAddedEvent = TypedEvent<[
    string
], ComplianceAddedEventObject>;
export type ComplianceAddedEventFilter = TypedEventFilter<ComplianceAddedEvent>;
export interface IdentityRegistryAddedEventObject {
    _identityRegistry: string;
}
export type IdentityRegistryAddedEvent = TypedEvent<[
    string
], IdentityRegistryAddedEventObject>;
export type IdentityRegistryAddedEventFilter = TypedEventFilter<IdentityRegistryAddedEvent>;
export interface PausedEventObject {
    _userAddress: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
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
export interface TokensFrozenEventObject {
    _userAddress: string;
    _amount: BigNumber;
}
export type TokensFrozenEvent = TypedEvent<[
    string,
    BigNumber
], TokensFrozenEventObject>;
export type TokensFrozenEventFilter = TypedEventFilter<TokensFrozenEvent>;
export interface TokensUnfrozenEventObject {
    _userAddress: string;
    _amount: BigNumber;
}
export type TokensUnfrozenEvent = TypedEvent<[
    string,
    BigNumber
], TokensUnfrozenEventObject>;
export type TokensUnfrozenEventFilter = TypedEventFilter<TokensUnfrozenEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface UnpausedEventObject {
    _userAddress: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface UpdatedTokenInformationEventObject {
    _newName: string;
    _newSymbol: string;
    _newDecimals: number;
    _newVersion: string;
    _newOnchainID: string;
}
export type UpdatedTokenInformationEvent = TypedEvent<[
    string,
    string,
    number,
    string,
    string
], UpdatedTokenInformationEventObject>;
export type UpdatedTokenInformationEventFilter = TypedEventFilter<UpdatedTokenInformationEvent>;
export interface IToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITokenInterface;
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
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        batchBurn(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchForcedTransfer(_fromList: PromiseOrValue<string>[], _toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchFreezePartialTokens(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchMint(_toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchSetAddressFrozen(_userAddresses: PromiseOrValue<string>[], _freeze: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchTransfer(_toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        batchUnfreezePartialTokens(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        burn(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        compliance(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        forcedTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        freezePartialTokens(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getFrozenTokens(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        identityRegistry(overrides?: CallOverrides): Promise<[string]>;
        isFrozen(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        onchainID(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        recoveryAddress(_lostWallet: PromiseOrValue<string>, _newWallet: PromiseOrValue<string>, _investorOnchainID: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setAddressFrozen(_userAddress: PromiseOrValue<string>, _freeze: PromiseOrValue<boolean>, overrides?: Overrides & {
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
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unfreezePartialTokens(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[string]>;
    };
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    batchBurn(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchForcedTransfer(_fromList: PromiseOrValue<string>[], _toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchFreezePartialTokens(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchMint(_toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchSetAddressFrozen(_userAddresses: PromiseOrValue<string>[], _freeze: PromiseOrValue<boolean>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchTransfer(_toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    batchUnfreezePartialTokens(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    burn(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    compliance(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    forcedTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    freezePartialTokens(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getFrozenTokens(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    identityRegistry(overrides?: CallOverrides): Promise<string>;
    isFrozen(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    onchainID(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    recoveryAddress(_lostWallet: PromiseOrValue<string>, _newWallet: PromiseOrValue<string>, _investorOnchainID: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setAddressFrozen(_userAddress: PromiseOrValue<string>, _freeze: PromiseOrValue<boolean>, overrides?: Overrides & {
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
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unfreezePartialTokens(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        batchBurn(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        batchForcedTransfer(_fromList: PromiseOrValue<string>[], _toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        batchFreezePartialTokens(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        batchMint(_toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        batchSetAddressFrozen(_userAddresses: PromiseOrValue<string>[], _freeze: PromiseOrValue<boolean>[], overrides?: CallOverrides): Promise<void>;
        batchTransfer(_toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        batchUnfreezePartialTokens(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        burn(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        compliance(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        forcedTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        freezePartialTokens(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getFrozenTokens(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        identityRegistry(overrides?: CallOverrides): Promise<string>;
        isFrozen(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        onchainID(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        recoveryAddress(_lostWallet: PromiseOrValue<string>, _newWallet: PromiseOrValue<string>, _investorOnchainID: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setAddressFrozen(_userAddress: PromiseOrValue<string>, _freeze: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setCompliance(_compliance: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setIdentityRegistry(_identityRegistry: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setName(_name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setOnchainID(_onchainID: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setSymbol(_symbol: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        unfreezePartialTokens(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddressFrozen(address,bool,address)"(_userAddress?: PromiseOrValue<string> | null, _isFrozen?: PromiseOrValue<boolean> | null, _owner?: PromiseOrValue<string> | null): AddressFrozenEventFilter;
        AddressFrozen(_userAddress?: PromiseOrValue<string> | null, _isFrozen?: PromiseOrValue<boolean> | null, _owner?: PromiseOrValue<string> | null): AddressFrozenEventFilter;
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "ComplianceAdded(address)"(_compliance?: PromiseOrValue<string> | null): ComplianceAddedEventFilter;
        ComplianceAdded(_compliance?: PromiseOrValue<string> | null): ComplianceAddedEventFilter;
        "IdentityRegistryAdded(address)"(_identityRegistry?: PromiseOrValue<string> | null): IdentityRegistryAddedEventFilter;
        IdentityRegistryAdded(_identityRegistry?: PromiseOrValue<string> | null): IdentityRegistryAddedEventFilter;
        "Paused(address)"(_userAddress?: null): PausedEventFilter;
        Paused(_userAddress?: null): PausedEventFilter;
        "RecoverySuccess(address,address,address)"(_lostWallet?: PromiseOrValue<string> | null, _newWallet?: PromiseOrValue<string> | null, _investorOnchainID?: PromiseOrValue<string> | null): RecoverySuccessEventFilter;
        RecoverySuccess(_lostWallet?: PromiseOrValue<string> | null, _newWallet?: PromiseOrValue<string> | null, _investorOnchainID?: PromiseOrValue<string> | null): RecoverySuccessEventFilter;
        "TokensFrozen(address,uint256)"(_userAddress?: PromiseOrValue<string> | null, _amount?: null): TokensFrozenEventFilter;
        TokensFrozen(_userAddress?: PromiseOrValue<string> | null, _amount?: null): TokensFrozenEventFilter;
        "TokensUnfrozen(address,uint256)"(_userAddress?: PromiseOrValue<string> | null, _amount?: null): TokensUnfrozenEventFilter;
        TokensUnfrozen(_userAddress?: PromiseOrValue<string> | null, _amount?: null): TokensUnfrozenEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "Unpaused(address)"(_userAddress?: null): UnpausedEventFilter;
        Unpaused(_userAddress?: null): UnpausedEventFilter;
        "UpdatedTokenInformation(string,string,uint8,string,address)"(_newName?: PromiseOrValue<string> | null, _newSymbol?: PromiseOrValue<string> | null, _newDecimals?: null, _newVersion?: null, _newOnchainID?: PromiseOrValue<string> | null): UpdatedTokenInformationEventFilter;
        UpdatedTokenInformation(_newName?: PromiseOrValue<string> | null, _newSymbol?: PromiseOrValue<string> | null, _newDecimals?: null, _newVersion?: null, _newOnchainID?: PromiseOrValue<string> | null): UpdatedTokenInformationEventFilter;
    };
    estimateGas: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        batchBurn(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchForcedTransfer(_fromList: PromiseOrValue<string>[], _toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchFreezePartialTokens(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchMint(_toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchSetAddressFrozen(_userAddresses: PromiseOrValue<string>[], _freeze: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchTransfer(_toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        batchUnfreezePartialTokens(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        burn(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        compliance(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        forcedTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        freezePartialTokens(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getFrozenTokens(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        identityRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        isFrozen(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        onchainID(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        recoveryAddress(_lostWallet: PromiseOrValue<string>, _newWallet: PromiseOrValue<string>, _investorOnchainID: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setAddressFrozen(_userAddress: PromiseOrValue<string>, _freeze: PromiseOrValue<boolean>, overrides?: Overrides & {
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
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unfreezePartialTokens(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        batchBurn(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchForcedTransfer(_fromList: PromiseOrValue<string>[], _toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchFreezePartialTokens(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchMint(_toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchSetAddressFrozen(_userAddresses: PromiseOrValue<string>[], _freeze: PromiseOrValue<boolean>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchTransfer(_toList: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        batchUnfreezePartialTokens(_userAddresses: PromiseOrValue<string>[], _amounts: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        burn(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        compliance(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forcedTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        freezePartialTokens(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getFrozenTokens(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        identityRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFrozen(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onchainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recoveryAddress(_lostWallet: PromiseOrValue<string>, _newWallet: PromiseOrValue<string>, _investorOnchainID: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setAddressFrozen(_userAddress: PromiseOrValue<string>, _freeze: PromiseOrValue<boolean>, overrides?: Overrides & {
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
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unfreezePartialTokens(_userAddress: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
