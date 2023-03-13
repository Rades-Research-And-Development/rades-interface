import {
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import TimelineContent from "@mui/lab/TimelineContent";
import { Stack, Theme } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { H6, Tiny } from "components/Typography";
import Pin from "icons/Pin";
import { FC } from "react";
import { lightTheme } from "../../../constants";

const PinItem: FC = () => {
  return (
    <TimelineItem sx={{ "&::before": { display: "none" } }}>
      <TimelineSeparator>
        <TimelineDot sx={{ boxShadow: 0, padding: 0.5 }}>
          <Pin
            sx={{
              fontSize: 16,
              color: (theme: Theme) =>
                lightTheme(theme) ? "grey.100" : "background.paper",
            }}
          />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <H6 mb={0.5}>
          Invitation for crafting engaging designs that speak human workshop
        </H6>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Tiny fontWeight={500}>Added at 4.23 PM by</Tiny>
          <AppAvatar
            src="/static/avatar/011-man-2.svg"
            sx={{ width: 20, height: 20 }}
          />
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
};

export default PinItem;
