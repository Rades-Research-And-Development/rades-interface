import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
} from "@mui/material";
import { Box } from "@mui/system";
import { imageLayout } from "../../../constants";
import { IArticle } from "interface/article.interface";
import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { H1, H2 } from "components/Typography";
import { checkFileType } from "utils/fileTypeDetect";
import { PlayArrow } from "@mui/icons-material";

// component props interface
interface ArticleMediaViewProps {
  article: IArticle;
}
interface ArticleVideoViewProps {
  media_link: string;
  rows: number;
}
const ArticleVideoView: FC<ArticleVideoViewProps> = ({ media_link, rows }) => {
  return (
    <>
      <PlayArrow
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          border: "2px solid white",
          borderRadius: "50%",
          fontSize: 64,
          zIndex: 1,
          cursor: "pointer",
        }}
      />
      <video
        id="my-video"
        // controls
        style={{
          // height: `${rows * 250}px`,
          zIndex: 3,
          width: "100%",
        }}
      >
        <source src={media_link} type="video/mp4" />
      </video>
    </>
  );
};
interface ArticlePDFViewProps {
  media_link: string;
  rows: number;
}
const ArticlePDFView: FC<ArticlePDFViewProps> = ({ media_link, rows }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        zIndex: 3,
      }}
    >
      <embed
        src={`${media_link}#toolbar=0`}
        style={{
          width: "100%",
          height: `${rows * 250}px`,
        }}
      />
    </div>
  );
};
// interface ArticleImageViewProps {
//   media_link: string;
//   rows: number;
// }
// const ArticleImageView: FC<ArticleImageViewProps> = ({ media_link, rows }) => {
//   return (
//     <img
//       style={{
//         height: `${rows * 250}px`,
//         cursor: "pointer",
//       }}
//       src={`${media_link}`}
//       srcSet={`${media_link}`}
//       alt={media_link}
//       loading="lazy"
//     />
//   );
// };

const ArticleMediaView: FC<ArticleMediaViewProps> = ({ article }) => {
  const [imageLoadStatus, setImageLoadStatus] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: 500,
        marginTop: "0.2rem",
        marginBottom: "0.2rem",
        // borderRadius: "8px",
        overflow: "hidden",
        // "& img": { width: "100%", height: "100%" },
      }}
    >
      <ImageList
        sx={{ width: "100%", height: "100%", overflow: "hidden" }}
        variant="quilted"
        cols={Math.min(article.medias?.length as number, 4)}
      >
        {article.medias?.[0] && article.medias?.length
          ? article.medias.map((item, _) => {
              if (_ <= 4) {
                const _imageLayout =
                  imageLayout[
                    Math.min(article.medias?.length as number, 5) - 1
                  ][_];
                console.log(_imageLayout);
                return (
                  <ImageListItem
                    key={item}
                    rows={_imageLayout.rows}
                    cols={_imageLayout.cols}
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      navigate(
                        `/dashboards/${article.author.username}/article/${article.slug}/medias/${_}`
                      )
                    }
                  >
                    {checkFileType(item) === "video" ? (
                      <ArticleVideoView
                        media_link={item}
                        rows={_imageLayout.rows}
                      />
                    ) : checkFileType(item) === "pdf" ? (
                      <ArticlePDFView
                        media_link={item}
                        rows={_imageLayout.rows}
                      />
                    ) : (
                      <img
                        style={{
                          //   objectFit: "cover",
                          height: `${_imageLayout.rows * 250}px`,
                          cursor: "pointer",
                        }}
                        src={`${item}`}
                        srcSet={`${item}`}
                        alt={item}
                        loading="lazy"
                      />
                    )}
                    {(article.medias?.length as number) > 5 && _ === 4 ? (
                      <ImageListItemBar
                        sx={{
                          background: "black",
                          opacity: "0.5",
                          width: "100%",
                          height: "100%",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                        title={
                          <H2>{`+${
                            (article.medias?.length as number) - 5
                          }`}</H2>
                        }
                        position="top"
                      />
                    ) : (
                      ""
                    )}
                  </ImageListItem>
                );
              }
              return "";
            })
          : ""}
      </ImageList>
    </Box>
  );
};

export default ArticleMediaView;
