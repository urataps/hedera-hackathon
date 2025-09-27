import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IERC1644Interface extends utils.Interface {
    functions: {
        "controllerRedeem(address,uint256,bytes,bytes)": FunctionFragment;
        "controllerTransfer(address,address,uint256,bytes,bytes)": FunctionFragment;
        "finalizeControllable()": FunctionFragment;
        "initialize_ERC1644(bool)": FunctionFragment;
        "isControllable()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "controllerRedeem" | "controllerTransfer" | "finalizeControllable" | "initialize_ERC1644" | "isControllable"): FunctionFragment;
    encodeFunctionData(functionFragment: "controllerRedeem", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "controllerTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "finalizeControllable", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize_ERC1644", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "isControllable", values?: undefined): string;
    decodeFunctionResult(functionFragment: "controllerRedeem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controllerTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeControllable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize_ERC1644", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isControllable", data: BytesLike): Result;
    events: {};
}
export interface IERC1644 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC1644Interface;
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
        controllerRedeem(_tokenHolder: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        controllerTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        finalizeControllable(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize_ERC1644(_isControllable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isControllable(overrides?: CallOverrides): Promise<[boolean]>;
    };
    controllerRedeem(_tokenHolder: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    controllerTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    finalizeControllable(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize_ERC1644(_isControllable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isControllable(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        controllerRedeem(_tokenHolder: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operatorData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        controllerTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operatorData: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        finalizeControllable(overrides?: CallOverrides): Promise<void>;
        initialize_ERC1644(_isControllable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        isControllable(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        controllerRedeem(_tokenHolder: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        controllerTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        finalizeControllable(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize_ERC1644(_isControllable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isControllable(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        controllerRedeem(_tokenHolder: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        controllerTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _value: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, _operatorData: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        finalizeControllable(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize_ERC1644(_isControllable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isControllable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
