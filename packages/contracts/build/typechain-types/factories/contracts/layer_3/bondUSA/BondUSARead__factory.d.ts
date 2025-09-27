import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { BondUSARead, BondUSAReadInterface } from "../../../../contracts/layer_3/bondUSA/BondUSARead";
type BondUSAReadConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BondUSARead__factory extends ContractFactory {
    constructor(...args: BondUSAReadConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BondUSARead>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BondUSARead;
    connect(signer: Signer): BondUSARead__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506124b8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100bf5760003560e01c8063936e31691161007c578063936e316914610190578063a92e8371146101d2578063b378cf37146101e5578063bba7b56d146101fa578063bd007c8f1461025e578063c1f0d74214610266578063ec116ae31461026e57600080fd5b80631ef2fdc8146100c4578063468bb240146100f95780634ce024141461010157806381438d2f1461014657806382c5582a146101665780638fda5afe1461017b575b600080fd5b7fe7ca0b805514da05524faf33d2d9d9432bf1dfa53096073a7267041cfdfb6d685b6040519081526020015b60405180910390f35b6100e6610281565b610109610290565b6040516100f0919081516001600160e81b031916815260208083015190820152604080830151908201526060918201519181019190915260800190565b610159610154366004611fb9565b6102a0565b6040516100f09190611fdb565b61016e6102b5565b6040516100f09190612028565b6101836102e1565b6040516100f0919061210f565b6101a361019e3660046121be565b6102f1565b6040805182518051825260208082015181840152908301519282019290925291015160608201526080016100f0565b6101596101e03660046121d7565b61032e565b6101ed610345565b6040516100f09190612203565b61020d610208366004612245565b6103e9565b6040516100f09190600060c0820190508251825260208301516020830152604083015160408301526060830151606083015260ff608084015116608083015260a0830151151560a083015292915050565b6100e6610428565b6101ed610432565b6100e661027c3660046121be565b61069c565b600061028b6106a7565b905090565b610298611e66565b61028b6106c0565b60606102ac838361077e565b90505b92915050565b6102d960405180606001604052806000815260200160008152602001600081525090565b61028b610884565b6102e9611e98565b61028b61092a565b6102f9611ece565b600080516020612463833981519152610313600184612297565b61031d8282610c03565b61032684610c3e565b949350505050565b606061033b848484610ccc565b90505b9392505050565b604080516003808252608082019092526060916020820183803683370190505090506000631cab147d60e31b828261037c816122c0565b93508151811061038e5761038e6122d9565b6001600160e01b0319909216602092830291909101909101526359ccd5af60e11b82826103ba816122c0565b9350815181106103cc576103cc6122d9565b6001600160e01b0319909216602092830291909101909101525090565b6103f1611f0a565b60008051602061246383398151915261040b600185612297565b6104158282610c03565b61041f8585610d25565b95945050505050565b600061028b610e32565b60408051600a8082526101608201909252606091600091906020820161014080368337019050509150631338090560e21b828261046e816122c0565b935081518110610480576104806122d9565b6001600160e01b031990921660209283029190910190910152634162ac1560e11b82826104ac816122c0565b9350815181106104be576104be6122d9565b6001600160e01b03199092166020928302919091019091015263936e316960e01b82826104ea816122c0565b9350815181106104fc576104fc6122d9565b6001600160e01b03199092166020928302919091019091015263bba7b56d60e01b8282610528816122c0565b93508151811061053a5761053a6122d9565b6001600160e01b03199092166020928302919091019091015263011a2ec960e61b8282610566816122c0565b935081518110610578576105786122d9565b6001600160e01b03199092166020928302919091019091015263a92e837160e01b82826105a4816122c0565b9350815181106105b6576105b66122d9565b6001600160e01b03199092166020928302919091019091015263ec116ae360e01b82826105e2816122c0565b9350815181106105f4576105f46122d9565b6001600160e01b0319909216602092830291909101909101526347ed2d7f60e11b8282610620816122c0565b935081518110610632576106326122d9565b6001600160e01b0319909216602092830291909101909101526381438d2f60e01b828261065e816122c0565b935081518110610670576106706122d9565b6001600160e01b03199092166020928302919091019091015263bd007c8f60e01b82826103ba816122c0565b60006102af82610e45565b600061028b600080516020612463833981519152610e84565b6106c8611e66565b50604080516080810182527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f2b5460e81b6001600160e81b03191681527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f2c5460208201527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f2d54918101919091527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f2e54606082015290565b606060008061078d8585610ea8565b915091506107a3828261079e610e32565b610eca565b67ffffffffffffffff8111156107bb576107bb6122aa565b6040519080825280602002602001820160405280156107e4578160200160208202803683370190505b509250816107f1816122c0565b92505060006107fe610f00565b905060005b845181101561087a5760078201600061081c83876122ef565b815260200190815260200160002060009054906101000a90046001600160a01b0316858281518110610850576108506122d9565b6001600160a01b039092166020928302919091019091015280610872816122c0565b915050610803565b5050505092915050565b6108a860405180606001604052806000815260200160008152602001600081525090565b50604080516060810182527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f2f5481527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f305460208201527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f31549181019190915290565b610932611e98565b7f95205812666aa702c6386778a59ee67a93a9559063c49d34d12e4072e5995379604080516101408101825282549092918391908201908390829060ff16600281111561098157610981612049565b600281111561099257610992612049565b81528154602090910190610100900460ff1660028111156109b5576109b5612049565b60028111156109c6576109c6612049565b81526001828101546020830152600283015460409092019160ff16908111156109f1576109f1612049565b6001811115610a0257610a02612049565b815260038201546020820152600482015460409091019060ff166001811115610a2d57610a2d612049565b6001811115610a3e57610a3e612049565b81526020016004820160019054906101000a900460ff166001811115610a6657610a66612049565b6001811115610a7757610a77612049565b81526020016004820160029054906101000a900460ff166001811115610a9f57610a9f612049565b6001811115610ab057610ab0612049565b9052508152604080516060810190915260058301805460ff161515825260068401805460209485019484019190610ae690612302565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1290612302565b8015610b5f5780601f10610b3457610100808354040283529160200191610b5f565b820191906000526020600020905b815481529060010190602001808311610b4257829003601f168201915b50505050508152602001600282018054610b7890612302565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba490612302565b8015610bf15780601f10610bc657610100808354040283529160200191610bf1565b820191906000526020600020905b815481529060010190602001808311610bd457829003601f168201915b50505050508152505081525050905090565b80610c0d83610e84565b11610c3a576040516369c927a760e11b815260048101829052602481018390526044015b60405180910390fd5b5050565b610c46611ece565b6000610c85610c56600185612297565b610c5e610f24565b60008051602061246383398151915260009081526003919091016020526040902090610f48565b90506000610c9282610f54565b915050600081511115610cb65780806020019051810190610cb39190612373565b83525b610cbf82611010565b6020840152509092915050565b60606000610cd985610c3e565b90504281515110610cfa57505060408051600081526020810190915261033e565b602081015115610d1b57610d1381602001518585611041565b91505061033e565b61041f848461077e565b610d2d611f0a565b6000610d3884610c3e565b8051604090810151602085810191909152825151918501919091528151015160608401529050428151511015610e2b57600160a08301526020810151600003610dc257610d8483611155565b610d8d8461118f565b610d96856111d2565b610d9f866111fa565b610da991906122ef565b610db391906122ef565b610dbd91906122ef565b610e18565b610dd0816020015184611226565b610dde82602001518561125e565b610dec836020015186611291565b610dfa8460200151876112c5565b610e0491906122ef565b610e0e91906122ef565b610e1891906122ef565b8252610e226112d1565b60ff1660808301525b5092915050565b6000610e3c610f00565b60080154905090565b600080610e5183610c3e565b90504281515110610e655750600092915050565b602081015115610e7c5761033e81602001516112dc565b61033e610e32565b60006102af610e91610f24565b60008481526003919091016020526040902061130b565b600080610eb583856123af565b9150610ec183836122ef565b90509250929050565b6000828410610edb5750600061033e565b818410610eea5750600061033e565b81831115610ef6578192505b61033b8484612297565b7f67661db80d37d3b9810c430f78991b4b5377bdebd3b71b39fbd3427092c1822a90565b7f9db84024bbea48a7580380e27785cf3e0d08fada233c84760c8a5aff47f86e1290565b60006102ac8383611315565b600060606000610f62610f24565b60008581526002820160205260409020805460019091018054919550919250610f8a90612302565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb690612302565b80156110035780601f10610fd857610100808354040283529160200191611003565b820191906000526020600020905b815481529060010190602001808311610fe657829003601f168201915b5050505050915050915091565b60008061101e83600061133f565b80519091506020811015611036575060009392505050565b506020015192915050565b60606000806110508585610ea8565b915091506000611064838361079e8a6112dc565b67ffffffffffffffff81111561107c5761107c6122aa565b6040519080825280602002602001820160405280156110a5578160200160208202803683370190505b50905060005b815181101561114a5760006110c18260016122ef565b90506000806110e98b6110d261135b565b60008681526013919091016020526040902061137f565b9150915081611100576110fb836113d8565b611102565b805b858581518110611114576111146122d9565b60200260200101906001600160a01b031690816001600160a01b0316815250505050508080611142906122c0565b9150506110ab565b509695505050505050565b6001600160a01b031660009081527ff5d5af29c37f2085b9f37cfb2259d4e3b957777d47ffc1949a7596cb1d37ba91602052604090205490565b60007f80346b80475a6f26abb9f460d81c6dbe6a8dd5d1acfb0827cfe37c4263a562ca5b6001600160a01b03909216600090815260209290925250604090205490565b60007fd15962e60f276260fba4c9b4de7fd05f475afe18b48c917ec6f6fcc71c00bf716111b3565b6000611204610f00565b6001600160a01b03909216600090815260029290920160205250604090205490565b60006102ac8361123461135b565b6001600160a01b0385166000908152600b9190910160205260409020611259856113ff565b611431565b60006102ac8361126c61135b565b6001600160a01b038516600090815260099190910160205260409020611259856114b1565b60006102ac8361129f61135b565b6001600160a01b03851660009081526006919091016020526040902061125985426114d4565b60006102ac82846114f7565b600061028b42611527565b60008060006112f5846112ed61135b565b60140161153d565b915091508161033e57611306610e32565b610326565b60006102af825490565b600082600001828154811061132c5761132c6122d9565b9060005260206000200154905092915050565b60608161134b8461158a565b11156102af576102ac83836115af565b7f450898ebb84982a28d8787f0138cfce477c6d811ae3b1db5fdb7ed17e8bda89890565b600080808061138e8686611678565b91509150818261139f5760006113ca565b8560010182815481106113b4576113b46122d9565b6000918252602090912001546001600160a01b03165b9350935050505b9250929050565b60006113e2610f00565b60009283526007016020525060409020546001600160a01b031690565b60008061141b61140d6116f6565b61141685611701565b61172d565b90508061142784611155565b61033e91906123af565b6000806000611440868661153d565b91509150811561145357915061033e9050565b600061145e87611758565b9050600061146a61177e565b905080820361147f578594505050505061033e565b8160000361148c57600191505b600061149883836123c6565b90506114a481886123c6565b9998505050505050505050565b6000806114c86114bf6116f6565b61141685611791565b9050806114278461118f565b6000806114e184846117bd565b9050806114ed856111d2565b61032691906123af565b60006102ac8261150561135b565b6001600160a01b038616600090815260209190915260409020611259866117f5565b600061153282611801565b516060015192915050565b600080808061154c8686611678565b91509150818261155d5760006113ca565b856001018281548110611572576115726122d9565b90600052602060002001549350935050509250929050565b6000611594610f24565b60009283526002908101602052604090922090910154919050565b60606115b9610f24565b6000848152600291820160205260409020018054839081106115dd576115dd6122d9565b9060005260206000200180546115f290612302565b80601f016020809104026020016040519081016040528092919081815260200182805461161e90612302565b801561166b5780601f106116405761010080835404028352916020019161166b565b820191906000526020600020905b81548152906001019060200180831161164e57829003601f168201915b5050505050905092915050565b6000808360000361169c5760405163f128004d60e01b815260040160405180910390fd5b6116a4611844565b8411156116c757604051638e81eb8360e01b815260048101859052602401610c31565b60006116d38486611858565b845490915081036116eb5760008092509250506113d1565b6001925090506113d1565b600061028b426118f9565b600061170b61192a565b6001600160a01b039092166000908152600b9290920160205250604090205490565b60008260000361173f575060016102af565b8160000361174e5750816102af565b6102ac82846123c6565b60008060006117718461176961135b565b600d0161153d565b915091508161033e576113065b600061178861192a565b60010154905090565b600061179b61192a565b6001600160a01b03909216600090815260089290920160205250604090205490565b60006102ac6117cb836118f9565b6117d361192a565b6001600160a01b0386166000908152600591909101602052604090205461172d565b60006102af824261194e565b611809611f45565b600061181483611972565b91505061181f611a7f565b915080826000015160600181815161183791906123e8565b60ff169052509092915050565b600061028b61185161135b565b6005015490565b8154600090810361186b575060006102af565b82546000905b808210156118b55760006118858383611cb2565b9050846118928783611ccd565b5411156118a1578091506118af565b6118ac8160016122ef565b92505b50611871565b6000821180156118d85750836118d5866118d0600186612297565b611ccd565b54145b156118f1576118e8600183612297565b925050506102af565b5090506102af565b60008061190461177e565b905080600003611912575060015b600061191d84611972565b50905061032681836123af565b7f20765daced38554542b3c858f10e7fb957696c4dbd38d7faabc51dd4de7ad54190565b60008061196661195d846118f9565b61141686611cde565b9050806114ed856111fa565b7faf4aaa3de473ec9b58645d40f5a2fe4e176157e247b2d875db61f1a70935ac69546001906000907faf4aaa3de473ec9b58645d40f5a2fe4e176157e247b2d875db61f1a70935ac689060015b818111611a775760006119d28284612297565b905060006119e08583611ce8565b90508781600001511015611a5b5760008160200151806020019051810190611a089190612401565b90506000611a1582611db7565b9050600081806020019051810190611a2d919061241a565b905080602001518a611a3f91906123af565b9950806040015189611a5191906123e8565b9850505050611a62565b5050611a77565b50508080611a6f906122c0565b9150506119bf565b505050915091565b611a87611f45565b60007fd5228ac65cba3eaaef0669de6709c44cfdf33c0f1cce2989d4a133e0214cce57905060006040518060800160405280836000018054611ac890612302565b80601f0160208091040260200160405190810160405280929190818152602001828054611af490612302565b8015611b415780601f10611b1657610100808354040283529160200191611b41565b820191906000526020600020905b815481529060010190602001808311611b2457829003601f168201915b50505050508152602001836001018054611b5a90612302565b80601f0160208091040260200160405190810160405280929190818152602001828054611b8690612302565b8015611bd35780601f10611ba857610100808354040283529160200191611bd3565b820191906000526020600020905b815481529060010190602001808311611bb657829003601f168201915b50505050508152602001836002018054611bec90612302565b80601f0160208091040260200160405190810160405280929190818152602001828054611c1890612302565b8015611c655780601f10611c3a57610100808354040283529160200191611c65565b820191906000526020600020905b815481529060010190602001808311611c4857829003601f168201915b5050509183525050600384015460ff9081166020928301526040805180820190915283815260058601549394509291830191166001811115611ca957611ca9612049565b90529392505050565b6000611cc160028484186123c6565b6102ac908484166122ef565b600082815260208120820180610326565b600061120461192a565b604080518082019091526000815260606020820152600082815260208481526040918290208251808401909352805483526001810180549192840191611d2d90612302565b80601f0160208091040260200160405190810160405280929190818152602001828054611d5990612302565b8015611da65780601f10611d7b57610100808354040283529160200191611da6565b820191906000526020600020905b815481529060010190602001808311611d8957829003601f168201915b505050505081525050905092915050565b6060611dc1610f24565b6000838152600291909101602052604090206001018054611de190612302565b80601f0160208091040260200160405190810160405280929190818152602001828054611e0d90612302565b8015611e5a5780601f10611e2f57610100808354040283529160200191611e5a565b820191906000526020600020905b815481529060010190602001808311611e3d57829003601f168201915b50505050509050919050565b604051806080016040528060006001600160e81b03191681526020016000815260200160008152602001600081525090565b6040518060400160405280611eab611f7c565b815260408051606080820183526000825260208281018290529282015291015290565b6040518060400160405280611efd60405180606001604052806000815260200160008152602001600081525090565b8152602001600081525090565b6040518060c0016040528060008152602001600081526020016000815260200160008152602001600060ff1681526020016000151581525090565b6040805160c08101825260609181018281528282018390526080820192909252600060a08201529081905b81526020016000905290565b604080516101008101825260008082526020820181905291810182905260608101829052608081018290529060a082019081526020016000611f70565b60008060408385031215611fcc57600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b8181101561201c5783516001600160a01b031683529284019291840191600101611ff7565b50909695505050505050565b815181526020808301519082015260408083015190820152606081016102af565b634e487b7160e01b600052602160045260246000fd5b6003811061206f5761206f612049565b50565b6002811061206f5761206f612049565b61208b81612072565b9052565b6000815180845260005b818110156120b557602081850181015186830182015201612099565b506000602082860101526020601f19601f83011685010191505092915050565b80511515825260006020820151606060208501526120f6606085018261208f565b90506040830151848203604086015261041f828261208f565b602081526000825180516121228161205f565b8060208501525060208101516121378161205f565b8060408501525060408101516060840152606081015161215681612072565b80608085015250608081015160a084015260a081015161217581612072565b8060c08501525060c081015161218a81612072565b60e08481019190915201516121a3610100840182612082565b506020830151610120838101526103266101408401826120d5565b6000602082840312156121d057600080fd5b5035919050565b6000806000606084860312156121ec57600080fd5b505081359360208301359350604090920135919050565b6020808252825182820181905260009190848201906040850190845b8181101561201c5783516001600160e01b0319168352928401929184019160010161221f565b6000806040838503121561225857600080fd5b8235915060208301356001600160a01b038116811461227657600080fd5b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b818103818111156102af576102af612281565b634e487b7160e01b600052604160045260246000fd5b6000600182016122d2576122d2612281565b5060010190565b634e487b7160e01b600052603260045260246000fd5b808201808211156102af576102af612281565b600181811c9082168061231657607f821691505b60208210810361233657634e487b7160e01b600052602260045260246000fd5b50919050565b6040516060810167ffffffffffffffff8111828210171561236d57634e487b7160e01b600052604160045260246000fd5b60405290565b60006060828403121561238557600080fd5b61238d61233c565b8251815260208301516020820152604083015160408201528091505092915050565b80820281158282048414176102af576102af612281565b6000826123e357634e487b7160e01b600052601260045260246000fd5b500490565b60ff81811683821601908111156102af576102af612281565b60006020828403121561241357600080fd5b5051919050565b60006060828403121561242c57600080fd5b61243461233c565b8251815260208301516020820152604083015160ff8116811461245657600080fd5b6040820152939250505056fe4657b10f3cac57d39d628d52e74738d0fdcadc1b2f82958cb835081f1bb26620a264697066735822122052616aa4040906488357d05ae6133cd771b3b8b5a3f6050bc93164dc8868d00b64736f6c63430008120033";
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
        readonly name: "WrongExpirationTimestamp";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "actionType";
            readonly type: "bytes32";
        }];
        readonly name: "WrongIndexForAction";
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
        readonly inputs: readonly [];
        readonly name: "getBondDetails";
        readonly outputs: readonly [{
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
            readonly internalType: "struct IBondRead.BondDetailsData";
            readonly name: "bondDetailsData_";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_couponID";
            readonly type: "uint256";
        }];
        readonly name: "getCoupon";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "recordDate";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "executionDate";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "rate";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IBondRead.Coupon";
                readonly name: "coupon";
                readonly type: "tuple";
            }, {
                readonly internalType: "uint256";
                readonly name: "snapshotId";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBondRead.RegisteredCoupon";
            readonly name: "registeredCoupon_";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCouponCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "couponCount_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCouponDetails";
        readonly outputs: readonly [{
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
            readonly internalType: "struct IBondRead.CouponDetailsData";
            readonly name: "couponDetails_";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_couponID";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_account";
            readonly type: "address";
        }];
        readonly name: "getCouponFor";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "tokenBalance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "rate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "recordDate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "executionDate";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint8";
                readonly name: "decimals";
                readonly type: "uint8";
            }, {
                readonly internalType: "bool";
                readonly name: "recordDateReached";
                readonly type: "bool";
            }];
            readonly internalType: "struct IBondRead.CouponFor";
            readonly name: "couponFor_";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_couponID";
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
        readonly name: "getCouponHolders";
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
            readonly name: "_pageIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pageLength";
            readonly type: "uint256";
        }];
        readonly name: "getSecurityHolders";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "holders_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSecurityRegulationData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "enum RegulationType";
                    readonly name: "regulationType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum RegulationSubType";
                    readonly name: "regulationSubType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "dealSize";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "enum AccreditedInvestors";
                    readonly name: "accreditedInvestors";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maxNonAccreditedInvestors";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "enum ManualInvestorVerification";
                    readonly name: "manualInvestorVerification";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum InternationalInvestors";
                    readonly name: "internationalInvestors";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "enum ResaleHoldPeriod";
                    readonly name: "resaleHoldPeriod";
                    readonly type: "uint8";
                }];
                readonly internalType: "struct RegulationData";
                readonly name: "regulationData";
                readonly type: "tuple";
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
            readonly internalType: "struct ISecurity.SecurityRegulationData";
            readonly name: "securityRegulationData_";
            readonly type: "tuple";
        }];
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_couponID";
            readonly type: "uint256";
        }];
        readonly name: "getTotalCouponHolders";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalSecurityHolders";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BondUSAReadInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BondUSARead;
}
export {};
