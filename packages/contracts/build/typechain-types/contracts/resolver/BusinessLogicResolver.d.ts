import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
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
export interface BusinessLogicResolverInterface extends utils.Interface {
    functions: {
        "addSelectorsToBlacklist(bytes32,bytes4[])": FunctionFragment;
        "applyRoles(bytes32[],bool[],address)": FunctionFragment;
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
        "getRoleCountFor(address)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getRoleMembers(bytes32,uint256,uint256)": FunctionFragment;
        "getRolesFor(address,uint256,uint256)": FunctionFragment;
        "getSelectorsBlacklist(bytes32,uint256,uint256)": FunctionFragment;
        "getVersionStatus(uint256)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize_BusinessLogicResolver()": FunctionFragment;
        "isPaused()": FunctionFragment;
        "isResolverProxyConfigurationRegistered(bytes32,uint256)": FunctionFragment;
        "pause()": FunctionFragment;
        "registerBusinessLogics((bytes32,address)[])": FunctionFragment;
        "removeSelectorsFromBlacklist(bytes32,bytes4[])": FunctionFragment;
        "renounceRole(bytes32)": FunctionFragment;
        "resolveBusinessLogicByVersion(bytes32,uint256)": FunctionFragment;
        "resolveLatestBusinessLogic(bytes32)": FunctionFragment;
        "resolveResolverProxyCall(bytes32,uint256,bytes4)": FunctionFragment;
        "resolveSupportsInterface(bytes32,uint256,bytes4)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "unpause()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addSelectorsToBlacklist" | "applyRoles" | "cancelBatchConfiguration" | "checkResolverProxyConfigurationRegistered" | "createBatchConfiguration" | "createConfiguration" | "getBusinessLogicCount" | "getBusinessLogicKeys" | "getConfigurations" | "getConfigurationsLength" | "getFacetAddressByConfigurationIdVersionAndFacetId" | "getFacetAddressesByConfigurationIdAndVersion" | "getFacetByConfigurationIdVersionAndFacetId" | "getFacetIdByConfigurationIdVersionAndSelector" | "getFacetIdsByConfigurationIdAndVersion" | "getFacetSelectorsByConfigurationIdVersionAndFacetId" | "getFacetSelectorsLengthByConfigurationIdVersionAndFacetId" | "getFacetsByConfigurationIdAndVersion" | "getFacetsLengthByConfigurationIdAndVersion" | "getLatestVersion" | "getLatestVersionByConfiguration" | "getRoleCountFor" | "getRoleMemberCount" | "getRoleMembers" | "getRolesFor" | "getSelectorsBlacklist" | "getVersionStatus" | "grantRole" | "hasRole" | "initialize_BusinessLogicResolver" | "isPaused" | "isResolverProxyConfigurationRegistered" | "pause" | "registerBusinessLogics" | "removeSelectorsFromBlacklist" | "renounceRole" | "resolveBusinessLogicByVersion" | "resolveLatestBusinessLogic" | "resolveResolverProxyCall" | "resolveSupportsInterface" | "revokeRole" | "unpause"): FunctionFragment;
    encodeFunctionData(functionFragment: "addSelectorsToBlacklist", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "applyRoles", values: [
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<boolean>[],
        PromiseOrValue<string>
    ]): string;
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
    encodeFunctionData(functionFragment: "getRoleCountFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getRoleMembers", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getRolesFor", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getSelectorsBlacklist", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getVersionStatus", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialize_BusinessLogicResolver", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isResolverProxyConfigurationRegistered", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerBusinessLogics", values: [IBusinessLogicResolver.BusinessLogicRegistryDataStruct[]]): string;
    encodeFunctionData(functionFragment: "removeSelectorsFromBlacklist", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>]): string;
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
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addSelectorsToBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "applyRoles", data: BytesLike): Result;
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
    decodeFunctionResult(functionFragment: "getRoleCountFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMembers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRolesFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSelectorsBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVersionStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize_BusinessLogicResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isResolverProxyConfigurationRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerBusinessLogics", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSelectorsFromBlacklist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveBusinessLogicByVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveLatestBusinessLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveResolverProxyCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolveSupportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    events: {
        "AdjustmentBalanceSet(address,uint256,uint8)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "AuthorizedOperator(address,address)": EventFragment;
        "AuthorizedOperatorByPartition(bytes32,address,address)": EventFragment;
        "BusinessLogicsRegistered(tuple[],uint256)": EventFragment;
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
        "DiamondBatchConfigurationCanceled(bytes32)": EventFragment;
        "DiamondBatchConfigurationCreated(bytes32,tuple[],bool,uint256)": EventFragment;
        "DiamondConfigurationCreated(bytes32,tuple[],uint256)": EventFragment;
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
        "RoleGranted(address,address,bytes32)": EventFragment;
        "RoleRenounced(address,bytes32)": EventFragment;
        "RoleRevoked(address,address,bytes32)": EventFragment;
        "RolesApplied(bytes32[],bool[],address)": EventFragment;
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
    getEvent(nameOrSignatureOrTopic: "BusinessLogicsRegistered"): EventFragment;
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
    getEvent(nameOrSignatureOrTopic: "DiamondBatchConfigurationCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiamondBatchConfigurationCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DiamondConfigurationCreated"): EventFragment;
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
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRenounced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RolesApplied"): EventFragment;
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
export interface BusinessLogicsRegisteredEventObject {
    businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStructOutput[];
    newLatestVersion: BigNumber;
}
export type BusinessLogicsRegisteredEvent = TypedEvent<[
    IBusinessLogicResolver.BusinessLogicRegistryDataStructOutput[],
    BigNumber
], BusinessLogicsRegisteredEventObject>;
export type BusinessLogicsRegisteredEventFilter = TypedEventFilter<BusinessLogicsRegisteredEvent>;
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
export interface RoleGrantedEventObject {
    operator: string;
    account: string;
    role: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRenouncedEventObject {
    account: string;
    role: string;
}
export type RoleRenouncedEvent = TypedEvent<[
    string,
    string
], RoleRenouncedEventObject>;
export type RoleRenouncedEventFilter = TypedEventFilter<RoleRenouncedEvent>;
export interface RoleRevokedEventObject {
    operator: string;
    account: string;
    role: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface RolesAppliedEventObject {
    roles: string[];
    actives: boolean[];
    account: string;
}
export type RolesAppliedEvent = TypedEvent<[
    string[],
    boolean[],
    string
], RolesAppliedEventObject>;
export type RolesAppliedEventFilter = TypedEventFilter<RolesAppliedEvent>;
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
export interface BusinessLogicResolver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BusinessLogicResolverInterface;
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
        applyRoles(_roles: PromiseOrValue<BytesLike>[], _actives: PromiseOrValue<boolean>[], _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        checkResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[void]>;
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
        getRoleCountFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            roleCount_: BigNumber;
        }>;
        getRoleMemberCount(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            memberCount_: BigNumber;
        }>;
        getRoleMembers(_role: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            members_: string[];
        }>;
        getRolesFor(_account: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            roles_: string[];
        }>;
        getSelectorsBlacklist(_configurationId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            selectors_: string[];
        }>;
        getVersionStatus(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[number] & {
            status_: number;
        }>;
        grantRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        initialize_BusinessLogicResolver(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean] & {
            isRegistered_: boolean;
        }>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        registerBusinessLogics(_businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        removeSelectorsFromBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceRole(_role: PromiseOrValue<BytesLike>, overrides?: Overrides & {
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
        revokeRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addSelectorsToBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    applyRoles(_roles: PromiseOrValue<BytesLike>[], _actives: PromiseOrValue<boolean>[], _account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    checkResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
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
    getRoleCountFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getRoleMemberCount(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getRoleMembers(_role: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getRolesFor(_account: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getSelectorsBlacklist(_configurationId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getVersionStatus(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
    grantRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    initialize_BusinessLogicResolver(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    isResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    registerBusinessLogics(_businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    removeSelectorsFromBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceRole(_role: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resolveBusinessLogicByVersion(_businessLogicKey: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    resolveLatestBusinessLogic(_businessLogicKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    resolveResolverProxyCall(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    resolveSupportsInterface(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    revokeRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addSelectorsToBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        applyRoles(_roles: PromiseOrValue<BytesLike>[], _actives: PromiseOrValue<boolean>[], _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
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
        getRoleCountFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMembers(_role: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getRolesFor(_account: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getSelectorsBlacklist(_configurationId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getVersionStatus(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<number>;
        grantRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        hasRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        initialize_BusinessLogicResolver(overrides?: CallOverrides): Promise<boolean>;
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        isResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        pause(overrides?: CallOverrides): Promise<boolean>;
        registerBusinessLogics(_businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStruct[], overrides?: CallOverrides): Promise<void>;
        removeSelectorsFromBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        renounceRole(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        resolveBusinessLogicByVersion(_businessLogicKey: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        resolveLatestBusinessLogic(_businessLogicKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        resolveResolverProxyCall(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        resolveSupportsInterface(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        revokeRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        unpause(overrides?: CallOverrides): Promise<boolean>;
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
        "BusinessLogicsRegistered(tuple[],uint256)"(businessLogics?: null, newLatestVersion?: null): BusinessLogicsRegisteredEventFilter;
        BusinessLogicsRegistered(businessLogics?: null, newLatestVersion?: null): BusinessLogicsRegisteredEventFilter;
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
        "DiamondBatchConfigurationCanceled(bytes32)"(configurationId?: null): DiamondBatchConfigurationCanceledEventFilter;
        DiamondBatchConfigurationCanceled(configurationId?: null): DiamondBatchConfigurationCanceledEventFilter;
        "DiamondBatchConfigurationCreated(bytes32,tuple[],bool,uint256)"(configurationId?: null, facetConfigurations?: null, _isLastBatch?: null, version?: null): DiamondBatchConfigurationCreatedEventFilter;
        DiamondBatchConfigurationCreated(configurationId?: null, facetConfigurations?: null, _isLastBatch?: null, version?: null): DiamondBatchConfigurationCreatedEventFilter;
        "DiamondConfigurationCreated(bytes32,tuple[],uint256)"(configurationId?: null, facetConfigurations?: null, version?: null): DiamondConfigurationCreatedEventFilter;
        DiamondConfigurationCreated(configurationId?: null, facetConfigurations?: null, version?: null): DiamondConfigurationCreatedEventFilter;
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
        "RoleGranted(address,address,bytes32)"(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleGrantedEventFilter;
        RoleGranted(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleGrantedEventFilter;
        "RoleRenounced(address,bytes32)"(account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleRenouncedEventFilter;
        RoleRenounced(account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleRenouncedEventFilter;
        "RoleRevoked(address,address,bytes32)"(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleRevokedEventFilter;
        RoleRevoked(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleRevokedEventFilter;
        "RolesApplied(bytes32[],bool[],address)"(roles?: null, actives?: null, account?: null): RolesAppliedEventFilter;
        RolesApplied(roles?: null, actives?: null, account?: null): RolesAppliedEventFilter;
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
        addSelectorsToBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        applyRoles(_roles: PromiseOrValue<BytesLike>[], _actives: PromiseOrValue<boolean>[], _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        checkResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
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
        getRoleCountFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMembers(_role: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRolesFor(_account: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSelectorsBlacklist(_configurationId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVersionStatus(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize_BusinessLogicResolver(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        registerBusinessLogics(_businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        removeSelectorsFromBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceRole(_role: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resolveBusinessLogicByVersion(_businessLogicKey: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        resolveLatestBusinessLogic(_businessLogicKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        resolveResolverProxyCall(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        resolveSupportsInterface(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        revokeRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addSelectorsToBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        applyRoles(_roles: PromiseOrValue<BytesLike>[], _actives: PromiseOrValue<boolean>[], _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelBatchConfiguration(_configurationId: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        checkResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
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
        getRoleCountFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMembers(_role: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRolesFor(_account: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSelectorsBlacklist(_configurationId: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVersionStatus(_version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize_BusinessLogicResolver(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isResolverProxyConfigurationRegistered(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        registerBusinessLogics(_businessLogics: IBusinessLogicResolver.BusinessLogicRegistryDataStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        removeSelectorsFromBlacklist(_configurationId: PromiseOrValue<BytesLike>, _selectors: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(_role: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resolveBusinessLogicByVersion(_businessLogicKey: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolveLatestBusinessLogic(_businessLogicKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolveResolverProxyCall(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _selector: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolveSupportsInterface(_configurationId: PromiseOrValue<BytesLike>, _version: PromiseOrValue<BigNumberish>, _interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
