import { Box, Card, Divider, Grid, Stack, useTheme } from "@mui/material";

import AppAvatar from "components/avatars/AppAvatar";

import { H4, H6, Tiny } from "components/Typography";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { Avatar, Button, Chip } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { getBook, getBooks } from "__fakeData__/books/books";
import USER_LIST from "__fakeData__/user-and-contact/user_list";
import ToastContext from "contexts/toastContext";
import UserContext from "contexts/userContext";
import { FC, SyntheticEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchByName } from "utils/utils";
type SinglePortfolioProps = {
  type: string;
  onChangeData: (data: object) => void;
};

const BookSwap: FC = () => {
  const [, setValue] = useState("");
  // const theme = useTheme();
  const { book_id } = useParams();
  const { user } = useContext(UserContext);
  const { toast } = useContext(ToastContext);
  const navigate = useNavigate();
  // handle change for tab list
  const [, setCostDeviant] = useState("0");
  // const changeTab = (_: SyntheticEvent, newValue: string) => setValue(newValue);

  // search input
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (value: string) => setSearchValue(value);

  const [, setFilteredItem] = useState(USER_LIST);

  useEffect(() => {
    const result = searchByName(USER_LIST, searchValue);
    setFilteredItem(result);
  }, [searchValue]);

  // const iconStyle = { color: "text.disabled", fontSize: 16 };

  const BasicSelect: FC<SinglePortfolioProps> = ({ type, onChangeData }) => {
    const [age, setAge] = useState(type === "old" ? book_id : "");

    const handleChange = (event: any) => {
      // console.log({
      //   value: event.target.value as string,
      //   type: type,
      // })
      // onChangeData({
      //   value: event.target.value as string,
      //   type: type,
      // });
      // setCostDeviant((Math.random() * 1).toFixed(2))
      setAge(event.target.value);
    };

    return (
      <>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth style={{ border: `2px solid black  black` }}>
            <InputLabel id="demo-simple-select-label">Book</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Book"
              onChange={handleChange}
            >
              {type === "new"
                ? // eslint-disable-next-line array-callback-return
                  getBooks(20).map((book, _: number) => {
                    if (book?.id !== book_id)
                      return (
                        <MenuItem value={book?.id}>
                          <Stack direction="row" alignItems="center">
                            <AppAvatar
                              src={`/static/nfts/books/book-${_ + 1}.png`}
                              sx={{
                                borderRadius: "50%",
                                border: "2px solid black",
                                marginRight: "1rem",
                              }}
                            />
                            {/* <Box> */}
                            <H6>
                              {book?.volumeInfo?.title.slice(0, 20) + "..."}
                            </H6>
                            {/* </Box> */}
                          </Stack>
                        </MenuItem>
                      );
                  })
                : user?.wallet?.nfts[0].data.map((data, _: number) => {
                    let book = getBook(data?.book_id);
                    return (
                      <MenuItem value={book[0]?.id}>
                        <Stack direction="row" alignItems="center">
                          <AppAvatar
                            src={book?.avatar_nft}
                            sx={{
                              borderRadius: "50%",
                              border: "2px solid black",
                              marginRight: "1rem",
                            }}
                          />
                          {/* <Box> */}
                          <H6>
                            {book[0]?.volumeInfo?.title.slice(0, 20) + "..."}
                          </H6>
                          {/* </Box> */}
                        </Stack>
                      </MenuItem>
                    );
                  })}
              {/* <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </Box>
        {type === "new" ? (
          <>
            <AddOutlinedIcon
              style={{
                fontSize: "35px",
                border: "2px solid black",
                padding: "0.1rem",
                borderRadius: "50%",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
            />
            <Chip
              avatar={
                <Avatar
                  sx={{ width: "10px", height: "10px" }}
                  alt="Natacha"
                  src="/static/crypto/solona_logo.png"
                />
              }
              label={age ? (Math.random() * 1).toFixed(2) : 0}
              variant="outlined"
              sx={{ width: "100%", fontSize: "20px", border: "none" }}
            />
          </>
        ) : (
          ""
        )}
      </>
    );
  };

  const onChangeData = (data) => {
    if (data?.value === book_id) {
      setCostDeviant("0");
    } else {
      setCostDeviant((Math.random() * 1).toFixed(2));
    }
  };
  return (
    <Box pt={2} pb={4}>
      <Card sx={{ px: 3, py: 2, border: "2px solid black" }}>
        {/* <HeadingArea value={value} changeTab={changeTab} /> */}
        <Grid container pb={2}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <H4>Book swap system</H4>
          </Grid>
        </Grid>

        {/* <SearchArea
          value={searchValue}
          onChange={handleSearch}
          gridRoute="/dashboards/user-grid"
          listRoute="/dashboards/user-list"
        /> */}

        <Grid container spacing={3}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <BasicSelect type="old" onChangeData={onChangeData} />
            <Tiny
              fontSize={10}
            >{`You have ${user?.wallet?.nfts[0]?.data?.length} book to swap`}</Tiny>
          </Grid>
          {/* <Grid item lg={3} md={4} sm={6} xs={6}>
            <TextField fullWidth type='number' placeholder="0" style={{ border: `2px solid black  black`, }} />
          </Grid> */}
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <SwapVertIcon
              style={{
                fontSize: "35px",
                border: "2px solid black",
                padding: "0.1rem",
                borderRadius: "50%",
              }}
            />
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            style={{ textAlign: "center" }}
          >
            <BasicSelect type="new" onChangeData={onChangeData} />
          </Grid>
          {/* <Grid item xs={12} style={{ textAlign: 'center' }}>
            <AddOutlinedIcon style={{ fontSize: '35px' }} />
          </Grid> */}
          <Divider />
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Button
              startIcon={<SwapHorizIcon />}
              onClick={() => {
                toast.success("Swap book successfully");
                navigate(`/dashboards/user-profile/2`);
              }}
              fullWidth
              color="primary"
              style={{
                border: "2px solid black",
                borderRadius: "30px",
                fontSize: "20px",
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              {" "}
              Swap
            </Button>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default BookSwap;
