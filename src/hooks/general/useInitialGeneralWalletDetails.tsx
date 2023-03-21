import { useEffect } from "react";

import useGeneralConnection from "common/useGeneralConnection";
import { utilsCombineWallet } from "utils/contract";
import useGeneralWallet from "common/useGeneralWallet";
import useGeneralUtilsWallet from "common/useGeneralUtilsWallet";
export function useInitialGeneralWalletListener() {
  const { chain, connection } = useGeneralConnection((s) => s);
  const { publicKey } = useGeneralWallet((s) => s);
  useEffect(() => {
    if (chain === "SOL") {
      useGeneralUtilsWallet.setState(utilsCombineWallet.utilsSolanaWallet);
      // *** dev ***
      // Solana get all token in wallet
      // *** dev ***

      utilsCombineWallet.utilsSolanaWallet
        .walletGetInfor(connection, publicKey)
        .then((res: any) => {
          console.log(res);
          useGeneralWallet.setState({
            details: {
              address: publicKey,
              tokens: res.tokens,
              nfts: res.nfts,
            },
          });
        });
    }
    if (chain === "ETH") {
      utilsCombineWallet.utilsEthereumWallet
        .walletGetInfor(connection, publicKey)
        .then((res: any) => {
          console.log(res);
          useGeneralWallet.setState({
            details: {
              address: publicKey,
              tokens: res.tokens,
              nfts: res.nfts,
            },
          });
        });
    }
  }, [chain, publicKey, connection]);
}
