import { Add } from "@mui/icons-material";
import { TabContext, TabList } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  Grid,
  InputBase,
  LinearProgress,
  Skeleton,
  Stack,
  styled,
  Tab,
  Theme,
  useMediaQuery,
} from "@mui/material";
import useGeneralWallet from "common/useGeneralWallet";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import SearchInput from "components/input-fields/SearchInput";
import { H2, H6, Small } from "components/Typography";
import PencilIcon from "icons/PencilIcon";

import CreatePost from "page-sections/home-page/createPost";
import PostsNavigation from "page-sections/home-page/PostsNavigation";
import RecentlyChat from "page-sections/home-page/recently-chat";
import RecommendContent from "page-sections/home-page/recommed-content";
import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import { userRegister } from "utils/api/users";
import { searchByName } from "utils/utils";

// styled component
const StyledInputBase = styled(InputBase)<{ disable_border: any }>(
  ({ theme, disable_border }) => ({
    height: 45,
    fontSize: 12,
    width: "100%",
    maxWidth: 350,
    fontWeight: 600,
    padding: "0 1rem",
    borderRadius: "8px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    border: disable_border
      ? "none"
      : `1px solid black ${theme.palette.action.disabled}`,
    // [theme.breakpoints.down(500)]: { maxWidth: "100%" },
    "::placeholder": { color: theme.palette.text.disabled },
  })
);

const NewFeed: FC = () => {
  const [value, setValue] = useState("all");
  const [openModal, setOpenModal] = useState(false);
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // search input
  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState<any[] | never[]>(
    projectList
  );
  const { publicKey } = useGeneralWallet((s) => s);

  useEffect(() => {
    const result = searchByName(projectList, searchValue);
    setFilteredItem(result);
  }, [searchValue]);

  // useEffect(() => {
  //   userRegister("athevinha", "chunga123", publicKey)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // });

  const filterList = filteredItem.filter(
    (item) => value === "all" || item.status === value
  );

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3} paddingTop={3}>
        <Grid item xs={12}>
          <FlexBox justifyContent="space-between" flexWrap="wrap">
            <StyledInputBase
              placeholder="What do you think?"
              disable_border={false}
              sx={{
                maxWidth: downSM ? "100%" : "100%",
                marginBottom: downSM ? 1 : 0,
              }}
              onClick={() => setOpenModal(true)}
              startAdornment={
                <PencilIcon
                  sx={{
                    fontSize: 18,
                    marginRight: 1,
                    color: "text.disabled",
                  }}
                />
              }
            />
            <CreatePost open={openModal} setOpen={setOpenModal} />
          </FlexBox>
        </Grid>
        {!downSM ? (
          <Grid item xs={12} sm={3} md={3} sx={{ maxHeight: "100vh" }}>
            {" "}
            <RecommendContent />
          </Grid>
        ) : (
          ""
        )}

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            maxHeight: "100vh",
            overflowX: "hidden",
            overflowY: "scroll",
            marginTop: 3,
          }}
        >
          {filterList[0] ? (
            filterList.map((item, index) => (
              <Grid item xs={12} sm={12} md={12} key={index}>
                <PostsNavigation project={item} />
              </Grid>
            ))
          ) : (
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="rectangular" width={"100%"} height={118} />
            </Stack>
          )}
        </Grid>
        {!downSM ? (
          <Grid item xs={12} sm={3} md={3} sx={{ maxHeight: "100vh" }}>
            {" "}
            <RecentlyChat />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Box>
  );
};

const tabItems = [
  {
    title: "All",
    amount: 45,
  },
  {
    title: "In Progress",
    amount: 12,
  },
  {
    title: "Upcoming",
    amount: 12,
  },
  {
    title: "Blocked",
    amount: 12,
  },
  {
    title: "Completed",
    amount: 12,
  },
];

const projectList = [
  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-1.png",
    teamMember: [
      "/static/avatar/010-girl-1.svg",
      "/static/avatar/011-man-2.svg",
    ],
    status: "in-progress",
  },

  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-2.png",
    teamMember: [
      "/static/avatar/013-woman-3.svg",
      "/static/avatar/012-woman-2.svg",
    ],
    status: "upcoming",
  },
  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-3.png",
    teamMember: [
      "/static/avatar/014-man-3.svg",
      "/static/avatar/015-woman-4.svg",
    ],
    status: "blocked",
  },
  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-4.png",
    teamMember: [
      "/static/avatar/016-boy-2.svg",
      "/static/avatar/017-girl-2.svg",
    ],
    status: "completed",
  },
  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-5.png",
    teamMember: [
      "/static/avatar/018-boy-3.svg",
      "/static/avatar/019-woman-5.svg",
    ],
    status: "in-progress",
  },
  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-6.png",
    teamMember: [
      "/static/avatar/020-man-4.svg",
      "/static/avatar/021-girl-3.svg",
    ],
    status: "completed",
  },
  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-1.png",
    teamMember: [
      "/static/avatar/010-girl-1.svg",
      "/static/avatar/011-man-2.svg",
    ],
    status: "in-progress",
  },

  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-2.png",
    teamMember: [
      "/static/avatar/013-woman-3.svg",
      "/static/avatar/012-woman-2.svg",
    ],
    status: "upcoming",
  },
  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-3.png",
    teamMember: [
      "/static/avatar/014-man-3.svg",
      "/static/avatar/015-woman-4.svg",
    ],
    status: "blocked",
  },
  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-4.png",
    teamMember: [
      "/static/avatar/016-boy-2.svg",
      "/static/avatar/017-girl-2.svg",
    ],
    status: "completed",
  },
  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-5.png",
    teamMember: [
      "/static/avatar/018-boy-3.svg",
      "/static/avatar/019-woman-5.svg",
    ],
    status: "in-progress",
  },
  {
    name: "Project Nightfall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    thumbnail: "/static/thumbnail/thumbnail-6.png",
    teamMember: [
      "/static/avatar/020-man-4.svg",
      "/static/avatar/021-girl-3.svg",
    ],
    status: "completed",
  },
];

export default NewFeed;
