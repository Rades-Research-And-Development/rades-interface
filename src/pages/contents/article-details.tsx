import { MoreHoriz } from "@mui/icons-material";
import {
  Box,
  Card,
  Divider,
  Grid,
  IconButton,
  Skeleton,
  Stack,
  styled,
} from "@mui/material";
import MoreOptions from "components/MoreOptions";
import { H3, H6, Small, Tiny } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { IArticle } from "interface/article.interface";
import ArticleMediaView from "page-sections/home-page/article-details/ArticleDetailsMediaView";
import ArticleComment from "page-sections/home-page/new-feed/ArticleComment";
import ArticleHeader from "page-sections/home-page/new-feed/ArticleHeader";
import { FC, MouseEvent, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { limitCommentsLoaded } from "../../constants";
// component props interface
import { IComment } from "interface/comment.interface";
import { getArticleComments } from "utils/api/comments";
import { getArticleBySlug } from "utils/api/articles";
import ArticleCommentForm from "page-sections/home-page/new-feed/ArticleCommentForm";
import ArticleReactEmotions from "page-sections/home-page/new-feed/ArticleReactEmotions";
const StyledAvatar = styled(AppAvatar)(() => ({
  width: 36,
  height: 36,
  borderColor: "transparent",
  backgroundColor: "transparent",
}));

const ArticleDetails: FC = () => {
  const { article_slug, media_id } = useParams();
  const [article, setArticle] = useState<IArticle>();
  const [comments, setComments] = useState<IComment[]>([]);
  const [offset, setOffSet] = useState<number>(0);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [onFetchComments, setOnFetchComments] = useState<boolean>(true);

  const [projectEl, setProjectEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (article_slug) {
      getArticleBySlug(article_slug).then((res) => {
        setArticle(res.article);
      });
    }
  }, [article_slug]);

  useEffect(() => {
    if (article?.slug) {
      getArticleComments(article?.slug || "", { offset }).then((res) => {
        setOnFetchComments(false);
        setComments((comments) => [...comments, ...res.comments]);
        setCommentsCount(res.commentsCount);
      });
    }
  }, [article?.slug, offset]);

  // -----------------------------------------------------------------------
  const handleProjectMoreOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setProjectEl(event.currentTarget);
  };
  const handleProjectMoreClose = () => setProjectEl(null);
  // -----------------------------------------------------------------------

  // -----------------------------------------------------------------------

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Card>
            {article ? (
              <ArticleMediaView article={article as IArticle} />
            ) : (
              <Skeleton width={"100%"} height={"80vh"} />
            )}
          </Card>
        </Grid>

        <Grid item xs={12} md={3} sx={{ paddingLeft: 2 }}>
          <Card>
            {article ? (
              <ArticleHeader article={article} />
            ) : (
              <Stack spacing={1}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={"100%"} height={300} />
              </Stack>
            )}
            <FlexBetween>
              <H3 mb={1}>
                {article ? article?.title : <Skeleton width={"200px"} />}
              </H3>
              {/* <IconButton sx={{ padding: 0 }} onClick={handleProjectMoreOpen}>
                <MoreHoriz />
              </IconButton>

              <MoreOptions
                anchorEl={projectEl}
                handleMoreClose={handleProjectMoreClose}
              /> */}
            </FlexBetween>

            <Small color="text.secondary">
              {article ? (
                article?.description
              ) : (
                <Skeleton width={"600px"} height={"300px"} />
              )}
            </Small>

            {article?.slug ? (
              <div
                style={{ width: "auto", maxWidth: "500px", overflowX: "auto" }}
              >
                <ArticleReactEmotions
                  article={article as IArticle}
                  setArticle={setArticle}
                  commentCount={commentsCount}
                  hideDescription={true}
                />
              </div>
            ) : (
              ""
            )}
          </Card>
          <Divider />

          <Box
            paddingTop={1}
            paddingLeft={2}
            id="comments"
            sx={{ maxHeight: "70vh", overflow: "auto" }}
          >
            <InfiniteScroll
              dataLength={comments.length} //This is important field to render the next data
              next={() => {
                setOffSet((offset) => offset + limitCommentsLoaded);
              }}
              hasMore={comments.length < commentsCount}
              loader={
                <Stack spacing={1}>
                  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={"100%"} height={200} />
                </Stack>
              }
              scrollableTarget="comments"
            >
              {!onFetchComments ? (
                comments?.map?.((cmt, id) => {
                  return <ArticleComment comment={cmt} />;
                })
              ) : (
                <>
                  {[1, 2, 3].map((r, _) => (
                    <Stack spacing={1} key={_}>
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                      <Skeleton variant="circular" width={24} height={24} />
                      <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={70}
                      />
                    </Stack>
                  ))}
                </>
              )}
            </InfiniteScroll>
          </Box>
          {article?.slug ? (
            <ArticleCommentForm
              articleSlug={article.slug}
              comments={comments}
              setComments={setComments}
              setCommentsCount={setCommentsCount}
            />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

const tasks = [
  {
    title: "Design",
    status: "Completed",
  },
  {
    title: "Development",
    status: "Ongoing",
  },
  {
    title: "Back End Development",
    status: "Upcoming",
  },
];

const files = [
  {
    id: 1,
    title: "Design Homepage",
    image: "/static/file-type/jpg.svg",
  },
  {
    id: 2,
    title: "Preliminary Sketches",
    image: "/static/file-type/zip.svg",
  },
  {
    id: 3,
    title: "Preliminary Sketches",
    image: "/static/file-type/pdf.svg",
  },
  {
    id: 4,
    title: "Preliminary Sketches",
    image: "/static/file-type/raw.svg",
  },
];

const projectTools = [
  {
    id: 1,
    company: "Adobe Illustrator",
    image: "/static/tools-logo/illustrator.svg",
    position: "Design Software",
  },
  {
    id: 2,
    company: "Sketch",
    image: "/static/tools-logo/sketch.svg",
    position: "Design Software",
  },
  {
    id: 3,
    company: "Adobe Photoshop",
    image: "/static/tools-logo/photoshop.svg",
    position: "Design Software",
  },
];

const stacks = [
  {
    id: 1,
    company: "HTML5",
    image: "/static/tools-logo/html.svg",
    position: "Code",
  },
  {
    id: 2,
    company: "VueJS",
    image: "/static/tools-logo/vue.svg",
    position: "Code",
  },
  {
    id: 3,
    company: "Sass",
    image: "/static/tools-logo/sass.svg",
    position: "Code",
  },
];

export default ArticleDetails;
