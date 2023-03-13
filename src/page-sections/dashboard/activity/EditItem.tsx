import {
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import TimelineContent from "@mui/lab/TimelineContent";
import { Stack, Theme } from "@mui/material";
import { Box } from "@mui/system";
import AppAvatar from "components/avatars/AppAvatar";
import { H6, Tiny } from "components/Typography";
import Edit from "icons/Edit";
import { FC } from "react";
import { lightTheme } from "../../../constants";

const EditItem: FC = () => {
  return (
    <TimelineItem sx={{ "&::before": { display: "none" } }}>
      <TimelineSeparator>
        <TimelineDot sx={{ boxShadow: 0, padding: 0.5 }}>
          <Edit
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
        <H6 mb={0.5}>3 new application design concepts added:</H6>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Tiny fontWeight={500}>Added at 4.23 PM by</Tiny>
          <AppAvatar
            src="/static/avatar/003-boy.svg"
            sx={{ width: 20, height: 20 }}
          />
        </Stack>

        <Stack
          spacing={2}
          direction="row"
          sx={{
            padding: 2,
            marginTop: 2,
            border: "1px solid black",
            borderColor: (theme: Theme) =>
              lightTheme(theme) ? "grey.200" : "divider",
          }}
        >
          <Box sx={{ width: 235, height: 190 }}>
            <img src="/static/post/1.png" width="100%" alt="Post" />
          </Box>

          <Box sx={{ width: 235, height: 190 }}>
            <img src="/static/post/2.png" width="100%" alt="Post" />
          </Box>

          <Box sx={{ width: 235, height: 190 }}>
            <img src="/static/post/3.png" width="100%" alt="Post" />
          </Box>
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
};

export default EditItem;
