import { ChatBubble, Edit, Flag } from "@mui/icons-material";
import { Box, Card, Grid, LinearProgress, Skeleton } from "@mui/material";
import { H5, H6, Small } from "components/Typography";
import RecentlyChat from "./RecentlyChat";
import { FC, MouseEvent, useState } from "react";
import RecentlyActivities from "./RecentlyActivities";
import { Stack } from "@mui/system";
import MoreOptions from "components/MoreOptions";
import TrendingNFTs from "../recommed-content/TrendingNFTs";
import FollowerAccounts from "../recommed-content/FollowerAccounts";
import NewNFTs from "../recommed-content/NewNFTs";

const RecentlyContent: FC = () => {
  const [todoEl, setTodoEl] = useState<null | HTMLElement>(null);
  const handleTodoMoreOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setTodoEl(event.currentTarget);
  };
  const handleTodoMoreClose = () => setTodoEl(null);
  return (
    <Box pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card sx={{ padding: 3 }}>
            <H5 mb={2}>Amazing NFT creators</H5>
            Some NFT Partner
            {/* {recentActivity[0] ? (
              recentActivity.map((item, _) => (
                <RecentlyActivities activity={item} key={_} />
              ))
            ) : (
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={"100%"} height={118} />
              </Stack>
            )} */}
          </Card>
          <Box mt={1} />
          <FollowerAccounts />
          {/* <Card sx={{ padding: 3, "& .MuiBox-root": { paddingX: 0 } }}>
            <H5 mb={2}>Recommed Users</H5>
            {conversationList[0] ? (
              conversationList
                .slice(0, 2)
                .map((item, index) => (
                  <FollowerAccounts key={index} conversation={item} />
                ))
            ) : (
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={"100%"} height={118} />
              </Stack>
            )}
          </Card> */}
          <Box mt={1} />
          {/* <Card sx={{ padding: 3 }}>
            <H5 mb={2}>New Content NFTs</H5>
            {TrendingNFTsList[0] ? (
              TrendingNFTsList?.map((item, _) => (
                <Box mb={3} key={_} sx={{ "&:last-child": { mb: 0 } }}>
                  <TrendingNFTs
                    item={item}
                    handleTodoMore={handleTodoMoreOpen}
                  />
                </Box>
              ))
            ) : (
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
              </Stack>
            )}

            <MoreOptions
              anchorEl={todoEl}
              handleMoreClose={handleTodoMoreClose}
            />
          </Card> */}
          <NewNFTs handleTodoMore={handleTodoMoreOpen} />
          <Box mt={1} />
          {/* <Card sx={{ padding: 3, "& .MuiBox-root": { paddingX: 0 } }}>
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
          </Card> */}
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
const TrendingNFTsList = [
  {
    id: 1,
    title: "Create Minimal Logo",
    date: "Due In 2 Days",
    status: "Pending",
  },
  {
    id: 2,
    title: "Stock Market Exchange",
    date: "Due In 3 Days",
    status: "Processing",
  },
  {
    id: 3,
    title: "Shopping & Groccery",
    date: "Due In 5 days",
    status: "Pending",
  },
  {
    id: 4,
    title: "Football Match",
    date: "Due In 1 Day",
    status: "Completed",
  },
  {
    id: 5,
    title: "Stock Market Exchange",
    date: "Due In 3 Days",
    status: "Processing",
  },
];

export default RecentlyContent;
