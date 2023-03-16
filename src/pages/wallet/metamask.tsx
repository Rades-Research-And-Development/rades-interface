import React, { useContext } from "react";
import { H3 } from "components/Typography";
import { Button, Grid, IconButton } from "@mui/material";
import {
  CastConnectedSharp,
  ConnectWithoutContact,
  Masks,
} from "@mui/icons-material";
import { ConnectWallet } from "utils/contract/etherium/useWallet";
import WalletContext from "contexts/walletContext";

function Metamask() {
  const { walletInfo, setWalletInfo } = useContext(WalletContext);
  const connectMetamask = () => {
    ConnectWallet().then((res) => {
      // setWalletInfo?.(res);
    });
  };
  return (
    <>
      <H3 paddingY={2}>{"Import a Metamask wallet"}</H3>
      <Grid container>
        <Grid item xs={12}>
          <Button
            style={{ border: "2px solid black" }}
            color="info"
            variant="outlined"
            onClick={connectMetamask}
          >
            Connect to Metamask
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Metamask;
