import { Box, Theme } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { Tiny } from "components/Typography";
import React, { FC } from "react";
import { lightTheme } from "../../constants";

const IncomingMsg: FC = () => {
  return (
    <Box maxWidth={{ md: "60%", sm: "70%", xs: "80%" }}>
      <FlexBox mb={1} gap={1.5}>
        <AppAvatar src="/static/avatar/055-bodybuilder.svg" />
        <Box
          sx={{
            padding: 2,
            borderRadius: "8px",
            backgroundColor: (theme: Theme) =>
              lightTheme(theme) ? "primary.100" : "divider",
          }}
        >
          <Tiny
            display="block"
            fontWeight={500}
            lineHeight={1.7}
            color="text.secondary"
          >
            Hey, Pixy can we get on a quick call? i need to show you something
          </Tiny>
        </Box>
      </FlexBox>
      <Tiny fontSize={10} fontWeight={500} textAlign="right">
        Today, 2:25pm
      </Tiny>
    </Box>
  );
};

export default IncomingMsg;
