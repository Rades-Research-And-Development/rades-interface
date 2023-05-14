import {
  Grid,
  InputBase,
  Skeleton,
  Stack,
  styled,
  useMediaQuery,
  Theme,
  useTheme,
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
import { H4, Small } from "components/Typography";
import CreateArticle from "page-sections/home-page/new-feed/CreateArticle";
import FlexBox from "components/flexbox/FlexBox";
import PencilIcon from "icons/PencilIcon";
import useGeneralWallet from "common/useGeneralWallet";
import { useNavigate } from "react-router-dom";
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
  const theme = useTheme();
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [articlesCount, setArticlesCount] = useState<number>(0);
  const [isHavePosted, setIsHavePosted] = useState<boolean>(true);
  const [offset, setOffSet] = useState<number>(0);
  const [openModal, setOpenModal] = useState(false);
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const user = useGeneralWallet((s) => s);
  const navigate = useNavigate();
  // search input
  useEffect(() => {
    if (user.username) {
      getArticles({ offset, author: user.username })
        .then((res) => {
          setArticles((current) => [
            ...current,
            ...(res.articles as IArticle[]),
          ]);
          setArticlesCount(res.articlesCount);
          console.log(res.articlesCount);
          if (res.articlesCount === 0) {
            setIsHavePosted(false);
          }
        })
        .catch((err) => {
          console.log(err);
          navigate("/dashboards/404");
          setIsHavePosted(false);
        });
    }
  }, [offset, user.username, navigate]);
  return (
    <Box mt={3}>
      <Grid
        container
        spacing={3}
        sx={{
          height: "100vh",
        }}
      >
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            height: "100vh",
          }}
        >
          <MyConnections />

          <Stack
            spacing={3}
            sx={{
              maxHeight: "100vh",
              // overflowX: "hidden",
              overflowY: "scroll",
            }}
          >
            <Small>Your Media</Small>
            <>
              {isHavePosted ? (
                <>
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
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={300}
                        />
                      </Stack>
                      <Stack spacing={1}>
                        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                        {/* <Skeleton variant="circular" width={40} height={40} /> */}
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={300}
                        />
                      </Stack>
                    </>
                  )}
                </>
              ) : (
                ""
              )}
            </>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            height: "100vh",
            overflowX: "hidden",
            overflowY: "scroll",
            marginTop: 3,
          }}
          id="articles"
        >
          <FlexBox justifyContent="space-between" flexWrap="wrap" pb={1}>
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
              setArticles={(a: any) => {
                if (a.length !== 0) setIsHavePosted(true);
                setArticles(a);
              }}
              articles={articles}
              setArticlesCount={setArticlesCount}
              open={openModal}
              onClose={() => setOpenModal(false)}
            />
          </FlexBox>
          {isHavePosted ? (
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
                    console.log(articles);
                    return <MemoArticle article={item} key={item.slug} />;
                  })}
                </Grid>
              ) : (
                <>
                  <Stack spacing={1}>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={300}
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={300}
                    />
                  </Stack>
                </>
              )}
            </InfiniteScroll>
          ) : (
            <div style={{ textAlign: "center", width: "100%" }}>
              <H4
                style={{
                  textAlign: "center",
                  color: theme.palette.primary.red,
                }}
              >
                Abort: You haven't posted anything!
              </H4>
            </div>
          )}
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            height: "100vh",
          }}
        >
          <Stack spacing={3} style={{ maxHeight: "80vh" }}>
            <Summery />
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
