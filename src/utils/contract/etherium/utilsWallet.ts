import Web3 from 'web3';
import usdtABI from './usdtABI.json'
import nftABI from './nftABI.json'
import { delay } from 'lodash';



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
  walletGetInfor: async (connection: Web3, publicKey: string) => {
    // BALANCE
    // get eth balance 
    publicKey = "0x2BB4725Ce93005C566EFc8e119580F1922b5Acb7"; // must del, just for test
    const ethBalance = await connection.eth.getBalance(publicKey);
    const ethBalanceInEther = connection.utils.fromWei(ethBalance, 'ether');

    //get usdt balance
    const usdtContractAddress = "0x509Ee0d083DdF8AC028f2a56731412edD63223B9";
    const usdtContractABI = usdtABI;
    connection.setProvider(connection.currentProvider);
    const usdtContract = new connection.eth.Contract(usdtContractABI as any, usdtContractAddress);
    const decimals = 6;
    const balanceRaw = await usdtContract.methods.balanceOf(publicKey).call();
    const balance = balanceRaw / 10 ** decimals;
    console.log(balanceRaw);


    // NFT
    //publicKey = "0x2F62CEACb04eAbF8Fc53C195C5916DDDfa4BED02"; // must del, just for test
    const contractAddress = '0x1dfe7Ca09e99d10835Bf73044a23B73Fc20623DF'; //  NFT contract
    const contract = new connection.eth.Contract(nftABI as any, contractAddress);
    const numNFTs = await contract.methods.balanceOf(publicKey).call();
    console.log(numNFTs);
    // TODO

    const walletNFTs: {
      tokenId: string;
      collectionId: string;
      owner: string;
      metadata: object;
    }[] = [];

    for (let i = 0; i < 3; i++) {
      const tokenId = await contract.methods.tokenOfOwnerByIndex(publicKey, i).call();
      const tokenURI = await contract.methods.tokenURI(tokenId).call();
      const metadataResponse = await fetch(tokenURI);
      const metadataJSON = await metadataResponse.json();
      const collectionId = metadataJSON.collection;
      const owner = await contract.methods.ownerOf(tokenId).call();
      console.log(metadataJSON);

      walletNFTs.push({
        tokenId,
        collectionId,
        owner,
        metadata: metadataJSON
      });
    }

    console.log(walletNFTs);

    const walletTokens: {
      address: string;
      value: Number;
      key: string;
    }[] = [
        {
          address: "",
          value: Number(0), //etherInbalance
          key: "ETH",
        },
        {
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          value: 0, // balance
          key: "USDT",
        }
      ];

    return {
      tokens: walletTokens,
      nfts: walletNFTs,
    };
  },
  // walletTransaction: async (connection: Web3, publicKey: string, _amount, _to) => { 
  //   return "as";
  // }
}
