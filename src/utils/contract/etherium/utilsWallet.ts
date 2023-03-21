import Web3 from 'web3';
import React, { useState, useEffect } from 'react';
import usdtABI from './usdtABI.json'




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
    publicKey = "0x2F62CEACb04eAbF8Fc53C195C5916DDDfa4BED02";
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

    const walletTokens: {
      address: string;
      value: Number;
      key: string;
    }[] = [
        {
          address: "",
          value: Number(ethBalanceInEther),
          key: "ETH",
        },
        {
          address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
          value: balance,
          key: "USDT",
        }
      ];


    // NFT
    const walletNFTs: {
      tokenId: string;
      collectionId: string;
      owner: string;
      metadata: object;
    }[] = [
        {
          tokenId: "as",
          collectionId: "",
          owner: "",
          metadata: Object,
        }
      ]
    return {
      tokens: walletTokens,
      nfts: walletNFTs,
    };
  },
  // walletTransaction: async (connection: Web3, publicKey: string, _amount, _to) => { 
  //   return "as";
  // }
}
