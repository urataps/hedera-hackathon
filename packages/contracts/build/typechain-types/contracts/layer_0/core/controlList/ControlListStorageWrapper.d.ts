import type { BaseContract, BigNumber, BytesLike, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface ControlListStorageWrapperInterface extends utils.Interface {
    functions: {};
    events: {
        "PartitionsProtected(address)": EventFragment;
        "PartitionsUnProtected(address)": EventFragment;
        "ProtectedRedeemFrom(bytes32,address,address,uint256,uint256,uint256,bytes)": EventFragment;
        "ProtectedTransferFrom(bytes32,address,address,address,uint256,uint256,uint256,bytes)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PartitionsProtected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PartitionsUnProtected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtectedRedeemFrom"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtectedTransferFrom"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
}
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
export interface ControlListStorageWrapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ControlListStorageWrapperInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "PartitionsProtected(address)"(operator?: PromiseOrValue<string> | null): PartitionsProtectedEventFilter;
        PartitionsProtected(operator?: PromiseOrValue<string> | null): PartitionsProtectedEventFilter;
        "PartitionsUnProtected(address)"(operator?: PromiseOrValue<string> | null): PartitionsUnProtectedEventFilter;
        PartitionsUnProtected(operator?: PromiseOrValue<string> | null): PartitionsUnProtectedEventFilter;
        "ProtectedRedeemFrom(bytes32,address,address,uint256,uint256,uint256,bytes)"(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, value?: null, deadline?: null, nounce?: null, signature?: null): ProtectedRedeemFromEventFilter;
        ProtectedRedeemFrom(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, value?: null, deadline?: null, nounce?: null, signature?: null): ProtectedRedeemFromEventFilter;
        "ProtectedTransferFrom(bytes32,address,address,address,uint256,uint256,uint256,bytes)"(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: null, value?: null, deadline?: null, nounce?: null, signature?: null): ProtectedTransferFromEventFilter;
        ProtectedTransferFrom(partition?: PromiseOrValue<BytesLike> | null, operator?: PromiseOrValue<string> | null, from?: PromiseOrValue<string> | null, to?: null, value?: null, deadline?: null, nounce?: null, signature?: null): ProtectedTransferFromEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: PromiseOrValue<BytesLike> | null, previousAdminRole?: PromiseOrValue<BytesLike> | null, newAdminRole?: PromiseOrValue<BytesLike> | null): RoleAdminChangedEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
