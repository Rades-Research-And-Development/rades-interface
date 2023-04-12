import {
  ArrowBack,
  ArrowForward,
  ForkLeft,
  Forward,
} from "@mui/icons-material";
import { Button, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import LeafIcon from "icons/LeafIcon";
import { IArticle } from "interface/article.interface";
import {
  StyledCarouselProvider,
  StyledStack,
} from "page-sections/marketplaces/productDetails/ProductViewCard";
import {
  ButtonBack,
  ButtonNext,
  Dot,
  Slide,
  Slider,
} from "pure-react-carousel";
import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { checkFileType } from "utils/fileTypeDetect";
// component props interface
interface ArticleMediaViewProps {
  article: IArticle;
}
function Image(props) {
  const { src, alt } = props;
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Callback function for the onLoad event of the img element
  function handleImageLoad(e) {
    const { naturalWidth, naturalHeight } = e.target;
    setDimensions({ width: naturalWidth, height: naturalHeight });
  }

  // Conditionally render the img element based on the dimensions
  const { width, height } = dimensions;
  const renderWidth = width > height ? "100%" : "auto";
  const renderHeight = height > width ? "100vh" : "auto";
  const imgStyle = {
    width: width === height ? "100%" : renderWidth,
    height: width === height ? "100vh" : renderHeight,
    verticalAlign: "middle",
  };
  let imgElement = (
    <img src={src} alt={alt} onLoad={handleImageLoad} style={imgStyle} />
  );

  // set margintop

  return imgElement;
}

const ArticleMediaView: FC<ArticleMediaViewProps> = ({ article }) => {
  const [imageLoadStatus, setImageLoadStatus] = useState<boolean>(false);
  const { media_id } = useParams();
  // useEffect(() => {
  //   document.getElementById("slide_4")?.focus();
  // });
  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        overflow: "cover",
        textAlign: "center",
      }}
    >
      <StyledCarouselProvider
        totalSlides={article.medias?.length as number}
        dragEnabled={true}
        currentSlide={Number(media_id) || 0}
        naturalSlideWidth={100}
        naturalSlideHeight={15}
        sx={{ height: "90vh", width: "100%" }}
      >
        <ButtonBack style={{ background: "none" }}>
          <ArrowBack
            sx={{
              fontSize: "30px",
              borderRadius: "50%",
              color: "#27CE88",
            }}
            fontSize="large"
          />
        </ButtonBack>
        <Slider>
          {article.medias?.map((item, _: number) => (
            <Slide
              index={_}
              key={_}
              id={`slide_${_}`}
              style={{ innerHeight: "90vh" }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100vh",
                  opacity: 0,
                }}
              ></div>
              <Box
                sx={{
                  width: "100%",
                  height: "90vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {checkFileType(item) === "video" ? (
                  <video
                    id="my-video"
                    controls
                    // autoPlay
                    style={{
                      maxHeight: `90vh`,
                      zIndex: 3,
                      width: "80%",
                      objectFit: "cover",
                    }}
                  >
                    <source src={item} type="video/mp4" />
                  </video>
                ) : checkFileType(item) === "pdf" ? (
                  <iframe
                    src={`${item}#zoom=FitH&view=fit&toolbar=0&bgcolor=000000`}
                    style={{
                      height: `90vh`,
                      border: "1px solid #27CE88",
                      width: "80%",
                      zIndex: 3,
                    }}
                  />
                ) : (
                  <Image src={item} alt="asd" />
                )}
              </Box>
            </Slide>
          ))}
        </Slider>
        <ButtonNext style={{ background: "none" }}>
          <ArrowForward
            sx={{
              fontSize: "30px",
              borderRadius: "50%",
              color: "#27CE88",
            }}
          />
        </ButtonNext>
      </StyledCarouselProvider>
    </Box>
  );
};

export default ArticleMediaView;
