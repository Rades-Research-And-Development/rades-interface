import { Box, styled, SxProps } from "@mui/material";
import { FC, Fragment } from "react";
import LayoutSetting from "./LayoutSetting";

// styled components

const Wrapper = styled(Box)(({ theme }) => ({
  paddingLeft: "3rem",
  paddingRight: "3rem",
  transition: "all 0.3s",
  [theme.breakpoints.down(1200)]: {
    width: "100%",
    marginLeft: 0,
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));

const InnerWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: { maxWidth: 1200, margin: "auto" },
}));

// --------------------------------------------
type LayoutBodyWrapperProps = {
  sx?: SxProps | any;
  children?: any;
};
// --------------------------------------------

const LayoutBodyWrapper: FC<LayoutBodyWrapperProps> = ({
  children,
  sx,
}: any) => {
  return (
    <Fragment>
      <Wrapper sx={sx}>
        <InnerWrapper>{children}</InnerWrapper>
      </Wrapper>

      <LayoutSetting />
    </Fragment>
  );
};

export default LayoutBodyWrapper;
