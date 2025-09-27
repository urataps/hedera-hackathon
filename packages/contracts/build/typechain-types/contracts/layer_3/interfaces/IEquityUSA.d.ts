import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export declare namespace IEquity {
    type EquityDetailsDataStruct = {
        votingRight: PromiseOrValue<boolean>;
        informationRight: PromiseOrValue<boolean>;
        liquidationRight: PromiseOrValue<boolean>;
        subscriptionRight: PromiseOrValue<boolean>;
        conversionRight: PromiseOrValue<boolean>;
        redemptionRight: PromiseOrValue<boolean>;
        putRight: PromiseOrValue<boolean>;
        dividendRight: PromiseOrValue<BigNumberish>;
        currency: PromiseOrValue<BytesLike>;
        nominalValue: PromiseOrValue<BigNumberish>;
    };
    type EquityDetailsDataStructOutput = [
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        number,
        string,
        BigNumber
    ] & {
        votingRight: boolean;
        informationRight: boolean;
        liquidationRight: boolean;
        subscriptionRight: boolean;
        conversionRight: boolean;
        redemptionRight: boolean;
        putRight: boolean;
        dividendRight: number;
        currency: string;
        nominalValue: BigNumber;
    };
    type DividendStruct = {
        recordDate: PromiseOrValue<BigNumberish>;
        executionDate: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
    };
    type DividendStructOutput = [BigNumber, BigNumber, BigNumber] & {
        recordDate: BigNumber;
        executionDate: BigNumber;
        amount: BigNumber;
    };
    type RegisteredDividendStruct = {
        dividend: IEquity.DividendStruct;
        snapshotId: PromiseOrValue<BigNumberish>;
    };
    type RegisteredDividendStructOutput = [
        IEquity.DividendStructOutput,
        BigNumber
    ] & {
        dividend: IEquity.DividendStructOutput;
        snapshotId: BigNumber;
    };
    type DividendForStruct = {
        tokenBalance: PromiseOrValue<BigNumberish>;
        amount: PromiseOrValue<BigNumberish>;
        recordDate: PromiseOrValue<BigNumberish>;
        executionDate: PromiseOrValue<BigNumberish>;
        decimals: PromiseOrValue<BigNumberish>;
        recordDateReached: PromiseOrValue<boolean>;
    };
    type DividendForStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
    ] & {
        tokenBalance: BigNumber;
        amount: BigNumber;
        recordDate: BigNumber;
        executionDate: BigNumber;
        decimals: number;
        recordDateReached: boolean;
    };
    type ScheduledBalanceAdjustmentStruct = {
        executionDate: PromiseOrValue<BigNumberish>;
        factor: PromiseOrValue<BigNumberish>;
        decimals: PromiseOrValue<BigNumberish>;
    };
    type ScheduledBalanceAdjustmentStructOutput = [
        BigNumber,
        BigNumber,
        number
    ] & {
        executionDate: BigNumber;
        factor: BigNumber;
        decimals: number;
    };
    type VotingStruct = {
        recordDate: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
    };
    type VotingStructOutput = [BigNumber, string] & {
        recordDate: BigNumber;
        data: string;
    };
    type RegisteredVotingStruct = {
        voting: IEquity.VotingStruct;
        snapshotId: PromiseOrValue<BigNumberish>;
    };
    type RegisteredVotingStructOutput = [
        IEquity.VotingStructOutput,
        BigNumber
    ] & {
        voting: IEquity.VotingStructOutput;
        snapshotId: BigNumber;
    };
    type VotingForStruct = {
        tokenBalance: PromiseOrValue<BigNumberish>;
        recordDate: PromiseOrValue<BigNumberish>;
        data: PromiseOrValue<BytesLike>;
        decimals: PromiseOrValue<BigNumberish>;
        recordDateReached: PromiseOrValue<boolean>;
    };
    type VotingForStructOutput = [
        BigNumber,
        BigNumber,
        string,
        number,
        boolean
    ] & {
        tokenBalance: BigNumber;
        recordDate: BigNumber;
        data: string;
        decimals: number;
        recordDateReached: boolean;
    };
}
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
export interface IEquityUSAInterface extends utils.Interface {
    functions: {
        "_initialize_equityUSA((bool,bool,bool,bool,bool,bool,bool,uint8,bytes3,uint256),(uint8,uint8,uint256,uint8,uint256,uint8,uint8,uint8),(bool,string,string))": FunctionFragment;
        "getDividendHolders(uint256,uint256,uint256)": FunctionFragment;
        "getDividends(uint256)": FunctionFragment;
        "getDividendsCount()": FunctionFragment;
        "getDividendsFor(uint256,address)": FunctionFragment;
        "getEquityDetails()": FunctionFragment;
        "getScheduledBalanceAdjustment(uint256)": FunctionFragment;
        "getScheduledBalanceAdjustmentCount()": FunctionFragment;
        "getSecurityHolders(uint256,uint256)": FunctionFragment;
        "getSecurityRegulationData()": FunctionFragment;
        "getTotalDividendHolders(uint256)": FunctionFragment;
        "getTotalSecurityHolders()": FunctionFragment;
        "getTotalVotingHolders(uint256)": FunctionFragment;
        "getVoting(uint256)": FunctionFragment;
        "getVotingCount()": FunctionFragment;
        "getVotingFor(uint256,address)": FunctionFragment;
        "getVotingHolders(uint256,uint256,uint256)": FunctionFragment;
        "setDividends((uint256,uint256,uint256))": FunctionFragment;
        "setScheduledBalanceAdjustment((uint256,uint256,uint8))": FunctionFragment;
        "setVoting((uint256,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_initialize_equityUSA" | "getDividendHolders" | "getDividends" | "getDividendsCount" | "getDividendsFor" | "getEquityDetails" | "getScheduledBalanceAdjustment" | "getScheduledBalanceAdjustmentCount" | "getSecurityHolders" | "getSecurityRegulationData" | "getTotalDividendHolders" | "getTotalSecurityHolders" | "getTotalVotingHolders" | "getVoting" | "getVotingCount" | "getVotingFor" | "getVotingHolders" | "setDividends" | "setScheduledBalanceAdjustment" | "setVoting"): FunctionFragment;
    encodeFunctionData(functionFragment: "_initialize_equityUSA", values: [
        IEquity.EquityDetailsDataStruct,
        RegulationDataStruct,
        AdditionalSecurityDataStruct
    ]): string;
    encodeFunctionData(functionFragment: "getDividendHolders", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getDividends", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getDividendsCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDividendsFor", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getEquityDetails", values?: undefined): string;
    encodeFunctionData(functionFragment: "getScheduledBalanceAdjustment", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getScheduledBalanceAdjustmentCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSecurityHolders", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSecurityRegulationData", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalDividendHolders", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getTotalSecurityHolders", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalVotingHolders", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getVoting", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getVotingCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getVotingFor", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getVotingHolders", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setDividends", values: [IEquity.DividendStruct]): string;
    encodeFunctionData(functionFragment: "setScheduledBalanceAdjustment", values: [IEquity.ScheduledBalanceAdjustmentStruct]): string;
    encodeFunctionData(functionFragment: "setVoting", values: [IEquity.VotingStruct]): string;
    decodeFunctionResult(functionFragment: "_initialize_equityUSA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDividendHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDividends", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDividendsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDividendsFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEquityDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getScheduledBalanceAdjustment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getScheduledBalanceAdjustmentCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSecurityHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSecurityRegulationData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalDividendHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSecurityHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalVotingHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVoting", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotingCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotingFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotingHolders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDividends", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setScheduledBalanceAdjustment", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVoting", data: BytesLike): Result;
    events: {};
}
export interface IEquityUSA extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IEquityUSAInterface;
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
        _initialize_equityUSA(_equityDetailsData: IEquity.EquityDetailsDataStruct, _regulationData: RegulationDataStruct, _additionalSecurityData: AdditionalSecurityDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            holders_: string[];
        }>;
        getDividends(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IEquity.RegisteredDividendStructOutput
        ] & {
            registeredDividend_: IEquity.RegisteredDividendStructOutput;
        }>;
        getDividendsCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            dividendCount_: BigNumber;
        }>;
        getDividendsFor(_dividendID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IEquity.DividendForStructOutput
        ] & {
            dividendFor_: IEquity.DividendForStructOutput;
        }>;
        getEquityDetails(overrides?: CallOverrides): Promise<[
            IEquity.EquityDetailsDataStructOutput
        ] & {
            equityDetailsData_: IEquity.EquityDetailsDataStructOutput;
        }>;
        getScheduledBalanceAdjustment(_balanceAdjustmentID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IEquity.ScheduledBalanceAdjustmentStructOutput
        ] & {
            balanceAdjustment_: IEquity.ScheduledBalanceAdjustmentStructOutput;
        }>;
        getScheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            balanceAdjustmentCount_: BigNumber;
        }>;
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            holders_: string[];
        }>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<[
            ISecurity.SecurityRegulationDataStructOutput
        ] & {
            securityRegulationData_: ISecurity.SecurityRegulationDataStructOutput;
        }>;
        getTotalDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<[BigNumber]>;
        getTotalVotingHolders(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVoting(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            IEquity.RegisteredVotingStructOutput
        ] & {
            registeredVoting_: IEquity.RegisteredVotingStructOutput;
        }>;
        getVotingCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            votingCount_: BigNumber;
        }>;
        getVotingFor(_voteID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            IEquity.VotingForStructOutput
        ] & {
            votingFor_: IEquity.VotingForStructOutput;
        }>;
        getVotingHolders(_voteID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            holders_: string[];
        }>;
        setDividends(_newDividend: IEquity.DividendStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setScheduledBalanceAdjustment(_newBalanceAdjustment: IEquity.ScheduledBalanceAdjustmentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVoting(_newVoting: IEquity.VotingStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _initialize_equityUSA(_equityDetailsData: IEquity.EquityDetailsDataStruct, _regulationData: RegulationDataStruct, _additionalSecurityData: AdditionalSecurityDataStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getDividends(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.RegisteredDividendStructOutput>;
    getDividendsCount(overrides?: CallOverrides): Promise<BigNumber>;
    getDividendsFor(_dividendID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IEquity.DividendForStructOutput>;
    getEquityDetails(overrides?: CallOverrides): Promise<IEquity.EquityDetailsDataStructOutput>;
    getScheduledBalanceAdjustment(_balanceAdjustmentID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.ScheduledBalanceAdjustmentStructOutput>;
    getScheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<BigNumber>;
    getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getSecurityRegulationData(overrides?: CallOverrides): Promise<ISecurity.SecurityRegulationDataStructOutput>;
    getTotalDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getTotalSecurityHolders(overrides?: CallOverrides): Promise<BigNumber>;
    getTotalVotingHolders(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getVoting(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.RegisteredVotingStructOutput>;
    getVotingCount(overrides?: CallOverrides): Promise<BigNumber>;
    getVotingFor(_voteID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IEquity.VotingForStructOutput>;
    getVotingHolders(_voteID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    setDividends(_newDividend: IEquity.DividendStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setScheduledBalanceAdjustment(_newBalanceAdjustment: IEquity.ScheduledBalanceAdjustmentStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVoting(_newVoting: IEquity.VotingStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _initialize_equityUSA(_equityDetailsData: IEquity.EquityDetailsDataStruct, _regulationData: RegulationDataStruct, _additionalSecurityData: AdditionalSecurityDataStruct, overrides?: CallOverrides): Promise<void>;
        getDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getDividends(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.RegisteredDividendStructOutput>;
        getDividendsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getDividendsFor(_dividendID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IEquity.DividendForStructOutput>;
        getEquityDetails(overrides?: CallOverrides): Promise<IEquity.EquityDetailsDataStructOutput>;
        getScheduledBalanceAdjustment(_balanceAdjustmentID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.ScheduledBalanceAdjustmentStructOutput>;
        getScheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<BigNumber>;
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<ISecurity.SecurityRegulationDataStructOutput>;
        getTotalDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalVotingHolders(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVoting(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<IEquity.RegisteredVotingStructOutput>;
        getVotingCount(overrides?: CallOverrides): Promise<BigNumber>;
        getVotingFor(_voteID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IEquity.VotingForStructOutput>;
        getVotingHolders(_voteID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        setDividends(_newDividend: IEquity.DividendStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            dividendID_: BigNumber;
        }>;
        setScheduledBalanceAdjustment(_newBalanceAdjustment: IEquity.ScheduledBalanceAdjustmentStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            balanceAdjustmentID_: BigNumber;
        }>;
        setVoting(_newVoting: IEquity.VotingStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            success_: boolean;
            voteID_: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        _initialize_equityUSA(_equityDetailsData: IEquity.EquityDetailsDataStruct, _regulationData: RegulationDataStruct, _additionalSecurityData: AdditionalSecurityDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDividends(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getDividendsCount(overrides?: CallOverrides): Promise<BigNumber>;
        getDividendsFor(_dividendID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getEquityDetails(overrides?: CallOverrides): Promise<BigNumber>;
        getScheduledBalanceAdjustment(_balanceAdjustmentID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getScheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<BigNumber>;
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<BigNumber>;
        getTotalVotingHolders(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVoting(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotingCount(overrides?: CallOverrides): Promise<BigNumber>;
        getVotingFor(_voteID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getVotingHolders(_voteID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setDividends(_newDividend: IEquity.DividendStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setScheduledBalanceAdjustment(_newBalanceAdjustment: IEquity.ScheduledBalanceAdjustmentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVoting(_newVoting: IEquity.VotingStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _initialize_equityUSA(_equityDetailsData: IEquity.EquityDetailsDataStruct, _regulationData: RegulationDataStruct, _additionalSecurityData: AdditionalSecurityDataStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDividends(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDividendsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDividendsFor(_dividendID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEquityDetails(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getScheduledBalanceAdjustment(_balanceAdjustmentID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getScheduledBalanceAdjustmentCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSecurityHolders(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSecurityRegulationData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalDividendHolders(_dividendID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalSecurityHolders(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTotalVotingHolders(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVoting(_voteID: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotingCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotingFor(_voteID: PromiseOrValue<BigNumberish>, _account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotingHolders(_voteID: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDividends(_newDividend: IEquity.DividendStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setScheduledBalanceAdjustment(_newBalanceAdjustment: IEquity.ScheduledBalanceAdjustmentStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVoting(_newVoting: IEquity.VotingStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
