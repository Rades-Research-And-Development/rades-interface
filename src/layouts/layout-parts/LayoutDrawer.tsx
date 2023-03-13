import { Box, Drawer, styled } from "@mui/material";
import React, { FC } from "react";

// ------------------------------------------------------------------
type LayoutDrawerProps = {
  open: boolean;
  onClose: () => void;
  drawerWidth?: number;
  chidlren?: any;
};
// ------------------------------------------------------------------

const Wrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "inherit",
  position: "fixed",
  overflow: "hidden",
  boxShadow: theme.shadows[1],
  zIndex: theme.zIndex.drawer + 3,
}));

const LayoutDrawer = (props: any) => {
  const { children, open, onClose, drawerWidth = 280 } = props;

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: drawerWidth } }}
    >
      <Wrapper>{children}</Wrapper>
    </Drawer>
  );
};

export default LayoutDrawer;
