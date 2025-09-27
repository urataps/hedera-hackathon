import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { TRexIResolverProxy, TRexIResolverProxyInterface } from "../../../../../../contracts/factory/ERC3643/interfaces/IResolverProxy.sol/TRexIResolverProxy";
export declare class TRexIResolverProxy__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "_functionSelector";
            readonly type: "bytes4";
        }];
        readonly name: "FunctionNotFound";
        readonly type: "error";
    }];
    static createInterface(): TRexIResolverProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TRexIResolverProxy;
}
