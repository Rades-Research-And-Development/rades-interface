import { Button } from "@mui/material";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralWallet from "common/useGeneralWallet";
import { providers } from "ethers";
import useSetUserInfo from "hooks/contracts/useSetUserInfo";
import IChains from "interface/chains.interface";
import { FC } from "react";
import { toast } from "react-hot-toast";
import API from "utils/api/api";
import { userOauthWallet } from "utils/api/users";
import { signatureAuthenticationRequest } from "utils/contract/signatureRequest";
import { switchChainRequest } from "utils/contract/switchChainRequest";
import { getCookie, setCookie } from "utils/cookies/cookies";

const WalletAdapter: FC<{ onCloseProp?: () => void; chain: IChains }> = (
  props
) => {
  const setUserInfo = useSetUserInfo();
  const onConnectWallet = async () => {
    props?.onCloseProp?.();
    if ((window as any).ethereum) {
      const provider = new providers.Web3Provider((window as any)?.ethereum);
      // const web3 = new Web3((window as any).ethereum);
      try {
        const pubKeys = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        await switchChainRequest(props.chain);
        if (!getCookie("authentication_code")) {
          const { signature, message, nonce } =
            await signatureAuthenticationRequest(pubKeys[0]);
          const user = await userOauthWallet(pubKeys[0], signature, nonce);

          useGeneralWallet.setState({
            publicKey: pubKeys[0],
            chain: props.chain.symbol,
          });
          setCookie("authentication_code", user.token);
          (
            API.defaults.headers as any
          ).Authorization = `Token ${user.token} || ""}`;
          await setUserInfo();
          // useGeneralConnection.setState({
          //   connection: provider,
          //   chainRPC: props.chain,
          // });
        }

        return provider;
      } catch (error) {
        if ((error as any).code === 4001)
          toast.error("Abort: User reject signature");
        else toast.error(JSON.stringify(error));
        console.error(error);
      }
    } else if ((window as any).web3) {
      const web3 = (window as any).web3;
      return web3;
    }
  };

  return (
    <Button
      onClick={onConnectWallet}
      sx={{
        fontSize: "1rem",
        background: "none",
        opacity: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    ></Button>
  );
};
export default WalletAdapter;
