import { Box } from "@mui/system";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { Small, Tiny } from "components/Typography";
import { IArticle } from "interface/article.interface";
import { FC, useState } from "react";

import { cacluateTime } from "utils/caculateTime";
import { usernameOptimize } from "utils/usernameOptimize";
// component props interface
interface ArticleHeaderProps {
  article: IArticle;
}

const ArticleHeader: FC<ArticleHeaderProps> = ({ article }) => {
  const [projectEl, setProjectEl] = useState<null | HTMLElement>(null);

  // -----------------------------------------------------------------------

  return (
    <Box paddingTop={1} paddingLeft={2} pb={1}>
      <FlexBox alignItems="center" gap={1}>
        <AppAvatar alt="Remy Sharp" src={article?.author.image} />
        <Box>
          <Small>
            <>
              @
              {usernameOptimize(
                article?.author?.username ||
                  (article?.author?.publicKey as string)
              )}
            </>
          </Small>
          <Tiny> {cacluateTime(article?.createdAt)}</Tiny>
        </Box>
      </FlexBox>{" "}
    </Box>
  );
};

export default ArticleHeader;
