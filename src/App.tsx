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
import {
  useWalletDetailsTokenListener,
  useWalletDetailsNFTListener,
} from "hooks/solana/useWalletDetails";
import { useInitialEthereumWalletListener } from "hooks/ethereum/useInitialEthereumWalletDetails";
import useInitialEthereumConnectionListener from "hooks/ethereum/useInitialEthereumConnection";
import useInitialSolanaConnectionListener from "hooks/solana/useInitialSolanaConnection";
import { useInitialSolanaWalletListener } from "hooks/solana/useInitialSolanaWalletDetails";
import useInitialGeneralConnectionListener from "hooks/general/useInitialGeneralConnection";
import { useInitialGeneralWalletListener } from "hooks/general/useInitialGeneralWalletDetails";
import { AxiosInterceptor } from "utils/api/api";
require("@solana/wallet-adapter-react-ui/styles.css");
const App: FC = () => {
  const content = useRoutes(routes());
  const { settings } = useSettings();
  const theme = createCustomTheme({
    theme: settings.theme,

    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  return (
    <AxiosInterceptor>
      <StyledEngineProvider injectFirst>
        <ApplicationsInitializations />
        <ThemeProvider theme={theme}>
          <ToastContext.Provider value={{ toast: toast }}>
            <RTL>
              <Toaster position="top-center" />
              <CssBaseline />
              {content}
            </RTL>
          </ToastContext.Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </AxiosInterceptor>
  );
};

function ApplicationsInitializations() {
  useInitialEthereumWalletListener();
  useInitialEthereumConnectionListener();

  useInitialSolanaConnectionListener();
  useInitialSolanaWalletListener();

  useInitialGeneralConnectionListener();
  useInitialGeneralWalletListener();

  return null;
}
export default App;
