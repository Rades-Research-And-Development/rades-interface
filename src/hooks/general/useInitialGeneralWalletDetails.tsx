import { useContext, useEffect } from "react";

import useGeneralConnection from "common/useGeneralConnection";
import { utilsCombineWallet } from "utils/contract";
import useGeneralWallet from "common/useGeneralWallet";
import useGeneralUtilsWallet from "common/useGeneralUtilsWallet";
import ToastContext from "contexts/toastContext";
import standalChains from "chain";
import { getCookie } from "utils/cookies/cookies";
import { getUser } from "utils/api/users";
export function useInitialGeneralWalletListener() {
  const { connection, chainRPC } = useGeneralConnection((s) => s);
  const { publicKey } = useGeneralWallet((s) => s);
  useEffect(() => {}, [chainRPC]);
}
