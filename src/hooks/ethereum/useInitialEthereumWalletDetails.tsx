// TODO: set general publicKey
import { useEffect } from "react";

//State use for all wallet
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralWallet from "common/useGeneralWallet";
import { getUser, userOauthWallet } from "utils/api/users";
import { getCookie, setCookie } from "utils/cookies/cookies";
import useGeneralUtilsWallet from "common/useGeneralUtilsWallet";
import { utilsCombineWallet } from "utils/contract";
// set Public Key When connection change

export function useInitialEthereumWalletListener() {
  const generalConnection = useGeneralConnection((s) => s);
  useEffect(() => {
    if (
      generalConnection.chainRPC.symbol !== "SOL" &&
      generalConnection?.connection?.eth &&
      getCookie("authentication_code")
    ) {
      generalConnection.connection.eth.getAccounts().then(async (res) => {
        useGeneralUtilsWallet.setState(utilsCombineWallet.utilsEthereumWallet);
        const walletInfor =
          await utilsCombineWallet.utilsEthereumWallet.walletGetInfor(
            generalConnection.connection,
            res[0],
            generalConnection.chainRPC
          );
        const userInfor = await getUser();
        userInfor.token = "";
        useGeneralWallet.setState({
          ...userInfor.user,
          chain: generalConnection.chainRPC.symbol,
          details: {
            tokens: walletInfor.tokens,
            nfts: walletInfor.nfts,
          },
        });

        // useGeneralWallet.setState({});
      });
    }
  }, [generalConnection]);
}
