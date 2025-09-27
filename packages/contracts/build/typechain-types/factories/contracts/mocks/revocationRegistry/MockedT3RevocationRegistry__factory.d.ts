import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { MockedT3RevocationRegistry, MockedT3RevocationRegistryInterface } from "../../../../contracts/mocks/revocationRegistry/MockedT3RevocationRegistry";
type MockedT3RevocationRegistryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockedT3RevocationRegistry__factory extends ContractFactory {
    constructor(...args: MockedT3RevocationRegistryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockedT3RevocationRegistry>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockedT3RevocationRegistry;
    connect(signer: Signer): MockedT3RevocationRegistry__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506102dc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063075488651461004657806365b2a8631461005b578063dcbec7121461006e575b600080fd5b6100596100543660046101de565b6100be565b005b6100596100693660046101de565b6100f6565b6100aa61007c36600461021b565b6000602081815292815260409020815180830184018051928152908401929093019190912091525460ff1681565b604051901515815260200160405180910390f35b336000908152602081905260409081902090516100dc908390610277565b908152604051908190036020019020805460ff1916905550565b3360009081526020819052604090819020905160019190610118908490610277565b908152604051908190036020019020805491151560ff1990921691909117905550565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261016257600080fd5b813567ffffffffffffffff8082111561017d5761017d61013b565b604051601f8301601f19908116603f011681019082821181831017156101a5576101a561013b565b816040528381528660208588010111156101be57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156101f057600080fd5b813567ffffffffffffffff81111561020757600080fd5b61021384828501610151565b949350505050565b6000806040838503121561022e57600080fd5b82356001600160a01b038116811461024557600080fd5b9150602083013567ffffffffffffffff81111561026157600080fd5b61026d85828601610151565b9150509250929050565b6000825160005b81811015610298576020818601810151858301520161027e565b50600092019182525091905056fea2646970667358221220f56627cdcc6b4d5854ea06a7ed0b1f229ded613292425039703ceed7022d78a264736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "vcId";
            readonly type: "string";
        }];
        readonly name: "cancelRevoke";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "vcId";
            readonly type: "string";
        }];
        readonly name: "revoke";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "revoked";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): MockedT3RevocationRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockedT3RevocationRegistry;
}
export {};
