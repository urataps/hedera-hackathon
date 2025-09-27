import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace IClearing {
    type ClearingOperationStruct = {
        partition: PromiseOrValue<BytesLike>;
        expirationTimestamp: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type ClearingOperationStructOutput = [string, BigNumber, string] & {
        partition: string;
        expirationTimestamp: BigNumber;
        data: string;
    };
    type ClearingOperationFromStruct = {
        clearingOperation: IClearing.ClearingOperationStruct;
        from: PromiseOrValue<string>;
        operatorData: PromiseOrValue<BytesLike>;
    };
    type ClearingOperationFromStructOutput = [
        IClearing.ClearingOperationStructOutput,
        string,
        string
    ] & {
        clearingOperation: IClearing.ClearingOperationStructOutput;
        from: string;
        operatorData: string;
    };
    type ClearingRedeemDataStruct = {
        amount: PromiseOrValue<BigNumberish>;
        expirationTimestamp: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
        operatorData: PromiseOrValue<BytesLike>;
        operatorType: PromiseOrValue<BigNumberish>;
    };
    type ClearingRedeemDataStructOutput = [
        BigNumber,
        BigNumber,
        string,
        string,
        number
    ] & {
        amount: BigNumber;
        expirationTimestamp: BigNumber;
        data: string;
        operatorData: string;
        operatorType: number;
    };
    type ProtectedClearingOperationStruct = {
        clearingOperation: IClearing.ClearingOperationStruct;
        from: PromiseOrValue<string>;
        deadline: PromiseOrValue<BigNumberish>;
        nonce: PromiseOrValue<BigNumberish>;
    };
    type ProtectedClearingOperationStructOutput = [
        IClearing.ClearingOperationStructOutput,
        string,
        BigNumber,
        BigNumber
    ] & {
        clearingOperation: IClearing.ClearingOperationStructOutput;
        from: string;
        deadline: BigNumber;
        nonce: BigNumber;
    };
}
export interface IClearingRedeemInterface extends utils.Interface {
    functions: {
        "clearingRedeemByPartition((bytes32,uint256,bytes),uint256)": FunctionFragment;
        "clearingRedeemFromByPartition(((bytes32,uint256,bytes),address,bytes),uint256)": FunctionFragment;
        "getClearingRedeemForByPartition(bytes32,address,uint256)": FunctionFragment;
        "operatorClearingRedeemByPartition(((bytes32,uint256,bytes),address,bytes),uint256)": FunctionFragment;
        "protectedClearingRedeemByPartition(((bytes32,uint256,bytes),address,uint256,uint256),uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "clearingRedeemByPartition" | "clearingRedeemFromByPartition" | "getClearingRedeemForByPartition" | "operatorClearingRedeemByPartition" | "protectedClearingRedeemByPartition"): FunctionFragment;
    encodeFunctionData(functionFragment: "clearingRedeemByPartition", values: [IClearing.ClearingOperationStruct, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "clearingRedeemFromByPartition", values: [
        IClearing.ClearingOperationFromStruct,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getClearingRedeemForByPartition", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "operatorClearingRedeemByPartition", values: [
        IClearing.ClearingOperationFromStruct,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "protectedClearingRedeemByPartition", values: [
        IClearing.ProtectedClearingOperationStruct,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "clearingRedeemByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearingRedeemFromByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClearingRedeemForByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorClearingRedeemByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protectedClearingRedeemByPartition", data: BytesLike): Result;
    events: {};
}
export interface IClearingRedeem extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IClearingRedeemInterface;
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
        clearingRedeemByPartition(_clearingOperation: IClearing.ClearingOperationStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        clearingRedeemFromByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getClearingRedeemForByPartition(partition: PromiseOrValue<BytesLike>, tokenHolder: PromiseOrValue<string>, clearingId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IClearing.ClearingRedeemDataStructOutput
        ] & {
            clearingRedeemData_: IClearing.ClearingRedeemDataStructOutput;
        }>;
        operatorClearingRedeemByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        protectedClearingRedeemByPartition(_protectedClearingOperation: IClearing.ProtectedClearingOperationStruct, _amount: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    clearingRedeemByPartition(_clearingOperation: IClearing.ClearingOperationStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    clearingRedeemFromByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getClearingRedeemForByPartition(partition: PromiseOrValue<BytesLike>, tokenHolder: PromiseOrValue<string>, clearingId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IClearing.ClearingRedeemDataStructOutput>;
    operatorClearingRedeemByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    protectedClearingRedeemByPartition(_protectedClearingOperation: IClearing.ProtectedClearingOperationStruct, _amount: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        clearingRedeemByPartition(_clearingOperation: IClearing.ClearingOperationStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            clearingId_: BigNumber;
        }>;
        clearingRedeemFromByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            clearingId_: BigNumber;
        }>;
        getClearingRedeemForByPartition(partition: PromiseOrValue<BytesLike>, tokenHolder: PromiseOrValue<string>, clearingId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IClearing.ClearingRedeemDataStructOutput>;
        operatorClearingRedeemByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            clearingId_: BigNumber;
        }>;
        protectedClearingRedeemByPartition(_protectedClearingOperation: IClearing.ProtectedClearingOperationStruct, _amount: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            clearingId_: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        clearingRedeemByPartition(_clearingOperation: IClearing.ClearingOperationStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        clearingRedeemFromByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getClearingRedeemForByPartition(partition: PromiseOrValue<BytesLike>, tokenHolder: PromiseOrValue<string>, clearingId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        operatorClearingRedeemByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        protectedClearingRedeemByPartition(_protectedClearingOperation: IClearing.ProtectedClearingOperationStruct, _amount: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        clearingRedeemByPartition(_clearingOperation: IClearing.ClearingOperationStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        clearingRedeemFromByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getClearingRedeemForByPartition(partition: PromiseOrValue<BytesLike>, tokenHolder: PromiseOrValue<string>, clearingId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operatorClearingRedeemByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        protectedClearingRedeemByPartition(_protectedClearingOperation: IClearing.ProtectedClearingOperationStruct, _amount: PromiseOrValue<BigNumberish>, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
