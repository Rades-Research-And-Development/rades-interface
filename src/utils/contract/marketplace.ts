
import { Provider } from "@ethersproject/providers";
import { Marketplace__factory } from "app/contracts";
import { Signer, ethers, providers } from "ethers";
import IChains from "interface/chains.interface";
import Web3 from "web3";

export const createSale = async (provider: Provider, signer: Signer) => {
    try {
        const Marketplace = Marketplace__factory.connect("0x535e0cF7d0533013343C68c7Dc93E841f3ccd7E2", signer)
        console.log(await Marketplace.owner())
        // const saleTx = await Marketplace.functions.createSale(
        //     false,
        //     "0x9EC41A36e3913Bc05B8C820ae4f7C54b255d8A1A",
        //     1,
        //     10,
        //     (await provider.getBlock(1)).timestamp,
        //     (await provider.getBlock(1)).timestamp + (3 * 24 * 60 * 60 * 1000),
        //     100,
        //     "0xee3424d777966E9ac50d23f21D4d4DB5b060ce44"
        // );
        // await saleTx.wait()
        // console.log(saleTx)
    } catch (error) {
        console.log(error)
        return 0;
    }
};
