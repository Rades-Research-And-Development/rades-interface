import { useContext, useEffect } from "react";

import useGeneralConnection from "common/useGeneralConnection";
import { utilsCombineWallet } from "utils/contract";
import useGeneralWallet from "common/useGeneralWallet";
import useGeneralUtilsWallet from "common/useGeneralUtilsWallet";
import ToastContext from "contexts/toastContext";
import standalChains from "chain";
export function useInitialGeneralWalletListener() {
  const { connection, chainRPC } = useGeneralConnection((s) => s);
  const { publicKey } = useGeneralWallet((s) => s);
  useEffect(() => {
    console.log(`Start set Wallet information: ${chainRPC.symbol}`);
    if (chainRPC.symbol === "SOL" && publicKey) {
      useGeneralUtilsWallet.setState(utilsCombineWallet.utilsSolanaWallet);
      utilsCombineWallet.utilsSolanaWallet
        .walletGetInfor(connection, publicKey)
        .then((res: any) => {
          // console.log(res);
          useGeneralWallet.setState({
            details: {
              address: publicKey,
              tokens: res.tokens,
              nfts: res.nfts,
            },
          });
        });
    } else if (chainRPC.symbol !== "SOL" && publicKey) {
      console.log(`Start set Wallet information: ${chainRPC.symbol}`);
      useGeneralUtilsWallet.setState(utilsCombineWallet.utilsEthereumWallet);
      utilsCombineWallet.utilsEthereumWallet
        .walletGetInfor(connection, publicKey, chainRPC)
        .then((res: any) => {
          console.log(res);
          useGeneralWallet.setState({
            details: {
              address: publicKey,
              tokens: res.tokens,
              nfts: res.nfts,
            },
          });
        })
        .catch((err) => console.log(err));
    }
  }, [chainRPC, publicKey, connection]);
}
