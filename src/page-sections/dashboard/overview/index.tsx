import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import Summery from "./Summery";
import Teams from "./Teams";
const Overview: FC = () => {
  return (
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item lg={9} md={8} xs={12}>
          <Stack spacing={3}>
            <Summery />
            {/* <Post /> */}
            {/* <Skills /> */}
            <Teams />
            {/* <Hobbies /> */}

            {/* <Portfolio /> */}
          </Stack>
        </Grid>

        {/* <Grid item lg={3} md={4} xs={12}>
          <Stack spacing={3}>
            <MyConnections />
            <AdditionalDetails />
          </Stack>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Overview;
