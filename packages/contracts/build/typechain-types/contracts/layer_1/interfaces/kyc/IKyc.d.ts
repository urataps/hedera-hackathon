import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export declare namespace IKyc {
    type KycDataStruct = {
        validFrom: PromiseOrValue<BigNumberish>;
        validTo: PromiseOrValue<BigNumberish>;
        vcId: PromiseOrValue<string>;
        issuer: PromiseOrValue<string>;
        status: PromiseOrValue<BigNumberish>;
    };
    type KycDataStructOutput = [
        BigNumber,
        BigNumber,
        string,
        string,
        number
    ] & {
        validFrom: BigNumber;
        validTo: BigNumber;
        vcId: string;
        issuer: string;
        status: number;
    };
}
export interface IKycInterface extends utils.Interface {
    functions: {
        "activateInternalKyc()": FunctionFragment;
        "deactivateInternalKyc()": FunctionFragment;
        "getKycAccountsCount(uint8)": FunctionFragment;
        "getKycAccountsData(uint8,uint256,uint256)": FunctionFragment;
        "getKycFor(address)": FunctionFragment;
        "getKycStatusFor(address)": FunctionFragment;
        "grantKyc(address,string,uint256,uint256,address)": FunctionFragment;
        "initializeInternalKyc(bool)": FunctionFragment;
        "isInternalKycActivated()": FunctionFragment;
        "revokeKyc(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "activateInternalKyc" | "deactivateInternalKyc" | "getKycAccountsCount" | "getKycAccountsData" | "getKycFor" | "getKycStatusFor" | "grantKyc" | "initializeInternalKyc" | "isInternalKycActivated" | "revokeKyc"): FunctionFragment;
    encodeFunctionData(functionFragment: "activateInternalKyc", values?: undefined): string;
    encodeFunctionData(functionFragment: "deactivateInternalKyc", values?: undefined): string;
    encodeFunctionData(functionFragment: "getKycAccountsCount", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getKycAccountsData", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getKycFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getKycStatusFor", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "grantKyc", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "initializeInternalKyc", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "isInternalKycActivated", values?: undefined): string;
    encodeFunctionData(functionFragment: "revokeKyc", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "activateInternalKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deactivateInternalKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getKycAccountsCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getKycAccountsData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getKycFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getKycStatusFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeInternalKyc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isInternalKycActivated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeKyc", data: BytesLike): Result;
    events: {
        "InternalKycStatusUpdated(address,bool)": EventFragment;
        "KycGranted(address,address)": EventFragment;
        "KycRevoked(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "InternalKycStatusUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "KycGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "KycRevoked"): EventFragment;
}
export interface InternalKycStatusUpdatedEventObject {
    operator: string;
    activated: boolean;
}
export type InternalKycStatusUpdatedEvent = TypedEvent<[
    string,
    boolean
], InternalKycStatusUpdatedEventObject>;
export type InternalKycStatusUpdatedEventFilter = TypedEventFilter<InternalKycStatusUpdatedEvent>;
export interface KycGrantedEventObject {
    account: string;
    issuer: string;
}
export type KycGrantedEvent = TypedEvent<[
    string,
    string
], KycGrantedEventObject>;
export type KycGrantedEventFilter = TypedEventFilter<KycGrantedEvent>;
export interface KycRevokedEventObject {
    account: string;
    issuer: string;
}
export type KycRevokedEvent = TypedEvent<[
    string,
    string
], KycRevokedEventObject>;
export type KycRevokedEventFilter = TypedEventFilter<KycRevokedEvent>;
export interface IKyc extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IKycInterface;
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
        activateInternalKyc(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deactivateInternalKyc(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getKycAccountsCount(_kycStatus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            kycAccountsCount_: BigNumber;
        }>;
        getKycAccountsData(_kycStatus: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string[],
            IKyc.KycDataStructOutput[]
        ] & {
            accounts_: string[];
            kycData_: IKyc.KycDataStructOutput[];
        }>;
        getKycFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[IKyc.KycDataStructOutput] & {
            kyc_: IKyc.KycDataStructOutput;
        }>;
        getKycStatusFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number] & {
            kycStatus_: number;
        }>;
        grantKyc(_account: PromiseOrValue<string>, _vcId: PromiseOrValue<string>, _validFrom: PromiseOrValue<BigNumberish>, _validTo: PromiseOrValue<BigNumberish>, _issuer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initializeInternalKyc(_activateInternalKyc: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isInternalKycActivated(overrides?: CallOverrides): Promise<[boolean]>;
        revokeKyc(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    activateInternalKyc(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deactivateInternalKyc(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getKycAccountsCount(_kycStatus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    getKycAccountsData(_kycStatus: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        string[],
        IKyc.KycDataStructOutput[]
    ] & {
        accounts_: string[];
        kycData_: IKyc.KycDataStructOutput[];
    }>;
    getKycFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IKyc.KycDataStructOutput>;
    getKycStatusFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    grantKyc(_account: PromiseOrValue<string>, _vcId: PromiseOrValue<string>, _validFrom: PromiseOrValue<BigNumberish>, _validTo: PromiseOrValue<BigNumberish>, _issuer: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initializeInternalKyc(_activateInternalKyc: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isInternalKycActivated(overrides?: CallOverrides): Promise<boolean>;
    revokeKyc(_account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        activateInternalKyc(overrides?: CallOverrides): Promise<boolean>;
        deactivateInternalKyc(overrides?: CallOverrides): Promise<boolean>;
        getKycAccountsCount(_kycStatus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getKycAccountsData(_kycStatus: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            string[],
            IKyc.KycDataStructOutput[]
        ] & {
            accounts_: string[];
            kycData_: IKyc.KycDataStructOutput[];
        }>;
        getKycFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<IKyc.KycDataStructOutput>;
        getKycStatusFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        grantKyc(_account: PromiseOrValue<string>, _vcId: PromiseOrValue<string>, _validFrom: PromiseOrValue<BigNumberish>, _validTo: PromiseOrValue<BigNumberish>, _issuer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        initializeInternalKyc(_activateInternalKyc: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        isInternalKycActivated(overrides?: CallOverrides): Promise<boolean>;
        revokeKyc(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "InternalKycStatusUpdated(address,bool)"(operator?: PromiseOrValue<string> | null, activated?: null): InternalKycStatusUpdatedEventFilter;
        InternalKycStatusUpdated(operator?: PromiseOrValue<string> | null, activated?: null): InternalKycStatusUpdatedEventFilter;
        "KycGranted(address,address)"(account?: PromiseOrValue<string> | null, issuer?: PromiseOrValue<string> | null): KycGrantedEventFilter;
        KycGranted(account?: PromiseOrValue<string> | null, issuer?: PromiseOrValue<string> | null): KycGrantedEventFilter;
        "KycRevoked(address,address)"(account?: PromiseOrValue<string> | null, issuer?: PromiseOrValue<string> | null): KycRevokedEventFilter;
        KycRevoked(account?: PromiseOrValue<string> | null, issuer?: PromiseOrValue<string> | null): KycRevokedEventFilter;
    };
    estimateGas: {
        activateInternalKyc(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deactivateInternalKyc(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getKycAccountsCount(_kycStatus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getKycAccountsData(_kycStatus: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getKycFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getKycStatusFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        grantKyc(_account: PromiseOrValue<string>, _vcId: PromiseOrValue<string>, _validFrom: PromiseOrValue<BigNumberish>, _validTo: PromiseOrValue<BigNumberish>, _issuer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initializeInternalKyc(_activateInternalKyc: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isInternalKycActivated(overrides?: CallOverrides): Promise<BigNumber>;
        revokeKyc(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        activateInternalKyc(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deactivateInternalKyc(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getKycAccountsCount(_kycStatus: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getKycAccountsData(_kycStatus: PromiseOrValue<BigNumberish>, _pageIndex: PromiseOrValue<BigNumberish>, _pageLength: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getKycFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getKycStatusFor(_account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantKyc(_account: PromiseOrValue<string>, _vcId: PromiseOrValue<string>, _validFrom: PromiseOrValue<BigNumberish>, _validTo: PromiseOrValue<BigNumberish>, _issuer: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initializeInternalKyc(_activateInternalKyc: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isInternalKycActivated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revokeKyc(_account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
