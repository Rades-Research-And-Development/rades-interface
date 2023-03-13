import { Card, Stack, useTheme, Button } from "@mui/material";
import { Box } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Tiny } from "components/Typography";
import DateRange from "icons/DateRange";
import Edit from "icons/Edit";
import { FC } from "react";

const Post: FC = () => {
  const theme = useTheme();

  return (
    <Card sx={{ padding: 3 }}>
      <FlexBetween flexWrap="wrap">
        <H5>Post</H5>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            [theme.breakpoints.down(390)]: { mt: 2 },
          }}
        >
          {/* <Button variant="outlined" startIcon={<Edit />}>
            Create a post
          </Button> */}
        </Stack>
      </FlexBetween>

      <Stack spacing={3} mt={3}>
        <SinglePost
          category="Esports"
          date="Nov 21, 2021"
          imgLink="/static/post/1.png"
          title="The International on the way 2021"
        />
        <SinglePost
          category="Environment"
          date="Aug 21, 2021"
          imgLink="/static/post/2.png"
          title="Global Warming Conclusion"
        />
        <SinglePost
          category="Environment"
          date="Jun 21, 2021"
          imgLink="/static/post/3.png"
          title="Crypto is the future"
        />
      </Stack>
    </Card>
  );
};

export default Post;

// ----------------------------------------------------
type PostProps = {
  date: string;
  title: string;
  imgLink: string;
  category: string;
};
// ----------------------------------------------------

function SinglePost({ date, title, imgLink, category }: PostProps) {
  return (
    <FlexBetween>
      <Stack spacing={0.5}>
        <H6>{title}</H6>

        <FlexBox alignItems="center" pt={0.5}>
          <DateRange sx={{ fontSize: 20, color: "text.disabled", mr: 1 }} />
          <Tiny fontSize={12} fontWeight={500}>
            Publish on {date}
          </Tiny>
        </FlexBox>
      </Stack>

      <Box
        sx={{ width: 125, height: 75, borderRadius: "4px", overflow: "hidden" }}
      >
        <img src={imgLink} width="100%" alt="Post" />
      </Box>
    </FlexBetween>
  );
}
