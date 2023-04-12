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
import { H3, H5, H6, Small, Tiny } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { IArticle } from "interface/article.interface";
import ArticleHeader from "page-sections/home-page/new-feed/ArticleHeader";
import ArticleMediaView from "page-sections/home-page/article-details/ArticleDetailsMediaView";
import { FC, MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleBySlug } from "utils/api/articles";
const StyledAvatar = styled(AppAvatar)(() => ({
  width: 36,
  height: 36,
  borderColor: "transparent",
  backgroundColor: "transparent",
}));

const RightContentWrapper = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const ArticleDetails: FC = () => {
  const { article_slug, media_id } = useParams();
  const [article, setArticle] = useState<IArticle>();

  useEffect(() => {
    if (article_slug) {
      getArticleBySlug(article_slug).then((res) => {
        setArticle(res.article);
      });
    }
  }, [article_slug]);

  const [fileEl, setFileEl] = useState<null | HTMLElement>(null);
  const [projectEl, setProjectEl] = useState<null | HTMLElement>(null);

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
              <IconButton sx={{ padding: 0 }} onClick={handleProjectMoreOpen}>
                <MoreHoriz />
              </IconButton>

              <MoreOptions
                anchorEl={projectEl}
                handleMoreClose={handleProjectMoreClose}
              />
            </FlexBetween>

            <Small color="text.secondary">
              {article ? (
                article?.description
              ) : (
                <Skeleton width={"600px"} height={"300px"} />
              )}
            </Small>
            {projectTools.map((item) => (
              <FlexBox alignItems="center" mb={2} mt={2} pl={2} key={item.id}>
                <StyledAvatar alt="Logo" src={item.image} />

                <Box ml={1.5}>
                  <H6>{item.company}</H6>
                  <Tiny color="text.secondary">{item.position}</Tiny>
                </Box>
              </FlexBox>
            ))}
          </Card>
          <Divider />
          <Card sx={{ paddingLeft: 2, paddingTop: 1 }}>
            {stacks.map((item) => (
              <FlexBox alignItems="center" mb={2} key={item.id}>
                <StyledAvatar alt="Logo" src={item.image} />
                <Box ml={1.5}>
                  <H6>{item.company}</H6>
                  <Tiny color="text.secondary">{item.position}</Tiny>
                </Box>
              </FlexBox>
            ))}
          </Card>
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
