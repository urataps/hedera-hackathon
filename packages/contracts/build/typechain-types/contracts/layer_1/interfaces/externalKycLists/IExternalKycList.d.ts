import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface IExternalKycListInterface extends utils.Interface {
    functions: {
        "getKycStatus(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getKycStatus"): FunctionFragment;
    encodeFunctionData(functionFragment: "getKycStatus", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getKycStatus", data: BytesLike): Result;
    events: {};
}
export interface IExternalKycList extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IExternalKycListInterface;
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
        getKycStatus(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
    };
    getKycStatus(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    callStatic: {
        getKycStatus(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        getKycStatus(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getKycStatus(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
