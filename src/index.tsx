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
import "./__fakeData__";
import { createRoot } from "react-dom/client";

import web3 from "web3";

const root = createRoot(document.getElementById("root") as HTMLElement);
function RootApp() {
  return (
    // <React.StrictMode>
    <SettingsProvider>
      <JWTAuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </JWTAuthProvider>
    </SettingsProvider>
    // </React.StrictMode>
  );
}
root.render(<RootApp />);
reportWebVitals();
