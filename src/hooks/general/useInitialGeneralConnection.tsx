import useGeneralConnection from "common/useGeneralConnection";
import useGeneralWallet from "common/useGeneralWallet";
import web3 from "web3";
import { useContext, useEffect, useMemo } from "react";
import { toast } from "react-hot-toast";
import { userOauthWallet } from "utils/api/users";
import { signatureAuthenticationRequest } from "utils/contract/etherium/signatureRequest";
import { removeCookie, setCookie } from "utils/cookies/cookies";
import useModalPopup from "common/useModalPopups";
import Web3 from "web3";
import IChains from "interface/chains.interface";
import useGeneralUtilsWallet from "common/useGeneralUtilsWallet";
import API from "utils/api/api";
export default function useInitialGeneralConnectionListener() {
  const generalConnection = useGeneralConnection((s) => s);
  const generalWallet = useGeneralWallet((s) => s);
  const useUtilsWallet = useGeneralUtilsWallet((s) => s);
  useEffect(() => {
    (window as any).ethereum?.on?.("accountsChanged", (accounts) => {
      removeCookie("authentication_code");
      (API.defaults.headers as any).Authorization = `Token`;
      if (!accounts.length) {
        useGeneralConnection.setState({
          connection: new Web3(),
          chainRPC: {} as IChains,
        });
        useGeneralWallet.setState({ publicKey: "", chain: "" });
        useModalPopup.setState({ oauthModal: true });
        toast.error("Abort: Your session has disconnect");
      } else {
        // console.log(accounts);
        // useGeneralWallet.setState({
        //   publicKey: accounts[0],
        // });
        // signatureAuthenticationRequest(accounts[0]).then((sign) => {
        //   const { signature, message, nonce } = sign;
        //   userOauthWallet(accounts[0], signature, nonce).then(async (res) => {
        //     const walletDetails = await useUtilsWallet?.walletGetInfor?.(
        //       generalConnection.connection,
        //       accounts[0],
        //       generalConnection.chainRPC
        //     );
        //     useGeneralWallet.setState({
        //       publicKey: accounts[0],
        //       ...res,
        //       details: { ...walletDetails },
        //     });
        //     setCookie("authentication_code", res.user.token);
        //   });
        // });
      }
    });
  }, [generalConnection, useUtilsWallet]);
}
