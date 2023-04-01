import { Button } from "@mui/material";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralWallet from "common/useGeneralWallet";
import IChains from "interface/chains.interface";
import { chain } from "lodash";
import { FC } from "react";
import { switchChainRequest } from "utils/contract/etherium/switchChainRequest";
import Web3 from "web3";
const WalletAdapter: FC<{ onCloseProp?: () => void; chain: IChains }> = (
  props
) => {
  const onConnectWallet = async () => {
    props?.onCloseProp?.();
    if ((window as any).ethereum) {
      const web3 = new Web3((window as any).ethereum);
      try {
        const account = (window as any).ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((pubKeys) => {
            console.log(pubKeys);
            switchChainRequest(props.chain).then((res) => {
              console.log(
                `Login with chain: ${props.chain.symbol} & ${pubKeys[0]}`
              );
              useGeneralWallet.setState({
                publicKey: pubKeys[0],
                chain: props.chain.symbol,
              });

              useGeneralConnection.setState({
                connection: web3,
                chainRPC: props.chain,
              });
            });
          });
        return web3;
      } catch (error) {
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
