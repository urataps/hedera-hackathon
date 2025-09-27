import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export type HoldIdentifierStruct = {
    partition: PromiseOrValue<BytesLike>;
    tokenHolder: PromiseOrValue<string>;
    holdId: PromiseOrValue<BigNumberish>;
};
export type HoldIdentifierStructOutput = [string, string, BigNumber] & {
    partition: string;
    tokenHolder: string;
    holdId: BigNumber;
};
export interface IHoldReadInterface extends utils.Interface {
    functions: {
        "getHeldAmountFor(address)": FunctionFragment;
        "getHeldAmountForByPartition(bytes32,address)": FunctionFragment;
        "getHoldCountForByPartition(bytes32,address)": FunctionFragment;
        "getHoldForByPartition((bytes32,address,uint256))": FunctionFragment;
        "getHoldThirdParty((bytes32,address,uint256))": FunctionFragment;
        "getHoldsIdForByPartition(bytes32,address,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getHeldAmountFor" | "getHeldAmountForByPartition" | "getHoldCountForByPartition" | "getHoldForByPartition" | "getHoldThirdParty" | "getHoldsIdForByPartition"): FunctionFragment;
    encodeFunctionData(functionFragment: "getHeldAmountFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getHeldAmountForByPartition", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getHoldCountForByPartition", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getHoldForByPartition", values: [HoldIdentifierStruct]): string;
    encodeFunctionData(functionFragment: "getHoldThirdParty", values: [HoldIdentifierStruct]): string;
    encodeFunctionData(functionFragment: "getHoldsIdForByPartition", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "getHeldAmountFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHeldAmountForByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHoldCountForByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHoldForByPartition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHoldThirdParty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHoldsIdForByPartition", data: BytesLike): Result;
    events: {};
}
export interface IHoldRead extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IHoldReadInterface;
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
        getHeldAmountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount_: BigNumber;
        }>;
        getHeldAmountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amount_: BigNumber;
        }>;
        getHoldCountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            holdCount_: BigNumber;
        }>;
        getHoldForByPartition(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            string,
            string,
            string,
            number
        ] & {
            amount_: BigNumber;
            expirationTimestamp_: BigNumber;
            escrow_: string;
            destination_: string;
            data_: string;
            operatorData_: string;
            thirdPartyType_: number;
        }>;
        getHoldThirdParty(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<[string] & {
            thirdParty_: string;
        }>;
        getHoldsIdForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            holdsId_: BigNumber[];
        }>;
    };
    getHeldAmountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getHeldAmountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getHoldCountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getHoldForByPartition(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        string,
        number
    ] & {
        amount_: BigNumber;
        expirationTimestamp_: BigNumber;
        escrow_: string;
        destination_: string;
        data_: string;
        operatorData_: string;
        thirdPartyType_: number;
    }>;
    getHoldThirdParty(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<string>;
    getHoldsIdForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    callStatic: {
        getHeldAmountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getHeldAmountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getHoldCountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getHoldForByPartition(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            string,
            string,
            string,
            number
        ] & {
            amount_: BigNumber;
            expirationTimestamp_: BigNumber;
            escrow_: string;
            destination_: string;
            data_: string;
            operatorData_: string;
            thirdPartyType_: number;
        }>;
        getHoldThirdParty(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<string>;
        getHoldsIdForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    };
    filters: {};
    estimateGas: {
        getHeldAmountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getHeldAmountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getHoldCountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getHoldForByPartition(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getHoldThirdParty(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getHoldsIdForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getHeldAmountFor(_tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHeldAmountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHoldCountForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHoldForByPartition(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHoldThirdParty(_holdIdentifier: HoldIdentifierStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHoldsIdForByPartition(_partition: PromiseOrValue<BytesLike>, _tokenHolder: PromiseOrValue<string>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
