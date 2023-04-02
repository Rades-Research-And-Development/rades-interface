import { Button } from "@mui/material";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralWallet from "common/useGeneralWallet";
import IChains from "interface/chains.interface";
import { chain } from "lodash";
import { FC } from "react";
import { toast } from "react-hot-toast";
import { userOauthWallet } from "utils/api/users";
import { signatureAuthenticationRequest } from "utils/contract/etherium/signatureRequest";
import { switchChainRequest } from "utils/contract/etherium/switchChainRequest";
import { getCookie, setCookie } from "utils/cookies/cookies";
import { generateNonce } from "utils/utils";
import Web3 from "web3";
const WalletAdapter: FC<{ onCloseProp?: () => void; chain: IChains }> = (
  props
) => {
  const onConnectWallet = async () => {
    props?.onCloseProp?.();
    if ((window as any).ethereum) {
      const web3 = new Web3((window as any).ethereum);
      try {
        const pubKeys = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        await switchChainRequest(props.chain);
        if (!getCookie("authentication_code")) {
          // const nonce = generateNonce();
          // console.log(pubKeys[0], nonce);
          // const message = `Welcome to Rades!
          // Click to sign in and accept the Rades Terms of Service
          // This request will not trigger a blockchain transaction or cost any gas fees.
          // Your authentication status will reset after 24 hours.
          // Wallet address: ${pubKeys[0]}
          // Nonce: ${nonce}`;

          const { signature, message, nonce } =
            await signatureAuthenticationRequest(pubKeys[0]);
          console.log(pubKeys[0], signature, nonce);
          const user = await userOauthWallet(pubKeys[0], signature, nonce);
          useGeneralWallet.setState({
            publicKey: pubKeys[0],
            chain: props.chain.symbol,
          });

          useGeneralConnection.setState({
            connection: web3,
            chainRPC: props.chain,
          });
          setCookie("authentication_code", user.token);
        }

        return web3;
      } catch (error) {
        if ((error as any).code === 4001)
          toast.error("Abort: User reject signature");
        toast.error((error?.errors as any).message || "");
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
