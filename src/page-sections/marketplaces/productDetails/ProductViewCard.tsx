import {
  Button,
  Card,
  Chip,
  Grid,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RadioGroup from "@mui/material/RadioGroup";
import ColorRadio from "components/ColorRadio";
import FlexBox from "components/flexbox/FlexBox";
import { H4, H5, Tiny } from "components/Typography";
import ChevronDown from "icons/ChevronDown";
import Facebook from "icons/Facebook";
import Heart from "icons/Heart";
import Instagram from "icons/Instagram";
import { Avatar } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import Twitter from "icons/Twitter";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import {
  CarouselProvider,
  Dot,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel";
import { ChangeEvent, FC, useEffect, useState } from "react";
import Grid3x3OutlinedIcon from "@mui/icons-material/Grid3x3Outlined";
import QuantityButtons from "../QuantityButtons";
import FlexBetween from "components/flexbox/FlexBetween";

// styled components
import { linearProgressClasses } from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  border: "2px solid black",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
export const StyledCarouselProvider = styled(CarouselProvider)(({ theme }) => ({
  display: "flex",
  position: "relative",
  "& .carousel__slider": { flexGrow: 1, marginLeft: 10 },
  "& .carousel__slide-focus-ring": { display: "none" },
  "& button": { border: "none !important", opacity: 0.7 },
  "& button:disabled": {
    opacity: 1,
    position: "relative",
    "&::after": {
      left: 0,
      height: 3,
      content: '""',
      width: "100%",
      borderRadius: 3,
      position: "absolute",
      backgroundColor: theme.palette.primary.main,
    },
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    "& .carousel__slider": { marginLeft: 0 },
  },
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    flexDirection: "row",
    "& .carousel__dot": { marginTop: 0, marginRight: 8 },
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  top: 10,
  right: 10,
  position: "absolute",
  backgroundColor: theme.palette.grey[400],
  "&:hover": { backgroundColor: theme.palette.grey[400] },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  height: 25,
  borderRadius: "4px",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.success.main,
}));
type ProductViewCardProps = {
  book: any;
};

const ProductViewCard: FC<ProductViewCardProps> = ({ book }) => {
  const [colorSelect, setColorSelect] = useState("red");
  const navigate = useNavigate();

  // handle change color function
  const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    setColorSelect(event.target.value);
  };
  const rangeQuality = (pageCount) => {
    if (pageCount <= 250) return { key: "COMMON", color: "aquamarine" };
    else if (pageCount > 250 && pageCount <= 450)
      return { key: "RARE", color: "rebeccapurple" };
    else if (pageCount > 450) return { key: "LEGENDARY", color: "orangered" };
    else return { key: "none", color: "primary" };
  };
  return (
    <Card sx={{ padding: 2, border: "3px solid black" }}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <StyledCarouselProvider
            totalSlides={2}
            dragEnabled={false}
            naturalSlideWidth={90}
            naturalSlideHeight={90}
          >
            <StyledStack spacing={1}>
              {[
                book[0]?.volumeInfo?.imageLinks?.thumbnail,
                book?.avatar_nft,
              ].map((item, _: number) => (
                <Dot slide={_} key={_} style={{ width: 60, height: 55 }}>
                  <Image
                    hasMasterSpinner={true}
                    src={item}
                    style={{
                      objectFit: "cover",
                      border: "2px solid black black",
                      borderRadius: "5px",
                    }}
                  />
                </Dot>
              ))}
            </StyledStack>

            <Slider>
              {[
                book[0]?.volumeInfo?.imageLinks?.thumbnail,
                book?.avatar_nft,
              ].map((item, _: number) => (
                <Slide index={_} key={_}>
                  <Image
                    hasMasterSpinner={true}
                    src={item}
                    style={{
                      objectFit: "cover",
                      border: "3px solid black black",
                      borderRadius: "10px",
                    }}
                  />
                </Slide>
              ))}
            </Slider>
          </StyledCarouselProvider>
        </Grid>

        <Grid item md={6} xs={12}>
          {/* <StyledChip label="In Stock" /> */}
          <H4>{book[0]?.volumeInfo?.title}</H4>
          <Tiny mt={1} fontWeight={500} fontSize={13}>
            {book[0]?.volumeInfo?.authors?.map((data, _: number) => {
              return _ === 0 ? `${data} ` : `, ${data}`;
            })}
          </Tiny>

          <Grid container mt={1} alignItems="center" spacing={1}>
            <Grid item xs={6}>
              <Chip
                style={{
                  width: "100%",
                  border: "2px solid black",
                  color: rangeQuality(book[0]?.volumeInfo?.pageCount)?.color,
                }}
                icon={
                  <Grid3x3OutlinedIcon
                    style={{
                      color: rangeQuality(book[0]?.volumeInfo?.pageCount)
                        ?.color,
                    }}
                  />
                }
                variant="outlined"
                label={book[0]?.id}
              />
            </Grid>
            <Grid item xs={6}>
              <Chip
                style={{
                  width: "100%",
                  border: "2px solid black",
                  background: rangeQuality(book[0]?.volumeInfo?.pageCount)
                    ?.color,
                }}
                label={rangeQuality(book[0]?.volumeInfo?.pageCount)?.key}
              />
            </Grid>
            {/* <Grid item xs={10} mt={1}>
              <BorderLinearProgress variant="determinate" value={50} />
            </Grid>
            <Grid item xs={2} mt={1}>
              <Chip style={{ border: 'none' }} label={`${50}%`} variant="outlined" />
            </Grid> */}
          </Grid>
          {["Efficiency", "Luck", "Resilience"].map((data, _: number) => {
            let icon_: any;
            if (data === "Efficiency") icon_ = <AutoStoriesOutlinedIcon />;
            else if (data === "Luck") icon_ = <CasinoOutlinedIcon />;
            else if (data === "Resilience") icon_ = <HandymanOutlinedIcon />;
            let arr = [
              Math.floor(Math.random() * 70) + 30,
              Math.floor(Math.random() * 70) + 30,
              Math.floor(Math.random() * 70) + 30,
            ];
            return (
              <Grid container mt={1} alignItems="center" spacing={1}>
                <Grid item xs={4}>
                  <Chip
                    style={{ border: "none" }}
                    icon={icon_}
                    label={data}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={8}>
                  {/* <LinearProgress value={3} sx={{ border: '2px solid black', width: '90%', marginLeft: "5%" }} /> */}
                  <FlexBox alignItems="center">
                    <LinearProgress
                      value={arr[_]}
                      variant="determinate"
                      sx={{
                        flexGrow: 1,
                        ml: 2,
                        mr: 1,
                        border: "2px solid black",
                      }}
                    />
                    <Tiny fontWeight={600} color="text.primary">
                      {`${arr[_]}`}
                    </Tiny>
                  </FlexBox>
                </Grid>
              </Grid>
            );
          })}
          {/* <Grid container mt={1} alignItems="center" spacing={1}>
            <Grid item xs={4}><Chip style={{ border: 'none' }} icon={< AutoStoriesOutlinedIcon />} label="Efficiency" variant="outlined" /></Grid>
            <Grid item xs={8}><LinearProgress sx={{ border: '2px solid black', width: '90%', marginLeft: "5%" }} />
            </Grid>
          </Grid>

          <Grid container mt={1} alignItems="center" spacing={1}>
            <Grid item xs={4}><Chip style={{ border: 'none' }} icon={< AutoStoriesOutlinedIcon />} label="Luck" variant="outlined" /></Grid>
            <Grid item xs={8}><LinearProgress sx={{ border: '2px solid black', width: '90%', marginLeft: "5%" }} />
            </Grid>
          </Grid>

          <Grid container mt={1} alignItems="center" spacing={1}>
            <Grid item xs={4}><Chip style={{ border: 'none' }} icon={< AutoStoriesOutlinedIcon />} label="Resilience" variant="outlined" /></Grid>
            <Grid item xs={8}><LinearProgress sx={{ border: '2px solid black', width: '90%', marginLeft: "5%" }} />
            </Grid>
          </Grid> */}

          <Grid container mt={1} alignItems="center">
            <Grid
              item
              xs={6}
              sx={{
                border: "2px solid black",
                padding: 0.5,
                borderRadius: "5px",
              }}
            >
              <Chip
                avatar={
                  <Avatar
                    sx={{ width: "40px", height: "40px" }}
                    alt="Natacha"
                    src="/static/crypto/SOL.png"
                  />
                }
                label={(book[0]?.volumeInfo?.pageCount / 100)?.toFixed(2)}
                variant="outlined"
                sx={{ fontSize: "25px", width: "100%", border: "none" }}
              />
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <Button
                onClick={() => {
                  navigate(`/dashboards/transaction-billing/${book[0]?.id}`);
                }}
                variant="contained"
                sx={{
                  background: "aqua",
                  color: "black",
                  width: "90%",
                  border: "2px solid black",
                }}
              >
                Buy Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductViewCard;
