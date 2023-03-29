import { Button } from "@mui/material";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralWallet from "common/useGeneralWallet";
import { FC } from "react";
import Web3 from "web3";
const EthereumWalletAdapter: FC<{ onCloseProp?: () => void }> = (props) => {
  const onConnectWallet = async () => {
    props?.onCloseProp?.();
    if ((window as any).ethereum) {
      const web3 = new Web3((window as any).ethereum);
      try {
        const account = (window as any).ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((res) => {
            useGeneralConnection.setState({ connection: web3, chain: "ETH" });
          });
        // useGeneralWallet.setState({ publicKey: account });
        return web3;
      } catch (error) {
        console.error(error);
      }
    } else if ((window as any).web3) {
      const web3 = (window as any).web3;
      console.log("Injected web3 detected.");
      return web3;
    }
    // await ConnectWallet().then((res) => {});
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
    >
      Connect Ethereum Wallet
    </Button>
  );
};
export default EthereumWalletAdapter;
