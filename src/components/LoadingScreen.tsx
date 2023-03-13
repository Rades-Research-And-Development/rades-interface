import { Box } from "@mui/material";
import NProgress from "nprogress";
import React, { FC, useEffect } from "react";

const LoadingScreen: FC = () => {
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return <Box />;
};

export default LoadingScreen;
