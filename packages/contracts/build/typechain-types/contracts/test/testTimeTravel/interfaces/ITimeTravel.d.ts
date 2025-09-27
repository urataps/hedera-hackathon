import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface ITimeTravelInterface extends utils.Interface {
    functions: {
        "blockTimestamp()": FunctionFragment;
        "changeSystemBlocknumber(uint256)": FunctionFragment;
        "changeSystemTimestamp(uint256)": FunctionFragment;
        "resetSystemBlocknumber()": FunctionFragment;
        "resetSystemTimestamp()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "blockTimestamp" | "changeSystemBlocknumber" | "changeSystemTimestamp" | "resetSystemBlocknumber" | "resetSystemTimestamp"): FunctionFragment;
    encodeFunctionData(functionFragment: "blockTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeSystemBlocknumber", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "changeSystemTimestamp", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "resetSystemBlocknumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "resetSystemTimestamp", values?: undefined): string;
    decodeFunctionResult(functionFragment: "blockTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSystemBlocknumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeSystemTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetSystemBlocknumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetSystemTimestamp", data: BytesLike): Result;
    events: {};
}
export interface ITimeTravel extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITimeTravelInterface;
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
        blockTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;
        changeSystemBlocknumber(_newSystemBlocknumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        changeSystemTimestamp(_newSystemTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resetSystemBlocknumber(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resetSystemTimestamp(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    blockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    changeSystemBlocknumber(_newSystemBlocknumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    changeSystemTimestamp(_newSystemTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resetSystemBlocknumber(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resetSystemTimestamp(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        blockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        changeSystemBlocknumber(_newSystemBlocknumber: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        changeSystemTimestamp(_newSystemTime: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        resetSystemBlocknumber(overrides?: CallOverrides): Promise<void>;
        resetSystemTimestamp(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        blockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        changeSystemBlocknumber(_newSystemBlocknumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        changeSystemTimestamp(_newSystemTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resetSystemBlocknumber(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resetSystemTimestamp(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        blockTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeSystemBlocknumber(_newSystemBlocknumber: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        changeSystemTimestamp(_newSystemTime: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resetSystemBlocknumber(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resetSystemTimestamp(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
