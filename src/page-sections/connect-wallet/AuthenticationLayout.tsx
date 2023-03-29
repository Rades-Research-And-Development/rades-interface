import { Grid, Stack, Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import { H1, Paragraph } from "components/Typography";
import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import ContentSlider from "./ContentSlider";

// -------------------------------------------------------
type PropsTypes = {
  children: ReactNode;
  title: string;
  route: string;
  routeName: string;
  description: string;
};
// -------------------------------------------------------

const AuthenticationLayout: FC<PropsTypes> = (props) => {
  const { children, title, route, routeName, description } = props;
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Grid container height="100%">
      {/* <Grid item md={6} xs={12} order={downMd ? 2 : 1}>
        <ContentSlider />
      </Grid> */}

      <Grid item md={12} xs={12} order={downMd ? 1 : 2}>
        <Stack alignItems="center" justifyContent="center" height="100%">
          <Box textAlign="center" maxWidth={550} width="100%">
            <img
              src="/logo.png"
              width={40}
              alt="Logo"
              style={{ borderRadius: "50%" }}
            />
            <H1 fontWeight={700} fontSize={24} mt={2}>
              {title}
            </H1>
            <Paragraph color="text.disabled" fontWeight={500} mb={2}>
              {description} <Link to={route}>{routeName}</Link>
            </Paragraph>

            {children}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default AuthenticationLayout;
