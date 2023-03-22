import { Add } from "@mui/icons-material";
import { AvatarGroup, Button, Card, Skeleton } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H3, Small } from "components/Typography";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

// component props interface
interface PostsNavigationProps {
  project: {
    name: string;
    thumbnail: string;
    description: string;
    teamMember: string[];
  };
}
const PostsNavigation: FC<PostsNavigationProps> = ({ project }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [seeMore, setSeeMore] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState<boolean>(false);
  return (
    <Card>
      <Box
        sx={{
          height: 500,
          margin: "1rem",
          // borderRadius: "8px",
          overflow: "hidden",
          "& img": { width: "100%", height: "100%", objectFit: "cover" },
        }}
      >
        <Link to="/dashboards/project-details">
          <img
            src={project.thumbnail}
            alt="Project Thumbnail"
            style={
              imageLoadStatus
                ? { display: "inline-block" }
                : { display: "none" }
            }
            onLoad={() => {
              setImageLoadStatus(true);
            }}
          />
        </Link>

        {!imageLoadStatus ? <Skeleton width={"100%"} height={500} /> : ""}
      </Box>

      <Box padding={2} paddingTop={0}>
        <FlexBox alignItems="center" gap={1}>
          <AppAvatar alt="Remy Sharp" src={project.teamMember[0]} />{" "}
          {t(project.name)}
        </FlexBox>{" "}
        <Box mt={1} mb={1} />
        <Small color="text.secondary" fontWeight={500} mb={2}>
          {project.description?.length >= 100 ? (
            <>
              {seeMore ? (
                <>
                  {project.description}
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
                  {project.description.slice(0, 100)}
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
            project.description
          )}
        </Small>
        <FlexBetween flexWrap="wrap" pt="1rem">
          <FlexBox alignItems="center" gap={1}>
            <Button
              variant="dashed"
              sx={{ fontSize: "16px", border: "1px solid gray" }}
            >
              <ThumbUpOffAltIcon fontSize="small" sx={{ color: "grey.600" }} />
            </Button>
            <Button
              variant="dashed"
              sx={{ fontSize: "16px", border: "1px solid gray" }}
            >
              <ThumbDownOffAltIcon
                fontSize="small"
                sx={{ color: "grey.600" }}
              />
            </Button>
          </FlexBox>

          <Small
            sx={{
              backgroundColor: "action.hover",
              padding: "5px 15px",
              borderRadius: "20px",
              color: "text.secondary",
              [theme.breakpoints.between(960, 1050)]: {
                marginTop: 1,
                width: "100%",
                textAlign: "center",
              },
            }}
          >
            3 Weeks Left
          </Small>
        </FlexBetween>
      </Box>
    </Card>
  );
};

export default PostsNavigation;
