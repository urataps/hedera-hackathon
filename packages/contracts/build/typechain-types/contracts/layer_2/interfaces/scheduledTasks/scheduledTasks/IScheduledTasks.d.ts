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
export interface IScheduledTasksInterface extends utils.Interface {
    functions: {
        "getScheduledTasks(uint256,uint256)": FunctionFragment;
        "onScheduledTaskTriggered(uint256,uint256,bytes)": FunctionFragment;
        "scheduledTaskCount()": FunctionFragment;
        "triggerPendingScheduledTasks()": FunctionFragment;
        "triggerScheduledTasks(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getScheduledTasks" | "onScheduledTaskTriggered" | "scheduledTaskCount" | "triggerPendingScheduledTasks" | "triggerScheduledTasks"): FunctionFragment;
    encodeFunctionData(functionFragment: "getScheduledTasks", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "onScheduledTaskTriggered", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "scheduledTaskCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "triggerPendingScheduledTasks", values?: undefined): string;
    encodeFunctionData(functionFragment: "triggerScheduledTasks", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "getScheduledTasks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onScheduledTaskTriggered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scheduledTaskCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "triggerPendingScheduledTasks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "triggerScheduledTasks", data: BytesLike): Result;
    events: {};
}
export interface IScheduledTasks extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IScheduledTasksInterface;
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
        getScheduledTasks(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            ScheduledTasksLib.ScheduledTaskStructOutput[]
        ] & {
            scheduledTask_: ScheduledTasksLib.ScheduledTaskStructOutput[];
        }>;
        onScheduledTaskTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        scheduledTaskCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        triggerPendingScheduledTasks(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        triggerScheduledTasks(_max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getScheduledTasks(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ScheduledTasksLib.ScheduledTaskStructOutput[]>;
    onScheduledTaskTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    scheduledTaskCount(overrides?: CallOverrides): Promise<BigNumber>;
    triggerPendingScheduledTasks(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    triggerScheduledTasks(_max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getScheduledTasks(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ScheduledTasksLib.ScheduledTaskStructOutput[]>;
        onScheduledTaskTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        scheduledTaskCount(overrides?: CallOverrides): Promise<BigNumber>;
        triggerPendingScheduledTasks(overrides?: CallOverrides): Promise<BigNumber>;
        triggerScheduledTasks(_max: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getScheduledTasks(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        onScheduledTaskTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        scheduledTaskCount(overrides?: CallOverrides): Promise<BigNumber>;
        triggerPendingScheduledTasks(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        triggerScheduledTasks(_max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getScheduledTasks(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onScheduledTaskTriggered(_pos: PromiseOrValue<BigNumberish>, _scheduledTasksLength: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        scheduledTaskCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        triggerPendingScheduledTasks(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        triggerScheduledTasks(_max: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
