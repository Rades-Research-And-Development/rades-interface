import { Box, BoxProps, styled } from "@mui/material";
import React, { FC } from "react";

const Wrapper = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "5px",
  alignItems: "center",
  marginRight: "0.5rem",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.light,
}));

const IconWrapper: FC<BoxProps> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default IconWrapper;
