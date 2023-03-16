import { CssBaseline, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import RTL from "components/RTL";
import ToastContext from "contexts/toastContext";
import useSettings from "hooks/useSettings";
import { FC, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import { createCustomTheme } from "theme";
import "./i18n";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import WalletContext from "contexts/walletContext";
import { walletGetInfor } from "utils/contract/solana/useWallet";
import {
  useWalletDetailsTokenListener,
  useWalletDetailsNFTListener,
} from "hooks/solana/useWalletDetails";
import { useEthereumWalletLisntener } from "hooks/ethereum/useWalletDetails";
import useEthereumWallet from "common/ethereum/useWallet";
import useEthereumConnection from "common/ethereum/useConnection";
import useInitialConnection from "hooks/ethereum/useInitialConnection";
require("@solana/wallet-adapter-react-ui/styles.css");
const App: FC = () => {
  const content = useRoutes(routes());
  const { settings } = useSettings();
  const publicKey = useEthereumWallet((s) => s.publicKey);
  const connection = useEthereumConnection((s) => s.connection);
  useEffect(() => {
    console.log(publicKey);
  }, [publicKey, connection]);
  // const { connection } = useConnection();
  // const { publicKey } = useWallet();
  // const [walletInfo_, setWalletInfo_] = useState<
  //   {
  //     address: string;
  //     value: Number;
  //     property: {
  //       type: "token" | "nft";
  //       avatar: string;
  //       metadata: {};
  //     };
  //   }[]
  // >([]);

  // useEffect(() => {
  //   if (publicKey) {
  //     walletGetInfor(connection, publicKey).then((res) => {
  //       setWalletInfo_(res);
  //     });
  //   }
  // }, [connection, publicKey, setWalletInfo_]);

  const theme = createCustomTheme({
    theme: settings.theme,

    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  return (
    // <WalletContext.Provider
    //   value={{
    //     walletInfo: walletInfo_,
    //     setWalletInfo: (
    //       data: {
    //         address: string;
    //         value: Number;
    //         property: {
    //           type: "token" | "nft";
    //           avatar: string;
    //           metadata: {};
    //         };
    //       }[]
    //     ) => {
    //       console.log("cascascasc", data);
    //       setWalletInfo_(data);
    //     },
    //   }}
    // >
    <StyledEngineProvider injectFirst>
      <ApplicationsInitializations />
      <ThemeProvider theme={theme}>
        <ToastContext.Provider value={{ toast: toast }}>
          <RTL>
            <Toaster position="top-right" />
            <CssBaseline />

            {content}
          </RTL>
        </ToastContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
    // </WalletContext.Provider>
  );
};

function ApplicationsInitializations() {
  useWalletDetailsTokenListener();
  useWalletDetailsNFTListener();
  useEthereumWalletLisntener();
  useInitialConnection();
  return null;
}
export default App;
