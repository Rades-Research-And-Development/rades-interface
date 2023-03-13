import { styled } from "@mui/material";
import { SxProps } from "@mui/system";
import React, { FC } from "react";

const StyledSelect = styled("select")(({ theme }) => ({
  border: 0,
  outline: 0,
  fontSize: 13,
  fontWeight: 500,
  padding: "4px 8px",
  borderRadius: "4px",
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.action.hover,
}));

type sxProps = { sx?: SxProps };

const AppSelect: FC<
  sxProps &
    React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >
> = ({ children, ...props }) => {
  return <StyledSelect {...props}>{children}</StyledSelect>;
};

export default AppSelect;
