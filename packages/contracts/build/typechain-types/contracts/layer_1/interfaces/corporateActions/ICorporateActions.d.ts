import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface ICorporateActionsInterface extends utils.Interface {
    functions: {
        "addCorporateAction(bytes32,bytes)": FunctionFragment;
        "getCorporateAction(bytes32)": FunctionFragment;
        "getCorporateActionCount()": FunctionFragment;
        "getCorporateActionCountByType(bytes32)": FunctionFragment;
        "getCorporateActionIds(uint256,uint256)": FunctionFragment;
        "getCorporateActionIdsByType(bytes32,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addCorporateAction" | "getCorporateAction" | "getCorporateActionCount" | "getCorporateActionCountByType" | "getCorporateActionIds" | "getCorporateActionIdsByType"): FunctionFragment;
    encodeFunctionData(functionFragment: "addCorporateAction", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getCorporateAction", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getCorporateActionCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCorporateActionCountByType", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getCorporateActionIds", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCorporateActionIdsByType", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "addCorporateAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCorporateAction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCorporateActionCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCorporateActionCountByType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCorporateActionIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCorporateActionIdsByType", data: BytesLike): Result;
    events: {
        "CorporateActionAdded(address,bytes32,bytes32,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CorporateActionAdded"): EventFragment;
}
export interface CorporateActionAddedEventObject {
    operator: string;
    actionType: string;
    corporateActionId: string;
    corporateActionIndexByType: BigNumber;
    data: string;
}
export type CorporateActionAddedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    string
], CorporateActionAddedEventObject>;
export type CorporateActionAddedEventFilter = TypedEventFilter<CorporateActionAddedEvent>;
export interface ICorporateActions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICorporateActionsInterface;
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
        addCorporateAction(_actionType: PromiseOrValue<BytesLike>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getCorporateAction(_corporateActionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string] & {
            actionType_: string;
            data_: string;
        }>;
        getCorporateActionCount(overrides?: CallOverrides): Promise<[BigNumber] & {
            corporateActionCount_: BigNumber;
        }>;
        getCorporateActionCountByType(_actionType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[BigNumber] & {
            corporateActionCount_: BigNumber;
        }>;
        getCorporateActionIds(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            corporateActionIds_: string[];
        }>;
        getCorporateActionIdsByType(_actionType: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]] & {
            corporateActionIds_: string[];
        }>;
    };
    addCorporateAction(_actionType: PromiseOrValue<BytesLike>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getCorporateAction(_corporateActionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string] & {
        actionType_: string;
        data_: string;
    }>;
    getCorporateActionCount(overrides?: CallOverrides): Promise<BigNumber>;
    getCorporateActionCountByType(_actionType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
    getCorporateActionIds(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    getCorporateActionIdsByType(_actionType: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    callStatic: {
        addCorporateAction(_actionType: PromiseOrValue<BytesLike>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            boolean,
            string,
            BigNumber
        ] & {
            success_: boolean;
            corporateActionId_: string;
            corporateActionIndexByType_: BigNumber;
        }>;
        getCorporateAction(_corporateActionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string] & {
            actionType_: string;
            data_: string;
        }>;
        getCorporateActionCount(overrides?: CallOverrides): Promise<BigNumber>;
        getCorporateActionCountByType(_actionType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getCorporateActionIds(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
        getCorporateActionIdsByType(_actionType: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {
        "CorporateActionAdded(address,bytes32,bytes32,uint256,bytes)"(operator?: PromiseOrValue<string> | null, actionType?: PromiseOrValue<BytesLike> | null, corporateActionId?: PromiseOrValue<BytesLike> | null, corporateActionIndexByType?: null, data?: null): CorporateActionAddedEventFilter;
        CorporateActionAdded(operator?: PromiseOrValue<string> | null, actionType?: PromiseOrValue<BytesLike> | null, corporateActionId?: PromiseOrValue<BytesLike> | null, corporateActionIndexByType?: null, data?: null): CorporateActionAddedEventFilter;
    };
    estimateGas: {
        addCorporateAction(_actionType: PromiseOrValue<BytesLike>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getCorporateAction(_corporateActionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getCorporateActionCount(overrides?: CallOverrides): Promise<BigNumber>;
        getCorporateActionCountByType(_actionType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getCorporateActionIds(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCorporateActionIdsByType(_actionType: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addCorporateAction(_actionType: PromiseOrValue<BytesLike>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getCorporateAction(_corporateActionId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCorporateActionCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCorporateActionCountByType(_actionType: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCorporateActionIds(_pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCorporateActionIdsByType(_actionType: PromiseOrValue<BytesLike>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
