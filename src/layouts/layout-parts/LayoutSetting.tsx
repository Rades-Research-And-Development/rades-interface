import { Clear } from "@mui/icons-material";
import { Button, Divider, Drawer, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import FlexBox from "components/flexbox/FlexBox";
import { H5 } from "components/Typography";
import useSettings from "hooks/useSettings";
import { Fragment, useState } from "react";
import { themeSettingsTypes } from "theme";

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  width: "250px",
  "& .MuiPaper-root": {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflow: "initial",
    width: "250px",
    boxShadow: theme.shadows[2],
  },
}));

const layoutName = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  borderRadius: "8px",
  background: "rgba(0,0,0,0.3)",
  zIndex: 12,
};
const LayoutBox = styled(Box)(({ theme }) => ({
  width: "100%",
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "8px",
  marginBottom: "20px",
  position: "relative",
  boxShadow: theme.shadows[1],
  "& .layout-name": { display: "none" },
  "&:hover .layout-name": layoutName,
  "& .selected": layoutName,
}));

const LayoutSetting = () => {
  const [open, setOpen] = useState(false);
  const { settings, saveSettings } = useSettings();

  const changeLayout = (value: string) => {
    setOpen(false);
    saveSettings({ ...settings, activeLayout: value } as themeSettingsTypes);
  };

  return (
    <Fragment>
      {/* <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        color="warning"
        sx={{
          top: "40%",
          right: -40,
          height: "30px",
          position: "fixed",
          bgcolor: "warning.main",
          borderRadius: "0 0 5px 5px",
          transform: "rotate(90deg)",
          "&:hover": { bgcolor: "warning.main" },
        }}
      >
        Layouts
      </Button> */}

      <CustomDrawer
        open={open}
        elevation={3}
        anchor="right"
        variant="persistent"
      >
        <FlexBox alignItems="center" justifyContent="space-between" p={2}>
          <H5>Available Layouts</H5>
          <IconButton onClick={() => setOpen(false)} size="small" sx={{ p: 0 }}>
            <Clear />
          </IconButton>
        </FlexBox>

        <Divider />

        <FlexBox sx={{ flexDirection: "column", p: "20px" }}>
          {demoLayouts.map((item) => (
            <LayoutBox key={item.name} onClick={() => changeLayout(item.name)}>
              <Box
                sx={{ overflow: "hidden" }}
                className={
                  settings.activeLayout === item.name
                    ? "layout-name selected"
                    : "layout-name"
                }
              >
                <Button variant="contained">{item.title}</Button>
              </Box>

              <img width="230px" src={item.imgUrl} alt={item.name} />
            </LayoutBox>
          ))}
        </FlexBox>
      </CustomDrawer>
    </Fragment>
  );
};

const demoLayouts = [
  {
    name: "layout1",
    title: "Layout V1",
    imgUrl: "/static/layouts/layout-v1.png",
  },
  {
    name: "layout2",
    title: "Layout V2",
    imgUrl: "/static/layouts/layout-v2.png",
  },
  {
    name: "layout3",
    title: "Layout V3",
    imgUrl: "/static/layouts/layout-v3.png",
  },
];

export default LayoutSetting;
