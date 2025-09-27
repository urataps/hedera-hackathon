import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface IProxyInterface extends utils.Interface {
    functions: {
        "getImplementationAuthority()": FunctionFragment;
        "setImplementationAuthority(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getImplementationAuthority" | "setImplementationAuthority"): FunctionFragment;
    encodeFunctionData(functionFragment: "getImplementationAuthority", values?: undefined): string;
    encodeFunctionData(functionFragment: "setImplementationAuthority", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getImplementationAuthority", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setImplementationAuthority", data: BytesLike): Result;
    events: {
        "ImplementationAuthoritySet(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ImplementationAuthoritySet"): EventFragment;
}
export interface ImplementationAuthoritySetEventObject {
    _implementationAuthority: string;
}
export type ImplementationAuthoritySetEvent = TypedEvent<[
    string
], ImplementationAuthoritySetEventObject>;
export type ImplementationAuthoritySetEventFilter = TypedEventFilter<ImplementationAuthoritySetEvent>;
export interface IProxy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProxyInterface;
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
        getImplementationAuthority(overrides?: CallOverrides): Promise<[string]>;
        setImplementationAuthority(_newImplementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getImplementationAuthority(overrides?: CallOverrides): Promise<string>;
    setImplementationAuthority(_newImplementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getImplementationAuthority(overrides?: CallOverrides): Promise<string>;
        setImplementationAuthority(_newImplementationAuthority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ImplementationAuthoritySet(address)"(_implementationAuthority?: PromiseOrValue<string> | null): ImplementationAuthoritySetEventFilter;
        ImplementationAuthoritySet(_implementationAuthority?: PromiseOrValue<string> | null): ImplementationAuthoritySetEventFilter;
    };
    estimateGas: {
        getImplementationAuthority(overrides?: CallOverrides): Promise<BigNumber>;
        setImplementationAuthority(_newImplementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getImplementationAuthority(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setImplementationAuthority(_newImplementationAuthority: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
