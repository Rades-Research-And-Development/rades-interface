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

  },
  // walletTransaction: async (connection: Web3, publicKey: string, _amount, _to) => { 
  //   return "as";
  // }
}
