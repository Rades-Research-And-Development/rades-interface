import {
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import TimelineContent from "@mui/lab/TimelineContent";
import { AvatarGroup, Button, Stack, styled, Theme } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import { H6, Small, Tiny } from "components/Typography";
import Chat from "icons/Chat";
import { FC } from "react";
import { lightTheme } from "../../../constants";

const StyledAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
  justifyContent: "flex-end",
  "& .MuiAvatarGroup-avatar": {
    width: 25,
    height: 25,
    fontSize: 12,
    color: theme.palette.primary.main,
    borderColor: theme.palette.common.white,
    backgroundColor: theme.palette.primary[100],
  },
}));

const StyledFlexBetween = styled(FlexBetween)(({ theme }) => ({
  padding: 16,
  marginTop: 16,
  borderRadius: "4px",
  border: `1px solid black ${
    lightTheme(theme) ? theme.palette.grey[200] : theme.palette.divider
  }`,
}));

const ChatItem: FC = () => {
  return (
    <TimelineItem sx={{ "&::before": { display: "none" } }}>
      <TimelineSeparator>
        <TimelineDot sx={{ boxShadow: 0, padding: 0.5 }}>
          <Chat
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
        <H6 mb={0.5}>There are 2 new tasks for you in Alphp Plus project:</H6>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Tiny fontWeight={500}>Added at 4.23 PM by</Tiny>
          <AppAvatar
            src="/static/avatar/005-man-1.svg"
            sx={{ width: 20, height: 20 }}
          />
        </Stack>

        <ListItem title="Meeting with customer" status="In Progress" />
        <ListItem title="Project Delivery" status="Complete" />
      </TimelineContent>
    </TimelineItem>
  );
};

export default ChatItem;

// single list item component

// --------------------------------------------------------
type ListItemProps = {
  title: string;
  status: string;
};
// --------------------------------------------------------
function ListItem({ title, status }: ListItemProps) {
  return (
    <StyledFlexBetween>
      <H6 fontWeight={500}>{title}</H6>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Small
          fontSize={12}
          sx={{
            padding: "5px 20px",
            borderRadius: "4px",
            color: "text.secondary",
            backgroundColor: "action.hover",
          }}
        >
          Application
        </Small>
        <StyledAvatarGroup max={4}>
          <AppAvatar src="/static/avatar/001-man.svg" />
          <AppAvatar src="/static/avatar/002-girl.svg" />
          <AppAvatar src="/static/avatar/003-boy.svg" />
          <AppAvatar src="/static/avatar/003-boy.svg" />
          <AppAvatar src="/static/avatar/003-boy.svg" />
        </StyledAvatarGroup>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Button variant="outlined">View</Button>
      </Stack>
    </StyledFlexBetween>
  );
}
