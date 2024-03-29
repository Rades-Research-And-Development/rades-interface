import Web3 from 'web3';
import ToastContext from 'contexts/toastContext';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import IChains from 'interface/chains.interface';
import { switchChainRequest } from './switchChainRequest';
import standalChains from 'chain';
import { getBalanceByTokenAddress } from './getBalanceByTokenAddress';
import useGeneralConnection from 'common/useGeneralConnection';


export const utilsEthereumWallet = {
  // walletAirDrop: async (connection: Web3, publicKey: string) => {

  //   return {
  //     status: 69, 
  //     text: "dm",
  //   };
  // },
  // walletGetNativeTokenBalance: async (connection: Web3, publicKey: string) => { 
  //   const num = 69;
  //   return num;
  // },

  walletGetInfor: async (connection: Web3, publicKey: string, chainRPC: IChains) => {
    try {
      const naviteCoinbalanceWei = await connection.eth.getBalance(publicKey);
      const naviteCoinbalance = Number(connection.utils.fromWei(naviteCoinbalanceWei, 'ether')).toFixed(2);
      const stableCoinBalance = await getBalanceByTokenAddress(connection, chainRPC.stableCoin?.address || "", chainRPC.stableCoin?.path + `&apikey=A42JHVKDUN4G7PKZJVVMW5XIH6XIUAI1IH` || "", publicKey)
      const walletTokens = [
        {
          address: chainRPC.symbol,
          value: Number(naviteCoinbalance),
          key: chainRPC.RPC?.[0].nativeCurrency?.symbol || chainRPC.symbol
        },
        {
          address: chainRPC.stableCoin?.address || "",
          value: Number(stableCoinBalance),
          key: chainRPC.stableCoin?.symbol || "",
        }
      ];

      return {
        tokens: walletTokens,
        nfts: [],
      };
    } catch (error) {
      console.log(error)
      if (chainRPC.symbol !== "ARB")
        toast.promise(
          switchChainRequest(standalChains[0]).then((res: any) => {
            useGeneralConnection.setState(res)
          }),
          {
            loading: "Please change wallet network chain to testnet...",
            error: "Swith chain Unsuccessfully!",
            success: "Swith chain Successfully!"
          }
        ).then(res => console.log(res));
      return {
        tokens: [],
        nfts: [],
      };
    }

    // publicKey = "0x2F62CEACb04eAbF8Fc53C195C5916DDDfa4BED02"; // must del, just for test
    // const contractAddress = '0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b'; //  NFT contract
    // const contract = new connection.eth.Contract(nftABI as any, contractAddress);
    // const numNFTs = await contract.methods.balanceOf(publicKey).call();
    // console.log(numNFTs);
    // // TODO

    // const walletNFTs: {
    //   tokenId: string;
    //   collectionId: string;
    //   owner: string;
    //   metadata: object;
    // }[] = [];

    // for (let i = 0; i < parseInt(numNFTs); i++) {
    //   const tokenId = await contract.methods.tokenOfOwnerByIndex(publicKey, i).call();
    //   const tokenURI = await contract.methods.tokenURI(tokenId).call();
    //   const metadataResponse = await fetch(tokenURI);
    //   const metadataJSON = await metadataResponse.json();
    //   const collectionId = metadataJSON.collection;
    //   const owner = await contract.methods.ownerOf(tokenId).call();
    //   // console.log(metadataJSON);

    //   walletNFTs.push({
    //     tokenId,
    //     collectionId,
    //     owner,
    //     metadata: metadataJSON
    //   });
    // }

    // // console.log(walletNFTs);
  },
  // walletTransaction: async (connection: Web3, publicKey: string, _amount, _to) => { 
  //   return "as";
  // }
}
