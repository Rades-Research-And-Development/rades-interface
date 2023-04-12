import { Box } from "@mui/system";
import { Tiny, Small, H4 } from "components/Typography";
import { IArticle } from "interface/article.interface";
import { FC, useState } from "react";

// component props interface
interface ArticleDescriptionProps {
  article: IArticle;
}

const ArticleDescription: FC<ArticleDescriptionProps> = ({ article }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <Box paddingTop={1} paddingLeft={2} pb={1}>
      <H4>{article?.title ? article?.title : "Amazing title"}</H4>
      <Tiny color="text.secondary" fontWeight={500} mb={1} mt={1}>
        {article?.description?.length >= 100 ? (
          <>
            {seeMore ? (
              <>
                {article?.description}
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
                {article?.description.slice(0, 100)}
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
          article?.description
        )}
      </Tiny>
    </Box>
  );
};

export default ArticleDescription;
