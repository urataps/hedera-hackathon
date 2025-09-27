import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type { TREXBaseDeploymentLib, TREXBaseDeploymentLibInterface } from "../../../../../../contracts/factory/ERC3643/libraries/core/TREXBaseDeploymentLib";
type TREXBaseDeploymentLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TREXBaseDeploymentLib__factory extends ContractFactory {
    constructor(...args: TREXBaseDeploymentLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TREXBaseDeploymentLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TREXBaseDeploymentLib;
    connect(signer: Signer): TREXBaseDeploymentLib__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220590dafc88ad1af7f9af307b2b880d6442a36022a6694e94bdafb3a455ce8a5fa64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }];
        readonly name: "Deployed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_ir";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_irs";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_tir";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_ctr";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_mc";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "string";
            readonly name: "_salt";
            readonly type: "string";
        }];
        readonly name: "TREXSuiteDeployed";
        readonly type: "event";
    }];
    static createInterface(): TREXBaseDeploymentLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TREXBaseDeploymentLib;
}
export {};
