import {
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import TimelineContent from "@mui/lab/TimelineContent";
import { Stack, Theme } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { H6, Span, Tiny } from "components/Typography";
import Layers from "icons/Layers";
import { FC } from "react";
import { lightTheme } from "../../../constants";

const LayerItem: FC = () => {
  return (
    <TimelineItem sx={{ "&::before": { display: "none" } }}>
      <TimelineSeparator>
        <TimelineDot sx={{ boxShadow: 0, padding: 0.5 }}>
          <Layers
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
          Task <Span color="primary.main">#45890</Span> merged with{" "}
          <Span color="primary.main">#45890</Span> in “Ads Pro Admin Dashboard
          project:
        </H6>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Tiny fontWeight={500}>Added at 4.23 PM by</Tiny>
          <AppAvatar
            src="/static/avatar/005-man-1.svg"
            sx={{ width: 20, height: 20 }}
          />
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
};

export default LayerItem;
