import { useEffect } from "react";

import useGeneralConnection from "common/useGeneralConnection";
import { utilsCombineWallet } from "utils/contract";
import useGeneralWallet from "common/useGeneralWallet";
import useGeneralUtilsWallet from "common/useGeneralUtilsWallet";
export function useInitialGeneralWalletListener() {
  const { chain, connection } = useGeneralConnection((s) => s);
  const { publicKey } = useGeneralWallet((s) => s);
  useEffect(() => {
    if (chain === "SOL" && publicKey) {
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
<<<<<<< HEAD
    if (chain === "ETH") {
=======
    if (chain === "ETH" && publicKey) {
      useGeneralUtilsWallet.setState(utilsCombineWallet.utilsEthereumWallet);
>>>>>>> 9e2afe4d0d0cc46ef2585e25c1c5a2f00aff552a
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
