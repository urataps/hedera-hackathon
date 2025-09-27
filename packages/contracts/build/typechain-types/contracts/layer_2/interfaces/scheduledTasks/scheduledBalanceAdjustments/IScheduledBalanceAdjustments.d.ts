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
export interface IScheduledBalanceAdjustmentsInterface extends utils.Interface {
    functions: {
        "getScheduledBalanceAdjustments(uint256,uint256)": FunctionFragment;
        "onScheduledBalanceAdjustmentTriggered(uint256,uint256,bytes)": FunctionFragment;
        "scheduledBalanceAdjustmentCount()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getScheduledBalanceAdjustments" | "onScheduledBalanceAdjustmentTriggered" | "scheduledBalanceAdjustmentCount"): FunctionFragment;
    encodeFunctionData(functionFragment: "getScheduledBalanceAdjustments", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "onScheduledBalanceAdjustmentTriggered", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "scheduledBalanceAdjustmentCount", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getScheduledBalanceAdjustments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onScheduledBalanceAdjustmentTriggered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scheduledBalanceAdjustmentCount", data: BytesLike): Result;
    events: {};
}
export interface IScheduledBalanceAdjustments extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IScheduledBalanceAdjustmentsInterface;
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
        getScheduledBalanceAdjustments(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            ScheduledTasksLib.ScheduledTaskStructOutput[]
        ] & {
            scheduledBalanceAdjustment_: ScheduledTasksLib.ScheduledTaskStructOutput[];
        }>;
        onScheduledBalanceAdjustmentTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getScheduledBalanceAdjustments(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ScheduledTasksLib.ScheduledTaskStructOutput[]>;
    onScheduledBalanceAdjustmentTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getScheduledBalanceAdjustments(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ScheduledTasksLib.ScheduledTaskStructOutput[]>;
        onScheduledBalanceAdjustmentTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        scheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getScheduledBalanceAdjustments(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        onScheduledBalanceAdjustmentTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getScheduledBalanceAdjustments(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onScheduledBalanceAdjustmentTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
