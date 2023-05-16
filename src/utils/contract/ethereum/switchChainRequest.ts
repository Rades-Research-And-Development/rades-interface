import IChains from "interface/chains.interface";
import Web3 from "web3";

export const switchChainRequest = async (chainRPC: IChains) => {
    try {
        await (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chainRPC.chainId }],
        });
        return { connection: new Web3((window as any).ethereum), chainRPC, }
    } catch (switchError) {
        if ((switchError as any).code === 4902) {
            try {
                await (window as any).ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: chainRPC.RPC,
                });
            } catch (addError) {
                console.log("Error adding Chain");
            }
        }
    }
};