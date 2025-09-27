import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace IERC20Votes {
    type CheckpointStruct = {
        fromBlock: PromiseOrValue<BigNumberish>;
        votes: PromiseOrValue<BigNumberish>;
    };
    type CheckpointStructOutput = [BigNumber, BigNumber] & {
        fromBlock: BigNumber;
        votes: BigNumber;
    };
}
export interface IERC20VotesInterface extends utils.Interface {
    functions: {
        "CLOCK_MODE()": FunctionFragment;
        "checkpoints(address,uint256)": FunctionFragment;
        "clock()": FunctionFragment;
        "delegate(address)": FunctionFragment;
        "delegates(address)": FunctionFragment;
        "getPastTotalSupply(uint256)": FunctionFragment;
        "getPastVotes(address,uint256)": FunctionFragment;
        "getVotes(address)": FunctionFragment;
        "initialize_ERC20Votes(bool)": FunctionFragment;
        "isActivated()": FunctionFragment;
        "numCheckpoints(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CLOCK_MODE" | "checkpoints" | "clock" | "delegate" | "delegates" | "getPastTotalSupply" | "getPastVotes" | "getVotes" | "initialize_ERC20Votes" | "isActivated" | "numCheckpoints"): FunctionFragment;
    encodeFunctionData(functionFragment: "CLOCK_MODE", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkpoints", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "clock", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegate", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "delegates", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getPastTotalSupply", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getPastVotes", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getVotes", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initialize_ERC20Votes", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "isActivated", values?: undefined): string;
    encodeFunctionData(functionFragment: "numCheckpoints", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "CLOCK_MODE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPastTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPastVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize_ERC20Votes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isActivated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numCheckpoints", data: BytesLike): Result;
    events: {};
}
export interface IERC20Votes extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC20VotesInterface;
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
        CLOCK_MODE(overrides?: CallOverrides): Promise<[string]>;
        checkpoints(_account: PromiseOrValue<string>, _pos: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[IERC20Votes.CheckpointStructOutput]>;
        clock(overrides?: CallOverrides): Promise<[number]>;
        delegate(delegatee: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
        getPastTotalSupply(timepoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPastVotes(account: PromiseOrValue<string>, timepoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize_ERC20Votes(_activated: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isActivated(overrides?: CallOverrides): Promise<[boolean]>;
        numCheckpoints(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    CLOCK_MODE(overrides?: CallOverrides): Promise<string>;
    checkpoints(_account: PromiseOrValue<string>, _pos: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IERC20Votes.CheckpointStructOutput>;
    clock(overrides?: CallOverrides): Promise<number>;
    delegate(delegatee: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    getPastTotalSupply(timepoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getPastVotes(account: PromiseOrValue<string>, timepoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    initialize_ERC20Votes(_activated: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isActivated(overrides?: CallOverrides): Promise<boolean>;
    numCheckpoints(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        CLOCK_MODE(overrides?: CallOverrides): Promise<string>;
        checkpoints(_account: PromiseOrValue<string>, _pos: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IERC20Votes.CheckpointStructOutput>;
        clock(overrides?: CallOverrides): Promise<number>;
        delegate(delegatee: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
        getPastTotalSupply(timepoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPastVotes(account: PromiseOrValue<string>, timepoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize_ERC20Votes(_activated: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        isActivated(overrides?: CallOverrides): Promise<boolean>;
        numCheckpoints(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        CLOCK_MODE(overrides?: CallOverrides): Promise<BigNumber>;
        checkpoints(_account: PromiseOrValue<string>, _pos: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        clock(overrides?: CallOverrides): Promise<BigNumber>;
        delegate(delegatee: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getPastTotalSupply(timepoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getPastVotes(account: PromiseOrValue<string>, timepoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initialize_ERC20Votes(_activated: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isActivated(overrides?: CallOverrides): Promise<BigNumber>;
        numCheckpoints(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        CLOCK_MODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkpoints(_account: PromiseOrValue<string>, _pos: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegate(delegatee: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        delegates(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPastTotalSupply(timepoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPastVotes(account: PromiseOrValue<string>, timepoint: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize_ERC20Votes(_activated: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isActivated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numCheckpoints(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
