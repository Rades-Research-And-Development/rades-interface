import { Star } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Rating,
  Stack,
  styled,
} from "@mui/material";
import { H1, H5, H6, Paragraph, Tiny } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import AppTextField from "components/input-fields/AppTextField";
import Edit from "icons/Edit";
import ThumbsUp from "icons/ThumbsUp";
import numeral from "numeral";
import { FC, useState } from "react";
import { lightTheme } from "../../../constants";

const ContainerGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: { flexDirection: "column-reverse" },
}));

const FirstGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    borderRight: `1px solid black ${
      lightTheme(theme) ? theme.palette.grey[300] : theme.palette.divider
    }`,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 24,
    borderTop: `1px solid black ${theme.palette.grey[300]}`,
  },
}));

const ReviewsCard: FC = () => {
  const [rating, setRating] = useState<number | null>(2);

  return (
    <Box padding={3}>
      <ContainerGrid container spacing={3}>
        <FirstGrid item md={8} xs={12}>
          <Stack spacing={4}>
            <Review />
            <Review />
            <Review />
          </Stack>
        </FirstGrid>

        <Grid item md={4} xs={12}>
          <Stack alignItems="center">
            <H5>Average rating</H5>
            <H1 color="primary.main" my={1}>
              4/5
            </H1>

            <Rating
              readOnly
              value={4}
              emptyIcon={<Star sx={{ opacity: 0.4, fontSize: "inherit" }} />}
              sx={{ color: "warning.main", fontSize: 28, mb: 0.5 }}
            />
            <Tiny fontWeight={500}>(8.24k reviews)</Tiny>
          </Stack>

          <Stack maxWidth={300} spacing={1} pt={4} margin="auto">
            <SingleReviewDetails
              title="5 star"
              progressValue={74}
              totalReview={32000}
            />
            <SingleReviewDetails
              title="4 star"
              progressValue={54}
              totalReview={54000}
            />
            <SingleReviewDetails
              title="3 star"
              progressValue={34}
              totalReview={37000}
            />
            <SingleReviewDetails
              title="2 star"
              progressValue={24}
              totalReview={42000}
            />
            <SingleReviewDetails
              title="1 star"
              progressValue={14}
              totalReview={65000}
            />

            <Button
              fullWidth
              variant="outlined"
              sx={{
                color: "primary.main",
                borderColor: "primary.main",
                marginTop: "32px !important",
              }}
              startIcon={<Edit />}
            >
              Write Your review
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ padding: 2 }}>
            <H5 mb={1}>Add Review</H5>
            <Stack direction="row" spacing={2}>
              <Paragraph fontSize={12} fontWeight={500}>
                Your review about this product:
              </Paragraph>
              <Rating
                value={rating}
                onChange={(_, newValue) => setRating(newValue)}
                emptyIcon={<Star sx={{ opacity: 0.4, fontSize: "inherit" }} />}
                sx={{ color: "warning.main", fontSize: 18 }}
              />
            </Stack>

            <form>
              <Stack spacing={2} mt={3}>
                <AppTextField
                  rows={4}
                  multiline
                  placeholder="Review"
                  fullWidth
                />
                <AppTextField placeholder="Name" fullWidth />
                <AppTextField placeholder="Email" fullWidth />
              </Stack>

              <Stack direction="row" spacing={2} mt={2} justifyContent="end">
                <Button variant="GreyOutlined">Cancel</Button>
                <Button variant="contained">Post Review</Button>
              </Stack>
            </form>
          </Box>
        </Grid>
      </ContainerGrid>
    </Box>
  );
};

export default ReviewsCard;

// --------------------------------------------------------------
type SingleReviewProps = {
  title: string;
  totalReview: number;
  progressValue: number;
};
// --------------------------------------------------------------

function SingleReviewDetails({
  title,
  progressValue,
  totalReview,
}: SingleReviewProps) {
  return (
    <FlexBetween>
      <H6 lineHeight={1}>{title}</H6>
      <Box flexGrow={1} marginX={2}>
        <LinearProgress
          variant="determinate"
          color="success"
          value={progressValue}
        />
      </Box>
      <H6 fontWeight={500}>{numeral(totalReview).format("0a")}</H6>
    </FlexBetween>
  );
}

// -----------------------------------------------------

function Review() {
  return (
    <Stack direction="row" alignItems="center" spacing={5}>
      <Stack alignItems="center" flexShrink={0}>
        <AppAvatar
          src="/static/avatar/002-girl.svg"
          sx={{ width: 60, height: 60 }}
        />
        <H5 mt={2} mb={0.5}>
          Chirstina Perry
        </H5>
        <Tiny fontWeight={500}>14 Nov, 2021</Tiny>
      </Stack>

      <Stack spacing={1} maxWidth={460}>
        <Rating
          readOnly
          value={4}
          emptyIcon={<Star sx={{ opacity: 0.4, fontSize: "inherit" }} />}
          sx={{ color: "warning.main", fontSize: 24 }}
        />

        <Paragraph fontSize={12} lineHeight={1.9}>
          Thank you very fast shipping from Poland only 3days. Very Greateful.
          Was this review helpful to you?.
        </Paragraph>

        <Stack direction="row" alignItems="flex-end" spacing={1}>
          <ThumbsUp sx={{ color: "primary.main" }} />
          <H6 color="primary.main" fontSize={12}>
            Thank(234)
          </H6>
        </Stack>
      </Stack>
    </Stack>
  );
}
