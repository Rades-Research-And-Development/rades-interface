import { SendOutlined } from "@mui/icons-material";
import {
  Avatar,
  CircularProgress,
  Divider,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import useGeneralWallet from "common/useGeneralWallet";
import { Tiny, Small, H4 } from "components/Typography";
import FlexBox from "components/flexbox/FlexBox";
import { IArticle } from "interface/article.interface";
import { IComment } from "interface/comment.interface";
import { FC, useState } from "react";
import { commentArticle } from "utils/api/comments";

// component props interface
interface ArticleCommentFormProps {
  articleSlug: string;
  comments: IComment[];
  setCommentsCount: (a: any) => void;
  setComments: (comments: IComment[]) => void;
}

const ArticleCommentForm: FC<ArticleCommentFormProps> = ({
  articleSlug,
  comments,
  setCommentsCount,
  setComments,
}) => {
  const [comment, setComment] = useState<string>("");
  const user = useGeneralWallet((s) => s);
  const [onSubmitComment, setOnSubmitComment] = useState<boolean>(false);
  const onComment = (e?: any) => {
    if (comment !== "") {
      e?.preventDefault();
      setOnSubmitComment(true);
      setComment("");
      commentArticle(articleSlug, comment)
        .then((res) => {
          setComments([res.comment, ...comments]);
          setCommentsCount((count) => count + 1);
          setOnSubmitComment(false);
        })
        .catch((err) => setOnSubmitComment(false));
    }
  };
  function handleKeyDown(event) {
    if (event.altKey || event.ctrlKey) {
      console.log("Down break");
      event.preventDefault();
      const { selectionStart, selectionEnd } = event.target;
      const newValue = `${comment.substring(
        0,
        selectionStart
      )}\n${comment.substring(selectionEnd)}`;
      setComment(newValue);
      event.target.setSelectionRange(selectionStart + 1, selectionStart + 1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      onComment();
    }
  }
  return (
    <form onSubmit={onComment}>
      <FlexBox justifyContent="flex-end" gap={2} marginTop={3}>
        <TextField
          fullWidth
          placeholder="Add a comment..."
          value={comment}
          sx={{ fontSize: "" }}
          variant="standard"
          multiline
          onChange={(e) => {
            setComment(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <Avatar
                  src={user?.image ? user?.image : "/static/portfolio/3.png"}
                  sx={{ width: 22, height: 22 }}
                />
              </InputAdornment>
            ),
          }}
        />
        <IconButton
          disabled={comment === ""}
          aria-label="comment"
          size="small"
          type="submit"
        >
          {onSubmitComment ? (
            <CircularProgress size={17} />
          ) : (
            <SendOutlined fontSize="small" />
          )}
        </IconButton>
        {/* </input> */}
      </FlexBox>
    </form>
  );
};

export default ArticleCommentForm;
