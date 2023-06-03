import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  styled,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import useGeneralWallet from "common/useGeneralWallet";
import FlexBox from "components/flexbox/FlexBox";
import { H3 } from "components/Typography";
import { IArticle } from "interface/article.interface";
import { customersFakeData } from "page-sections/collections-marketplace/fakeData";
import * as React from "react";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { searchByName } from "utils/utils";

import SideRightBar from "page-sections/home-page/recently-chat";
import SideLeftBar from "page-sections/home-page/recommed-content";
import { getArticles } from "utils/api/articles";

import { getBooks } from "__fakeData__/books/books";
import CreateExclusiveArticle from "page-sections/pushing-book/CreateExclusiveArticle";
import { useNavigate } from "react-router-dom";

export const HeadingWrapper = styled(FlexBox)(({ theme }) => ({
  flexWrap: "wrap",
  [theme.breakpoints.down(530)]: {
    "& .MuiButton-root": { width: "100%" },
    "& .MuiInputBase-root": { maxWidth: "100%", marginBottom: 5 },
  },
}));
const PushlishBook: FC = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState("1");
  const [addCustomer, setAddCustomer] = useState(false);
  const { details, publicKey } = useGeneralWallet((s) => s);
  const [books, setBooks] = useState(getBooks(1));
  const wallet = useGeneralWallet((s) => s);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [articlesCount, setArticlesCount] = useState<number>(0);
  const [offset, setOffSet] = useState<number>(0);

  // search input
  useEffect(() => {
    getArticles({ offset })
      .then((res) => {
        setArticles((current) => [...current, ...(res.articles as IArticle[])]);
        setArticlesCount(res.articlesCount);
      })
      .catch((err) => console.log(err));
  }, [offset]);

  useEffect(() => {
    setBooks(getBooks(20));
  }, [setBooks]);

  const theme = useTheme();
  React.useEffect(() => {
    // console.log(details?.nfts);
  }, [details]);
  // search input
  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(customersFakeData);

  useEffect(() => {
    const result = searchByName(customersFakeData, searchValue);
    setFilteredItem(result);
  }, [searchValue]);

  // handle tab item change
  const handleTabChange = (_: SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const filteredData = filteredItem.filter(
    (item) =>
      (item.status === "Active" && currentTab === "2") ||
      (item.status === "Blocked" && currentTab === "3") ||
      currentTab === "1"
  );
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const user = useGeneralWallet((s) => s);
  const navigate = useNavigate();
  return (
    <Box pt={2} pb={4}>
      <HeadingWrapper justifyContent="space-between" alignItems="center">
        <Button
          variant="outlined"
          sx={{
            border: "1px solid #27CE88",
            fontWeight: "800",
            fontSize: "14px",
            borderRadius: "15px",
          }}
          onClick={() => setAddCustomer(true)}
        >
          {t("Add Your Exclusive Content")}
        </Button>
      </HeadingWrapper>
      <Grid container spacing={3} paddingTop={1}>
        {/* <Grid item xs={12}></Grid> */}
        {!downSM ? (
          <Grid item xs={12} sm={3} md={3} sx={{ maxHeight: "100vh" }}>
            {" "}
            <SideLeftBar />
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
          id="articles"
        >
          {" "}
          <CreateExclusiveArticle
            edit="Let make your NFT"
            setArticles={(a: any) => {
              setArticles(a);
              navigate(
                `/dashboards/${user.publicKey}/article/${a[0]?.slug}/medias/0`
              ); // http://localhost:3000/dashboards/0x4e1d6a7f1ec3de0a8f88a90cafa78574679ac946/article/exlclusivecontent-15zmbk/medias/0
            }}
            articles={articles}
            setArticlesCount={setArticlesCount}
            open={addCustomer}
            onClose={() => setAddCustomer(false)}
          />
        </Grid>

        {!downSM ? (
          <Grid item xs={12} sm={3} md={3} sx={{ maxHeight: "100vh" }}>
            {" "}
            <SideRightBar />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Box>
  );
};

const tabs = [
  { value: "listing", label: "Listing", count: 3 },
  { value: "unlisting", label: "unListing", count: 4 },
];

export default PushlishBook;
