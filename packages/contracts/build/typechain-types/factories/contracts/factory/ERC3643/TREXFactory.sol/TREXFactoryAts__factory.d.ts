import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { TREXFactoryAts, TREXFactoryAtsInterface } from "../../../../../contracts/factory/ERC3643/TREXFactory.sol/TREXFactoryAts";
type TREXFactoryAtsConstructorParams = [linkLibraryAddresses: TREXFactoryAtsLibraryAddresses, signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TREXFactoryAts__factory extends ContractFactory {
    constructor(...args: TREXFactoryAtsConstructorParams);
    static linkBytecode(linkLibraryAddresses: TREXFactoryAtsLibraryAddresses): string;
    deploy(_implementationAuthority: PromiseOrValue<string>, _idFactory: PromiseOrValue<string>, _atsFactory: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TREXFactoryAts>;
    getDeployTransaction(_implementationAuthority: PromiseOrValue<string>, _idFactory: PromiseOrValue<string>, _atsFactory: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TREXFactoryAts;
    connect(signer: Signer): TREXFactoryAts__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620018f5380380620018f58339810160408190526200003491620000ef565b6200003f3362000082565b600180546001600160a01b039485166001600160a01b03199182161790915560028054938516938216939093179092556004805491909316911617905562000139565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000ea57600080fd5b919050565b6000806000606084860312156200010557600080fd5b6200011084620000d2565b92506200012060208501620000d2565b91506200013060408501620000d2565b90509250925092565b6117ac80620001496000396000f3fe608060405234801561001057600080fd5b50600436106100ca5760003560e01c806392dd9d651161007c57806392dd9d6514610157578063c1733f681461016a578063ccd41cce1461017d578063cf753d3714610190578063e6822e2b146101a3578063f2fde38b146101b6578063fb88d79c146101c957600080fd5b80632d5f1187146100cf57806350b01838146100f25780635897d123146101075780635f2773a51461011a578063715018a61461012b57806385eb8906146101335780638da5cb5b14610146575b600080fd5b6001546001600160a01b03165b6040516100e991906108dc565b60405180910390f35b610105610100366004610915565b6101fd565b005b610105610115366004610a2d565b610267565b6002546001600160a01b03166100dc565b6101056102fa565b610105610141366004610afe565b61030e565b6000546001600160a01b03166100dc565b610105610165366004610afe565b610367565b6100dc610178366004610b22565b6106af565b61010561018b366004610afe565b6106e4565b61010561019e366004610b93565b505050565b6101056101b1366004610c36565b61075d565b6101056101c4366004610afe565b6107b9565b6100dc6101d7366004610cd7565b80516020818301810180516003825292820191909301209152546001600160a01b031681565b610205610832565b60405163f2fde38b60e01b81526001600160a01b0383169063f2fde38b906102319084906004016108dc565b600060405180830381600087803b15801561024b57600080fd5b505af115801561025f573d6000803e3d6000fd5b505050505050565b6001546002546004805460405163ad3e1d1760e01b815273__$d5076b7b673f9fc291e68ef6dddff65248$__9463ad3e1d17946102c3946003946001600160a01b03938416949284169316918d918d918d918d918d910161149c565b60006040518083038186803b1580156102db57600080fd5b505af41580156102ef573d6000803e3d6000fd5b505050505050505050565b610302610832565b61030c600061088c565b565b610316610832565b6001600160a01b0381166103455760405162461bcd60e51b815260040161033c906115a1565b60405180910390fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b61036f610832565b6001600160a01b0381166103955760405162461bcd60e51b815260040161033c906115a1565b60006001600160a01b0316816001600160a01b0316636ff6e83f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040291906115d8565b6001600160a01b03161415801561048d575060006001600160a01b0316816001600160a01b0316631ee9ce8b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561045d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048191906115d8565b6001600160a01b031614155b801561050d575060006001600160a01b0316816001600160a01b0316639e3e7bb96040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050191906115d8565b6001600160a01b031614155b801561058d575060006001600160a01b0316816001600160a01b03166361f898256040518163ffffffff1660e01b8152600401602060405180830381865afa15801561055d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058191906115d8565b6001600160a01b031614155b801561060d575060006001600160a01b0316816001600160a01b031663fedcc0526040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060191906115d8565b6001600160a01b031614155b6106595760405162461bcd60e51b815260206004820181905260248201527f696e76616c696420496d706c656d656e746174696f6e20417574686f72697479604482015260640161033c565b600180546001600160a01b0319166001600160a01b0383161790556040517f3b1074392ed8e8424715d0dda2197eede67080b377fc8370e26f3e882207f6b8906106a49083906108dc565b60405180910390a150565b6000600383836040516106c39291906115f5565b908152604051908190036020019020546001600160a01b0316905092915050565b6106ec610832565b6001600160a01b0381166107125760405162461bcd60e51b815260040161033c906115a1565b600280546001600160a01b0319166001600160a01b0383161790556040517fae81f4fee1b2d830e39ae449967642aaa0e5a1771aa200d0a50853010992242c906106a49083906108dc565b6001546002546004805460405163f761bbf160e01b815273__$5285726528c74b582395a4c0c99fa9f25a$__9463f761bbf1946102c3946003946001600160a01b03938416949284169316918d918d918d918d918d9101611612565b6107c1610832565b6001600160a01b0381166108265760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161033c565b61082f8161088c565b50565b6000546001600160a01b0316331461030c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161033c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0391909116815260200190565b6001600160a01b038116811461082f57600080fd5b8035610910816108f0565b919050565b6000806040838503121561092857600080fd5b8235610933816108f0565b91506020830135610943816108f0565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261097557600080fd5b81356001600160401b038082111561098f5761098f61094e565b604051601f8301601f19908116603f011681019082821181831017156109b7576109b761094e565b816040528381528660208588010111156109d057600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060e08284031215610a0257600080fd5b50919050565b600060608284031215610a0257600080fd5b60006101008284031215610a0257600080fd5b600080600080600060a08688031215610a4557600080fd5b85356001600160401b0380821115610a5c57600080fd5b610a6889838a01610964565b96506020880135915080821115610a7e57600080fd5b610a8a89838a016109f0565b95506040880135915080821115610aa057600080fd5b610aac89838a01610a08565b94506060880135915080821115610ac257600080fd5b610ace89838a01610a1a565b93506080880135915080821115610ae457600080fd5b50610af188828901610a08565b9150509295509295909350565b600060208284031215610b1057600080fd5b8135610b1b816108f0565b9392505050565b60008060208385031215610b3557600080fd5b82356001600160401b0380821115610b4c57600080fd5b818501915085601f830112610b6057600080fd5b813581811115610b6f57600080fd5b866020828501011115610b8157600080fd5b60209290920196919550909350505050565b600080600060608486031215610ba857600080fd5b83356001600160401b0380821115610bbf57600080fd5b610bcb87838801610964565b94506020860135915080821115610be157600080fd5b908501906101408288031215610bf657600080fd5b90925060408501359080821115610c0c57600080fd5b50610c1986828701610a08565b9150509250925092565b60006101608284031215610a0257600080fd5b600080600080600060a08688031215610c4e57600080fd5b85356001600160401b0380821115610c6557600080fd5b610c7189838a01610964565b96506020880135915080821115610c8757600080fd5b610c9389838a016109f0565b95506040880135915080821115610ca957600080fd5b610cb589838a01610a08565b94506060880135915080821115610ccb57600080fd5b610ace89838a01610c23565b600060208284031215610ce957600080fd5b81356001600160401b03811115610cff57600080fd5b610d0b84828501610964565b949350505050565b6000815180845260005b81811015610d3957602081850181015186830182015201610d1d565b506000602082860101526020601f19601f83011685010191505092915050565b6000808335601e19843603018112610d7057600080fd5b83016020810192503590506001600160401b03811115610d8f57600080fd5b8060051b3603821315610da157600080fd5b9250929050565b8183526000602080850194508260005b85811015610de6578135610dcb816108f0565b6001600160a01b031687529582019590820190600101610db8565b509495945050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000808335601e19843603018112610e3157600080fd5b83016020810192503590506001600160401b03811115610e5057600080fd5b803603821315610da157600080fd5b81835260006020808501808196508560051b810191508460005b87811015610eaf578284038952610e908288610e1a565b610e9b868284610df1565b9a87019a9550505090840190600101610e79565b5091979650505050505050565b60008135610ec9816108f0565b6001600160a01b039081168452602083013590610ee5826108f0565b166020840152610ef760408301610905565b6001600160a01b03166040840152610f126060830183610d59565b60e06060860152610f2760e086018284610da8565b915050610f376080840184610d59565b8583036080870152610f4a838284610da8565b92505050610f5b60a0840184610d59565b85830360a0870152610f6e838284610da8565b92505050610f7f60c0840184610d59565b85830360c0870152610f92838284610e5f565b9695505050505050565b81835260006001600160fb1b03831115610fb557600080fd5b8260051b80836020870137939093016020019392505050565b6000610fda8283610d59565b60608552610fec606086018284610f9c565b9150506020610ffd81850185610d59565b8684038388015261100f848284610da8565b935050506110206040850185610d59565b8684036040880152808452828401600582901b850184018360005b8481101561107557878303601f190184526110568287610d59565b611061858284610f9c565b95890195945050509086019060010161103b565b50909998505050505050505050565b6000823561023e1983360301811261109b57600080fd5b90910192915050565b8035801515811461091057600080fd5b81835260006020808501808196508560051b81019150846000805b8881101561112c578385038a528235603e198936030181126110ef578283fd5b880180358652604061110388830183610d59565b925081898901526111178289018483610da8565b9c89019c9750505092860192506001016110cf565b509298975050505050505050565b60008235607e1983360301811261109b57600080fd5b600061115c8283610e1a565b6080855261116e608086018284610df1565b91505061117e6020840184610e1a565b8583036020870152611191838284610df1565b925050506111a26040840184610e1a565b85830360408701526111b5838284610df1565b92505050606083013560ff81168082146111ce57600080fd5b606095909501949094529392505050565b60006102406111f7846111f1856110a4565b15159052565b611203602084016110a4565b1515602085015261121660408401610905565b6001600160a01b03166040850152606083810135908501526080808401359085015261124560a0840184610d59565b8260a087015261125883870182846110b4565b9250505061126860c084016110a4565b151560c085015261127b60e084016110a4565b151560e0850152610100838101359085015261012061129c8185018561113a565b858303828701526112ad8382611150565b925050506101406112bf8185016110a4565b1515908501526101606112d38482016110a4565b1515908501526101806112e884820185610d59565b868403838801526112fa848284610da8565b93505050506101a061130e81850185610d59565b86840383880152611320848284610da8565b93505050506101c061133481850185610d59565b86840383880152611346848284610da8565b93505050506101e06113598185016110a4565b15159085015261020061136d848201610905565b6001600160a01b031690850152610220611388848201610905565b6001600160a01b03169401939093525090919050565b80356001600160e81b03198116811461091057600080fd5b6003811061082f57600080fd5b8035610910816113b6565b6003811061082f57634e487b7160e01b600052602160045260246000fd5b600081356113f9816113b6565b611402816113ce565b83526020820135611412816113b6565b61141b816113ce565b6020840152604082013536839003605e1901811261143857600080fd5b60606040850152820161144a816110a4565b1515606085015261145e6020820182610e1a565b6060608087015261147360c087018284610df1565b9150506114836040830183610e1a565b868303605f190160a08801529250610f92828483610df1565b8981526001600160a01b038981166020830152888116604083015287166060820152610120608082018190526000906114d783820189610d13565b905082810360a08401526114eb8188610ebc565b905082810360c08401526114ff8187610fce565b905082810360e08401526101006115168687611084565b818352611525828401826111df565b90506001600160e81b031961153c6020890161139e565b16602084015260408701356040840152606087013560608401526080870135608084015260a087013560a084015260c087013560c084015260e087013560e08401528481038286015261158f81876113ec565b9e9d5050505050505050505050505050565b6020808252601f908201527f696e76616c696420617267756d656e74202d207a65726f206164647265737300604082015260600190565b6000602082840312156115ea57600080fd5b8151610b1b816108f0565b8183823760009101908152919050565b61160e816113ce565b9052565b8981526001600160a01b0389811660208301528881166040830152871660608201526101206080820181905260009061164d83820189610d13565b83810360a085015261165f8189610ebc565b905083810360c08501526116738188610fce565b905083810360e085015261016061168a8788611084565b818352611699828401826111df565b9150506116af602083016111f160208a016110a4565b6116bb604088016110a4565b151560408301526116ce606088016110a4565b151560608301526116e1608088016110a4565b151560808301526116f460a088016110a4565b151560a083015261170760c088016110a4565b151560c083015261171a60e088016110a4565b151560e083015261010061172f8882016113c3565b61173b82850182611605565b5061174784890161139e565b6001600160e81b03198116848601525061014093508388013584840152858203818701525061158f81876113ec56fea2646970667358221220e778bc55b32949f371861a7f06f6687e5d4a48b7e3aa966bfa4bb838c553066764736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_implementationAuthority";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_idFactory";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_atsFactory";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
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
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_idFactory";
            readonly type: "address";
        }];
        readonly name: "IdFactorySet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_implementationAuthority";
            readonly type: "address";
        }];
        readonly name: "ImplementationAuthoritySet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_salt";
            readonly type: "string";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "name";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "symbol";
                readonly type: "string";
            }, {
                readonly internalType: "uint8";
                readonly name: "decimals";
                readonly type: "uint8";
            }, {
                readonly internalType: "address";
                readonly name: "irs";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "ONCHAINID";
                readonly type: "address";
            }, {
                readonly internalType: "address[]";
                readonly name: "irAgents";
                readonly type: "address[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "tokenAgents";
                readonly type: "address[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "complianceModules";
                readonly type: "address[]";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "complianceSettings";
                readonly type: "bytes[]";
            }];
            readonly internalType: "struct ITREXFactory.TokenDetails";
            readonly name: "_tokenDetails";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256[]";
                readonly name: "claimTopics";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "issuers";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256[][]";
                readonly name: "issuerClaims";
                readonly type: "uint256[][]";
            }];
            readonly internalType: "struct ITREXFactory.ClaimDetails";
            readonly name: "_claimDetails";
            readonly type: "tuple";
        }];
        readonly name: "deployTREXSuite";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_salt";
            readonly type: "string";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "irs";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "ONCHAINID";
                readonly type: "address";
            }, {
                readonly internalType: "address[]";
                readonly name: "irAgents";
                readonly type: "address[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "tokenAgents";
                readonly type: "address[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "complianceModules";
                readonly type: "address[]";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "complianceSettings";
                readonly type: "bytes[]";
            }];
            readonly internalType: "struct TREXFactoryAts.TokenDetailsAts";
            readonly name: "_tokenDetails";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256[]";
                readonly name: "claimTopics";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "issuers";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256[][]";
                readonly name: "issuerClaims";
                readonly type: "uint256[][]";
            }];
            readonly internalType: "struct ITREXFactory.ClaimDetails";
            readonly name: "_claimDetails";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "bool";
                    readonly name: "arePartitionsProtected";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isMultiPartition";
                    readonly type: "bool";
                }, {
                    readonly internalType: "contract TRexIBusinessLogicResolver";
                    readonly name: "resolver";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "key";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "version";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct TRexIFactory.ResolverProxyConfiguration";
                    readonly name: "resolverProxyConfiguration";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "role";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address[]";
                        readonly name: "members";
                        readonly type: "address[]";
                    }];
                    readonly internalType: "struct TRexIResolverProxy.Rbac[]";
                    readonly name: "rbacs";
                    readonly type: "tuple[]";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isControllable";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isWhiteList";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxSupply";
                    readonly type: "uint256";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "string";
                        readonly name: "name";
                        readonly type: "string";
                    }, {
                        readonly internalType: "string";
                        readonly name: "symbol";
                        readonly type: "string";
                    }, {
                        readonly internalType: "string";
                        readonly name: "isin";
                        readonly type: "string";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "decimals";
                        readonly type: "uint8";
                    }];
                    readonly internalType: "struct TRexIERC20.ERC20MetadataInfo";
                    readonly name: "erc20MetadataInfo";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "bool";
                    readonly name: "clearingActive";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "internalKycActivated";
                    readonly type: "bool";
                }, {
                    readonly internalType: "address[]";
                    readonly name: "externalPauses";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "address[]";
                    readonly name: "externalControlLists";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "address[]";
                    readonly name: "externalKycLists";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "bool";
                    readonly name: "erc20VotesActivated";
                    readonly type: "bool";
                }, {
                    readonly internalType: "address";
                    readonly name: "compliance";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "identityRegistry";
                    readonly type: "address";
                }];
                readonly internalType: "struct TRexIFactory.SecurityData";
                readonly name: "security";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bytes3";
                    readonly name: "currency";
                    readonly type: "bytes3";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "nominalValue";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "startingDate";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityDate";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct TRexIBondRead.BondDetailsData";
                readonly name: "bondDetails";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "couponFrequency";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "couponRate";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "firstCouponDate";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct TRexIBondRead.CouponDetailsData";
                readonly name: "couponDetails";
                readonly type: "tuple";
            }];
            readonly internalType: "struct TRexIFactory.BondData";
            readonly name: "_bondData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum RegulationType";
                readonly name: "regulationType";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum RegulationSubType";
                readonly name: "regulationSubType";
                readonly type: "uint8";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bool";
                    readonly name: "countriesControlListType";
                    readonly type: "bool";
                }, {
                    readonly internalType: "string";
                    readonly name: "listOfCountries";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "info";
                    readonly type: "string";
                }];
                readonly internalType: "struct AdditionalSecurityData";
                readonly name: "additionalSecurityData";
                readonly type: "tuple";
            }];
            readonly internalType: "struct FactoryRegulationData";
            readonly name: "_factoryRegulationData";
            readonly type: "tuple";
        }];
        readonly name: "deployTREXSuiteAtsBond";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_salt";
            readonly type: "string";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "irs";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "ONCHAINID";
                readonly type: "address";
            }, {
                readonly internalType: "address[]";
                readonly name: "irAgents";
                readonly type: "address[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "tokenAgents";
                readonly type: "address[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "complianceModules";
                readonly type: "address[]";
            }, {
                readonly internalType: "bytes[]";
                readonly name: "complianceSettings";
                readonly type: "bytes[]";
            }];
            readonly internalType: "struct TREXFactoryAts.TokenDetailsAts";
            readonly name: "_tokenDetails";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256[]";
                readonly name: "claimTopics";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "address[]";
                readonly name: "issuers";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256[][]";
                readonly name: "issuerClaims";
                readonly type: "uint256[][]";
            }];
            readonly internalType: "struct ITREXFactory.ClaimDetails";
            readonly name: "_claimDetails";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "bool";
                    readonly name: "arePartitionsProtected";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isMultiPartition";
                    readonly type: "bool";
                }, {
                    readonly internalType: "contract TRexIBusinessLogicResolver";
                    readonly name: "resolver";
                    readonly type: "address";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "key";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "version";
                        readonly type: "uint256";
                    }];
                    readonly internalType: "struct TRexIFactory.ResolverProxyConfiguration";
                    readonly name: "resolverProxyConfiguration";
                    readonly type: "tuple";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "bytes32";
                        readonly name: "role";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "address[]";
                        readonly name: "members";
                        readonly type: "address[]";
                    }];
                    readonly internalType: "struct TRexIResolverProxy.Rbac[]";
                    readonly name: "rbacs";
                    readonly type: "tuple[]";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isControllable";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isWhiteList";
                    readonly type: "bool";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxSupply";
                    readonly type: "uint256";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "string";
                        readonly name: "name";
                        readonly type: "string";
                    }, {
                        readonly internalType: "string";
                        readonly name: "symbol";
                        readonly type: "string";
                    }, {
                        readonly internalType: "string";
                        readonly name: "isin";
                        readonly type: "string";
                    }, {
                        readonly internalType: "uint8";
                        readonly name: "decimals";
                        readonly type: "uint8";
                    }];
                    readonly internalType: "struct TRexIERC20.ERC20MetadataInfo";
                    readonly name: "erc20MetadataInfo";
                    readonly type: "tuple";
                }, {
                    readonly internalType: "bool";
                    readonly name: "clearingActive";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "internalKycActivated";
                    readonly type: "bool";
                }, {
                    readonly internalType: "address[]";
                    readonly name: "externalPauses";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "address[]";
                    readonly name: "externalControlLists";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "address[]";
                    readonly name: "externalKycLists";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "bool";
                    readonly name: "erc20VotesActivated";
                    readonly type: "bool";
                }, {
                    readonly internalType: "address";
                    readonly name: "compliance";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "identityRegistry";
                    readonly type: "address";
                }];
                readonly internalType: "struct TRexIFactory.SecurityData";
                readonly name: "security";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bool";
                    readonly name: "votingRight";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "informationRight";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "liquidationRight";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "subscriptionRight";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "conversionRight";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "redemptionRight";
                    readonly type: "bool";
                }, {
                    readonly internalType: "bool";
                    readonly name: "putRight";
                    readonly type: "bool";
                }, {
                    readonly internalType: "enum TRexIEquity.DividendType";
                    readonly name: "dividendRight";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "bytes3";
                    readonly name: "currency";
                    readonly type: "bytes3";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "nominalValue";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct TRexIEquity.EquityDetailsData";
                readonly name: "equityDetails";
                readonly type: "tuple";
            }];
            readonly internalType: "struct TRexIFactory.EquityData";
            readonly name: "_equityData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum RegulationType";
                readonly name: "regulationType";
                readonly type: "uint8";
            }, {
                readonly internalType: "enum RegulationSubType";
                readonly name: "regulationSubType";
                readonly type: "uint8";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bool";
                    readonly name: "countriesControlListType";
                    readonly type: "bool";
                }, {
                    readonly internalType: "string";
                    readonly name: "listOfCountries";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "info";
                    readonly type: "string";
                }];
                readonly internalType: "struct AdditionalSecurityData";
                readonly name: "additionalSecurityData";
                readonly type: "tuple";
            }];
            readonly internalType: "struct FactoryRegulationData";
            readonly name: "_factoryRegulationData";
            readonly type: "tuple";
        }];
        readonly name: "deployTREXSuiteAtsEquity";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getIdFactory";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getImplementationAuthority";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_salt";
            readonly type: "string";
        }];
        readonly name: "getToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_contract";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_newOwner";
            readonly type: "address";
        }];
        readonly name: "recoverContractOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_atsFactory";
            readonly type: "address";
        }];
        readonly name: "setAtsFactory";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_idFactory";
            readonly type: "address";
        }];
        readonly name: "setIdFactory";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_implementationAuthority";
            readonly type: "address";
        }];
        readonly name: "setImplementationAuthority";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "tokenDeployed";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TREXFactoryAtsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TREXFactoryAts;
}
export interface TREXFactoryAtsLibraryAddresses {
    ["contracts/factory/ERC3643/libraries/TREXBondDeploymentLib.sol:TREXBondDeploymentLib"]: string;
    ["contracts/factory/ERC3643/libraries/TREXEquityDeploymentLib.sol:TREXEquityDeploymentLib"]: string;
}
export {};
