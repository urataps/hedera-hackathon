import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface TRexIAccessControlInterface extends utils.Interface {
    functions: {
        "applyRoles(bytes32[],bool[],address)": FunctionFragment;
        "getRoleCountFor(address)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getRoleMembers(bytes32,uint256,uint256)": FunctionFragment;
        "getRolesFor(address,uint256,uint256)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "renounceRole(bytes32)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "applyRoles" | "getRoleCountFor" | "getRoleMemberCount" | "getRoleMembers" | "getRolesFor" | "grantRole" | "hasRole" | "renounceRole" | "revokeRole"): FunctionFragment;
    encodeFunctionData(functionFragment: "applyRoles", values: [
        PromiseOrValue<BytesLike>[],
        PromiseOrValue<boolean>[],
        PromiseOrValue<string>
    ]): string;
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
    encodeFunctionData(functionFragment: "grantRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "applyRoles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleCountFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMembers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRolesFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    events: {
        "RoleGranted(address,address,bytes32)": EventFragment;
        "RoleRenounced(address,bytes32)": EventFragment;
        "RoleRevoked(address,address,bytes32)": EventFragment;
        "RolesApplied(bytes32[],bool[],address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRenounced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RolesApplied"): EventFragment;
}
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
export interface TRexIAccessControl extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TRexIAccessControlInterface;
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
        applyRoles(_roles: PromiseOrValue<BytesLike>[], _actives: PromiseOrValue<boolean>[], _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
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
        grantRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hasRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        renounceRole(_role: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokeRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    applyRoles(_roles: PromiseOrValue<BytesLike>[], _actives: PromiseOrValue<boolean>[], _account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getRoleCountFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getRoleMemberCount(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getRoleMembers(_role: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getRolesFor(_account: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    grantRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hasRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    renounceRole(_role: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokeRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        applyRoles(_roles: PromiseOrValue<BytesLike>[], _actives: PromiseOrValue<boolean>[], _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        getRoleCountFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMembers(_role: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getRolesFor(_account: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        grantRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        hasRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        renounceRole(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        revokeRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "RoleGranted(address,address,bytes32)"(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleGrantedEventFilter;
        RoleGranted(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleGrantedEventFilter;
        "RoleRenounced(address,bytes32)"(account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleRenouncedEventFilter;
        RoleRenounced(account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleRenouncedEventFilter;
        "RoleRevoked(address,address,bytes32)"(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleRevokedEventFilter;
        RoleRevoked(operator?: PromiseOrValue<string> | null, account?: PromiseOrValue<string> | null, role?: PromiseOrValue<BytesLike> | null): RoleRevokedEventFilter;
        "RolesApplied(bytes32[],bool[],address)"(roles?: null, actives?: null, account?: null): RolesAppliedEventFilter;
        RolesApplied(roles?: null, actives?: null, account?: null): RolesAppliedEventFilter;
    };
    estimateGas: {
        applyRoles(_roles: PromiseOrValue<BytesLike>[], _actives: PromiseOrValue<boolean>[], _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getRoleCountFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMembers(_role: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getRolesFor(_account: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hasRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(_role: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokeRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        applyRoles(_roles: PromiseOrValue<BytesLike>[], _actives: PromiseOrValue<boolean>[], _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getRoleCountFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(_role: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMembers(_role: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRolesFor(_account: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(_role: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(_role: PromiseOrValue<BytesLike>, _account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
