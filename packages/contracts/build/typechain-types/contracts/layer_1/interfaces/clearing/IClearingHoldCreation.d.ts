import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export type HoldStruct = {
    amount: PromiseOrValue<BigNumberish>;
    expirationTimestamp: PromiseOrValue<BigNumberish>;
    escrow: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    data: PromiseOrValue<BytesLike>;
};
export type HoldStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    string
] & {
    amount: BigNumber;
    expirationTimestamp: BigNumber;
    escrow: string;
    to: string;
    data: string;
};
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
    type ClearingHoldCreationDataStruct = {
        amount: PromiseOrValue<BigNumberish>;
        expirationTimestamp: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
        holdEscrow: PromiseOrValue<string>;
        holdExpirationTimestamp: PromiseOrValue<BigNumberish>;
        holdTo: PromiseOrValue<string>;
        holdData: PromiseOrValue<BytesLike>;
        operatorData: PromiseOrValue<BytesLike>;
        operatorType: PromiseOrValue<BigNumberish>;
    };
    type ClearingHoldCreationDataStructOutput = [
        BigNumber,
        BigNumber,
        string,
        string,
        BigNumber,
        string,
        string,
        string,
        number
    ] & {
        amount: BigNumber;
        expirationTimestamp: BigNumber;
        data: string;
        holdEscrow: string;
        holdExpirationTimestamp: BigNumber;
        holdTo: string;
        holdData: string;
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
export interface IClearingHoldCreationInterface extends utils.Interface {
    functions: {
        "clearingCreateHoldByPartition((bytes32,uint256,bytes),(uint256,uint256,address,address,bytes))": FunctionFragment;
        "clearingCreateHoldFromByPartition(((bytes32,uint256,bytes),address,bytes),(uint256,uint256,address,address,bytes))": FunctionFragment;
        "getClearingCreateHoldForByPartition(bytes32,address,uint256)": FunctionFragment;
        "operatorClearingCreateHoldByPartition(((bytes32,uint256,bytes),address,bytes),(uint256,uint256,address,address,bytes))": FunctionFragment;
        "protectedClearingCreateHoldByPartition(((bytes32,uint256,bytes),address,uint256,uint256),(uint256,uint256,address,address,bytes),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "clearingCreateHoldByPartition" | "clearingCreateHoldFromByPartition" | "getClearingCreateHoldForByPartition" | "operatorClearingCreateHoldByPartition" | "protectedClearingCreateHoldByPartition"): FunctionFragment;
    encodeFunctionData(functionFragment: "clearingCreateHoldByPartition", values: [IClearing.ClearingOperationStruct, HoldStruct]): string;
    encodeFunctionData(functionFragment: "clearingCreateHoldFromByPartition", values: [IClearing.ClearingOperationFromStruct, HoldStruct]): string;
    encodeFunctionData(functionFragment: "getClearingCreateHoldForByPartition", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "operatorClearingCreateHoldByPartition", values: [IClearing.ClearingOperationFromStruct, HoldStruct]): string;
    encodeFunctionData(functionFragment: "protectedClearingCreateHoldByPartition", values: [
        IClearing.ProtectedClearingOperationStruct,
        HoldStruct,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "clearingCreateHoldByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearingCreateHoldFromByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClearingCreateHoldForByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorClearingCreateHoldByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protectedClearingCreateHoldByPartition", data: BytesLike): Result;
    events: {};
}
export interface IClearingHoldCreation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IClearingHoldCreationInterface;
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
        clearingCreateHoldByPartition(_clearingOperation: IClearing.ClearingOperationStruct, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        clearingCreateHoldFromByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getClearingCreateHoldForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _clearingId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IClearing.ClearingHoldCreationDataStructOutput
        ] & {
            clearingHoldCreationData_: IClearing.ClearingHoldCreationDataStructOutput;
        }>;
        operatorClearingCreateHoldByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        protectedClearingCreateHoldByPartition(_protectedClearingOperation: IClearing.ProtectedClearingOperationStruct, _hold: HoldStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    clearingCreateHoldByPartition(_clearingOperation: IClearing.ClearingOperationStruct, _hold: HoldStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    clearingCreateHoldFromByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _hold: HoldStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getClearingCreateHoldForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _clearingId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IClearing.ClearingHoldCreationDataStructOutput>;
    operatorClearingCreateHoldByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _hold: HoldStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    protectedClearingCreateHoldByPartition(_protectedClearingOperation: IClearing.ProtectedClearingOperationStruct, _hold: HoldStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        clearingCreateHoldByPartition(_clearingOperation: IClearing.ClearingOperationStruct, _hold: HoldStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            clearingId_: BigNumber;
        }>;
        clearingCreateHoldFromByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _hold: HoldStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            clearingId_: BigNumber;
        }>;
        getClearingCreateHoldForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _clearingId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IClearing.ClearingHoldCreationDataStructOutput>;
        operatorClearingCreateHoldByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _hold: HoldStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            clearingId_: BigNumber;
        }>;
        protectedClearingCreateHoldByPartition(_protectedClearingOperation: IClearing.ProtectedClearingOperationStruct, _hold: HoldStruct, _signature: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            clearingId_: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        clearingCreateHoldByPartition(_clearingOperation: IClearing.ClearingOperationStruct, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        clearingCreateHoldFromByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getClearingCreateHoldForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _clearingId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        operatorClearingCreateHoldByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        protectedClearingCreateHoldByPartition(_protectedClearingOperation: IClearing.ProtectedClearingOperationStruct, _hold: HoldStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        clearingCreateHoldByPartition(_clearingOperation: IClearing.ClearingOperationStruct, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        clearingCreateHoldFromByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getClearingCreateHoldForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _clearingId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operatorClearingCreateHoldByPartition(_clearingOperationFrom: IClearing.ClearingOperationFromStruct, _hold: HoldStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        protectedClearingCreateHoldByPartition(_protectedClearingOperation: IClearing.ProtectedClearingOperationStruct, _hold: HoldStruct, _signature: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
