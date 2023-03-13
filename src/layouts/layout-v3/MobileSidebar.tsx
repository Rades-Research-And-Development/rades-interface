import { Box, styled } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import Scrollbar from "components/ScrollBar";
import LayoutDrawer from "layouts/layout-parts/LayoutDrawer";
import { FC } from "react";
import MultiLevelMenu from "./MultiLevelMenu";

const TOP_HEADER_AREA = 70;

const NavWrapper = styled(Box)<{ compact: any }>(() => ({
  paddingLeft: 16,
  paddingRight: 16,
  height: "100%",
}));

const StyledLogo = styled(Box)(() => ({
  paddingLeft: 8,
  fontWeight: 700,
  fontSize: 20,
}));

interface MobileSidebarProps {
  sidebarCompact: boolean;
  showMobileSideBar: boolean;
  setShowMobileSideBar: () => void;
}

const MobileSidebar: FC<MobileSidebarProps> = (props) => {
  const { sidebarCompact, showMobileSideBar, setShowMobileSideBar } = props;

  return (
    <LayoutDrawer open={showMobileSideBar} onClose={setShowMobileSideBar}>
      <Box p={2} maxHeight={TOP_HEADER_AREA}>
        <FlexBox ml={1.5}>
          <img
            src="/static/logo/logo.png"
            alt="logo"
            style={{ borderRadius: "50%" }}
            width={30}
            height={30}
          />
          <StyledLogo>RADES</StyledLogo>
        </FlexBox>
      </Box>

      <Scrollbar
        autoHide
        clickOnTrack={false}
        sx={{
          overflowX: "hidden",
          maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`,
        }}
      >
        <NavWrapper compact={sidebarCompact}>
          <MultiLevelMenu sidebarCompact={false} />
        </NavWrapper>
      </Scrollbar>
    </LayoutDrawer>
  );
};

export default MobileSidebar;
