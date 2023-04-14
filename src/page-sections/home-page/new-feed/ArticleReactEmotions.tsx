import {
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  LoopOutlined,
  Leaderboard,
} from "@mui/icons-material";
import { ButtonBase, styled, useMediaQuery, Theme } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import ShareAccountIcon from "icons/ShareAccount";
import { IArticle } from "interface/article.interface";
import { FC, useState } from "react";
import { reactArticle } from "utils/api/articles";
import { getCookie } from "utils/cookies/cookies";

// component props interface
interface ArticleReactEmotionsProps {
  article: IArticle;
  setArticle: (article: any) => void;
  commentCount: Number;
  setOpenCommentsModal?: (status: boolean) => void;
  openCommentsModal?: boolean;
  hideDescription?: boolean;
}
const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  padding: 5,
  paddingLeft: 10,
  paddingRight: 10,
  borderRadius: 30,
  border: "none",
  "&:hover": { backgroundColor: theme.palette.action.hover },
}));
const ArticleReactEmotions: FC<ArticleReactEmotionsProps> = ({
  article,
  setArticle,
  setOpenCommentsModal,
  commentCount,
  openCommentsModal,
  hideDescription,
}) => {
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const onFavouriteArticles = () => {
    if (getCookie("authentication_code"))
      setArticle({
        ...article,
        favoritesCount: article.favorited
          ? article.favoritesCount - 1
          : article.favoritesCount + 1,
        favorited: !article.favorited,
      });
    reactArticle(article.slug, article.favorited).then((res) => {});
  };

  return (
    <FlexBetween flexWrap="wrap" gap={0.1} pt={1}>
      {/* <FlexBox alignItems="center" sx={{ textAlign: "center" }} gap={1}> */}
      <StyledButtonBase
        sx={{ color: "#FF316F" }}
        onClick={() => {
          onFavouriteArticles();
        }}
      >
        {article?.favorited ? (
          <FavoriteOutlined
            fontSize="small"
            sx={{ color: "#FF316F", marginRight: 0.2 }}
          />
        ) : (
          <FavoriteBorderOutlined
            fontSize="small"
            sx={{ color: "#FF316F", marginRight: 0.2 }}
          />
        )}
        {article?.favoritesCount} {!downSM && !hideDescription ? "Loves" : ""}
      </StyledButtonBase>

      <StyledButtonBase
        sx={{ color: "#2499EF" }}
        onClick={() => {
          setOpenCommentsModal?.(true);
        }}
      >
        {" "}
        <ChatBubbleOutline
          fontSize="small"
          sx={{ color: "#2499EF", marginRight: 0.2 }}
        />
        {commentCount.toString() || 0}{" "}
        {!downSM && !hideDescription ? "Comments" : ""}
      </StyledButtonBase>
      <StyledButtonBase sx={{ color: "#27CE88" }}>
        {" "}
        <ShareAccountIcon
          fontSize="small"
          sx={{ color: "#27CE88", marginRight: 0.2 }}
        />
        0 {!downSM && !hideDescription ? "Shares" : ""}
      </StyledButtonBase>
      <StyledButtonBase sx={{ color: "#FEC575" }}>
        {" "}
        <LoopOutlined
          fontSize="small"
          sx={{ color: "#FEC575", marginRight: 0.2 }}
        />
        0 {!downSM && !hideDescription ? "Re-post" : ""}
      </StyledButtonBase>
      <StyledButtonBase sx={{ color: "#8C8DFF" }}>
        {" "}
        <Leaderboard
          fontSize="small"
          sx={{ color: "#8C8DFF", marginRight: 0.2 }}
        />
        0 {!downSM && !hideDescription ? "Views" : ""}
      </StyledButtonBase>
      {/* </FlexBox> */}
    </FlexBetween>
  );
};

export default ArticleReactEmotions;
