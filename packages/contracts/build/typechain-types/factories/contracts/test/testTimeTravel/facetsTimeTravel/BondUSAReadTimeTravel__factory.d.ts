import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type { BondUSAReadTimeTravel, BondUSAReadTimeTravelInterface } from "../../../../../contracts/test/testTimeTravel/facetsTimeTravel/BondUSAReadTimeTravel";
type BondUSAReadTimeTravelConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BondUSAReadTimeTravel__factory extends ContractFactory {
    constructor(...args: BondUSAReadTimeTravelConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<BondUSAReadTimeTravel>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): BondUSAReadTimeTravel;
    connect(signer: Signer): BondUSAReadTimeTravel__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001a4661001f565b610043565b8061053914610040576040516217e1ef60ea1b815260040160405180910390fd5b50565b61250880620000536000396000f3fe608060405234801561001057600080fd5b50600436106100bf5760003560e01c8063936e31691161007c578063936e316914610190578063a92e8371146101d2578063b378cf37146101e5578063bba7b56d146101fa578063bd007c8f1461025e578063c1f0d74214610266578063ec116ae31461026e57600080fd5b80631ef2fdc8146100c4578063468bb240146100f95780634ce024141461010157806381438d2f1461014657806382c5582a146101665780638fda5afe1461017b575b600080fd5b7fe7ca0b805514da05524faf33d2d9d9432bf1dfa53096073a7267041cfdfb6d685b6040519081526020015b60405180910390f35b6100e6610281565b610109610290565b6040516100f0919081516001600160e81b031916815260208083015190820152604080830151908201526060918201519181019190915260800190565b610159610154366004612009565b6102a0565b6040516100f0919061202b565b61016e6102b5565b6040516100f09190612078565b6101836102e1565b6040516100f0919061215f565b6101a361019e36600461220e565b6102f1565b6040805182518051825260208082015181840152908301519282019290925291015160608201526080016100f0565b6101596101e0366004612227565b61032e565b6101ed610345565b6040516100f09190612253565b61020d610208366004612295565b6103e9565b6040516100f09190600060c0820190508251825260208301516020830152604083015160408301526060830151606083015260ff608084015116608083015260a0830151151560a083015292915050565b6100e6610428565b6101ed610432565b6100e661027c36600461220e565b61069c565b600061028b6106a7565b905090565b610298611eb6565b61028b6106c0565b60606102ac838361077e565b90505b92915050565b6102d960405180606001604052806000815260200160008152602001600081525090565b61028b610884565b6102e9611ee8565b61028b61092a565b6102f9611f1e565b6000805160206124b38339815191526103136001846122e7565b61031d8282610c03565b61032684610c3e565b949350505050565b606061033b848484610ccc565b90505b9392505050565b604080516003808252608082019092526060916020820183803683370190505090506000631cab147d60e31b828261037c81612310565b93508151811061038e5761038e612329565b6001600160e01b0319909216602092830291909101909101526359ccd5af60e11b82826103ba81612310565b9350815181106103cc576103cc612329565b6001600160e01b0319909216602092830291909101909101525090565b6103f1611f5a565b6000805160206124b383398151915261040b6001856122e7565b6104158282610c03565b61041f8585610d2c565b95945050505050565b600061028b610e40565b60408051600a8082526101608201909252606091600091906020820161014080368337019050509150631338090560e21b828261046e81612310565b93508151811061048057610480612329565b6001600160e01b031990921660209283029190910190910152634162ac1560e11b82826104ac81612310565b9350815181106104be576104be612329565b6001600160e01b03199092166020928302919091019091015263936e316960e01b82826104ea81612310565b9350815181106104fc576104fc612329565b6001600160e01b03199092166020928302919091019091015263bba7b56d60e01b828261052881612310565b93508151811061053a5761053a612329565b6001600160e01b03199092166020928302919091019091015263011a2ec960e61b828261056681612310565b93508151811061057857610578612329565b6001600160e01b03199092166020928302919091019091015263a92e837160e01b82826105a481612310565b9350815181106105b6576105b6612329565b6001600160e01b03199092166020928302919091019091015263ec116ae360e01b82826105e281612310565b9350815181106105f4576105f4612329565b6001600160e01b0319909216602092830291909101909101526347ed2d7f60e11b828261062081612310565b93508151811061063257610632612329565b6001600160e01b0319909216602092830291909101909101526381438d2f60e01b828261065e81612310565b93508151811061067057610670612329565b6001600160e01b03199092166020928302919091019091015263bd007c8f60e01b82826103ba81612310565b60006102af82610e53565b600061028b6000805160206124b3833981519152610e99565b6106c8611eb6565b50604080516080810182527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f2b5460e81b6001600160e81b03191681527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f2c5460208201527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f2d54918101919091527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f2e54606082015290565b606060008061078d8585610ebd565b915091506107a3828261079e610e40565b610edf565b67ffffffffffffffff8111156107bb576107bb6122fa565b6040519080825280602002602001820160405280156107e4578160200160208202803683370190505b509250816107f181612310565b92505060006107fe610f15565b905060005b845181101561087a5760078201600061081c838761233f565b815260200190815260200160002060009054906101000a90046001600160a01b031685828151811061085057610850612329565b6001600160a01b03909216602092830291909101909101528061087281612310565b915050610803565b5050505092915050565b6108a860405180606001604052806000815260200160008152602001600081525090565b50604080516060810182527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f2f5481527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f305460208201527f251123c390edd911567d4210605f2dfb26d83878c58bd871f56946d08ffd1f31549181019190915290565b610932611ee8565b7f95205812666aa702c6386778a59ee67a93a9559063c49d34d12e4072e5995379604080516101408101825282549092918391908201908390829060ff16600281111561098157610981612099565b600281111561099257610992612099565b81528154602090910190610100900460ff1660028111156109b5576109b5612099565b60028111156109c6576109c6612099565b81526001828101546020830152600283015460409092019160ff16908111156109f1576109f1612099565b6001811115610a0257610a02612099565b815260038201546020820152600482015460409091019060ff166001811115610a2d57610a2d612099565b6001811115610a3e57610a3e612099565b81526020016004820160019054906101000a900460ff166001811115610a6657610a66612099565b6001811115610a7757610a77612099565b81526020016004820160029054906101000a900460ff166001811115610a9f57610a9f612099565b6001811115610ab057610ab0612099565b9052508152604080516060810190915260058301805460ff161515825260068401805460209485019484019190610ae690612352565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1290612352565b8015610b5f5780601f10610b3457610100808354040283529160200191610b5f565b820191906000526020600020905b815481529060010190602001808311610b4257829003601f168201915b50505050508152602001600282018054610b7890612352565b80601f0160208091040260200160405190810160405280929190818152602001828054610ba490612352565b8015610bf15780601f10610bc657610100808354040283529160200191610bf1565b820191906000526020600020905b815481529060010190602001808311610bd457829003601f168201915b50505050508152505081525050905090565b80610c0d83610e99565b11610c3a576040516369c927a760e11b815260048101829052602481018390526044015b60405180910390fd5b5050565b610c46611f1e565b6000610c85610c566001856122e7565b610c5e610f39565b6000805160206124b383398151915260009081526003919091016020526040902090610f5d565b90506000610c9282610f69565b915050600081511115610cb65780806020019051810190610cb391906123c3565b83525b610cbf82611025565b6020840152509092915050565b60606000610cd985610c3e565b9050610ce3611056565b81515110610d0157505060408051600081526020810190915261033e565b602081015115610d2257610d1a81602001518585611060565b91505061033e565b61041f848461077e565b610d34611f5a565b6000610d3f84610c3e565b8051604090810151602080860191909152825151918501919091528151015160608401529050610d6d611056565b8151511015610e3957600160a08301526020810151600003610dd057610d9283611174565b610d9b846111ae565b610da4856111f1565b610dad86611219565b610db7919061233f565b610dc1919061233f565b610dcb919061233f565b610e26565b610dde816020015184611245565b610dec82602001518561127d565b610dfa8360200151866112b0565b610e088460200151876112eb565b610e12919061233f565b610e1c919061233f565b610e26919061233f565b8252610e306112f7565b60ff1660808301525b5092915050565b6000610e4a610f15565b60080154905090565b600080610e5f83610c3e565b9050610e69611056565b81515110610e7a5750600092915050565b602081015115610e915761033e8160200151611309565b61033e610e40565b60006102af610ea6610f39565b600084815260039190910160205260409020611338565b600080610eca83856123ff565b9150610ed6838361233f565b90509250929050565b6000828410610ef05750600061033e565b818410610eff5750600061033e565b81831115610f0b578192505b61033b84846122e7565b7f67661db80d37d3b9810c430f78991b4b5377bdebd3b71b39fbd3427092c1822a90565b7f9db84024bbea48a7580380e27785cf3e0d08fada233c84760c8a5aff47f86e1290565b60006102ac8383611342565b600060606000610f77610f39565b60008581526002820160205260409020805460019091018054919550919250610f9f90612352565b80601f0160208091040260200160405190810160405280929190818152602001828054610fcb90612352565b80156110185780601f10610fed57610100808354040283529160200191611018565b820191906000526020600020905b815481529060010190602001808311610ffb57829003601f168201915b5050505050915050915091565b60008061103383600061136c565b8051909150602081101561104b575060009392505050565b506020015192915050565b600061028b611388565b606060008061106f8585610ebd565b915091506000611083838361079e8a611309565b67ffffffffffffffff81111561109b5761109b6122fa565b6040519080825280602002602001820160405280156110c4578160200160208202803683370190505b50905060005b81518110156111695760006110e082600161233f565b90506000806111088b6110f161139d565b6000868152601391909101602052604090206113c1565b915091508161111f5761111a8361141a565b611121565b805b85858151811061113357611133612329565b60200260200101906001600160a01b031690816001600160a01b031681525050505050808061116190612310565b9150506110ca565b509695505050505050565b6001600160a01b031660009081527ff5d5af29c37f2085b9f37cfb2259d4e3b957777d47ffc1949a7596cb1d37ba91602052604090205490565b60007f80346b80475a6f26abb9f460d81c6dbe6a8dd5d1acfb0827cfe37c4263a562ca5b6001600160a01b03909216600090815260209290925250604090205490565b60007fd15962e60f276260fba4c9b4de7fd05f475afe18b48c917ec6f6fcc71c00bf716111d2565b6000611223610f15565b6001600160a01b03909216600090815260029290920160205250604090205490565b60006102ac8361125361139d565b6001600160a01b0385166000908152600b919091016020526040902061127885611441565b611473565b60006102ac8361128b61139d565b6001600160a01b038516600090815260099190910160205260409020611278856114f3565b60006102ac836112be61139d565b6001600160a01b038516600090815260069190910160205260409020611278856112e6611056565b611516565b60006102ac8284611539565b600061028b611304611056565b611569565b60008060006113228461131a61139d565b60140161157f565b915091508161033e57611333610e40565b610326565b60006102af825490565b600082600001828154811061135957611359612329565b9060005260206000200154905092915050565b606081611378846115cc565b11156102af576102ac83836115f1565b6000805415611398575060005490565b504290565b7f450898ebb84982a28d8787f0138cfce477c6d811ae3b1db5fdb7ed17e8bda89890565b60008080806113d086866116ba565b9150915081826113e157600061140c565b8560010182815481106113f6576113f6612329565b6000918252602090912001546001600160a01b03165b9350935050505b9250929050565b6000611424610f15565b60009283526007016020525060409020546001600160a01b031690565b60008061145d61144f611738565b6114588561174a565b611776565b90508061146984611174565b61033e91906123ff565b6000806000611482868661157f565b91509150811561149557915061033e9050565b60006114a0876117a1565b905060006114ac6117c7565b90508082036114c1578594505050505061033e565b816000036114ce57600191505b60006114da8383612416565b90506114e68188612416565b9998505050505050505050565b60008061150a611501611738565b611458856117da565b905080611469846111ae565b6000806115238484611806565b90508061152f856111f1565b61032691906123ff565b60006102ac8261154761139d565b6001600160a01b0386166000908152602091909152604090206112788661183e565b600061157482611851565b516060015192915050565b600080808061158e86866116ba565b91509150818261159f57600061140c565b8560010182815481106115b4576115b4612329565b90600052602060002001549350935050509250929050565b60006115d6610f39565b60009283526002908101602052604090922090910154919050565b60606115fb610f39565b60008481526002918201602052604090200180548390811061161f5761161f612329565b90600052602060002001805461163490612352565b80601f016020809104026020016040519081016040528092919081815260200182805461166090612352565b80156116ad5780601f10611682576101008083540402835291602001916116ad565b820191906000526020600020905b81548152906001019060200180831161169057829003601f168201915b5050505050905092915050565b600080836000036116de5760405163f128004d60e01b815260040160405180910390fd5b6116e6611894565b84111561170957604051638e81eb8360e01b815260048101859052602401610c31565b600061171584866118a8565b8454909150810361172d576000809250925050611413565b600192509050611413565b600061028b611745611056565b611949565b600061175461197a565b6001600160a01b039092166000908152600b9290920160205250604090205490565b600082600003611788575060016102af565b816000036117975750816102af565b6102ac8284612416565b60008060006117ba846117b261139d565b600d0161157f565b915091508161033e576113335b60006117d161197a565b60010154905090565b60006117e461197a565b6001600160a01b03909216600090815260089290920160205250604090205490565b60006102ac61181483611949565b61181c61197a565b6001600160a01b03861660009081526005919091016020526040902054611776565b60006102af8261184c611056565b61199e565b611859611f95565b6000611864836119c2565b91505061186f611acf565b91508082600001516060018181516118879190612438565b60ff169052509092915050565b600061028b6118a161139d565b6005015490565b815460009081036118bb575060006102af565b82546000905b808210156119055760006118d58383611d02565b9050846118e28783611d1d565b5411156118f1578091506118ff565b6118fc81600161233f565b92505b506118c1565b600082118015611928575083611925866119206001866122e7565b611d1d565b54145b15611941576119386001836122e7565b925050506102af565b5090506102af565b6000806119546117c7565b905080600003611962575060015b600061196d846119c2565b50905061032681836123ff565b7f20765daced38554542b3c858f10e7fb957696c4dbd38d7faabc51dd4de7ad54190565b6000806119b66119ad84611949565b61145886611d2e565b90508061152f85611219565b7faf4aaa3de473ec9b58645d40f5a2fe4e176157e247b2d875db61f1a70935ac69546001906000907faf4aaa3de473ec9b58645d40f5a2fe4e176157e247b2d875db61f1a70935ac689060015b818111611ac7576000611a2282846122e7565b90506000611a308583611d38565b90508781600001511015611aab5760008160200151806020019051810190611a589190612451565b90506000611a6582611e07565b9050600081806020019051810190611a7d919061246a565b905080602001518a611a8f91906123ff565b9950806040015189611aa19190612438565b9850505050611ab2565b5050611ac7565b50508080611abf90612310565b915050611a0f565b505050915091565b611ad7611f95565b60007fd5228ac65cba3eaaef0669de6709c44cfdf33c0f1cce2989d4a133e0214cce57905060006040518060800160405280836000018054611b1890612352565b80601f0160208091040260200160405190810160405280929190818152602001828054611b4490612352565b8015611b915780601f10611b6657610100808354040283529160200191611b91565b820191906000526020600020905b815481529060010190602001808311611b7457829003601f168201915b50505050508152602001836001018054611baa90612352565b80601f0160208091040260200160405190810160405280929190818152602001828054611bd690612352565b8015611c235780601f10611bf857610100808354040283529160200191611c23565b820191906000526020600020905b815481529060010190602001808311611c0657829003601f168201915b50505050508152602001836002018054611c3c90612352565b80601f0160208091040260200160405190810160405280929190818152602001828054611c6890612352565b8015611cb55780601f10611c8a57610100808354040283529160200191611cb5565b820191906000526020600020905b815481529060010190602001808311611c9857829003601f168201915b5050509183525050600384015460ff9081166020928301526040805180820190915283815260058601549394509291830191166001811115611cf957611cf9612099565b90529392505050565b6000611d116002848418612416565b6102ac9084841661233f565b600082815260208120820180610326565b600061122361197a565b604080518082019091526000815260606020820152600082815260208481526040918290208251808401909352805483526001810180549192840191611d7d90612352565b80601f0160208091040260200160405190810160405280929190818152602001828054611da990612352565b8015611df65780601f10611dcb57610100808354040283529160200191611df6565b820191906000526020600020905b815481529060010190602001808311611dd957829003601f168201915b505050505081525050905092915050565b6060611e11610f39565b6000838152600291909101602052604090206001018054611e3190612352565b80601f0160208091040260200160405190810160405280929190818152602001828054611e5d90612352565b8015611eaa5780601f10611e7f57610100808354040283529160200191611eaa565b820191906000526020600020905b815481529060010190602001808311611e8d57829003601f168201915b50505050509050919050565b604051806080016040528060006001600160e81b03191681526020016000815260200160008152602001600081525090565b6040518060400160405280611efb611fcc565b815260408051606080820183526000825260208281018290529282015291015290565b6040518060400160405280611f4d60405180606001604052806000815260200160008152602001600081525090565b8152602001600081525090565b6040518060c0016040528060008152602001600081526020016000815260200160008152602001600060ff1681526020016000151581525090565b6040805160c08101825260609181018281528282018390526080820192909252600060a08201529081905b81526020016000905290565b604080516101008101825260008082526020820181905291810182905260608101829052608081018290529060a082019081526020016000611fc0565b6000806040838503121561201c57600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b8181101561206c5783516001600160a01b031683529284019291840191600101612047565b50909695505050505050565b815181526020808301519082015260408083015190820152606081016102af565b634e487b7160e01b600052602160045260246000fd5b600381106120bf576120bf612099565b50565b600281106120bf576120bf612099565b6120db816120c2565b9052565b6000815180845260005b81811015612105576020818501810151868301820152016120e9565b506000602082860101526020601f19601f83011685010191505092915050565b805115158252600060208201516060602085015261214660608501826120df565b90506040830151848203604086015261041f82826120df565b60208152600082518051612172816120af565b806020850152506020810151612187816120af565b806040850152506040810151606084015260608101516121a6816120c2565b80608085015250608081015160a084015260a08101516121c5816120c2565b8060c08501525060c08101516121da816120c2565b60e08481019190915201516121f36101008401826120d2565b50602083015161012083810152610326610140840182612125565b60006020828403121561222057600080fd5b5035919050565b60008060006060848603121561223c57600080fd5b505081359360208301359350604090920135919050565b6020808252825182820181905260009190848201906040850190845b8181101561206c5783516001600160e01b0319168352928401929184019160010161226f565b600080604083850312156122a857600080fd5b8235915060208301356001600160a01b03811681146122c657600080fd5b809150509250929050565b634e487b7160e01b600052601160045260246000fd5b818103818111156102af576102af6122d1565b634e487b7160e01b600052604160045260246000fd5b600060018201612322576123226122d1565b5060010190565b634e487b7160e01b600052603260045260246000fd5b808201808211156102af576102af6122d1565b600181811c9082168061236657607f821691505b60208210810361238657634e487b7160e01b600052602260045260246000fd5b50919050565b6040516060810167ffffffffffffffff811182821017156123bd57634e487b7160e01b600052604160045260246000fd5b60405290565b6000606082840312156123d557600080fd5b6123dd61238c565b8251815260208301516020820152604083015160408201528091505092915050565b80820281158282048414176102af576102af6122d1565b60008261243357634e487b7160e01b600052601260045260246000fd5b500490565b60ff81811683821601908111156102af576102af6122d1565b60006020828403121561246357600080fd5b5051919050565b60006060828403121561247c57600080fd5b61248461238c565b8251815260208301516020820152604083015160ff811681146124a657600080fd5b6040820152939250505056fe4657b10f3cac57d39d628d52e74738d0fdcadc1b2f82958cb835081f1bb26620a264697066735822122013b2da47715756cec3fb52b3bf723e9c8fd8619bf84908971db5200e866a88e764736f6c63430008120033";
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
    static createInterface(): BondUSAReadTimeTravelInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BondUSAReadTimeTravel;
}
export {};
