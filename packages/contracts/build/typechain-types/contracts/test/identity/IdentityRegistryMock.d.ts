import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface IdentityRegistryMockInterface extends utils.Interface {
    functions: {
        "isVerified(address)": FunctionFragment;
        "setFlags(bool,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "isVerified" | "setFlags"): FunctionFragment;
    encodeFunctionData(functionFragment: "isVerified", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setFlags", values: [PromiseOrValue<boolean>, PromiseOrValue<boolean>]): string;
    decodeFunctionResult(functionFragment: "isVerified", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFlags", data: BytesLike): Result;
    events: {};
}
export interface IdentityRegistryMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IdentityRegistryMockInterface;
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
        isVerified(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        setFlags(_isVerifiedFlag: PromiseOrValue<boolean>, _revertFlag: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    isVerified(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    setFlags(_isVerifiedFlag: PromiseOrValue<boolean>, _revertFlag: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        isVerified(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        setFlags(_isVerifiedFlag: PromiseOrValue<boolean>, _revertFlag: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        isVerified(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setFlags(_isVerifiedFlag: PromiseOrValue<boolean>, _revertFlag: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        isVerified(_userAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFlags(_isVerifiedFlag: PromiseOrValue<boolean>, _revertFlag: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
