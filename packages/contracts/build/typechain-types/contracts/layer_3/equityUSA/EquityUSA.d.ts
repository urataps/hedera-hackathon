import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export type HoldStruct = {
    amount: PromiseOrValue<BigNumberish>;
    expirationTimestamp: PromiseOrValue<BigNumberish>;
    escrow: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    data: PromiseOrValue<BytesLike>;
};
export type HoldStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    string
] & {
    amount: BigNumber;
    expirationTimestamp: BigNumber;
    escrow: string;
    to: string;
    data: string;
};
export type RegulationDataStruct = {
    regulationType: PromiseOrValue<BigNumberish>;
    regulationSubType: PromiseOrValue<BigNumberish>;
    dealSize: PromiseOrValue<BigNumberish>;
    accreditedInvestors: PromiseOrValue<BigNumberish>;
    maxNonAccreditedInvestors: PromiseOrValue<BigNumberish>;
    manualInvestorVerification: PromiseOrValue<BigNumberish>;
    internationalInvestors: PromiseOrValue<BigNumberish>;
    resaleHoldPeriod: PromiseOrValue<BigNumberish>;
};
export type RegulationDataStructOutput = [
    number,
    number,
    BigNumber,
    number,
    BigNumber,
    number,
    number,
    number
] & {
    regulationType: number;
    regulationSubType: number;
    dealSize: BigNumber;
    accreditedInvestors: number;
    maxNonAccreditedInvestors: BigNumber;
    manualInvestorVerification: number;
    internationalInvestors: number;
    resaleHoldPeriod: number;
};
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
export declare namespace IEquity {
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
    type DividendStruct = {
        recordDate: PromiseOrValue<BigNumberish>;
        executionDate: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type DividendStructOutput = [BigNumber, BigNumber, BigNumber] & {
        recordDate: BigNumber;
        executionDate: BigNumber;
        amount: BigNumber;
    };
    type RegisteredDividendStruct = {
        dividend: IEquity.DividendStruct;
        snapshotId: PromiseOrValue<BigNumberish>;
    };
    type RegisteredDividendStructOutput = [
        IEquity.DividendStructOutput,
        BigNumber
    ] & {
        dividend: IEquity.DividendStructOutput;
        snapshotId: BigNumber;
    };
    type DividendForStruct = {
        tokenBalance: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        recordDate: PromiseOrValue<BigNumberish>;
        executionDate: PromiseOrValue<BigNumberish>;
        decimals: PromiseOrValue<BigNumberish>;
        recordDateReached: PromiseOrValue<boolean>;
    };
    type DividendForStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
    ] & {
        tokenBalance: BigNumber;
        amount: BigNumber;
        recordDate: BigNumber;
        executionDate: BigNumber;
        decimals: number;
        recordDateReached: boolean;
    };
    type ScheduledBalanceAdjustmentStruct = {
        executionDate: PromiseOrValue<BigNumberish>;
        factor: PromiseOrValue<BigNumberish>;
        decimals: PromiseOrValue<BigNumberish>;
    };
    type ScheduledBalanceAdjustmentStructOutput = [
        BigNumber,
        BigNumber,
        number
    ] & {
        executionDate: BigNumber;
        factor: BigNumber;
        decimals: number;
    };
    type VotingStruct = {
        recordDate: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type VotingStructOutput = [BigNumber, string] & {
        recordDate: BigNumber;
        data: string;
    };
    type RegisteredVotingStruct = {
        voting: IEquity.VotingStruct;
        snapshotId: PromiseOrValue<BigNumberish>;
    };
    type RegisteredVotingStructOutput = [
        IEquity.VotingStructOutput,
        BigNumber
    ] & {
        voting: IEquity.VotingStructOutput;
        snapshotId: BigNumber;
    };
    type VotingForStruct = {
        tokenBalance: PromiseOrValue<BigNumberish>;
        recordDate: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
        decimals: PromiseOrValue<BigNumberish>;
        recordDateReached: PromiseOrValue<boolean>;
    };
    type VotingForStructOutput = [
        BigNumber,
        BigNumber,
        string,
        number,
        boolean
    ] & {
        tokenBalance: BigNumber;
        recordDate: BigNumber;
        data: string;
        decimals: number;
        recordDateReached: boolean;
    };
}
export declare namespace ISecurity {
    type SecurityRegulationDataStruct = {
        regulationData: RegulationDataStruct;
        additionalSecurityData: AdditionalSecurityDataStruct;
    };
    type SecurityRegulationDataStructOutput = [
        RegulationDataStructOutput,
        AdditionalSecurityDataStructOutput
    ] & {
        regulationData: RegulationDataStructOutput;
        additionalSecurityData: AdditionalSecurityDataStructOutput;
    };
}
export interface EquityUSAInterface extends utils.Interface {
    functions: {
        "_initialize_equityUSA((bool,bool,bool,bool,bool,bool,bool,uint8,bytes3,uint256),(uint8,uint8,uint256,uint8,uint256,uint8,uint8,uint8),(bool,string,string))": FunctionFragment;
        "getDividendHolders(uint256,uint256,uint256)": FunctionFragment;
        "getDividends(uint256)": FunctionFragment;
        "getDividendsCount()": FunctionFragment;
        "getDividendsFor(uint256,address)": FunctionFragment;
        "getEquityDetails()": FunctionFragment;
        "getScheduledBalanceAdjustment(uint256)": FunctionFragment;
        "getScheduledBalanceAdjustmentCount()": FunctionFragment;
        "getSecurityHolders(uint256,uint256)": FunctionFragment;
        "getSecurityRegulationData()": FunctionFragment;
        "getStaticFunctionSelectors()": FunctionFragment;
        "getStaticInterfaceIds()": FunctionFragment;
        "getStaticResolverKey()": FunctionFragment;
        "getTotalDividendHolders(uint256)": FunctionFragment;
        "getTotalSecurityHolders()": FunctionFragment;
        "getTotalVotingHolders(uint256)": FunctionFragment;
        "getVoting(uint256)": FunctionFragment;
        "getVotingCount()": FunctionFragment;
        "getVotingFor(uint256,address)": FunctionFragment;
        "getVotingHolders(uint256,uint256,uint256)": FunctionFragment;
        "setDividends((uint256,uint256,uint256))": FunctionFragment;
        "setScheduledBalanceAdjustment((uint256,uint256,uint8))": FunctionFragment;
        "setVoting((uint256,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_initialize_equityUSA" | "getDividendHolders" | "getDividends" | "getDividendsCount" | "getDividendsFor" | "getEquityDetails" | "getScheduledBalanceAdjustment" | "getScheduledBalanceAdjustmentCount" | "getSecurityHolders" | "getSecurityRegulationData" | "getStaticFunctionSelectors" | "getStaticInterfaceIds" | "getStaticResolverKey" | "getTotalDividendHolders" | "getTotalSecurityHolders" | "getTotalVotingHolders" | "getVoting" | "getVotingCount" | "getVotingFor" | "getVotingHolders" | "setDividends" | "setScheduledBalanceAdjustment" | "setVoting"): FunctionFragment;
    encodeFunctionData(functionFragment: "_initialize_equityUSA", values: [
        IEquity.EquityDetailsDataStruct,
        RegulationDataStruct,
        AdditionalSecurityDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "getDividendHolders", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getDividends", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDividendsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDividendsFor", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getEquityDetails", values?: undefined): string;
    encodeFunctionData(functionFragment: "getScheduledBalanceAdjustment", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getScheduledBalanceAdjustmentCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSecurityHolders", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSecurityRegulationData", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStaticFunctionSelectors", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStaticInterfaceIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStaticResolverKey", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalDividendHolders", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTotalSecurityHolders", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalVotingHolders", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getVoting", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getVotingCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVotingFor", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getVotingHolders", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setDividends", values: [IEquity.DividendStruct]): string;
    encodeFunctionData(functionFragment: "setScheduledBalanceAdjustment", values: [IEquity.ScheduledBalanceAdjustmentStruct]): string;
    encodeFunctionData(functionFragment: "setVoting", values: [IEquity.VotingStruct]): string;
    decodeFunctionResult(functionFragment: "_initialize_equityUSA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDividendHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDividends", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDividendsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDividendsFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEquityDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getScheduledBalanceAdjustment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getScheduledBalanceAdjustmentCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSecurityHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSecurityRegulationData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStaticFunctionSelectors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStaticInterfaceIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStaticResolverKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalDividendHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSecurityHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalVotingHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVoting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotingCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotingFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotingHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDividends", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setScheduledBalanceAdjustment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVoting", data: BytesLike): Result;
    events: {
        "AdjustmentBalanceSet(address,uint256,uint8)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "AuthorizedOperator(address,address)": EventFragment;
        "AuthorizedOperatorByPartition(bytes32,address,address)": EventFragment;
        "ClearedHoldByPartition(address,address,bytes32,uint256,tuple,uint256,bytes,bytes)": EventFragment;
        "ClearedHoldFromByPartition(address,address,bytes32,uint256,tuple,uint256,bytes,bytes)": EventFragment;
        "ClearedOperatorHoldByPartition(address,address,bytes32,uint256,tuple,uint256,bytes,bytes)": EventFragment;
        "ClearedOperatorRedeemByPartition(address,address,bytes32,uint256,uint256,uint256,bytes,bytes)": EventFragment;
        "ClearedOperatorTransferByPartition(address,address,address,bytes32,uint256,uint256,uint256,bytes,bytes)": EventFragment;
        "ClearedRedeemByPartition(address,address,bytes32,uint256,uint256,uint256,bytes,bytes)": EventFragment;
        "ClearedRedeemFromByPartition(address,address,bytes32,uint256,uint256,uint256,bytes,bytes)": EventFragment;
        "ClearedTransferByPartition(address,address,address,bytes32,uint256,uint256,uint256,bytes,bytes)": EventFragment;
        "ClearedTransferFromByPartition(address,address,address,bytes32,uint256,uint256,uint256,bytes,bytes)": EventFragment;
        "ComplianceAdded(address)": EventFragment;
        "ControllerRedemption(address,address,uint256,bytes,bytes)": EventFragment;
        "ControllerTransfer(address,address,address,uint256,bytes,bytes)": EventFragment;
        "CouponSet(bytes32,uint256,address,uint256,uint256,uint256)": EventFragment;
        "DelegateChanged(address,address,address)": EventFragment;
        "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
        "DividendSet(bytes32,uint256,address,uint256,uint256,uint256)": EventFragment;
        "FinalizedControllerFeature(address)": EventFragment;
        "Issued(address,address,uint256,bytes)": EventFragment;
        "IssuedByPartition(bytes32,address,address,uint256,bytes)": EventFragment;
        "MaturityDateUpdated(address,uint256,uint256)": EventFragment;
        "MaxSupplyByPartitionSet(address,bytes32,uint256,uint256)": EventFragment;
        "MaxSupplySet(address,uint256,uint256)": EventFragment;
        "PartitionTransferredAndLocked(bytes32,address,address,uint256,bytes,uint256,uint256)": EventFragment;
        "PartitionsProtected(address)": EventFragment;
        "PartitionsUnProtected(address)": EventFragment;
        "ProtectedClearedHoldByPartition(address,address,bytes32,uint256,tuple,uint256,bytes,bytes)": EventFragment;
        "ProtectedClearedRedeemByPartition(address,address,bytes32,uint256,uint256,uint256,bytes,bytes)": EventFragment;
        "ProtectedClearedTransferByPartition(address,address,address,bytes32,uint256,uint256,uint256,bytes,bytes)": EventFragment;
        "ProtectedRedeemFrom(bytes32,address,address,uint256,uint256,uint256,bytes)": EventFragment;
        "ProtectedTransferFrom(bytes32,address,address,address,uint256,uint256,uint256,bytes)": EventFragment;
        "Redeemed(address,address,uint256,bytes)": EventFragment;
        "RedeemedByPartition(bytes32,address,address,uint256,bytes,bytes)": EventFragment;
        "RevokedOperator(address,address)": EventFragment;
        "RevokedOperatorByPartition(bytes32,address,address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "ScheduledBalanceAdjustmentSet(bytes32,uint256,address,uint256,uint256,uint256)": EventFragment;
        "SnapshotTaken(address,uint256)": EventFragment;
        "SnapshotTriggered(address,uint256)": EventFragment;
        "TokenPaused(address)": EventFragment;
        "TokenUnpaused(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "TransferByPartition(bytes32,address,address,address,uint256,bytes,bytes)": EventFragment;
        "VotingSet(bytes32,uint256,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdjustmentBalanceSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuthorizedOperator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuthorizedOperatorByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearedHoldByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearedHoldFromByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearedOperatorHoldByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearedOperatorRedeemByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearedOperatorTransferByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearedRedeemByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearedRedeemFromByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearedTransferByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClearedTransferFromByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ComplianceAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ControllerRedemption"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ControllerTransfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CouponSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DividendSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FinalizedControllerFeature"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Issued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IssuedByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaturityDateUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxSupplyByPartitionSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxSupplySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PartitionTransferredAndLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PartitionsProtected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PartitionsUnProtected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtectedClearedHoldByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtectedClearedRedeemByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtectedClearedTransferByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtectedRedeemFrom"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtectedTransferFrom"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Redeemed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RedeemedByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RevokedOperator"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RevokedOperatorByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ScheduledBalanceAdjustmentSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SnapshotTaken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SnapshotTriggered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenPaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenUnpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferByPartition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VotingSet"): EventFragment;
}
export interface AdjustmentBalanceSetEventObject {
    operator: string;
    factor: BigNumber;
    decimals: number;
}
export type AdjustmentBalanceSetEvent = TypedEvent<[
    string,
    BigNumber,
    number
], AdjustmentBalanceSetEventObject>;
export type AdjustmentBalanceSetEventFilter = TypedEventFilter<AdjustmentBalanceSetEvent>;
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
export interface AuthorizedOperatorEventObject {
    operator: string;
    tokenHolder: string;
}
export type AuthorizedOperatorEvent = TypedEvent<[
    string,
    string
], AuthorizedOperatorEventObject>;
export type AuthorizedOperatorEventFilter = TypedEventFilter<AuthorizedOperatorEvent>;
export interface AuthorizedOperatorByPartitionEventObject {
    partition: string;
    operator: string;
    tokenHolder: string;
}
export type AuthorizedOperatorByPartitionEvent = TypedEvent<[
    string,
    string,
    string
], AuthorizedOperatorByPartitionEventObject>;
export type AuthorizedOperatorByPartitionEventFilter = TypedEventFilter<AuthorizedOperatorByPartitionEvent>;
export interface ClearedHoldByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    hold: HoldStructOutput;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ClearedHoldByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    HoldStructOutput,
    BigNumber,
    string,
    string
], ClearedHoldByPartitionEventObject>;
export type ClearedHoldByPartitionEventFilter = TypedEventFilter<ClearedHoldByPartitionEvent>;
export interface ClearedHoldFromByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    hold: HoldStructOutput;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ClearedHoldFromByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    HoldStructOutput,
    BigNumber,
    string,
    string
], ClearedHoldFromByPartitionEventObject>;
export type ClearedHoldFromByPartitionEventFilter = TypedEventFilter<ClearedHoldFromByPartitionEvent>;
export interface ClearedOperatorHoldByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    hold: HoldStructOutput;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ClearedOperatorHoldByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    HoldStructOutput,
    BigNumber,
    string,
    string
], ClearedOperatorHoldByPartitionEventObject>;
export type ClearedOperatorHoldByPartitionEventFilter = TypedEventFilter<ClearedOperatorHoldByPartitionEvent>;
export interface ClearedOperatorRedeemByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    amount: BigNumber;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ClearedOperatorRedeemByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], ClearedOperatorRedeemByPartitionEventObject>;
export type ClearedOperatorRedeemByPartitionEventFilter = TypedEventFilter<ClearedOperatorRedeemByPartitionEvent>;
export interface ClearedOperatorTransferByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    to: string;
    partition: string;
    clearingId: BigNumber;
    amount: BigNumber;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ClearedOperatorTransferByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], ClearedOperatorTransferByPartitionEventObject>;
