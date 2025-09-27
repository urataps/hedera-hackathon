import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { TimeTravel, TimeTravelInterface } from "../../../../../contracts/test/testTimeTravel/timeTravel/TimeTravel";
type TimeTravelConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TimeTravel__factory extends ContractFactory {
    constructor(...args: TimeTravelConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TimeTravel>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TimeTravel;
    connect(signer: Signer): TimeTravel__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a4661001f565b610043565b8061053914610040576040516217e1ef60ea1b815260040160405180910390fd5b50565b610581806100526000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c80631ef2fdc8146100885780634dd6b375146100bd57806364b677a4146100d25780638f145250146100da578063adb61832146100e2578063b378cf37146100ea578063c0f0f67e146100ff578063c1f0d74214610112578063d939398c1461011a575b600080fd5b7fba344464ddfb79287323340a7abdc770d353bd7dfd2695345419903dbb9918c85b6040519081526020015b60405180910390f35b6100d06100cb3660046104a7565b61012d565b005b6100d0610139565b6100d0610143565b6100aa61014b565b6100f261015a565b6040516100b491906104c0565b6100d061010d3660046104a7565b6101c0565b6100f26101c9565b6100d06101283660046104a7565b610339565b61013681610342565b50565b6101416103b1565b565b6101416103e1565b600061015561040f565b905090565b60408051600180825281830190925260609160208083019080368337019050509050600063cb3278cd60e01b82826101918161050e565b9350815181106101a3576101a3610535565b6001600160e01b0319909216602092830291909101909101525090565b61013681610424565b60408051600680825260e08201909252606091600091906020820160c0803683370190505091506360787b3f60e11b82826102038161050e565b93508151811061021557610215610535565b6001600160e01b0319909216602092830291909101909101526308f1452560e41b82826102418161050e565b93508151811061025357610253610535565b6001600160e01b0319909216602092830291909101909101526356db0c1960e11b828261027f8161050e565b93508151811061029157610291610535565b6001600160e01b03199092166020928302919091019091015263364e4e6360e21b82826102bd8161050e565b9350815181106102cf576102cf610535565b6001600160e01b031990921660209283029190910190910152634dd6b37560e01b82826102fb8161050e565b93508151811061030d5761030d610535565b6001600160e01b03199092166020928302919091019091015263192d9de960e21b82826101918161050e565b61013681610486565b8060000361036b57604051631da6946360e21b8152600481018290526024015b60405180910390fd5b600180549082905560408051828152602081018490527f96395610c0c23ab4b071bdeae9633f3d54760b0c64cc38868c72e80d6543b98791015b60405180910390a15050565b600060018190556040517f5e1c9b0e188d9a34c3abf05ea5456e54965689aff2ae15b6f1f549dd116e927f9190a1565b60008080556040517f93e7a31ca0d8810d390d6a3fc6ad83d230a5677c142d9aea7331a87794d11c119190a1565b600080541561041f575060005490565b504290565b80600003610448576040516304b8410560e31b815260048101829052602401610362565b600080549082905560408051828152602081018490527f42ae45afbacb5d1779b65d1bf0fe5ed8ea40e9dd166cc8b80bcb3fa2daf222a191016103a5565b8061053914610136576040516217e1ef60ea1b815260040160405180910390fd5b6000602082840312156104b957600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156105025783516001600160e01b031916835292840192918401916001016104dc565b50909695505050505050565b60006001820161052e57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220fd4db55af43d760af52e171cd9650d177de94f9eaabc0ee1f64fcfabddd7f87064736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ExpirationNotReached";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newSystemNumber";
            readonly type: "uint256";
        }];
        readonly name: "InvalidBlocknumber";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newSystemTime";
            readonly type: "uint256";
        }];
        readonly name: "InvalidTimestamp";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongChainId";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "legacySystemNumber";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newSystemNumber";
            readonly type: "uint256";
        }];
        readonly name: "SystemBlocknumberChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "SystemBlocknumberReset";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "legacySystemTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newSystemTime";
            readonly type: "uint256";
        }];
        readonly name: "SystemTimestampChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "SystemTimestampReset";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "blockTimestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_newSystemBlocknumber";
            readonly type: "uint256";
        }];
        readonly name: "changeSystemBlocknumber";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newTimestamp";
            readonly type: "uint256";
        }];
        readonly name: "changeSystemTimestamp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }];
        readonly name: "checkBlockChainid";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStaticFunctionSelectors";
        readonly outputs: readonly [{
            readonly internalType: "bytes4[]";
            readonly name: "staticFunctionSelectors_";
            readonly type: "bytes4[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStaticInterfaceIds";
        readonly outputs: readonly [{
            readonly internalType: "bytes4[]";
            readonly name: "staticInterfaceIds_";
            readonly type: "bytes4[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStaticResolverKey";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "staticResolverKey_";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "resetSystemBlocknumber";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "resetSystemTimestamp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TimeTravelInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TimeTravel;
}
export {};
