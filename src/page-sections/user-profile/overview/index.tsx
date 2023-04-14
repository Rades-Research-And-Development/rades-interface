import {
  Grid,
  InputBase,
  Skeleton,
  Stack,
  styled,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { Box } from "@mui/system";
import { IArticle } from "interface/article.interface";
import { FC } from "react";
import { limitArticlesLoaded } from "../../../constants";
import AdditionalDetails from "./AdditionalDetails";
import MyConnections from "./MyConnections";
import Summery from "./Summery";

import Article from "page-sections/home-page/new-feed/Article";
import { memo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SyntheticEvent, useEffect, useState } from "react";
import { getArticles } from "utils/api/articles";
import RecentlyChat from "page-sections/home-page/recently-chat/RecentlyChat";
import RecommendContent from "page-sections/home-page/recommed-content";
import ArticleMediaView from "page-sections/home-page/new-feed/ArticleMediaView";
import { Small } from "components/Typography";
import CreateArticle from "page-sections/home-page/new-feed/CreatArticle";
import FlexBox from "components/flexbox/FlexBox";
import PencilIcon from "icons/PencilIcon";
// styled component
const StyledInputBase = styled(InputBase)<{ disable_border: any }>(
  ({ theme, disable_border }) => ({
    height: 45,
    fontSize: 12,
    width: "100%",
    maxWidth: 350,
    fontWeight: 600,
    padding: "0 1rem",
    borderRadius: "8px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    border: disable_border
      ? "none"
      : `1px solid black ${theme.palette.action.disabled}`,
    // [theme.breakpoints.down(500)]: { maxWidth: "100%" },
    "::placeholder": { color: theme.palette.text.disabled },
  })
);

const MemoArticle = memo(Article);
const Overview: FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [articlesCount, setArticlesCount] = useState<number>(0);
  const [offset, setOffSet] = useState<number>(0);
  const [openModal, setOpenModal] = useState(false);
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  // search input
  useEffect(() => {
    getArticles({ offset })
      .then((res) => {
        setArticles((current) => [...current, ...(res.articles as IArticle[])]);
        setArticlesCount(res.articlesCount);
      })
      .catch((err) => console.log(err));
  }, [offset]);
  return (
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Small>Your Media</Small>
          <Stack
            spacing={3}
            sx={{
              maxHeight: "100%",
              // overflowX: "hidden",
              // overflowY: "scroll",
            }}
          >
            {articles?.[0] && articles ? (
              <Grid item xs={12} sm={12} md={12}>
                {articles.slice(0, 3)?.map((item: IArticle, index) => {
                  return <ArticleMediaView article={item} />;
                })}
              </Grid>
            ) : (
              <>
                <Stack spacing={1}>
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  {/* <Skeleton variant="circular" width={40} height={40} /> */}
                  <Skeleton variant="rectangular" width={"100%"} height={300} />
                </Stack>
                <Stack spacing={1}>
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  {/* <Skeleton variant="circular" width={40} height={40} /> */}
                  <Skeleton variant="rectangular" width={"100%"} height={300} />
                </Stack>
              </>
            )}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            maxHeight: "100vh",
            overflowX: "hidden",
            overflowY: "scroll",
            marginTop: 3,
          }}
          id="articles"
        >
          <FlexBox justifyContent="space-between" flexWrap="wrap">
            <StyledInputBase
              placeholder="What do you think?"
              disable_border={false}
              sx={{
                maxWidth: downSM ? "100%" : "100%",
                marginBottom: downSM ? 1 : 0,
                border: "1px solid #27CE88",
              }}
              onClick={() => setOpenModal(true)}
              startAdornment={
                <PencilIcon
                  sx={{
                    fontSize: 18,
                    marginRight: 1,
                    color: "text.disabled",
                  }}
                />
              }
            />
            <CreateArticle
              setArticles={(a: any) => setArticles(a)}
              articles={articles}
              setArticlesCount={setArticlesCount}
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </FlexBox>
          <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={() => {
              setOffSet(offset + limitArticlesLoaded);
            }}
            hasMore={articles.length < articlesCount}
            loader={
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={"100%"} height={300} />
              </Stack>
            }
            scrollableTarget="articles"
          >
            {articles?.[0] && articles ? (
              <Grid item xs={12} sm={12} md={12}>
                {articles?.map((item: IArticle, index) => {
                  return <MemoArticle article={item} key={item.slug} />;
                })}
              </Grid>
            ) : (
              <>
                <Stack spacing={1}>
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={"100%"} height={300} />
                </Stack>
                <Stack spacing={1}>
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={"100%"} height={300} />
                </Stack>
              </>
            )}
          </InfiniteScroll>
        </Grid>
        <Grid item md={4} xs={12}>
          <Stack spacing={3}>
            <Summery />
            <MyConnections />
            <RecommendContent />
            {/* <Skills /> */}
            {/* <Teams />
            <Hobbies /> */}
            {/* <Post /> */}
            {/* <Portfolio /> */}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
