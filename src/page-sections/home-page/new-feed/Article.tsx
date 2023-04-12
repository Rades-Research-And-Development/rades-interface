import { Card, Divider, Skeleton, Stack } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { IArticle } from "interface/article.interface";
import { IComment } from "interface/comment.interface";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getArticleComments } from "utils/api/comments";
import ArticleComment from "./ArticleComment";
import ArticleCommentForm from "./ArticleCommentForm";
import ArticleCommentsModal from "./ArticleCommentsModal";
import ArticleDescription from "./ArticleDecription";
import ArticleHeader from "./ArticleHeader";
import ArticleMediaView from "./ArticleMediaView";
import ArticleReactEmotions from "./ArticleReactEmotions";

// component props interface
interface ArticleProps {
  article: IArticle;
}

const Article: FC<ArticleProps> = (props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [article, setArticle] = useState<IArticle>(props.article);
  const [openCommentsModal, setOpenCommentsModal] = useState<boolean>(false);

  const [comments, setComments] = useState<IComment[]>([]);
  const [offset, setOffSet] = useState<number>(0);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [onFetchComments, setOnFetchComments] = useState<boolean>(true);

  useEffect(() => {
    getArticleComments(article.slug, { offset }).then((res) => {
      setOnFetchComments(false);
      setComments((comments) => [...comments, ...res.comments]);
      setCommentsCount(res.commentsCount);
    });
  }, [article.slug, offset]);

  return (
    <Card
      sx={{
        marginBottom: 2,
        borderRadius: "15px",
      }}
    >
      {openCommentsModal ? (
        <ArticleCommentsModal
          // Modal Status
          onClose={() => setOpenCommentsModal(false)}
          open={openCommentsModal}
          // Comment Infinity Scroll
          articleSlug={article.slug}
          offset={offset}
          setOffSet={(offs: number) => setOffSet(offs)}
          onFetchComments={onFetchComments}
          setCommentsCount={setCommentsCount}
          commentsCount={commentsCount}
          comments={comments}
          setComments={(cmts: IComment[]) => setComments(cmts)}
        />
      ) : (
        ""
      )}
      <ArticleHeader article={article} />
      <Box paddingLeft={2} paddingRight={2} paddingTop={1} paddingBottom={1}>
        <ArticleDescription article={article} />
        {article.medias?.[0] ? <ArticleMediaView article={article} /> : ""}
        <ArticleReactEmotions
          article={article}
          setArticle={setArticle}
          commentCount={commentsCount}
          setOpenCommentsModal={setOpenCommentsModal}
          openCommentsModal={openCommentsModal}
        />
        <Divider sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} />
        {!onFetchComments ? (
          comments?.slice(0, 3)?.map?.((cmt, id) => {
            return <ArticleComment comment={cmt} />;
          })
        ) : (
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="circular" width={24} height={24} />
            <Skeleton variant="rectangular" width={"100%"} height={70} />
          </Stack>
        )}
        <ArticleCommentForm
          articleSlug={article.slug}
          comments={comments}
          setComments={setComments}
          setCommentsCount={setCommentsCount}
        />
      </Box>
    </Card>
  );
};

export default Article;
