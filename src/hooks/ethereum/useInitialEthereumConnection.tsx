import useGeneralConnection from "common/useGeneralConnection";
import ToastContext from "contexts/toastContext";
import { useContext, useEffect, useMemo } from "react";
import web3 from "web3";

export default function useInitialEthereumConnectionListener() {
  const generalConnection = useGeneralConnection((s) => s);
  useEffect(() => {
    if (generalConnection.chain === "") {
      (window as any)?.ethereum
        ?.request?.({ method: "eth_accounts" })
        ?.then((publicKeys) => {
          if (publicKeys[0]) {
            useGeneralConnection.setState({
              connection: new web3((window as any).ethereum),
              chain: "ETH",
            });

            const message = "Authentication";
            (window as any).ethereum
              .request({
                method: "personal_sign",
                params: [message, publicKeys[0]],
              })
              .then((res) => {
                console.log(res);
              });
          }
        });
    }
  }, [generalConnection.chain]);
}
