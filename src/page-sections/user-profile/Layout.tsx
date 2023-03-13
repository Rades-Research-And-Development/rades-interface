import { CameraAlt } from "@mui/icons-material";
import { TabList } from "@mui/lab";
import {
  Card,
  IconButton,
  Stack,
  styled,
  SvgIconProps,
  Tab,
} from "@mui/material";
import { Box } from "@mui/system";
import AppAvatar from "components/avatars/AppAvatar";
import AvatarBadge from "components/avatars/AvatarBadge";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H4, H5, Tiny } from "components/Typography";
import UserContext from "contexts/userContext";
import Bratislava from "icons/Bratislava";
import DateRange from "icons/DateRange";
import MapMarkerIcon from "icons/MapMarkerIcon";
import numeral from "numeral";
import { FC, Fragment, SyntheticEvent, useContext } from "react";
import { Outlet } from "react-router-dom";

// styled components
const ContentWrapper = styled(Box)(({ theme }) => ({
  zIndex: 1,
  padding: 24,
  marginTop: 55,
  position: "relative",
}));

const CoverPicWrapper = styled(Box)(() => ({
  top: 0,
  left: 0,
  height: 125,
  width: "100%",
  overflow: "hidden",
  position: "absolute",
  backgroundColor: "#C6D3ED",
}));

const StyledFlexBetween = styled(FlexBetween)(() => ({
  margin: "auto",
  flexWrap: "wrap",
}));

const StyledTabList = styled(TabList)(({ theme }) => ({
  paddingLeft: 16,
  paddingRight: 16,
  [theme.breakpoints.up("sm")]: {
    "& .MuiTabs-flexContainer": { justifyContent: "center" },
  },
}));

// -------------------------------------------------
type LayoutProps = {
  handleTabList: (_: SyntheticEvent, value: string) => void;
  children: any;
};
// -------------------------------------------------

const Layout: FC<LayoutProps> = ({ children, handleTabList }) => {
  const { user } = useContext(UserContext);
  return (
    <Fragment>
      <Card sx={{ position: "relative", border: "2px solid black" }}>
        {/* <CoverPicWrapper>
          <img
            width="100%"
            height="100%"
            alt="Team Member"
            src="/static/background/user-cover-pic.png"
            style={{ objectFit: "cover" }}
          />
        </CoverPicWrapper> */}

        <ContentWrapper>
          <FlexBox justifyContent="center">
            <AvatarBadge
              badgeContent={
                <label htmlFor="icon-button-file">
                  <input
                    type="file"
                    accept="image/*"
                    id="icon-button-file"
                    style={{ display: "none" }}
                  />

                  <IconButton aria-label="upload picture" component="span">
                    <CameraAlt
                      sx={{ fontSize: 16, color: "background.paper" }}
                    />
                  </IconButton>
                </label>
              }
            >
              <AppAvatar
                alt="Team Member"
                src={"/static/portfolio/3.png"}
                sx={{ width: 100, height: 100, border: "2px solid black" }}
              />
            </AvatarBadge>
          </FlexBox>

          <Box mt={2}>
            <H4 fontWeight={600} textAlign="center">
              {user?.name}
            </H4>

            <StyledFlexBetween paddingTop={1} maxWidth={340}>
              <ListItem title="User | Publisher" Icon={Bratislava} />
              <ListItem title="Global" Icon={MapMarkerIcon} />
              <ListItem title="Joined March 17" Icon={DateRange} />
            </StyledFlexBetween>
          </Box>

          {/* <StyledFlexBetween paddingTop={4} maxWidth={400}>
            <BoxItem amount={13} title="Books" color="primary.main" />
            <BoxItem amount={60} title="Projects" color="info.main" />
            <BoxItem amount={2800} title="Success Rate" color="success.main" />
          </StyledFlexBetween> */}
        </ContentWrapper>

        <StyledTabList
          variant="scrollable"
          onChange={handleTabList}
          style={{ marginBottom: "1rem" }}
        >
          <Tab disableRipple label="Profile" value="1" />
          <Tab disableRipple label="Wallet" value="4" />
          <Tab disableRipple label="Books" value="2" />
          <Tab disableRipple label="Items" value="5" />
        </StyledTabList>
      </Card>

      {children || <Outlet />}
    </Fragment>
  );
};

export default Layout;

// ----------------------------------------------------------------
type ListItemProps = {
  title: string;
  Icon: (props: SvgIconProps<"svg", {}>) => JSX.Element;
};

type BoxItemProps = {
  amount: number;
  title: string;
  color: string;
};
// ----------------------------------------------------------------

function ListItem({ title, Icon }: ListItemProps) {
  return (
    <FlexBox alignItems="center">
      <Icon sx={{ fontSize: 14, color: "text.secondary", mr: 1 }} />
      <Tiny fontWeight={500} color="text.secondary">
        {title}
      </Tiny>
    </FlexBox>
  );
}

function BoxItem({ title, amount, color }: BoxItemProps) {
  return (
    <Stack
      spacing={0.5}
      alignItems="center"
      sx={{
        padding: 2,
        borderRadius: "8px",
        border: "1px solid black",
        borderColor: "divider",
        width: { sm: 120, xs: "100%" },
        marginBottom: { sm: 0, xs: 1 },
      }}
    >
      <H5 color={color}>${numeral(amount).format("0,00")}</H5>
      <Tiny fontWeight={500}>{title}</Tiny>
    </Stack>
  );
}
