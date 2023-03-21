import useGeneralConnection from "common/useGeneralConnection";
import useGeneralWallet from "common/useGeneralWallet";
import { useEffect } from "react";
import web3 from "web3";

export default function useInitialGeneralConnectionListener() {
  const generalConnection = useGeneralConnection((s) => s);
  const generalWallet = useGeneralWallet((s) => s);
  useEffect(() => {
    console.log(generalWallet, generalConnection);
  }, [generalConnection, generalWallet]);
}
