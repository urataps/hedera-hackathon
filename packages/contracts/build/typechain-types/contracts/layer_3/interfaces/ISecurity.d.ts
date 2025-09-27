import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export type RegulationDataStruct = {
    regulationType: PromiseOrValue<BigNumberish>;
    regulationSubType: PromiseOrValue<BigNumberish>;
    dealSize: PromiseOrValue<BigNumberish>;
    accreditedInvestors: PromiseOrValue<BigNumberish>;
    maxNonAccreditedInvestors: PromiseOrValue<BigNumberish>;
    manualInvestorVerification: PromiseOrValue<BigNumberish>;
    internationalInvestors: PromiseOrValue<BigNumberish>;
    resaleHoldPeriod: PromiseOrValue<BigNumberish>;
};
export type RegulationDataStructOutput = [
    number,
    number,
    BigNumber,
    number,
    BigNumber,
    number,
    number,
    number
] & {
    regulationType: number;
    regulationSubType: number;
    dealSize: BigNumber;
    accreditedInvestors: number;
    maxNonAccreditedInvestors: BigNumber;
    manualInvestorVerification: number;
    internationalInvestors: number;
    resaleHoldPeriod: number;
};
export type AdditionalSecurityDataStruct = {
    countriesControlListType: PromiseOrValue<boolean>;
    listOfCountries: PromiseOrValue<string>;
    info: PromiseOrValue<string>;
};
export type AdditionalSecurityDataStructOutput = [boolean, string, string] & {
    countriesControlListType: boolean;
    listOfCountries: string;
    info: string;
};
export declare namespace ISecurity {
    type SecurityRegulationDataStruct = {
        regulationData: RegulationDataStruct;
        additionalSecurityData: AdditionalSecurityDataStruct;
    };
    type SecurityRegulationDataStructOutput = [
        RegulationDataStructOutput,
        AdditionalSecurityDataStructOutput
    ] & {
        regulationData: RegulationDataStructOutput;
        additionalSecurityData: AdditionalSecurityDataStructOutput;
    };
}
export interface ISecurityInterface extends utils.Interface {
    functions: {
        "getSecurityHolders(uint256,uint256)": FunctionFragment;
        "getSecurityRegulationData()": FunctionFragment;
        "getTotalSecurityHolders()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getSecurityHolders" | "getSecurityRegulationData" | "getTotalSecurityHolders"): FunctionFragment;
    encodeFunctionData(functionFragment: "getSecurityHolders", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSecurityRegulationData", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSecurityHolders", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getSecurityHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSecurityRegulationData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSecurityHolders", data: BytesLike): Result;
    events: {};
}
export interface ISecurity extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISecurityInterface;
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
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            holders_: string[];
        }>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<[
            ISecurity.SecurityRegulationDataStructOutput
        ] & {
            securityRegulationData_: ISecurity.SecurityRegulationDataStructOutput;
        }>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getSecurityRegulationData(overrides?: CallOverrides): Promise<ISecurity.SecurityRegulationDataStructOutput>;
    getTotalSecurityHolders(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<ISecurity.SecurityRegulationDataStructOutput>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
