import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export declare namespace ScheduledTasksLib {
    type ScheduledTaskStruct = {
        scheduledTimestamp: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type ScheduledTaskStructOutput = [BigNumber, string] & {
        scheduledTimestamp: BigNumber;
        data: string;
    };
}
export interface IScheduledSnapshotsInterface extends utils.Interface {
    functions: {
        "getScheduledSnapshots(uint256,uint256)": FunctionFragment;
        "onScheduledSnapshotTriggered(uint256,uint256,bytes)": FunctionFragment;
        "scheduledSnapshotCount()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getScheduledSnapshots" | "onScheduledSnapshotTriggered" | "scheduledSnapshotCount"): FunctionFragment;
    encodeFunctionData(functionFragment: "getScheduledSnapshots", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "onScheduledSnapshotTriggered", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "scheduledSnapshotCount", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getScheduledSnapshots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onScheduledSnapshotTriggered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scheduledSnapshotCount", data: BytesLike): Result;
    events: {};
}
export interface IScheduledSnapshots extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IScheduledSnapshotsInterface;
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
        getScheduledSnapshots(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            ScheduledTasksLib.ScheduledTaskStructOutput[]
        ] & {
            scheduledSnapshot_: ScheduledTasksLib.ScheduledTaskStructOutput[];
        }>;
        onScheduledSnapshotTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scheduledSnapshotCount(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getScheduledSnapshots(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ScheduledTasksLib.ScheduledTaskStructOutput[]>;
    onScheduledSnapshotTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scheduledSnapshotCount(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getScheduledSnapshots(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ScheduledTasksLib.ScheduledTaskStructOutput[]>;
        onScheduledSnapshotTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        scheduledSnapshotCount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getScheduledSnapshots(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        onScheduledSnapshotTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scheduledSnapshotCount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getScheduledSnapshots(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onScheduledSnapshotTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scheduledSnapshotCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
