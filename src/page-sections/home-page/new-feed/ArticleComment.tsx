import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Small, Tiny } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { IComment } from "interface/comment.interface";
import { FC, useState } from "react";
import { usernameOptimize } from "utils/usernameOptimize";
import { cacluateTime } from "utils/caculateTime";

// component props interface
interface ArticleCommentProps {
  comment: IComment;
}

const ArticleComment: FC<ArticleCommentProps> = ({ comment }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <FlexBox alignItems="center" gap={1} pb={1}>
      <Box>
        <FlexBox gap={1}>
          <AppAvatar
            alt="Remy Sharp"
            src={comment?.author?.image}
            sx={{ width: 23, height: 23 }}
          >
            {" "}
            <Divider orientation="vertical" flexItem></Divider>
          </AppAvatar>

          <Box>
            <Small
              sx={{
                fontSize: 14,
                fontWeight: 600,
                color: "#2499EF",
              }}
            >
              {" "}
              {usernameOptimize(
                comment?.author?.username ||
                  (comment?.author?.publicKey as string)
              )}{" "}
            </Small>
            {comment?.body?.length >= 100 ? (
              <>
                {seeMore ? (
                  <>
                    <Small sx={{ frontSize: "13px" }}>{comment?.body}</Small>
                    <Small
                      onClick={() => setSeeMore(false)}
                      sx={{ cursor: "pointer", fontWeight: 800 }}
                    >
                      {" "}
                      see less
                    </Small>
                  </>
                ) : (
                  <>
                    <Small sx={{ frontSize: "13px" }}>
                      {comment?.body.slice(0, 100)}
                    </Small>
                    <Small
                      onClick={() => setSeeMore(true)}
                      sx={{ cursor: "pointer", fontWeight: 800 }}
                    >
                      {" "}
                      ...see more
                    </Small>
                  </>
                )}
              </>
            ) : (
              <Small sx={{ frontSize: "13px" }}>{comment?.body}</Small>
            )}
          </Box>
        </FlexBox>
        <FlexBox gap={2} pl={4}>
          <Tiny sx={{ fontSize: "11px" }}>
            {cacluateTime(comment?.createdAt)}
          </Tiny>
          <Tiny sx={{ fontSize: "11px", cursor: "pointer" }}>Reply</Tiny>
        </FlexBox>
      </Box>
    </FlexBox>
  );
};

export default ArticleComment;