export type ClearedOperatorTransferByPartitionEventFilter = TypedEventFilter<ClearedOperatorTransferByPartitionEvent>;
export interface ClearedRedeemByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    amount: BigNumber;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ClearedRedeemByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], ClearedRedeemByPartitionEventObject>;
export type ClearedRedeemByPartitionEventFilter = TypedEventFilter<ClearedRedeemByPartitionEvent>;
export interface ClearedRedeemFromByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    amount: BigNumber;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ClearedRedeemFromByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], ClearedRedeemFromByPartitionEventObject>;
export type ClearedRedeemFromByPartitionEventFilter = TypedEventFilter<ClearedRedeemFromByPartitionEvent>;
export interface ClearedTransferByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    to: string;
    partition: string;
    clearingId: BigNumber;
    amount: BigNumber;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ClearedTransferByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], ClearedTransferByPartitionEventObject>;
export type ClearedTransferByPartitionEventFilter = TypedEventFilter<ClearedTransferByPartitionEvent>;
export interface ClearedTransferFromByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    to: string;
    partition: string;
    clearingId: BigNumber;
    amount: BigNumber;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ClearedTransferFromByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], ClearedTransferFromByPartitionEventObject>;
export type ClearedTransferFromByPartitionEventFilter = TypedEventFilter<ClearedTransferFromByPartitionEvent>;
export interface ComplianceAddedEventObject {
    compliance: string;
}
export type ComplianceAddedEvent = TypedEvent<[
    string
], ComplianceAddedEventObject>;
export type ComplianceAddedEventFilter = TypedEventFilter<ComplianceAddedEvent>;
export interface ControllerRedemptionEventObject {
    _controller: string;
    _tokenHolder: string;
    _value: BigNumber;
    _data: string;
    _operatorData: string;
}
export type ControllerRedemptionEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    string
], ControllerRedemptionEventObject>;
export type ControllerRedemptionEventFilter = TypedEventFilter<ControllerRedemptionEvent>;
export interface ControllerTransferEventObject {
    _controller: string;
    _from: string;
    _to: string;
    _value: BigNumber;
    _data: string;
    _operatorData: string;
}
export type ControllerTransferEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string,
    string
], ControllerTransferEventObject>;
export type ControllerTransferEventFilter = TypedEventFilter<ControllerTransferEvent>;
export interface CouponSetEventObject {
    corporateActionId: string;
    couponId: BigNumber;
    operator: string;
    recordDate: BigNumber;
    executionDate: BigNumber;
    rate: BigNumber;
}
export type CouponSetEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], CouponSetEventObject>;
export type CouponSetEventFilter = TypedEventFilter<CouponSetEvent>;
export interface DelegateChangedEventObject {
    delegator: string;
    fromDelegate: string;
    toDelegate: string;
}
export type DelegateChangedEvent = TypedEvent<[
    string,
    string,
    string
], DelegateChangedEventObject>;
export type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>;
export interface DelegateVotesChangedEventObject {
    delegate: string;
    previousBalance: BigNumber;
    newBalance: BigNumber;
}
export type DelegateVotesChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], DelegateVotesChangedEventObject>;
export type DelegateVotesChangedEventFilter = TypedEventFilter<DelegateVotesChangedEvent>;
export interface DividendSetEventObject {
    corporateActionId: string;
    dividendId: BigNumber;
    operator: string;
    recordDate: BigNumber;
    executionDate: BigNumber;
    amount: BigNumber;
}
export type DividendSetEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], DividendSetEventObject>;
export type DividendSetEventFilter = TypedEventFilter<DividendSetEvent>;
export interface FinalizedControllerFeatureEventObject {
    operator: string;
}
export type FinalizedControllerFeatureEvent = TypedEvent<[
    string
], FinalizedControllerFeatureEventObject>;
export type FinalizedControllerFeatureEventFilter = TypedEventFilter<FinalizedControllerFeatureEvent>;
export interface IssuedEventObject {
    _operator: string;
    _to: string;
    _value: BigNumber;
    _data: string;
}
export type IssuedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], IssuedEventObject>;
export type IssuedEventFilter = TypedEventFilter<IssuedEvent>;
export interface IssuedByPartitionEventObject {
    partition: string;
    operator: string;
    to: string;
    value: BigNumber;
    data: string;
}
export type IssuedByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string
], IssuedByPartitionEventObject>;
export type IssuedByPartitionEventFilter = TypedEventFilter<IssuedByPartitionEvent>;
export interface MaturityDateUpdatedEventObject {
    bondId: string;
    maturityDate: BigNumber;
    previousMaturityDate: BigNumber;
}
export type MaturityDateUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], MaturityDateUpdatedEventObject>;
export type MaturityDateUpdatedEventFilter = TypedEventFilter<MaturityDateUpdatedEvent>;
export interface MaxSupplyByPartitionSetEventObject {
    operator: string;
    partition: string;
    newMaxSupply: BigNumber;
    previousMaxSupply: BigNumber;
}
export type MaxSupplyByPartitionSetEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], MaxSupplyByPartitionSetEventObject>;
export type MaxSupplyByPartitionSetEventFilter = TypedEventFilter<MaxSupplyByPartitionSetEvent>;
export interface MaxSupplySetEventObject {
    operator: string;
    newMaxSupply: BigNumber;
    previousMaxSupply: BigNumber;
}
export type MaxSupplySetEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], MaxSupplySetEventObject>;
export type MaxSupplySetEventFilter = TypedEventFilter<MaxSupplySetEvent>;
export interface PartitionTransferredAndLockedEventObject {
    partition: string;
    from: string;
    to: string;
    value: BigNumber;
    data: string;
    expirationTimestamp: BigNumber;
    lockId: BigNumber;
}
export type PartitionTransferredAndLockedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
], PartitionTransferredAndLockedEventObject>;
export type PartitionTransferredAndLockedEventFilter = TypedEventFilter<PartitionTransferredAndLockedEvent>;
export interface PartitionsProtectedEventObject {
    operator: string;
}
export type PartitionsProtectedEvent = TypedEvent<[
    string
], PartitionsProtectedEventObject>;
export type PartitionsProtectedEventFilter = TypedEventFilter<PartitionsProtectedEvent>;
export interface PartitionsUnProtectedEventObject {
    operator: string;
}
export type PartitionsUnProtectedEvent = TypedEvent<[
    string
], PartitionsUnProtectedEventObject>;
export type PartitionsUnProtectedEventFilter = TypedEventFilter<PartitionsUnProtectedEvent>;
export interface ProtectedClearedHoldByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    hold: HoldStructOutput;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ProtectedClearedHoldByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    HoldStructOutput,
    BigNumber,
    string,
    string
], ProtectedClearedHoldByPartitionEventObject>;
export type ProtectedClearedHoldByPartitionEventFilter = TypedEventFilter<ProtectedClearedHoldByPartitionEvent>;
export interface ProtectedClearedRedeemByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    partition: string;
    clearingId: BigNumber;
    amount: BigNumber;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ProtectedClearedRedeemByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], ProtectedClearedRedeemByPartitionEventObject>;
