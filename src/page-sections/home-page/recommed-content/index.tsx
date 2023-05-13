// ? TODO: combine Element for side bar in home page

import { ChatBubble, Edit, Flag } from "@mui/icons-material";
import { Box, Card, Divider, Grid, LinearProgress } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import MoreOptions from "components/MoreOptions";
import { H5 } from "components/Typography";
import Stack from "@mui/material/Stack";
import TrendingNFTs from "./TrendingNFTs";
import { FC, MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import FollowerAccounts from "./FollowerAccounts";
import Skeleton from "@mui/material/Skeleton";
import HotNFTs from "./HotNFTs";

const RecommendContent: FC = () => {
  const { t } = useTranslation();
  const [todoEl, setTodoEl] = useState<null | HTMLElement>(null);
  const handleTodoMoreOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setTodoEl(event.currentTarget);
  };
  const handleTodoMoreClose = () => setTodoEl(null);

  return (
    <Box pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Box mt={1} />
          {/* <Card sx={{ padding: 3 }}>
            <H5 mb={2}>Trending Content NFTs</H5>
            {TrendingNFTsList[0] ? (
              TrendingNFTsList?.slice(0, 3).map((item, _) => (
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
          <HotNFTs handleTodoMore={handleTodoMoreOpen} />
          <Box mt={1} />
          {/* <Card sx={{ padding: 3 }}>
            <H5 mb={2}>Hot Content NFTs</H5>
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
          <TrendingNFTs handleTodoMore={handleTodoMoreOpen} />
          <Box mt={1} />
        </Grid>
      </Grid>
    </Box>
  );
};

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

const conversationList = [
  {
    name: "Ella knox",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/070-man-15.svg",
    // time: "11:50pm",
  },
  {
    name: "Sean mila",
    lastMsg: "Hi. Our deadlines are.....",
    image: "/static/avatar/069-woman-15.svg",
    // time: "11:40pm",
  },
];
export default RecommendContent;
