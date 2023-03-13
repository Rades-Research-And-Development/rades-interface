import { Button, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import AppSelect from "components/AppSelect";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, Span } from "components/Typography";
import Add from "icons/Add";
import PinterestCircle from "icons/PinterestCircle";
import Reddit from "icons/Reddit";
import Twitch from "icons/Twitch";
import Twitter from "icons/Twitter";
import Youtube from "icons/Youtube";
import { FC } from "react";
import CampaignCard from "./CampaignCard";

const campaignList = [
  {
    id: 1,
    title: "Twitch Post",
    amount: 5300,
    impression: -40.5,
    progressValue: 40,
    icon: <Twitch sx={{ color: "info.main" }} />,
  },
  {
    id: 2,
    title: "Pinterest Posts",
    amount: 56,
    impression: 26.5,
    progressValue: 40,
    icon: <PinterestCircle sx={{ color: "error.main" }} />,
  },
  {
    id: 3,
    title: "Twitter Followers",
    amount: 405000,
    impression: 26.5,
    progressValue: 40,
    icon: <Twitter sx={{ color: "primary.main" }} />,
  },
  {
    id: 4,
    title: "Reddit Awards",
    amount: 3000000,
    impression: -40.5,
    progressValue: 40,
    icon: <Reddit sx={{ color: "warning.main" }} />,
  },
  {
    id: 5,
    title: "Youtube Subscribers",
    amount: 3000000,
    impression: -40.5,
    progressValue: 40,
    icon: <Youtube sx={{ color: "error.main" }} />,
  },
  {
    id: 6,
    title: "Twitch Post",
    amount: 5300,
    impression: -40.5,
    progressValue: 40,
    icon: <Twitch sx={{ color: "info.main" }} />,
  },
  {
    id: 7,
    title: "Twitter Followers",
    amount: 405000,
    impression: 26.5,
    progressValue: 40,
    icon: <Twitter sx={{ color: "primary.main" }} />,
  },
  {
    id: 8,
    title: "Reddit Awards",
    amount: 3000000,
    impression: -40.5,
    progressValue: 40,
    icon: <Reddit sx={{ color: "warning.main" }} />,
  },
  {
    id: 9,
    title: "Pinterest Posts",
    amount: 56,
    impression: 26.5,
    progressValue: 40,
    icon: <PinterestCircle sx={{ color: "error.main" }} />,
  },
];

const Campaigns: FC = () => {
  return (
    <Box py={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FlexBetween flexWrap="wrap">
            <H5 mb={2}>
              My Campaigns{" "}
              <Span fontSize={12} fontWeight={500} color="text.disabled">
                (30 Days)
              </Span>
            </H5>

            <Stack direction="row" spacing={2} mb={2}>
              <AppSelect>
                <option value="month">Month</option>
                <option value="week">Week</option>
                <option value="day">Day</option>
              </AppSelect>

              <Button variant="contained" startIcon={<Add />}>
                Add Campaign
              </Button>
            </Stack>
          </FlexBetween>
        </Grid>

        {campaignList.map((item) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <CampaignCard campaign={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Campaigns;
