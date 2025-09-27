import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../../common";
export interface IModularComplianceInterface extends utils.Interface {
    functions: {
        "addModule(address)": FunctionFragment;
        "bindToken(address)": FunctionFragment;
        "callModuleFunction(bytes,address)": FunctionFragment;
        "canTransfer(address,address,uint256)": FunctionFragment;
        "created(address,uint256)": FunctionFragment;
        "destroyed(address,uint256)": FunctionFragment;
        "getModules()": FunctionFragment;
        "getTokenBound()": FunctionFragment;
        "isModuleBound(address)": FunctionFragment;
        "removeModule(address)": FunctionFragment;
        "transferred(address,address,uint256)": FunctionFragment;
        "unbindToken(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addModule" | "bindToken" | "callModuleFunction" | "canTransfer" | "created" | "destroyed" | "getModules" | "getTokenBound" | "isModuleBound" | "removeModule" | "transferred" | "unbindToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "addModule", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "bindToken", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "callModuleFunction", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "canTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "created", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "destroyed", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getModules", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokenBound", values?: undefined): string;
    encodeFunctionData(functionFragment: "isModuleBound", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "removeModule", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferred", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "unbindToken", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "addModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bindToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callModuleFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "created", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "destroyed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getModules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenBound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isModuleBound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferred", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unbindToken", data: BytesLike): Result;
    events: {
        "ModuleAdded(address)": EventFragment;
        "ModuleInteraction(address,bytes4)": EventFragment;
        "ModuleRemoved(address)": EventFragment;
        "TokenBound(address)": EventFragment;
        "TokenUnbound(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ModuleAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModuleInteraction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModuleRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenBound"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenUnbound"): EventFragment;
}
export interface ModuleAddedEventObject {
    _module: string;
}
export type ModuleAddedEvent = TypedEvent<[string], ModuleAddedEventObject>;
export type ModuleAddedEventFilter = TypedEventFilter<ModuleAddedEvent>;
export interface ModuleInteractionEventObject {
    target: string;
    selector: string;
}
export type ModuleInteractionEvent = TypedEvent<[
    string,
    string
], ModuleInteractionEventObject>;
export type ModuleInteractionEventFilter = TypedEventFilter<ModuleInteractionEvent>;
export interface ModuleRemovedEventObject {
    _module: string;
}
export type ModuleRemovedEvent = TypedEvent<[string], ModuleRemovedEventObject>;
export type ModuleRemovedEventFilter = TypedEventFilter<ModuleRemovedEvent>;
export interface TokenBoundEventObject {
    _token: string;
}
export type TokenBoundEvent = TypedEvent<[string], TokenBoundEventObject>;
export type TokenBoundEventFilter = TypedEventFilter<TokenBoundEvent>;
export interface TokenUnboundEventObject {
    _token: string;
}
export type TokenUnboundEvent = TypedEvent<[string], TokenUnboundEventObject>;
export type TokenUnboundEventFilter = TypedEventFilter<TokenUnboundEvent>;
export interface IModularCompliance extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IModularComplianceInterface;
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
        addModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        bindToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        callModuleFunction(callData: PromiseOrValue<BytesLike>, _module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        canTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean]>;
        created(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        destroyed(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getModules(overrides?: CallOverrides): Promise<[string[]]>;
        getTokenBound(overrides?: CallOverrides): Promise<[string]>;
        isModuleBound(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        removeModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferred(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unbindToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    bindToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callModuleFunction(callData: PromiseOrValue<BytesLike>, _module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    canTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    created(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    destroyed(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getModules(overrides?: CallOverrides): Promise<string[]>;
    getTokenBound(overrides?: CallOverrides): Promise<string>;
    isModuleBound(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    removeModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferred(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unbindToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addModule(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        bindToken(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        callModuleFunction(callData: PromiseOrValue<BytesLike>, _module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        canTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        created(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        destroyed(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getModules(overrides?: CallOverrides): Promise<string[]>;
        getTokenBound(overrides?: CallOverrides): Promise<string>;
        isModuleBound(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        removeModule(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferred(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unbindToken(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ModuleAdded(address)"(_module?: PromiseOrValue<string> | null): ModuleAddedEventFilter;
        ModuleAdded(_module?: PromiseOrValue<string> | null): ModuleAddedEventFilter;
        "ModuleInteraction(address,bytes4)"(target?: PromiseOrValue<string> | null, selector?: null): ModuleInteractionEventFilter;
        ModuleInteraction(target?: PromiseOrValue<string> | null, selector?: null): ModuleInteractionEventFilter;
        "ModuleRemoved(address)"(_module?: PromiseOrValue<string> | null): ModuleRemovedEventFilter;
        ModuleRemoved(_module?: PromiseOrValue<string> | null): ModuleRemovedEventFilter;
        "TokenBound(address)"(_token?: null): TokenBoundEventFilter;
        TokenBound(_token?: null): TokenBoundEventFilter;
        "TokenUnbound(address)"(_token?: null): TokenUnboundEventFilter;
        TokenUnbound(_token?: null): TokenUnboundEventFilter;
    };
    estimateGas: {
        addModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        bindToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        callModuleFunction(callData: PromiseOrValue<BytesLike>, _module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        canTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        created(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        destroyed(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getModules(overrides?: CallOverrides): Promise<BigNumber>;
        getTokenBound(overrides?: CallOverrides): Promise<BigNumber>;
        isModuleBound(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        removeModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferred(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unbindToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        bindToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        callModuleFunction(callData: PromiseOrValue<BytesLike>, _module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        canTransfer(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        created(_to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        destroyed(_from: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getModules(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenBound(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isModuleBound(_module: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeModule(_module: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferred(_from: PromiseOrValue<string>, _to: PromiseOrValue<string>, _amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unbindToken(_token: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
