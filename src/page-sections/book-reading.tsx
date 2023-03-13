import {
  Box,
  Button,
  Grid,
  styled,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import Icons from "icons/account";

import BasicInformation from "page-sections/book-reading/BasicInformation";

import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

// styled component
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  position: "relative",
  padding: "0.6rem 1.5rem",
  justifyContent: "flex-start",
  
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

const BookReading: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [, setOpenDrawer] = useState(false);
  const [active, setActive] = useState("Basic Information");
  // const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const style = {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary[100],
    "&::before": {
      left: 0,
      width: 4,
      content: '""',
      height: "100%",
      borderRadius: 4,
      position: "absolute",
      transition: "all 0.3s",
      backgroundColor: theme.palette.primary.main,
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[100],
    },
  };

  function TabListContent() {
    return (
      <FlexBox flexDirection="column">
        {tabList.map(({ id, name, Icon }) => (
          <StyledButton
            key={id}
            onClick={() => {
              setActive(name);
              setOpenDrawer(false);
            }}
            startIcon={<Icon sx={{ color: "text.secondary" }} />}
            sx={active === name ? style : { "&:hover": style }}
          >
            {t(name)}
          </StyledButton>
        ))}
      </FlexBox>
    );
  }

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {/* <Grid item md={3} xs={12}>
          {downMd ? (
            <Fragment>
              <FlexBox
                alignItems="center"
                gap={1}
                onClick={() => setOpenDrawer(true)}
              >
                <IconButton sx={{ padding: 0 }}>
                  <Apps sx={{ color: "text.primary" }} />
                </IconButton>

                <H5>More</H5>
              </FlexBox>

              <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box padding={1}>
                  <TabListContent />
                </Box>
              </Drawer>
            </Fragment>
          ) : (
            <Card sx={{ padding: "1rem 0" }}>
              <TabListContent />
            </Card>
          )}
        </Grid> */}

        <Grid item md={9} xs={12}>
          <BasicInformation />
        </Grid>
      </Grid>
    </Box>
  );
};

const tabList = [
  {
    id: 1,
    name: "Basic Information",
    Icon: Icons.UserOutlined,
  },
  {
    id: 2,
    name: "Password",
    Icon: Icons.LockOutlined,
  },
  {
    id: 3,
    name: "Preferences",
    Icon: Icons.SettingsOutlined,
  },
  {
    id: 4,
    name: "Recent Devices",
    Icon: Icons.DevicesApple,
  },
  {
    id: 5,
    name: "Notifications",
    Icon: Icons.NotificationOutlined,
  },
  {
    id: 6,
    name: "Two-step verification",
    Icon: Icons.Fingerprint,
  },
  {
    id: 7,
    name: "Connected accounts",
    Icon: Icons.Link,
  },
  {
    id: 8,
    name: "Social Account",
    Icon: Icons.Instagram,
  },
  {
    id: 9,
    name: "Billing",
    Icon: Icons.DollarOutlined,
  },
  {
    id: 10,
    name: "Statements",
    Icon: Icons.FileOutlined,
  },
  {
    id: 11,
    name: "Referrals",
    Icon: Icons.PremiumOutlined,
  },
  {
    id: 12,
    name: "API Keys",
    Icon: Icons.Key,
  },
  {
    id: 13,
    name: "Delete account",
    Icon: Icons.DeleteOutlined,
  },
];

export default BookReading;
