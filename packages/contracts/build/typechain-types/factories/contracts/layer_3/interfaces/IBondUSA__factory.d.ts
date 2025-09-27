import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBondUSA, IBondUSAInterface } from "../../../../contracts/layer_3/interfaces/IBondUSA";
export declare class IBondUSA__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
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
            readonly name: "_bondDetailsData";
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
            readonly internalType: "struct IBondRead.CouponDetailsData";
            readonly name: "_couponDetailsData";
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
            readonly name: "_regulationData";
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
            readonly name: "_additionalSecurityData";
            readonly type: "tuple";
        }];
        readonly name: "_initialize_bondUSA";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenHolder";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_partition";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "redeemAtMaturityByPartition";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
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
            readonly name: "_newCoupon";
            readonly type: "tuple";
        }];
        readonly name: "setCoupon";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "success_";
            readonly type: "bool";
        }, {
            readonly internalType: "uint256";
            readonly name: "couponID_";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_maturityDate";
            readonly type: "uint256";
        }];
        readonly name: "updateMaturityDate";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "success_";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IBondUSAInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBondUSA;
}