export type ProtectedClearedRedeemByPartitionEventFilter = TypedEventFilter<ProtectedClearedRedeemByPartitionEvent>;
export interface ProtectedClearedTransferByPartitionEventObject {
    operator: string;
    tokenHolder: string;
    to: string;
    partition: string;
    clearingId: BigNumber;
    amount: BigNumber;
    expirationDate: BigNumber;
    data: string;
    operatorData: string;
}
export type ProtectedClearedTransferByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], ProtectedClearedTransferByPartitionEventObject>;
export type ProtectedClearedTransferByPartitionEventFilter = TypedEventFilter<ProtectedClearedTransferByPartitionEvent>;
export interface ProtectedRedeemFromEventObject {
    partition: string;
    operator: string;
    from: string;
    value: BigNumber;
    deadline: BigNumber;
    nounce: BigNumber;
    signature: string;
}
export type ProtectedRedeemFromEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], ProtectedRedeemFromEventObject>;
export type ProtectedRedeemFromEventFilter = TypedEventFilter<ProtectedRedeemFromEvent>;
export interface ProtectedTransferFromEventObject {
    partition: string;
    operator: string;
    from: string;
    to: string;
    value: BigNumber;
    deadline: BigNumber;
    nounce: BigNumber;
    signature: string;
}
export type ProtectedTransferFromEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], ProtectedTransferFromEventObject>;
export type ProtectedTransferFromEventFilter = TypedEventFilter<ProtectedTransferFromEvent>;
export interface RedeemedEventObject {
    _operator: string;
    _from: string;
    _value: BigNumber;
    _data: string;
}
export type RedeemedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], RedeemedEventObject>;
export type RedeemedEventFilter = TypedEventFilter<RedeemedEvent>;
export interface RedeemedByPartitionEventObject {
    partition: string;
    operator: string;
    from: string;
    value: BigNumber;
    data: string;
    operatorData: string;
}
export type RedeemedByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string,
    string
], RedeemedByPartitionEventObject>;
export type RedeemedByPartitionEventFilter = TypedEventFilter<RedeemedByPartitionEvent>;
export interface RevokedOperatorEventObject {
    operator: string;
    tokenHolder: string;
}
export type RevokedOperatorEvent = TypedEvent<[
    string,
    string
], RevokedOperatorEventObject>;
export type RevokedOperatorEventFilter = TypedEventFilter<RevokedOperatorEvent>;
export interface RevokedOperatorByPartitionEventObject {
    partition: string;
    operator: string;
    tokenHolder: string;
}
export type RevokedOperatorByPartitionEvent = TypedEvent<[
    string,
    string,
    string
], RevokedOperatorByPartitionEventObject>;
export type RevokedOperatorByPartitionEventFilter = TypedEventFilter<RevokedOperatorByPartitionEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface ScheduledBalanceAdjustmentSetEventObject {
    corporateActionId: string;
    balanceAdjustmentId: BigNumber;
    operator: string;
    executionDate: BigNumber;
    factor: BigNumber;
    decimals: BigNumber;
}
export type ScheduledBalanceAdjustmentSetEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], ScheduledBalanceAdjustmentSetEventObject>;
export type ScheduledBalanceAdjustmentSetEventFilter = TypedEventFilter<ScheduledBalanceAdjustmentSetEvent>;
export interface SnapshotTakenEventObject {
    operator: string;
    snapshotID: BigNumber;
}
export type SnapshotTakenEvent = TypedEvent<[
    string,
    BigNumber
], SnapshotTakenEventObject>;
export type SnapshotTakenEventFilter = TypedEventFilter<SnapshotTakenEvent>;
export interface SnapshotTriggeredEventObject {
    operator: string;
    snapshotId: BigNumber;
}
export type SnapshotTriggeredEvent = TypedEvent<[
    string,
    BigNumber
], SnapshotTriggeredEventObject>;
export type SnapshotTriggeredEventFilter = TypedEventFilter<SnapshotTriggeredEvent>;
export interface TokenPausedEventObject {
    operator: string;
}
export type TokenPausedEvent = TypedEvent<[string], TokenPausedEventObject>;
export type TokenPausedEventFilter = TypedEventFilter<TokenPausedEvent>;
export interface TokenUnpausedEventObject {
    operator: string;
}
export type TokenUnpausedEvent = TypedEvent<[string], TokenUnpausedEventObject>;
export type TokenUnpausedEventFilter = TypedEventFilter<TokenUnpausedEvent>;
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
export interface TransferByPartitionEventObject {
    _fromPartition: string;
    _operator: string;
    _from: string;
    _to: string;
    _value: BigNumber;
    _data: string;
    _operatorData: string;
}
export type TransferByPartitionEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    string,
    string
], TransferByPartitionEventObject>;
export type TransferByPartitionEventFilter = TypedEventFilter<TransferByPartitionEvent>;
export interface VotingSetEventObject {
    corporateActionId: string;
    voteId: BigNumber;
    operator: string;
    recordDate: BigNumber;
    data: string;
}
export type VotingSetEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    string
], VotingSetEventObject>;
export type VotingSetEventFilter = TypedEventFilter<VotingSetEvent>;
export interface EquityUSA extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EquityUSAInterface;
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
        _initialize_equityUSA(_equityDetailsData: IEquity.EquityDetailsDataStruct, _regulationData: RegulationDataStruct, _additionalSecurityData: AdditionalSecurityDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            holders_: string[];
        }>;
        getDividends(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IEquity.RegisteredDividendStructOutput
        ] & {
            registeredDividend_: IEquity.RegisteredDividendStructOutput;
        }>;
        getDividendsCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            dividendCount_: BigNumber;
        }>;
        getDividendsFor(_dividendID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IEquity.DividendForStructOutput
        ] & {
            dividendFor_: IEquity.DividendForStructOutput;
        }>;
        getEquityDetails(overrides?: CallOverrides): Promise<[
            IEquity.EquityDetailsDataStructOutput
        ] & {
            equityDetailsData_: IEquity.EquityDetailsDataStructOutput;
        }>;
        getScheduledBalanceAdjustment(_balanceAdjustmentID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IEquity.ScheduledBalanceAdjustmentStructOutput
        ] & {
            balanceAdjustment_: IEquity.ScheduledBalanceAdjustmentStructOutput;
        }>;
        getScheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            balanceAdjustmentCount_: BigNumber;
        }>;
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            holders_: string[];
        }>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<[
            ISecurity.SecurityRegulationDataStructOutput
        ] & {
            securityRegulationData_: ISecurity.SecurityRegulationDataStructOutput;
        }>;
        getStaticFunctionSelectors(overrides?: CallOverrides): Promise<[string[]] & {
            staticFunctionSelectors_: string[];
        }>;
        getStaticInterfaceIds(overrides?: CallOverrides): Promise<[string[]] & {
            staticInterfaceIds_: string[];
        }>;
        getStaticResolverKey(overrides?: CallOverrides): Promise<[string] & {
            staticResolverKey_: string;
        }>;
        getTotalDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalVotingHolders(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVoting(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IEquity.RegisteredVotingStructOutput
        ] & {
            registeredVoting_: IEquity.RegisteredVotingStructOutput;
        }>;
        getVotingCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            votingCount_: BigNumber;
        }>;
        getVotingFor(_voteID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IEquity.VotingForStructOutput
        ] & {
            votingFor_: IEquity.VotingForStructOutput;
        }>;
        getVotingHolders(_voteID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            holders_: string[];
        }>;
        setDividends(_newDividend: IEquity.DividendStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setScheduledBalanceAdjustment(_newBalanceAdjustment: IEquity.ScheduledBalanceAdjustmentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVoting(_newVoting: IEquity.VotingStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _initialize_equityUSA(_equityDetailsData: IEquity.EquityDetailsDataStruct, _regulationData: RegulationDataStruct, _additionalSecurityData: AdditionalSecurityDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getDividends(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.RegisteredDividendStructOutput>;
    getDividendsCount(overrides?: CallOverrides): Promise<BigNumber>;
    getDividendsFor(_dividendID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IEquity.DividendForStructOutput>;
    getEquityDetails(overrides?: CallOverrides): Promise<IEquity.EquityDetailsDataStructOutput>;
    getScheduledBalanceAdjustment(_balanceAdjustmentID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.ScheduledBalanceAdjustmentStructOutput>;
    getScheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<BigNumber>;
    getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getSecurityRegulationData(overrides?: CallOverrides): Promise<ISecurity.SecurityRegulationDataStructOutput>;
    getStaticFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;
    getStaticInterfaceIds(overrides?: CallOverrides): Promise<string[]>;
    getStaticResolverKey(overrides?: CallOverrides): Promise<string>;
    getTotalDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTotalSecurityHolders(overrides?: CallOverrides): Promise<BigNumber>;
    getTotalVotingHolders(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getVoting(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.RegisteredVotingStructOutput>;
    getVotingCount(overrides?: CallOverrides): Promise<BigNumber>;
    getVotingFor(_voteID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IEquity.VotingForStructOutput>;
    getVotingHolders(_voteID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    setDividends(_newDividend: IEquity.DividendStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setScheduledBalanceAdjustment(_newBalanceAdjustment: IEquity.ScheduledBalanceAdjustmentStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVoting(_newVoting: IEquity.VotingStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _initialize_equityUSA(_equityDetailsData: IEquity.EquityDetailsDataStruct, _regulationData: RegulationDataStruct, _additionalSecurityData: AdditionalSecurityDataStruct, overrides?: CallOverrides): Promise<void>;
        getDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getDividends(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.RegisteredDividendStructOutput>;
        getDividendsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getDividendsFor(_dividendID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IEquity.DividendForStructOutput>;
        getEquityDetails(overrides?: CallOverrides): Promise<IEquity.EquityDetailsDataStructOutput>;
        getScheduledBalanceAdjustment(_balanceAdjustmentID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.ScheduledBalanceAdjustmentStructOutput>;
        getScheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<BigNumber>;
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<ISecurity.SecurityRegulationDataStructOutput>;
        getStaticFunctionSelectors(overrides?: CallOverrides): Promise<string[]>;
        getStaticInterfaceIds(overrides?: CallOverrides): Promise<string[]>;
        getStaticResolverKey(overrides?: CallOverrides): Promise<string>;
        getTotalDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalVotingHolders(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVoting(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.RegisteredVotingStructOutput>;
        getVotingCount(overrides?: CallOverrides): Promise<BigNumber>;
        getVotingFor(_voteID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IEquity.VotingForStructOutput>;
        getVotingHolders(_voteID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        setDividends(_newDividend: IEquity.DividendStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            dividendID_: BigNumber;
        }>;
        setScheduledBalanceAdjustment(_newBalanceAdjustment: IEquity.ScheduledBalanceAdjustmentStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            balanceAdjustmentID_: BigNumber;
        }>;
        setVoting(_newVoting: IEquity.VotingStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            voteID_: BigNumber;
        }>;
    };
    filters: {
        "AdjustmentBalanceSet(address,uint256,uint8)"(operator?: PromiseOrValue<string> | null, factor?: null, decimals?: null): AdjustmentBalanceSetEventFilter;
        AdjustmentBalanceSet(operator?: PromiseOrValue<string> | null, factor?: null, decimals?: null): AdjustmentBalanceSetEventFilter;
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "AuthorizedOperator(address,address)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): AuthorizedOperatorEventFilter;
        AuthorizedOperator(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): AuthorizedOperatorEventFilter;
        "AuthorizedOperatorByPartition(bytes32,address,address)"(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): AuthorizedOperatorByPartitionEventFilter;
        AuthorizedOperatorByPartition(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): AuthorizedOperatorByPartitionEventFilter;
        "ClearedHoldByPartition(address,address,bytes32,uint256,tuple,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, hold?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedHoldByPartitionEventFilter;
        ClearedHoldByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, hold?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedHoldByPartitionEventFilter;
        "ClearedHoldFromByPartition(address,address,bytes32,uint256,tuple,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, hold?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedHoldFromByPartitionEventFilter;
        ClearedHoldFromByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, hold?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedHoldFromByPartitionEventFilter;
        "ClearedOperatorHoldByPartition(address,address,bytes32,uint256,tuple,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, hold?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedOperatorHoldByPartitionEventFilter;
        ClearedOperatorHoldByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, hold?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedOperatorHoldByPartitionEventFilter;
        "ClearedOperatorRedeemByPartition(address,address,bytes32,uint256,uint256,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedOperatorRedeemByPartitionEventFilter;
        ClearedOperatorRedeemByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedOperatorRedeemByPartitionEventFilter;
        "ClearedOperatorTransferByPartition(address,address,address,bytes32,uint256,uint256,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedOperatorTransferByPartitionEventFilter;
        ClearedOperatorTransferByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedOperatorTransferByPartitionEventFilter;
        "ClearedRedeemByPartition(address,address,bytes32,uint256,uint256,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedRedeemByPartitionEventFilter;
        ClearedRedeemByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedRedeemByPartitionEventFilter;
        "ClearedRedeemFromByPartition(address,address,bytes32,uint256,uint256,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedRedeemFromByPartitionEventFilter;
        ClearedRedeemFromByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedRedeemFromByPartitionEventFilter;
        "ClearedTransferByPartition(address,address,address,bytes32,uint256,uint256,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedTransferByPartitionEventFilter;
        ClearedTransferByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedTransferByPartitionEventFilter;
        "ClearedTransferFromByPartition(address,address,address,bytes32,uint256,uint256,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedTransferFromByPartitionEventFilter;
        ClearedTransferFromByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ClearedTransferFromByPartitionEventFilter;
        "ComplianceAdded(address)"(compliance?: PromiseOrValue<string> | null): ComplianceAddedEventFilter;
        ComplianceAdded(compliance?: PromiseOrValue<string> | null): ComplianceAddedEventFilter;
        "ControllerRedemption(address,address,uint256,bytes,bytes)"(_controller?: null, _tokenHolder?: PromiseOrValue<string> | null, _value?: null, _data?: null, _operatorData?: null): ControllerRedemptionEventFilter;
        ControllerRedemption(_controller?: null, _tokenHolder?: PromiseOrValue<string> | null, _value?: null, _data?: null, _operatorData?: null): ControllerRedemptionEventFilter;
        "ControllerTransfer(address,address,address,uint256,bytes,bytes)"(_controller?: null, _from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _value?: null, _data?: null, _operatorData?: null): ControllerTransferEventFilter;
        ControllerTransfer(_controller?: null, _from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _value?: null, _data?: null, _operatorData?: null): ControllerTransferEventFilter;
        "CouponSet(bytes32,uint256,address,uint256,uint256,uint256)"(corporateActionId?: null, couponId?: null, operator?: PromiseOrValue<string> | null, recordDate?: PromiseOrValue<BigNumberish> | null, executionDate?: PromiseOrValue<BigNumberish> | null, rate?: null): CouponSetEventFilter;
        CouponSet(corporateActionId?: null, couponId?: null, operator?: PromiseOrValue<string> | null, recordDate?: PromiseOrValue<BigNumberish> | null, executionDate?: PromiseOrValue<BigNumberish> | null, rate?: null): CouponSetEventFilter;
        "DelegateChanged(address,address,address)"(delegator?: PromiseOrValue<string> | null, fromDelegate?: PromiseOrValue<string> | null, toDelegate?: PromiseOrValue<string> | null): DelegateChangedEventFilter;
        DelegateChanged(delegator?: PromiseOrValue<string> | null, fromDelegate?: PromiseOrValue<string> | null, toDelegate?: PromiseOrValue<string> | null): DelegateChangedEventFilter;
        "DelegateVotesChanged(address,uint256,uint256)"(delegate?: PromiseOrValue<string> | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        DelegateVotesChanged(delegate?: PromiseOrValue<string> | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        "DividendSet(bytes32,uint256,address,uint256,uint256,uint256)"(corporateActionId?: null, dividendId?: null, operator?: PromiseOrValue<string> | null, recordDate?: PromiseOrValue<BigNumberish> | null, executionDate?: PromiseOrValue<BigNumberish> | null, amount?: null): DividendSetEventFilter;
        DividendSet(corporateActionId?: null, dividendId?: null, operator?: PromiseOrValue<string> | null, recordDate?: PromiseOrValue<BigNumberish> | null, executionDate?: PromiseOrValue<BigNumberish> | null, amount?: null): DividendSetEventFilter;
        "FinalizedControllerFeature(address)"(operator?: null): FinalizedControllerFeatureEventFilter;
        FinalizedControllerFeature(operator?: null): FinalizedControllerFeatureEventFilter;
        "Issued(address,address,uint256,bytes)"(_operator?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _value?: null, _data?: null): IssuedEventFilter;
        Issued(_operator?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _value?: null, _data?: null): IssuedEventFilter;
        "IssuedByPartition(bytes32,address,address,uint256,bytes)"(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null, data?: null): IssuedByPartitionEventFilter;
        IssuedByPartition(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null, data?: null): IssuedByPartitionEventFilter;
        "MaturityDateUpdated(address,uint256,uint256)"(bondId?: PromiseOrValue<string> | null, maturityDate?: PromiseOrValue<BigNumberish> | null, previousMaturityDate?: PromiseOrValue<BigNumberish> | null): MaturityDateUpdatedEventFilter;
        MaturityDateUpdated(bondId?: PromiseOrValue<string> | null, maturityDate?: PromiseOrValue<BigNumberish> | null, previousMaturityDate?: PromiseOrValue<BigNumberish> | null): MaturityDateUpdatedEventFilter;
        "MaxSupplyByPartitionSet(address,bytes32,uint256,uint256)"(operator?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, newMaxSupply?: null, previousMaxSupply?: null): MaxSupplyByPartitionSetEventFilter;
        MaxSupplyByPartitionSet(operator?: PromiseOrValue<string> | null, partition?: PromiseOrValue<BytesLike> | null, newMaxSupply?: null, previousMaxSupply?: null): MaxSupplyByPartitionSetEventFilter;
        "MaxSupplySet(address,uint256,uint256)"(operator?: PromiseOrValue<string> | null, newMaxSupply?: null, previousMaxSupply?: null): MaxSupplySetEventFilter;
        MaxSupplySet(operator?: PromiseOrValue<string> | null, newMaxSupply?: null, previousMaxSupply?: null): MaxSupplySetEventFilter;
        "PartitionTransferredAndLocked(bytes32,address,address,uint256,bytes,uint256,uint256)"(partition?: PromiseOrValue<BytesLike> | null, from?: PromiseOrValue<string> | null, to?: null, value?: null, data?: null, expirationTimestamp?: null, lockId?: null): PartitionTransferredAndLockedEventFilter;
        PartitionTransferredAndLocked(partition?: PromiseOrValue<BytesLike> | null, from?: PromiseOrValue<string> | null, to?: null, value?: null, data?: null, expirationTimestamp?: null, lockId?: null): PartitionTransferredAndLockedEventFilter;
        "PartitionsProtected(address)"(operator?: PromiseOrValue<string> | null): PartitionsProtectedEventFilter;
        PartitionsProtected(operator?: PromiseOrValue<string> | null): PartitionsProtectedEventFilter;
        "PartitionsUnProtected(address)"(operator?: PromiseOrValue<string> | null): PartitionsUnProtectedEventFilter;
        PartitionsUnProtected(operator?: PromiseOrValue<string> | null): PartitionsUnProtectedEventFilter;
        "ProtectedClearedHoldByPartition(address,address,bytes32,uint256,tuple,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, hold?: null, expirationDate?: null, data?: null, operatorData?: null): ProtectedClearedHoldByPartitionEventFilter;
        ProtectedClearedHoldByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, hold?: null, expirationDate?: null, data?: null, operatorData?: null): ProtectedClearedHoldByPartitionEventFilter;
        "ProtectedClearedRedeemByPartition(address,address,bytes32,uint256,uint256,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ProtectedClearedRedeemByPartitionEventFilter;
        ProtectedClearedRedeemByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ProtectedClearedRedeemByPartitionEventFilter;
        "ProtectedClearedTransferByPartition(address,address,address,bytes32,uint256,uint256,uint256,bytes,bytes)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ProtectedClearedTransferByPartitionEventFilter;
        ProtectedClearedTransferByPartition(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, partition?: null, clearingId?: null, amount?: null, expirationDate?: null, data?: null, operatorData?: null): ProtectedClearedTransferByPartitionEventFilter;
        "ProtectedRedeemFrom(bytes32,address,address,uint256,uint256,uint256,bytes)"(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, value?: null, deadline?: null, nounce?: null, signature?: null): ProtectedRedeemFromEventFilter;
        ProtectedRedeemFrom(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, value?: null, deadline?: null, nounce?: null, signature?: null): ProtectedRedeemFromEventFilter;
        "ProtectedTransferFrom(bytes32,address,address,address,uint256,uint256,uint256,bytes)"(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: null, value?: null, deadline?: null, nounce?: null, signature?: null): ProtectedTransferFromEventFilter;
        ProtectedTransferFrom(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: null, value?: null, deadline?: null, nounce?: null, signature?: null): ProtectedTransferFromEventFilter;
        "Redeemed(address,address,uint256,bytes)"(_operator?: PromiseOrValue<string> | null, _from?: PromiseOrValue<string> | null, _value?: null, _data?: null): RedeemedEventFilter;
        Redeemed(_operator?: PromiseOrValue<string> | null, _from?: PromiseOrValue<string> | null, _value?: null, _data?: null): RedeemedEventFilter;
        "RedeemedByPartition(bytes32,address,address,uint256,bytes,bytes)"(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, value?: null, data?: null, operatorData?: null): RedeemedByPartitionEventFilter;
        RedeemedByPartition(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, value?: null, data?: null, operatorData?: null): RedeemedByPartitionEventFilter;
        "RevokedOperator(address,address)"(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): RevokedOperatorEventFilter;
        RevokedOperator(operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): RevokedOperatorEventFilter;
        "RevokedOperatorByPartition(bytes32,address,address)"(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): RevokedOperatorByPartitionEventFilter;
        RevokedOperatorByPartition(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, tokenHolder?: PromiseOrValue<string> | null): RevokedOperatorByPartitionEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        "ScheduledBalanceAdjustmentSet(bytes32,uint256,address,uint256,uint256,uint256)"(corporateActionId?: null, balanceAdjustmentId?: null, operator?: PromiseOrValue<string> | null, executionDate?: PromiseOrValue<BigNumberish> | null, factor?: null, decimals?: null): ScheduledBalanceAdjustmentSetEventFilter;
        ScheduledBalanceAdjustmentSet(corporateActionId?: null, balanceAdjustmentId?: null, operator?: PromiseOrValue<string> | null, executionDate?: PromiseOrValue<BigNumberish> | null, factor?: null, decimals?: null): ScheduledBalanceAdjustmentSetEventFilter;
        "SnapshotTaken(address,uint256)"(operator?: PromiseOrValue<string> | null, snapshotID?: PromiseOrValue<BigNumberish> | null): SnapshotTakenEventFilter;
        SnapshotTaken(operator?: PromiseOrValue<string> | null, snapshotID?: PromiseOrValue<BigNumberish> | null): SnapshotTakenEventFilter;
        "SnapshotTriggered(address,uint256)"(operator?: PromiseOrValue<string> | null, snapshotId?: null): SnapshotTriggeredEventFilter;
        SnapshotTriggered(operator?: PromiseOrValue<string> | null, snapshotId?: null): SnapshotTriggeredEventFilter;
        "TokenPaused(address)"(operator?: PromiseOrValue<string> | null): TokenPausedEventFilter;
        TokenPaused(operator?: PromiseOrValue<string> | null): TokenPausedEventFilter;
        "TokenUnpaused(address)"(operator?: PromiseOrValue<string> | null): TokenUnpausedEventFilter;
        TokenUnpaused(operator?: PromiseOrValue<string> | null): TokenUnpausedEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        "TransferByPartition(bytes32,address,address,address,uint256,bytes,bytes)"(_fromPartition?: PromiseOrValue<BytesLike> | null, _operator?: null, _from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _value?: null, _data?: null, _operatorData?: null): TransferByPartitionEventFilter;
        TransferByPartition(_fromPartition?: PromiseOrValue<BytesLike> | null, _operator?: null, _from?: PromiseOrValue<string> | null, _to?: PromiseOrValue<string> | null, _value?: null, _data?: null, _operatorData?: null): TransferByPartitionEventFilter;
        "VotingSet(bytes32,uint256,address,uint256,bytes)"(corporateActionId?: null, voteId?: null, operator?: PromiseOrValue<string> | null, recordDate?: PromiseOrValue<BigNumberish> | null, data?: null): VotingSetEventFilter;
        VotingSet(corporateActionId?: null, voteId?: null, operator?: PromiseOrValue<string> | null, recordDate?: PromiseOrValue<BigNumberish> | null, data?: null): VotingSetEventFilter;
    };
    estimateGas: {
        _initialize_equityUSA(_equityDetailsData: IEquity.EquityDetailsDataStruct, _regulationData: RegulationDataStruct, _additionalSecurityData: AdditionalSecurityDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDividends(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDividendsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getDividendsFor(_dividendID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getEquityDetails(overrides?: CallOverrides): Promise<BigNumber>;
        getScheduledBalanceAdjustment(_balanceAdjustmentID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getScheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<BigNumber>;
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<BigNumber>;
        getStaticFunctionSelectors(overrides?: CallOverrides): Promise<BigNumber>;
        getStaticInterfaceIds(overrides?: CallOverrides): Promise<BigNumber>;
        getStaticResolverKey(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalVotingHolders(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVoting(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotingCount(overrides?: CallOverrides): Promise<BigNumber>;
        getVotingFor(_voteID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotingHolders(_voteID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setDividends(_newDividend: IEquity.DividendStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setScheduledBalanceAdjustment(_newBalanceAdjustment: IEquity.ScheduledBalanceAdjustmentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVoting(_newVoting: IEquity.VotingStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _initialize_equityUSA(_equityDetailsData: IEquity.EquityDetailsDataStruct, _regulationData: RegulationDataStruct, _additionalSecurityData: AdditionalSecurityDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDividends(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDividendsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDividendsFor(_dividendID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEquityDetails(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getScheduledBalanceAdjustment(_balanceAdjustmentID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getScheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStaticFunctionSelectors(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStaticInterfaceIds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStaticResolverKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalVotingHolders(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVoting(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotingCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotingFor(_voteID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotingHolders(_voteID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDividends(_newDividend: IEquity.DividendStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setScheduledBalanceAdjustment(_newBalanceAdjustment: IEquity.ScheduledBalanceAdjustmentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVoting(_newVoting: IEquity.VotingStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
