import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface MockedExternalPauseInterface extends utils.Interface {
    functions: {
        "isPaused()": FunctionFragment;
        "setPaused(bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isPaused" | "setPaused"): FunctionFragment;
    encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPaused", values: [PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
    events: {
        "PausedStateChanged(bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PausedStateChanged"): EventFragment;
}
export interface PausedStateChangedEventObject {
    isPaused: boolean;
}
export type PausedStateChangedEvent = TypedEvent<[
    boolean
], PausedStateChangedEventObject>;
export type PausedStateChangedEventFilter = TypedEventFilter<PausedStateChangedEvent>;
export interface MockedExternalPause extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockedExternalPauseInterface;
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
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        setPaused(paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    setPaused(paused: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        setPaused(paused: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "PausedStateChanged(bool)"(isPaused?: null): PausedStateChangedEventFilter;
        PausedStateChanged(isPaused?: null): PausedStateChangedEventFilter;
    };
    estimateGas: {
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        setPaused(paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPaused(paused: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
