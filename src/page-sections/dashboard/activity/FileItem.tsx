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
import Link from "icons/Link";
import { FC } from "react";
import { lightTheme } from "../../../constants";

const FileItem: FC = () => {
  return (
    <TimelineItem sx={{ "&::before": { display: "none" } }}>
      <TimelineSeparator>
        <TimelineDot sx={{ boxShadow: 0, padding: 0.5 }}>
          <Link
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
            src="/static/avatar/005-man-1.svg"
            sx={{ width: 20, height: 20 }}
          />
        </Stack>

        <Stack
          direction="row"
          sx={{
            border: "1px solid black",
            padding: 2,
            marginTop: 2,
            borderColor: (theme: Theme) =>
              lightTheme(theme) ? "grey.200" : "divider",
          }}
        >
          <ListItem
            title="Finance KPI App"
            icon="/static/files-icon/pdf.svg"
            size={90}
          />
          <ListItem
            title="Css File Yoga App"
            icon="/static/files-icon/css.svg"
            size={90}
          />
          <ListItem
            title="All JPGS From Yoga App"
            icon="/static/files-icon/jpg.svg"
            size={90}
          />
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
};

export default FileItem;

// ------------------------------------------------------------------------------
type ListItemProps = {
  title: string;
  icon: string;
  size: number;
};
// ------------------------------------------------------------------------------

function ListItem({ title, icon, size }: ListItemProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1} mr={6}>
      <Box sx={{ width: 40, flexShrink: 0 }}>
        <img src={icon} width="100%" alt="" />
      </Box>

      <Box>
        <H6 fontSize={12} color="primary.main">
          {title}
        </H6>
        <Tiny fontSize={10} fontWeight={500}>
          {size} mb
        </Tiny>
      </Box>
    </Stack>
  );
}
