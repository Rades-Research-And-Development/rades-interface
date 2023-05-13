import {
  Avatar,
  Box,
  Card,
  Chip,
  Grid,
  LinearProgress,
  alpha,
  useTheme,
} from "@mui/material";
import useGeneralConnection from "common/useGeneralConnection";
import { H6, Tiny } from "components/Typography";
import FlexBox from "components/flexbox/FlexBox";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollBar from "simplebar-react";
// component props interface
interface ProductCardProps {
  product: any;
  handleClick: () => void;
  _: number;
}

const ProductCard: FC<ProductCardProps> = ({ product, handleClick, _ }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const boxStyle = {
    border: isHover ? "0px solid black" : "5px solid black",
  };
  const rangeQuality = (pageCount) => {
    if (pageCount <= 250) return { key: "COMMON", color: "primary" };
    else if (pageCount > 250 && pageCount <= 450)
      return { key: "RARE", color: "secondary" };
    else if (pageCount > 450) return { key: "LEGENDARY", color: "error" };
    else return { key: "none", color: "primary" };
  };
  const { chainRPC } = useGeneralConnection((s) => s);
  return (
    <Card sx={{ border: `0.5px solid #8e8e8e` }}>
      {/* <FlexRowAlign
        onClick={handleClick}
        sx={{ cursor: "pointer", overflow: "hidden" }}
      >


      </lexRowAlign> */}
      <img
        // src={product?.volumeInfo?.imageLinks?.thumbnail}
        src={`/static/nfts/books/book-${_ + 1}.png`}
        alt="Product"
        style={{
          objectFit: "cover",
          width: "100%",
          transition: "0.2s",
          cursor: "pointer",
          ...boxStyle,
        }}
        loading="lazy"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() =>
          navigate(`/dashboards/marketplace-details/${product?.id}`)
        }
      />
      {rangeQuality(product?.volumeInfo?.pageCount)?.color === "primary" ? (
        <LinearProgress style={{ border: "2px solid black" }} color="inherit" />
      ) : (
        ""
      )}
      {rangeQuality(product?.volumeInfo?.pageCount)?.color === "secondary" ? (
        <LinearProgress style={{ border: "2px solid black" }} color="info" />
      ) : (
        ""
      )}
      {rangeQuality(product?.volumeInfo?.pageCount)?.color === "error" ? (
        <LinearProgress style={{ border: "2px solid black" }} color="warning" />
      ) : (
        ""
      )}
      {/* <LinearProgress color={`${(rangeQuality(product?.volumeInfo?.pageCount)?.color)})`}/> */}
      <Box
        padding={1.5}
        sx={{
          backgroundImage: `linear-gradient(to top, ${
            rangeQuality(product?.volumeInfo?.pageCount)?.color
          })`,
        }}
        bgcolor={theme.palette.mode === "dark" ? alpha("#fff", 0.03) : ""}
      >
        <ScrollBar style={{ overflow: "auto", height: "4rem" }}>
          <FlexBox
            alignItems="flex-start"
            justifyContent="space-between"
            style={{ height: "50px" }}
          >
            <Box>
              <H6>
                {product?.volumeInfo?.title?.slice(0, 20) +
                  (product?.volumeInfo?.title.length > 20 ? "..." : "")}
              </H6>
              <Tiny fontSize={12}>
                {product?.volumeInfo?.authors?.map((data, _: number) => {
                  return _ === 0 ? `${data} ` : `, ${data}`;
                })}
              </Tiny>
            </Box>
          </FlexBox>
        </ScrollBar>
        <Box>
          <Grid container spacing={0.5}>
            <Grid item xs={7}>
              <Chip
                avatar={
                  <Avatar
                    sx={{ width: "10px", height: "10px" }}
                    alt="Natacha"
                    src={`/static/crypto/${chainRPC.symbol}.png`}
                  />
                }
                label={(product?.volumeInfo?.pageCount / 100)?.toFixed(2)}
                variant="outlined"
                sx={{
                  width: "100%",
                  fontSize: "10px",
                  border: "1px solid black",
                }}
              />
            </Grid>
            {/* <Grid item xs={4} sx={{ textAlign: 'center' }}>
              <Favorite />
            </Grid> */}
            <Grid item xs={5}>
              <Chip
                label="Buy"
                sx={{
                  width: "100%",
                  background: "aqua",
                  color: "black",
                  border: "2px solid black",
                  borderRadius: "10px",
                  fontSize: "10px",
                }}
                onClick={() =>
                  navigate(`/dashboards/marketplace-details/${product?.id}`)
                }
                // onClick={handleClick}
                // onDelete={handleDelete}
              />
            </Grid>
          </Grid>
          {/* <Box sx={{ display: 'flex' }}>
            <H5><img
              // src={product?.volumeInfo?.imageLinks?.thumbnail}
              src={`/static/crypto/solona_logo.png`}
              alt="Product"
              style={{
                objectFit: "cover",
                width: '100%',
                // height: '200px',
                // borderRadius: '10%',
                border: '10px solid white'
              }}
            />{product?.volumeInfo?.retailPrice?.amount / 23000}</H5></Box> */}

          {/* <Button sx={{
            background: 'aqua',
            border: '2px solid black',
          }} endIcon={<Add />} size="small"></Button> */}
          {/* <IconButton
            sx={{
              marginRight: 1,
              background: 'aqua',
              border: '2px solid black',
              "&:hover": { backgroundColor: "aque" },
            }}
          >
            <Favorite fontSize="small" />
          </IconButton> */}

          {/* <IconButton
              sx={{
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "primary.main" },
              }}
            >
              <Add fontSize="small" sx={{ color: "white" }} />
            </IconButton> */}
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
