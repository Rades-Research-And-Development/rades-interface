import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import AppSelect from "components/AppSelect";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, Span } from "components/Typography";
import { FC } from "react";
import ConnectionCard from "./Gems";

const connectionList = [];

const Connections: FC = () => {
  return (
    <Box py={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FlexBetween flexWrap="wrap">
            <H5 mb={1}>
              My gems{" "}
              <Span fontSize={12} fontWeight={500} color="text.disabled">
                (Use for another Upgrade)
              </Span>
            </H5>

            <AppSelect>
              <option value="active">Use</option>
              <option value="deactive">Used</option>
            </AppSelect>
          </FlexBetween>
        </Grid>
        {connectionList.length === 0 ? (
          ""
        ) : (
          <>
            {connectionList.map((item) => (
              <Grid item md={4} sm={6} xs={12}>
                <ConnectionCard item={item} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default Connections;
