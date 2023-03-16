import { LocalizationProvider } from "@mui/x-date-pickers";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { JWTAuthProvider } from "contexts/JWTAuth";
import "nprogress/nprogress.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { useEffect, useMemo } from "react";
import "react-image-lightbox/style.css";
import "react-quill/dist/quill.snow.css";
import { BrowserRouter } from "react-router-dom";
import "simplebar/dist/simplebar.min.css";
import App from "./App";
import SettingsProvider from "./contexts/settingsContext";
import reportWebVitals from "./reportWebVitals";
import { clusterApiUrl } from "@solana/web3.js";
import "./__fakeData__";
import { createRoot } from "react-dom/client";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import web3 from "web3";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  Coin98WalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import useEthereumConnection from "common/ethereum/useConnection";
import useEthereumWallet from "common/ethereum/useWallet";
const root = createRoot(document.getElementById("root") as HTMLElement);
function RootApp() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new Coin98WalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  return (
    <React.StrictMode>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <SettingsProvider>
              <JWTAuthProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </JWTAuthProvider>
            </SettingsProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </React.StrictMode>
  );
}
root.render(<RootApp />);
reportWebVitals();
