import { Edit, Sell } from "@mui/icons-material";
import { Button, Card, CardMedia, Grid, styled, Chip } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Small, Tiny } from "components/Typography";
import UserContext from "contexts/userContext";
import LinearProgress from "@mui/material/LinearProgress";
import Heart from "icons/Heart";
import { FC, useContext, useEffect, useState } from "react";
import { getBook } from "__fakeData__/books/books";
import { lightTheme } from "../../../constants";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { useNavigate } from "react-router-dom";

import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SellModal from "./SellModal";
import { getCookie } from "utils/cookies/cookies";
const StyledSmall = styled(Small)(({ theme }) => ({
  padding: "3px 12px",
  borderRadius: "4px",
  border: "1px solid black",
  display: "inline-block",
  fontSize: 12,
  backgroundColor: theme.palette.action.hover,
  color: "black",
}));

const DateWrapper = styled(FlexBox)(({ theme }) => ({
  top: 10,
  right: 10,
  width: 40,
  height: 50,
  borderRadius: "4px",
  alignItems: "center",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: lightTheme(theme) ? "white" : theme.palette.primary[400],
}));

const Books: FC = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user?.wallet?.nfts[0]?.data);
  }, [user]);

  return (
    <Card sx={{ padding: 3, border: "2px solid black black" }}>
      <FlexBetween mb={3}>
        <H5>Your books</H5>
        {/* <Button variant="outlined" startIcon={<Edit />}>
          Add new
        </Button> */}
      </FlexBetween>

      <Grid container spacing={3}>
        {user?.wallet?.nfts[0]?.data?.map((user_book_data, _: number) => {
          let user_book = getBook(user_book_data?.book_id);
          console.log(user_book);
          return (
            <Grid item lg={3} md={3} xs={12} key={_}>
              <SinglePortfolio
                tag={user_book[0]?.volumeInfo?.categories}
                title={user_book[0]?.volumeInfo?.title}
                date={user_book[0]?.volumeInfo?.publishedDate}
                imgLink={user_book?.avatar_nft}
                id={user_book[0]?.id}
                readProgress={user_book_data?.read_progress}
                pageCount={user_book[0]?.volumeInfo?.pageCount}
                user_book={user_book}
              />
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default Books;

// -------------------------------------------------------
type SinglePortfolioProps = {
  tag: string;
  date: string;
  title: string;
  imgLink: string;
  readProgress: number;
  id: string;
  pageCount: number;
  user_book: any;
};
// -------------------------------------------------------

function SinglePortfolio({
  tag,
  date,
  title,
  imgLink,
  readProgress,
  id,
  pageCount,
  user_book,
}: SinglePortfolioProps) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [IsSell, setIsSell] = useState(false);
  const rangeQuality = (pageCount) => {
    if (pageCount <= 250) return { key: "COMMON", color: "aquamarine" };
    else if (pageCount > 250 && pageCount <= 450)
      return { key: "RARE", color: "rebeccapurple" };
    else if (pageCount > 450) return { key: "LEGENDARY", color: "orangered" };
    else return { key: "none", color: "primary" };
  };
  return (
    <Card
      sx={{
        position: "relative",
        border: "2px solid black black",
        boxShadow: 0,
      }}
    >
      <CardMedia component="img" image={imgLink} height={152} />

      <DateWrapper>
        <H6>12</H6>
        <Tiny>Jan</Tiny>
      </DateWrapper>

      <CardContent
        sx={{
          paddingBottom: "16px !important",
        }}
      >
        <FlexBox justifyContent="space-between">
          <StyledSmall style={{ color: "black", border: "1px solid black" }}>
            {rangeQuality(pageCount)?.key}
          </StyledSmall>

          {/* {IsSell ? <StyledSmall style={{ color: 'black', border: '1px solid black', background: 'red' }}>SELL</StyledSmall> : ''} */}

          <IconButton size="small">
            <Heart sx={{ fontSize: 17, color: "text.disabled" }} />
          </IconButton>
        </FlexBox>

        <Box flexWrap="wrap">
          <Box mt={1.5}>
            <H6>{title}</H6>
            <Tiny fontWeight={500}>{date}</Tiny>
          </Box>
        </Box>
        <Grid container mt={1} alignItems="center" spacing={1}>
          <Grid item xs={1}>
            <Chip
              style={{ border: "none" }}
              icon={<AutoStoriesOutlinedIcon />}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={11}>
            {/* <LinearProgress value={3} sx={{ border: '2px solid black', width: '90%', marginLeft: "5%" }} /> */}
            <FlexBox alignItems="center">
              <LinearProgress
                value={getCookie("unread") === id ? 0 : readProgress}
                variant="determinate"
                sx={{
                  width: "100%",
                  flexGrow: 1,
                  ml: 2,
                  mr: 1,
                  border: "2px solid black",
                }}
              />
              <Tiny fontWeight={600} color="text.primary">
                {`${getCookie("unread") === id ? 0 : readProgress}`}
              </Tiny>
            </FlexBox>
          </Grid>
        </Grid>
        <Grid container mt={1} alignItems="center" spacing={1}>
          <Grid item xs={6}>
            <Button
              disabled={IsSell}
              startIcon={<SwapHorizIcon />}
              onClick={() => {
                navigate(`/dashboards/book-swaping/${id}`);
              }}
              fullWidth
              color="primary"
              style={{
                border: "2px solid black",
                borderRadius: "30px",
                fontSize: "17px",
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              {" "}
              Swap
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button
              startIcon={<Sell />}
              onClick={() => {
                if (IsSell) setIsSell(false);
                else setOpenModal(true);
              }}
              fullWidth
              style={{
                background: IsSell ? "mediumspringgreen" : "tomato",
                border: "2px solid black",
                borderRadius: "30px",
                fontSize: "17px",
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              {" "}
              {IsSell ? "Unsell" : "Sell"}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={IsSell}
              startIcon={<AutoStoriesOutlinedIcon />}
              onClick={() => {
                navigate(`/dashboards/book-reading/${id}`);
              }}
              fullWidth
              color="success"
              sx={{
                background: "mediumspringgreen",
                border: "2px solid black",
                borderRadius: "30px",
                fontSize: "17px",
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              {" "}
              Read
            </Button>
          </Grid>
          <SellModal
            book={user_book}
            onDoneConfirm={() => {
              setIsSell(true);
            }}
            open={openModal}
            onClose={() => setOpenModal(!openModal)}
          />
        </Grid>
      </CardContent>
    </Card>
  );
}
