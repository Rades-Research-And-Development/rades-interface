import { Box, Radio, RadioProps, styled } from "@mui/material";
import React from "react";

const OuterBox = styled(Box)<{ color?: string }>(({ color, theme }) => ({
  width: 25,
  height: 25,
  padding: "1px",
  borderRadius: "50%",
  border: `1.8px solid ${color || "transparent"}`,
}));

const InnerBox = styled(Box)<{ color?: string }>(({ color, theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  backgroundColor: color || theme.palette.primary.main,
}));

const ColorRadio = (props: RadioProps & { icon_color?: string }) => (
  <Radio
    icon={
      <OuterBox>
        <InnerBox color={props.icon_color} />
      </OuterBox>
    }
    checkedIcon={
      <OuterBox color={props.icon_color}>
        <InnerBox color={props.icon_color} />
      </OuterBox>
    }
    sx={{ padding: 0 }}
    {...props}
  />
);

export default ColorRadio;
