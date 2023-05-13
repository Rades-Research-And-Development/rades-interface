import {
  Box,
  Grid,
  InputBase,
  Skeleton,
  Stack,
  styled,
  Theme,
  useMediaQuery,
} from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { limitArticlesLoaded } from "../../constants";
import PencilIcon from "icons/PencilIcon";
import { IArticle } from "interface/article.interface";

import Article from "page-sections/home-page/new-feed/Article";
import CreatArticle from "page-sections/home-page/new-feed/CreatArticle";
import SideRightBar from "page-sections/home-page/recently-chat";
import SideLeftBar from "page-sections/home-page/recommed-content";
import { FC, memo, SyntheticEvent, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getArticles } from "utils/api/articles";
import { H1 } from "components/Typography";
import { PlayArrow } from "@mui/icons-material";

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
const NewFeed: FC = () => {
  const [value, setValue] = useState("all");
  const [openModal, setOpenModal] = useState(false);
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [articlesCount, setArticlesCount] = useState<number>(0);
  const [offset, setOffSet] = useState<number>(0);
  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
    <Box pt={2} pb={4}>
      <Grid container spacing={1} paddingTop={3}>
        {/* <Grid item xs={12}></Grid> */}
        {!downSM ? (
          <Grid item xs={12} sm={4} md={4} sx={{ maxHeight: "100vh" }}>
            {" "}
            <SideLeftBar />
          </Grid>
        ) : (
          ""
        )}

        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          sx={{
            maxHeight: "100vh",
            overflowX: "hidden",
            overflowY: "scroll",
            marginTop: 3,
          }}
          id="articles"
        >
          {/* <FlexBox justifyContent="space-between" flexWrap="wrap"> */}
          <StyledInputBase
            placeholder="What do you think?"
            disable_border={false}
            sx={{
              maxWidth: downSM ? "100%" : "100%",
              marginBottom: downSM ? 1 : 2,
              marginTop: 3,
              height: "70px",
              border: "0.5px solid #27CE88",
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
          <CreatArticle
            setArticles={(a: any) => setArticles(a)}
            articles={articles}
            setArticlesCount={setArticlesCount}
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
          {/* </FlexBox> */}
          <InfiniteScroll
            dataLength={articles.length - 4} //This is important field to render the next data
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

        {!downSM ? (
          <Grid item xs={12} sm={3} md={3} sx={{ maxHeight: "100vh" }}>
            {" "}
            <SideRightBar />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Box>
  );
};

export default NewFeed;
