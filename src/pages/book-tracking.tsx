import { Box, Button, Card, Grid, Stack } from "@mui/material";
import { H4, H6, Tiny } from "components/Typography";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TRACKING from "__fakeData__/tracking/tracking";
import USER_LIST from "__fakeData__/user-and-contact/user_list";
import ToastContext from "contexts/toastContext";
import { FC, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchByName } from "utils/utils";
const Tracking: FC = () => {
  const [, setValue] = useState("");

  const { book_id } = useParams();
  const navigate = useNavigate();
  const { toast } = useContext(ToastContext);
  // handle change for tab list

  // search input
  const [searchValue, setSearchValue] = useState("");

  const [, setFilteredItem] = useState(USER_LIST);

  useEffect(() => {
    const result = searchByName(USER_LIST, searchValue);
    setFilteredItem(result);
  }, [searchValue]);

  const iconStyle = { color: "text.disabled", fontSize: 16 };

  return (
    <Box pt={2} pb={4}>
      <Card sx={{ px: 3, py: 2, border: "2px solid black" }}>
        {/* <HeadingArea value={value} changeTab={changeTab} /> */}
        <Grid container pb={0.5}>
          <H4>Read tracking </H4>
        </Grid>
        <Grid container pb={2}>
          <Tiny>#M7jnpPeZxRQC</Tiny>
        </Grid>

        {/* <SearchArea
          value={searchValue}
          onChange={handleSearch}
          gridRoute="/dashboards/user-grid"
          listRoute="/dashboards/user-list"
        /> */}

        <Grid container spacing={3}>
          {TRACKING.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
              <Box
                sx={{
                  padding: 2,
                  border: `2px solid black  black`,
                  borderRadius: 1,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box>
                    <H6> {`${index + 1}. ${item?.question}`}</H6>
                  </Box>
                </Stack>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  {item?.options?.map((option, _: number) => {
                    return (
                      <FormControlLabel
                        value={option}
                        control={<Radio />}
                        label={`${_ + 1}. ${option}`}
                      />
                    );
                  })}
                </RadioGroup>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              startIcon={<KeyboardReturnIcon />}
              onClick={() => {
                navigate(`/dashboards/book-reading/${book_id}`);
                toast.success(`Tracking successfully, mint 0.762 RTE`);
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
              {"Confirm & back to read"}
            </Button>
          </Grid>
          {/* <Grid item xs={12}>
            <Stack alignItems="center" py={2}>
              <AppPagination shape="rounded" count={5} />
            </Stack>
          </Grid> */}
        </Grid>
      </Card>
    </Box>
  );
};

export default Tracking;
