import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IERC1643Interface extends utils.Interface {
    functions: {
        "getAllDocuments()": FunctionFragment;
        "getDocument(bytes32)": FunctionFragment;
        "removeDocument(bytes32)": FunctionFragment;
        "setDocument(bytes32,string,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAllDocuments" | "getDocument" | "removeDocument" | "setDocument"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAllDocuments", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDocument", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "removeDocument", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setDocument", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "getAllDocuments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDocument", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeDocument", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDocument", data: BytesLike): Result;
    events: {
        "DocumentRemoved(bytes32,string,bytes32)": EventFragment;
        "DocumentUpdated(bytes32,string,bytes32)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DocumentRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DocumentUpdated"): EventFragment;
}
export interface DocumentRemovedEventObject {
    name: string;
    uri: string;
    documentHash: string;
}
export type DocumentRemovedEvent = TypedEvent<[
    string,
    string,
    string
], DocumentRemovedEventObject>;
export type DocumentRemovedEventFilter = TypedEventFilter<DocumentRemovedEvent>;
export interface DocumentUpdatedEventObject {
    name: string;
    uri: string;
    documentHash: string;
}
export type DocumentUpdatedEvent = TypedEvent<[
    string,
    string,
    string
], DocumentUpdatedEventObject>;
export type DocumentUpdatedEventFilter = TypedEventFilter<DocumentUpdatedEvent>;
export interface IERC1643 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC1643Interface;
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
        getAllDocuments(overrides?: CallOverrides): Promise<[string[]]>;
        getDocument(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string, BigNumber]>;
        removeDocument(_name: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setDocument(_name: PromiseOrValue<BytesLike>, _uri: PromiseOrValue<string>, _documentHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getAllDocuments(overrides?: CallOverrides): Promise<string[]>;
    getDocument(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string, BigNumber]>;
    removeDocument(_name: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setDocument(_name: PromiseOrValue<BytesLike>, _uri: PromiseOrValue<string>, _documentHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAllDocuments(overrides?: CallOverrides): Promise<string[]>;
        getDocument(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string, string, BigNumber]>;
        removeDocument(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setDocument(_name: PromiseOrValue<BytesLike>, _uri: PromiseOrValue<string>, _documentHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DocumentRemoved(bytes32,string,bytes32)"(name?: PromiseOrValue<BytesLike> | null, uri?: null, documentHash?: null): DocumentRemovedEventFilter;
        DocumentRemoved(name?: PromiseOrValue<BytesLike> | null, uri?: null, documentHash?: null): DocumentRemovedEventFilter;
        "DocumentUpdated(bytes32,string,bytes32)"(name?: PromiseOrValue<BytesLike> | null, uri?: null, documentHash?: null): DocumentUpdatedEventFilter;
        DocumentUpdated(name?: PromiseOrValue<BytesLike> | null, uri?: null, documentHash?: null): DocumentUpdatedEventFilter;
    };
    estimateGas: {
        getAllDocuments(overrides?: CallOverrides): Promise<BigNumber>;
        getDocument(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        removeDocument(_name: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setDocument(_name: PromiseOrValue<BytesLike>, _uri: PromiseOrValue<string>, _documentHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAllDocuments(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDocument(_name: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeDocument(_name: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setDocument(_name: PromiseOrValue<BytesLike>, _uri: PromiseOrValue<string>, _documentHash: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
