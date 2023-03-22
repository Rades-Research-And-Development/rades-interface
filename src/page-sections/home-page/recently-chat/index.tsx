import { ChatBubble, Edit, Flag } from "@mui/icons-material";
import { Box, Card, Grid, LinearProgress, Skeleton } from "@mui/material";
import { H5, H6, Small } from "components/Typography";
import RecentlyChat from "./RecentlyChat";
import { FC, MouseEvent, useState } from "react";
import RecentlyActivities from "./RecentlyActivities";
import { Stack } from "@mui/system";

const RecentlyContent: FC = () => {
  return (
    <Box pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card sx={{ padding: 3 }}>
            <H5 mb={2}>Recent Activity</H5>

            {recentActivity[0] ? (
              recentActivity.map((item, _) => (
                <RecentlyActivities activity={item} key={_} />
              ))
            ) : (
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={"100%"} height={118} />
              </Stack>
            )}
          </Card>
          <Box mt={3} />
          <Card sx={{ padding: 3, "& .MuiBox-root": { paddingX: 0 } }}>
            <H5 mb={2}>Recent Chats</H5>
            {conversationList[0] ? (
              conversationList.map((item, index) => (
                <RecentlyChat key={index} conversation={item} />
              ))
            ) : (
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={"100%"} height={118} />
              </Stack>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const conversationList = [
  {
    name: "Ella knox",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/070-man-15.svg",
    time: "11:50pm",
  },
  {
    name: "Sean mila",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/069-woman-15.svg",
    time: "11:40pm",
  },
  {
    name: "Taylor Swift",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/067-man-14.svg",
    time: "11:30pm",
  },
  {
    name: "Ella knox",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/070-man-15.svg",
    time: "11:50pm",
  },
  {
    name: "Sean mila",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/069-woman-15.svg",
    time: "11:40pm",
  },
];
const recentActivity = [
  {
    id: 1,
    title: "Karen leave some comments on Konsep Ilustrasi",
    date: "Aug 10",
    Icon: ChatBubble,
  },
  {
    id: 2,
    title: "Karen change project info on Project Homepage",
    date: "Aug 10",
    Icon: Edit,
  },
  {
    id: 3,
    title: "Andrea change the due date of Project Homepage",
    date: "Aug 10",
    Icon: Flag,
  },
];
export default RecentlyContent;
