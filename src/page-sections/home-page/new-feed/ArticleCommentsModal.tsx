import { SendOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  Input,
  InputAdornment,
  Skeleton,
  Stack,
  styled,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import useGeneralWallet from "common/useGeneralWallet";
import AppModal from "components/AppModal";
import { H2 } from "components/Typography";
import FlexBox from "components/flexbox/FlexBox";
import { IArticle } from "interface/article.interface";
import { IComment } from "interface/comment.interface";
import { FC, useEffect, useState } from "react";
import { commentArticle, getArticleComments } from "utils/api/comments";
import ArticleComment from "./ArticleComment";
import ArticleCommentForm from "./ArticleCommentForm";
import InfiniteScroll from "react-infinite-scroll-component";
import { limitCommentsLoaded } from "../../../constants";
// component props interface
interface ModalProps {
  open: boolean;
  onClose: () => void;
  edit?: boolean;
  onFetchComments: boolean;
  articleSlug: string;
  offset: number;
  setOffSet: (offs: any) => void;
  comments: IComment[];
  setCommentsCount: (a: any) => void;
  commentsCount: number;
  setComments: (cmts: IComment[]) => void;
}

// styled components
const StyledAppModal = styled(AppModal)(({ theme }) => ({
  maxWidth: 900,
  minWidth: 300,
  background: "black",
  borderRadius: "20px",
  boxShadow: "1px 2px 2px 2px #27CE88",
  [theme.breakpoints.down("sm")]: {
    "& .main-form": { height: 500, overflow: "auto" },
  },
}));

const ArticleCommentsModal: FC<ModalProps> = ({
  open,
  onClose,
  edit,
  offset,
  setOffSet,
  onFetchComments,
  setCommentsCount,
  commentsCount,
  comments,
  setComments,
  articleSlug,
}) => {
  return (
    <StyledAppModal open={open} handleClose={onClose}>
      <H2 sx={{ color: "#27CE88" }}>{edit ? "Edit Product" : "Comments"}</H2>
      <Grid container spacing={2} className="main-form">
        <Grid item sm={12} xs={12}>
          <Box
            paddingTop={1}
            paddingLeft={2}
            id="comments"
            sx={{ maxHeight: "70vh", overflow: "auto" }}
          >
            <InfiniteScroll
              dataLength={comments.length - 4} //This is important field to render the next data
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
        </Grid>
      </Grid>

      <ArticleCommentForm
        setCommentsCount={setCommentsCount}
        articleSlug={articleSlug}
        comments={comments}
        setComments={setComments}
      />
    </StyledAppModal>
  );
};

export default ArticleCommentsModal;
