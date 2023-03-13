import React from "react";
import Connect2Phantom from "page-sections/connect-wallet/import-wallet/import-phantom";
import { H3 } from "components/Typography";
import { Grid } from "@mui/material";

function Phantom() {
  return (
    <Grid container>
      <H3 paddingY={2}>{"Import a Phantom wallet"}</H3>

      <Connect2Phantom />
    </Grid>
  );
}

export default Phantom;
