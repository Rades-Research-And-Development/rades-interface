import IChains from "interface/chains.interface";

export const switchChainRequest = async (chainRPC: IChains) => {
    try {
        await (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chainRPC.chainId }],
        });
    } catch (switchError) {
        if ((switchError as any).code === 4902) {
            try {
                await (window as any).ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: chainRPC.chainId,
                });
            } catch (addError) {
                console.log("Error adding Chain");
            }
        }
    }
};