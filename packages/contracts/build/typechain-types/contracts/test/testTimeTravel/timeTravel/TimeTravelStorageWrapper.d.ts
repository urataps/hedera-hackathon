import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface TimeTravelStorageWrapperInterface extends utils.Interface {
    functions: {};
    events: {
        "SystemBlocknumberChanged(uint256,uint256)": EventFragment;
        "SystemBlocknumberReset()": EventFragment;
        "SystemTimestampChanged(uint256,uint256)": EventFragment;
        "SystemTimestampReset()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SystemBlocknumberChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SystemBlocknumberReset"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SystemTimestampChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SystemTimestampReset"): EventFragment;
}
export interface SystemBlocknumberChangedEventObject {
    legacySystemNumber: BigNumber;
    newSystemNumber: BigNumber;
}
export type SystemBlocknumberChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], SystemBlocknumberChangedEventObject>;
export type SystemBlocknumberChangedEventFilter = TypedEventFilter<SystemBlocknumberChangedEvent>;
export interface SystemBlocknumberResetEventObject {
}
export type SystemBlocknumberResetEvent = TypedEvent<[
], SystemBlocknumberResetEventObject>;
export type SystemBlocknumberResetEventFilter = TypedEventFilter<SystemBlocknumberResetEvent>;
export interface SystemTimestampChangedEventObject {
    legacySystemTime: BigNumber;
    newSystemTime: BigNumber;
}
export type SystemTimestampChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], SystemTimestampChangedEventObject>;
export type SystemTimestampChangedEventFilter = TypedEventFilter<SystemTimestampChangedEvent>;
export interface SystemTimestampResetEventObject {
}
export type SystemTimestampResetEvent = TypedEvent<[
], SystemTimestampResetEventObject>;
export type SystemTimestampResetEventFilter = TypedEventFilter<SystemTimestampResetEvent>;
export interface TimeTravelStorageWrapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TimeTravelStorageWrapperInterface;
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
        "SystemBlocknumberChanged(uint256,uint256)"(legacySystemNumber?: null, newSystemNumber?: null): SystemBlocknumberChangedEventFilter;
        SystemBlocknumberChanged(legacySystemNumber?: null, newSystemNumber?: null): SystemBlocknumberChangedEventFilter;
        "SystemBlocknumberReset()"(): SystemBlocknumberResetEventFilter;
        SystemBlocknumberReset(): SystemBlocknumberResetEventFilter;
        "SystemTimestampChanged(uint256,uint256)"(legacySystemTime?: null, newSystemTime?: null): SystemTimestampChangedEventFilter;
        SystemTimestampChanged(legacySystemTime?: null, newSystemTime?: null): SystemTimestampChangedEventFilter;
        "SystemTimestampReset()"(): SystemTimestampResetEventFilter;
        SystemTimestampReset(): SystemTimestampResetEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
