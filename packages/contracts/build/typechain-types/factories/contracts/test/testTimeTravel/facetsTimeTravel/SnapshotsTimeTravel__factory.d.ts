import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { SnapshotsTimeTravel, SnapshotsTimeTravelInterface } from "../../../../../contracts/test/testTimeTravel/facetsTimeTravel/SnapshotsTimeTravel";
type SnapshotsTimeTravelConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SnapshotsTimeTravel__factory extends ContractFactory {
    constructor(...args: SnapshotsTimeTravelConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SnapshotsTimeTravel>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SnapshotsTimeTravel;
    connect(signer: Signer): SnapshotsTimeTravel__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a4661001f565b610043565b8061053914610040576040516217e1ef60ea1b815260040160405180910390fd5b50565b6126e080620000536000396000f3fe608060405234801561001057600080fd5b50600436106100f65760003560e01c8063977a3a7111610092578063977a3a71146101eb578063b378cf37146101fe578063b3d3d37e14610213578063b52e39aa1461021b578063c1f0d7421461022e578063d22a73df14610236578063d9e6f16414610256578063da35f8f614610269578063e002bcdf1461027c57600080fd5b806309e84301146100fb5780631ef2fdc8146101245780632bc16e9b14610154578063386e1405146101675780634a13f5d01461017a57806369ed346f1461018d578063867126e1146101b25780638e00ae2e146101c55780639657ddb9146101d8575b600080fd5b61010e6101093660046122b8565b61028f565b60405161011b91906122db565b60405180910390f35b7f9a3fc46d83536ef6b87eb4fec37302bfd1a7c18e81ea2da853b911b44cf5b0cf5b60405190815260200161011b565b6101466101623660046122b8565b6102a4565b61014661017536600461231f565b6102b0565b61014661018836600461231f565b6102c5565b6101a061019b366004612354565b6102d2565b60405160ff909116815260200161011b565b6101466101c0366004612354565b6102dd565b6101466101d33660046122b8565b6102e8565b6101466101e636600461236d565b6102f4565b6101466101f936600461231f565b610300565b61020661030d565b60405161011b919061238f565b610146610373565b6101466102293660046122b8565b6103c1565b6102066103cd565b6102496102443660046123d1565b61076d565b60405161011b91906123fd565b6101466102643660046122b8565b610781565b610146610277366004612354565b61078d565b61014661028a36600461231f565b610798565b606061029b83836107a5565b90505b92915050565b600061029b838361086a565b60006102bd8484846108a2565b949350505050565b60006102bd8484846108e1565b600061029e82610920565b600061029e8261094f565b600061029b8383610979565b600061029b8383610985565b60006102bd8484846109ae565b604080516001808252818301909252606091602080830190803683370190505090506000630d86308960e21b82826103448161246a565b93508151811061035657610356612483565b6001600160e01b0319909216602092830291909101909101525090565b600061037d6109ed565b7f3fbb44760c0954eea3f6cb9f1f210568f5ae959dcbbef66e72f749dbaa7cc2da6103a88133610a15565b6103b26000610a57565b506103bb610a93565b91505090565b600061029b8383610ad0565b60408051600f808252610200820190925260609160009190602082016101e0803683370190505091506359e9e9bf60e11b82826104098161246a565b93508151811061041b5761041b612483565b6001600160e01b031990921660209283029190910190910152634700571760e11b82826104478161246a565b93508151811061045957610459612483565b6001600160e01b031990921660209283029190910190910152636d1afc7b60e11b82826104858161246a565b93508151811061049757610497612483565b6001600160e01b03199092166020928302919091019091015263e002bcdf60e01b82826104c38161246a565b9350815181106104d5576104d5612483565b6001600160e01b0319909216602092830291909101909101526309e8430160e01b82826105018161246a565b93508151811061051357610513612483565b6001600160e01b031990921660209283029190910190910152639657ddb960e01b828261053f8161246a565b93508151811061055157610551612483565b6001600160e01b031990921660209283029190910190910152633679bc5960e21b828261057d8161246a565b93508151811061058f5761058f612483565b6001600160e01b0319909216602092830291909101909101526304a13f5d60e41b82826105bb8161246a565b9350815181106105cd576105cd612483565b6001600160e01b031990921660209283029190910190910152635a971cd560e11b82826105f98161246a565b93508151811061060b5761060b612483565b6001600160e01b03199092166020928302919091019091015263977a3a7160e01b82826106378161246a565b93508151811061064957610649612483565b6001600160e01b031990921660209283029190910190910152632bc16e9b60e01b82826106758161246a565b93508151811061068757610687612483565b6001600160e01b03199092166020928302919091019091015263386e140560e01b82826106b38161246a565b9350815181106106c5576106c5612483565b6001600160e01b0319909216602092830291909101909101526369ed346f60e01b82826106f18161246a565b93508151811061070357610703612483565b6001600160e01b03199092166020928302919091019091015263d22a73df60e01b828261072f8161246a565b93508151811061074157610741612483565b6001600160e01b03199092166020928302919091019091015263867126e160e01b82826103448161246a565b60606102bd848484610b03565b9392505050565b600061029b8383610c1c565b600061029e82610c57565b60006102bd848484610c62565b606060006107b1610c6f565b6001600160a01b0384166000908152600291909101602052604081209150806107da8684610c93565b91509150816107f6576107ec85610d14565b935050505061029e565b82600101818154811061080b5761080b612483565b600091825260209182902001805460408051828502810185019091528181529283018282801561085a57602002820191906000526020600020905b815481526020019060010190808311610846575b5050505050935050505092915050565b600061029b83610878610c6f565b6001600160a01b0385166000908152600b919091016020526040902061089d85610e1d565b610e84565b60006102bd836108b0610c6f565b6001600160a01b0385166000908152600c9190910160209081526040808320898452909152902061089d8786610f04565b60006102bd836108ef610c6f565b6001600160a01b038516600090815260079190910160209081526040808320898452909152902061089d8786610f72565b600080600061093984610931610c6f565b600f01610f97565b915091508161077a5761094a610fe5565b6102bd565b600080600061096884610960610c6f565b601401610f97565b915091508161077a5761094a610ffc565b600061029b828461100f565b600061029b82610993610c6f565b60008681526008919091016020526040902061089d8661103f565b60006102bd836109bc610c6f565b6001600160a01b0385166000908152600a9190910160209081526040808320898452909152902061089d8786611062565b6109f5611087565b15610a135760405163649815a560e01b815260040160405180910390fd5b565b610a1f82826110bc565b610a535760405163a1180aad60e01b81526001600160a01b0382166004820152602481018390526044015b60405180910390fd5b5050565b600061029e7f2352c39c61abb4e922588a7d46fb5c925b9a205577be135537479031648c86fe63df1eb07160e01b84610a8e6110e9565b6110f3565b6000610a9d6112d2565b604051909150819033907fd252178ed4aae4bc61be5bc8161b97bca1aae7b7fbde4523d5f4498cfca4276390600090a390565b600061029b83610ade610c6f565b6001600160a01b03851660009081526009919091016020526040902061089d85611332565b6060600080610b128585611355565b915091506000610b2b8383610b268a61094f565b611377565b67ffffffffffffffff811115610b4357610b4361243e565b604051908082528060200260200182016040528015610b6c578160200160208202803683370190505b50905060005b8151811015610c11576000610b88826001612499565b9050600080610bb08b610b99610c6f565b6000868152601391909101602052604090206113ad565b9150915081610bc757610bc283611404565b610bc9565b805b858581518110610bdb57610bdb612483565b60200260200101906001600160a01b031690816001600160a01b0316815250505050508080610c099061246a565b915050610b72565b509695505050505050565b600061029b83610c2a610c6f565b6001600160a01b03851660009081526006919091016020526040902061089d85610c526110e9565b61142b565b600061029e82611444565b60006102bd84838561146e565b7f450898ebb84982a28d8787f0138cfce477c6d811ae3b1db5fdb7ed17e8bda89890565b60008083600003610cb75760405163f128004d60e01b815260040160405180910390fd5b610cbf6114ad565b841115610ce257604051638e81eb8360e01b815260048101859052602401610a4a565b6000610cee84866114c1565b84549091508103610d06576000809250925050610d0d565b6001925090505b9250929050565b60606000610d20611562565b6001600160a01b03841660009081526003820160205260408120549192509067ffffffffffffffff811115610d5757610d5761243e565b604051908082528060200260200182016040528015610d80578160200160208202803683370190505b50905060005b6001600160a01b0385166000908152600384016020526040902054811015610e15576001600160a01b03851660009081526003840160205260409020805482908110610dd457610dd4612483565b906000526020600020906002020160010154828281518110610df857610df8612483565b602090810291909101015280610e0d8161246a565b915050610d86565b509392505050565b600080610e39610e2b611586565b610e3485611598565b6115c4565b905080610e7a846001600160a01b031660009081527ff5d5af29c37f2085b9f37cfb2259d4e3b957777d47ffc1949a7596cb1d37ba91602052604090205490565b61077a91906124ac565b6000806000610e938686610f97565b915091508115610ea657915061077a9050565b6000610eb1876115ef565b90506000610ebd611615565b9050808203610ed2578594505050505061077a565b81600003610edf57600191505b6000610eeb83836124c3565b9050610ef781886124c3565b9998505050505050505050565b600080610f1c610f12611586565b610e348686611628565b905080610f6885856001600160a01b031660009081527ff5d5af29c37f2085b9f37cfb2259d4e3b957777d47ffc1949a7596cb1d37ba9260209081526040808320938352929052205490565b6102bd91906124ac565b600080610f8a610f80611586565b610e34868661165e565b905080610f688585611694565b6000808080610fa68686610c93565b915091508182610fb7576000610fd8565b856001018281548110610fcc57610fcc612483565b90600052602060002001545b9350935050509250929050565b6000610ff7610ff26110e9565b6116e4565b905090565b6000611006611562565b60080154905090565b600061029b8261101d610c6f565b6001600160a01b03861660009081526020919091526040902061089d866116fa565b60008061105661104d611586565b610e348561170d565b905080610e7a8461172b565b60008061107a611070611586565b610e348686611749565b905080610f68858561177f565b60007f5a5b295532a8b6e97bc9d45d68fc49b85a099545bac8f91f77706d392a1cea715460ff1680610ff75750610ff76117a7565b600061029b7f4765bbd856d800638d39a79262ebc6fdfb5833d0e59f32c5d482fe4c4a3554c1848461187b565b6000610ff761189f565b600080611101866001015490565b9050806000036111155760009150506102bd565b83600082821180611124575081155b1561112d578291505b60015b8281116112c657600061114382866124e5565b905060006111518b836118b4565b905087816000015110156112aa576111688b611983565b60028b01805460ff191660011790556020810151604051600091829130918e916111999188918d919060240161251c565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516111d7919061255d565b600060405180830381855af49150503d8060008114611212576040519150601f19603f3d011682016040523d82523d6000602084013e611217565b606091505b509150915081611297578051156112315780518082602001fd5b60405162461bcd60e51b815260206004820152603560248201527f6f6e5363686564756c65645461736b547269676765726564206d6574686f64206044820152743330b4b632b2103bb4ba3437baba103932b0b9b7b760591b6064820152608401610a4a565b505060028b01805460ff191690556112b1565b50506112c6565b505080806112be9061246a565b915050611130565b50979650505050505050565b60006112eb6112df610c6f565b60050180546001019055565b60006112f56114ad565b60405181815290915033907fa25b876b2f3947e9c6cc9e952e8f278d53aeaddffe3aec1c86bc75c491d60a199060200160405180910390a2919050565b600080611349611340611586565b610e34856119ec565b905080610e7a84611a18565b60008061136283856124ac565b915061136e8383612499565b90509250929050565b60008284106113885750600061077a565b8184106113975750600061077a565b818311156113a3578192505b6102bd84846124e5565b60008080806113bc8686610c93565b9150915081826113cd576000610fd8565b8560010182815481106113e2576113e2612483565b6000918252602090912001546001600160a01b03169350935050509250929050565b600061140e611562565b60009283526007016020525060409020546001600160a01b031690565b6000806114388484611a5b565b905080610f6885611a93565b600080600061145d84611455610c6f565b600301610f97565b915091508161077a5761094a611abb565b60006102bd8261147c610c6f565b6001600160a01b038616600090815260019190910160209081526040808320898452909152902061089d8787611acb565b6000610ff76114ba610c6f565b6005015490565b815460009081036114d45750600061029e565b82546000905b8082101561151e5760006114ee8383611adf565b9050846114fb8783611afa565b54111561150a57809150611518565b611515816001612499565b92505b506114da565b60008211801561154157508361153e866115396001866124e5565b611afa565b54145b1561155a576115516001836124e5565b9250505061029e565b50905061029e565b7f67661db80d37d3b9810c430f78991b4b5377bdebd3b71b39fbd3427092c1822a90565b6000610ff76115936110e9565b611b0b565b60006115a2611b3c565b6001600160a01b039092166000908152600b9290920160205250604090205490565b6000826000036115d65750600161029e565b816000036115e557508161029e565b61029b82846124c3565b600080600061160884611600610c6f565b600d01610f97565b915091508161077a5761094a5b600061161f611b3c565b60010154905090565b6000611632611b3c565b6001600160a01b03929092166000908152600c9092016020908152604080842094845293905250205490565b6000611668611b3c565b6001600160a01b0392909216600090815260069092016020908152604080842094845293905250205490565b60007fd15962e60f276260fba4c9b4de7fd05f475afe18b48c917ec6f6fcc71c00bf715b6001600160a01b0392909216600090815260019092016020908152604080842094845293905250205490565b60006116ef82611b60565b516060015192915050565b600061029e826117086110e9565b611ba3565b6000611717611b3c565b600092835260030160205250604090205490565b6000611735611562565b600092835260010160205250604090205490565b6000611753611b3c565b6001600160a01b0392909216600090815260099092016020908152604080842094845293905250205490565b60007f80346b80475a6f26abb9f460d81c6dbe6a8dd5d1acfb0827cfe37c4263a562ca6116b8565b60007f80cd138137fb7aaf8068b75b39b6681af39401f81721b6420d44eb588baaeeb9816117d482611bc7565b905060005b81811015611871576117ee6001840182611bd5565b6001600160a01b031663b187bd266040518163ffffffff1660e01b8152600401602060405180830381865afa15801561182b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184f9190612579565b1561185e576001935050505090565b60010161186a8161246a565b90506117d9565b5060009250505090565b6001600160a01b038116600090815260018401602052604081206102bd9084611be1565b60008054156118af575060005490565b504290565b6040805180820190915260008152606060208201526000828152602084815260409182902082518084019093528054835260018101805491928401916118f99061259b565b80601f01602080910402602001604051908101604052809291908181526020018280546119259061259b565b80156119725780601f1061194757610100808354040283529160200191611972565b820191906000526020600020905b81548152906001019060200180831161195557829003601f168201915b505050505081525050905092915050565b6000611990826001015490565b90508060000361199e575050565b8160006119ac6001846124e5565b815260208101919091526040016000908120818155906119cf6001830182612210565b50506001820180549060006119e3836125d5565b91905055505050565b60006119f6611b3c565b6001600160a01b03909216600090815260089290920160205250604090205490565b60007f80346b80475a6f26abb9f460d81c6dbe6a8dd5d1acfb0827cfe37c4263a562ca5b6001600160a01b03909216600090815260209290925250604090205490565b600061029b611a6983611b0b565b611a71611b3c565b6001600160a01b038616600090815260059190910160205260409020546115c4565b60007fd15962e60f276260fba4c9b4de7fd05f475afe18b48c917ec6f6fcc71c00bf71611a3c565b6000611ac5611562565b54919050565b600061029b8383611ada6110e9565b611bf9565b6000611aee60028484186124c3565b61029b90848416612499565b6000828152602081208201806102bd565b600080611b16611615565b905080600003611b24575060015b6000611b2f84611c32565b5090506102bd81836124ac565b7f20765daced38554542b3c858f10e7fb957696c4dbd38d7faabc51dd4de7ad54190565b611b6861224d565b6000611b7383611c32565b915050611b7e611d3f565b9150808260000151606001818151611b9691906125ec565b60ff169052509092915050565b600080611bbb611bb284611b0b565b610e3486611f72565b905080610f6885611f9e565b600061029e82600101611fa8565b600061029b8383611fb2565b6000818152600183016020526040812054151561029b565b600080611c12611c0884611b0b565b610e348787611fdc565b905080611c1f8686612072565b611c2991906124ac565b95945050505050565b7faf4aaa3de473ec9b58645d40f5a2fe4e176157e247b2d875db61f1a70935ac69546001906000907faf4aaa3de473ec9b58645d40f5a2fe4e176157e247b2d875db61f1a70935ac689060015b818111611d37576000611c9282846124e5565b90506000611ca085836118b4565b90508781600001511015611d1b5760008160200151806020019051810190611cc89190612605565b90506000611cd5826120ff565b9050600081806020019051810190611ced919061261e565b905080602001518a611cff91906124ac565b9950806040015189611d1191906125ec565b9850505050611d22565b5050611d37565b50508080611d2f9061246a565b915050611c7f565b505050915091565b611d4761224d565b60007fd5228ac65cba3eaaef0669de6709c44cfdf33c0f1cce2989d4a133e0214cce57905060006040518060800160405280836000018054611d889061259b565b80601f0160208091040260200160405190810160405280929190818152602001828054611db49061259b565b8015611e015780601f10611dd657610100808354040283529160200191611e01565b820191906000526020600020905b815481529060010190602001808311611de457829003601f168201915b50505050508152602001836001018054611e1a9061259b565b80601f0160208091040260200160405190810160405280929190818152602001828054611e469061259b565b8015611e935780601f10611e6857610100808354040283529160200191611e93565b820191906000526020600020905b815481529060010190602001808311611e7657829003601f168201915b50505050508152602001836002018054611eac9061259b565b80601f0160208091040260200160405190810160405280929190818152602001828054611ed89061259b565b8015611f255780601f10611efa57610100808354040283529160200191611f25565b820191906000526020600020905b815481529060010190602001808311611f0857829003601f168201915b5050509183525050600384015460ff9081166020928301526040805180820190915283815260058601549394509291830191166001811115611f6957611f69612694565b90529392505050565b6000611f7c611b3c565b6001600160a01b03909216600090815260029290920160205250604090205490565b6000611f7c611562565b600061029e825490565b6000826000018281548110611fc957611fc9612483565b9060005260206000200154905092915050565b600080611fe7611562565b6001600160a01b038416600090815260049190910160209081526040808320878452909152812054915081900361202257600091505061029e565b61202a611b3c565b6001600160a01b03841660009081526020919091526040902061204e6001836124e5565b8154811061205e5761205e612483565b906000526020600020015491505092915050565b600061207e83836121c3565b156120f757600061208d611562565b6001600160a01b0384166000908152600382016020908152604080832060048501835281842089855290925290912054919250906120cd906001906124e5565b815481106120dd576120dd612483565b90600052602060002090600202016000015491505061029e565b50600061029e565b60008181527f9db84024bbea48a7580380e27785cf3e0d08fada233c84760c8a5aff47f86e146020526040902060010180546060919061213e9061259b565b80601f016020809104026020016040519081016040528092919081815260200182805461216a9061259b565b80156121b75780601f1061218c576101008083540402835291602001916121b7565b820191906000526020600020905b81548152906001019060200180831161219a57829003601f168201915b50505050509050919050565b6000806121ce611562565b6001600160a01b038416600090815260048201602090815260408083208884529091528120549192500361220657600091505061029e565b600191505061029e565b50805461221c9061259b565b6000825580601f1061222c575050565b601f01602090049060005260206000209081019061224a9190612283565b50565b6040805160c08101825260609181018281528282018390526080820192909252600060a082015290819081526020016000905290565b5b808211156122985760008155600101612284565b5090565b80356001600160a01b03811681146122b357600080fd5b919050565b600080604083850312156122cb57600080fd5b8235915061136e6020840161229c565b6020808252825182820181905260009190848201906040850190845b81811015612313578351835292840192918401916001016122f7565b50909695505050505050565b60008060006060848603121561233457600080fd5b833592506020840135915061234b6040850161229c565b90509250925092565b60006020828403121561236657600080fd5b5035919050565b6000806040838503121561238057600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b818110156123135783516001600160e01b031916835292840192918401916001016123ab565b6000806000606084860312156123e657600080fd5b505081359360208301359350604090920135919050565b6020808252825182820181905260009190848201906040850190845b818110156123135783516001600160a01b031683529284019291840191600101612419565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161247c5761247c612454565b5060010190565b634e487b7160e01b600052603260045260246000fd5b8082018082111561029e5761029e612454565b808202811582820484141761029e5761029e612454565b6000826124e057634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561029e5761029e612454565b60005b838110156125135781810151838201526020016124fb565b50506000910152565b83815282602082015260606040820152600082518060608401526125478160808501602087016124f8565b601f01601f191691909101608001949350505050565b6000825161256f8184602087016124f8565b9190910192915050565b60006020828403121561258b57600080fd5b8151801515811461077a57600080fd5b600181811c908216806125af57607f821691505b6020821081036125cf57634e487b7160e01b600052602260045260246000fd5b50919050565b6000816125e4576125e4612454565b506000190190565b60ff818116838216019081111561029e5761029e612454565b60006020828403121561261757600080fd5b5051919050565b60006060828403121561263057600080fd5b6040516060810181811067ffffffffffffffff8211171561266157634e487b7160e01b600052604160045260246000fd5b80604052508251815260208301516020820152604083015160ff8116811461268857600080fd5b60408201529392505050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220fbe4c96335f391b889fc7e366b92087f9982a28879106464473331892bdef77664736f6c63430008120033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "AccountHasNoRole";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "roles";
            readonly type: "bytes32[]";
        }];
        readonly name: "AccountHasNoRoles";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "AccountIsBlocked";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AllBusinessLogicKeysMustBeenInformed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyInitialized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "BalanceAdjustmentCreationFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "BondMaturityDateWrong";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "businessLogicKey";
            readonly type: "bytes32";
        }];
        readonly name: "BusinessLogicKeyDuplicated";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "businessLogicKey";
            readonly type: "bytes32";
        }];
        readonly name: "BusinessLogicNotActive";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version";
            readonly type: "uint256";
        }];
        readonly name: "BusinessLogicVersionDoesNotExist";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CouponCreationFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CouponFirstDateWrong";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CouponFrequencyWrong";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DividendCreationFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpirationNotReached";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FactorIsZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }];
        readonly name: "InsufficientAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "requestedUnfreeze";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "availableFrozen";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }];
        readonly name: "InsufficientFrozenBalance";
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
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }];
        readonly name: "InvalidPartition";
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
        readonly name: "IssuanceIsClosed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LockExpirationNotReached";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxSupply";
            readonly type: "uint256";
        }];
        readonly name: "MaxSupplyReached";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxSupply";
            readonly type: "uint256";
        }];
        readonly name: "MaxSupplyReachedForPartition";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "newMaxSupplyByPartition";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxSupply";
            readonly type: "uint256";
        }];
        readonly name: "NewMaxSupplyByPartitionTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NewMaxSupplyCannotBeZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalSupply";
            readonly type: "uint256";
        }];
        readonly name: "NewMaxSupplyForPartitionTooLow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "maxSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalSupply";
            readonly type: "uint256";
        }];
        readonly name: "NewMaxSupplyTooLow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotAllowedInMultiPartitionMode";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotAutocalling";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyDelegateAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }];
        readonly name: "PartitionNotAllowedInSinglePartitionMode";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "PartitionsAreProtectedAndNoRole";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PartitionsAreUnProtected";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "rolesLength";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "activesLength";
            readonly type: "uint256";
        }];
        readonly name: "RolesAndActivesLengthMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }];
        readonly name: "SnapshotIdDoesNotExists";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SnapshotIdNull";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SpenderWithZeroAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenIsNotControllable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenIsPaused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenIsUnpaused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }];
        readonly name: "Unauthorized";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotingRightsCreationFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongChainId";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongExpirationTimestamp";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongLockId";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "WrongSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "timeStamp";
            readonly type: "uint256";
        }];
        readonly name: "WrongTimestamp";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroAddressNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroKeyNotValidForBusinessLogic";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroOwnerAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroPartition";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZeroValue";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "factor";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "decimals";
            readonly type: "uint8";
        }];
        readonly name: "AdjustmentBalanceSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }];
        readonly name: "AuthorizedOperator";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }];
        readonly name: "AuthorizedOperatorByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "expirationTimestamp";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "escrow";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly indexed: false;
            readonly internalType: "struct Hold";
            readonly name: "hold";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ClearedHoldByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "expirationTimestamp";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "escrow";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly indexed: false;
            readonly internalType: "struct Hold";
            readonly name: "hold";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ClearedHoldFromByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "expirationTimestamp";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "escrow";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly indexed: false;
            readonly internalType: "struct Hold";
            readonly name: "hold";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ClearedOperatorHoldByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ClearedOperatorRedeemByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ClearedOperatorTransferByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ClearedRedeemByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ClearedRedeemFromByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ClearedTransferByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ClearedTransferFromByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "compliance";
            readonly type: "address";
        }];
        readonly name: "ComplianceAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_controller";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ControllerRedemption";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_controller";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ControllerTransfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "corporateActionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "couponId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "recordDate";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "executionDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "rate";
            readonly type: "uint256";
        }];
        readonly name: "CouponSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "fromDelegate";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "toDelegate";
            readonly type: "address";
        }];
        readonly name: "DelegateChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegate";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "previousBalance";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newBalance";
            readonly type: "uint256";
        }];
        readonly name: "DelegateVotesChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "corporateActionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "dividendId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "recordDate";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "executionDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "DividendSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "FinalizedControllerFeature";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "Issued";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "IssuedByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "bondId";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "maturityDate";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "previousMaturityDate";
            readonly type: "uint256";
        }];
        readonly name: "MaturityDateUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxSupply";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "previousMaxSupply";
            readonly type: "uint256";
        }];
        readonly name: "MaxSupplyByPartitionSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newMaxSupply";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "previousMaxSupply";
            readonly type: "uint256";
        }];
        readonly name: "MaxSupplySet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationTimestamp";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lockId";
            readonly type: "uint256";
        }];
        readonly name: "PartitionTransferredAndLocked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "PartitionsProtected";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "PartitionsUnProtected";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "expirationTimestamp";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "escrow";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly indexed: false;
            readonly internalType: "struct Hold";
            readonly name: "hold";
            readonly type: "tuple";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ProtectedClearedHoldByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ProtectedClearedRedeemByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "clearingId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "expirationDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "ProtectedClearedTransferByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nounce";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "ProtectedRedeemFrom";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "nounce";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "ProtectedTransferFrom";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "Redeemed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "operatorData";
            readonly type: "bytes";
        }];
        readonly name: "RedeemedByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }];
        readonly name: "RevokedOperator";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "partition";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "tokenHolder";
            readonly type: "address";
        }];
        readonly name: "RevokedOperatorByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "corporateActionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "balanceAdjustmentId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "executionDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "factor";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "decimals";
            readonly type: "uint256";
        }];
        readonly name: "ScheduledBalanceAdjustmentSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "snapshotID";
            readonly type: "uint256";
        }];
        readonly name: "SnapshotTaken";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }];
        readonly name: "SnapshotTriggered";
        readonly type: "event";
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "TokenPaused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }];
        readonly name: "TokenUnpaused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "_fromPartition";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "_operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "_operatorData";
            readonly type: "bytes";
        }];
        readonly name: "TransferByPartition";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "corporateActionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "voteId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "recordDate";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "VotingSet";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }];
        readonly name: "balanceOfAtSnapshot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_partition";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }];
        readonly name: "balanceOfAtSnapshotByPartition";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }];
        readonly name: "clearedBalanceOfAtSnapshot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_partition";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }];
        readonly name: "clearedBalanceOfAtSnapshotByPartition";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }];
        readonly name: "decimalsAtSnapshot";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "decimals_";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pageIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pageLength";
            readonly type: "uint256";
        }];
        readonly name: "getTokenHoldersAtSnapshot";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "holders_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }];
        readonly name: "getTotalTokenHoldersAtSnapshot";
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
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }];
        readonly name: "heldBalanceOfAtSnapshot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_partition";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }];
        readonly name: "heldBalanceOfAtSnapshotByPartition";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }];
        readonly name: "lockedBalanceOfAtSnapshot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_partition";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }];
        readonly name: "lockedBalanceOfAtSnapshotByPartition";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }];
        readonly name: "partitionsOfAtSnapshot";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "takeSnapshot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "snapshotID_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }];
        readonly name: "totalSupplyAtSnapshot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalSupply_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_partition";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_snapshotID";
            readonly type: "uint256";
        }];
        readonly name: "totalSupplyAtSnapshotByPartition";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "totalSupply_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): SnapshotsTimeTravelInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SnapshotsTimeTravel;
}
export {};
