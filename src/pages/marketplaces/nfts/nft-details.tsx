import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, Grid, Tab, Theme } from "@mui/material";
import Shopping from "icons/Shopping";
import DescriptionCard from "page-sections/marketplaces/productDetails/DescriptionCard";
import ProductViewCard from "page-sections/marketplaces/productDetails/ProductViewCard";
import ReviewsCard from "page-sections/marketplaces/productDetails/ReviewsCard";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "__fakeData__/books/books";
import { lightTheme } from "../../../constants";

const MarketplaceDetails: FC = () => {
  const [tab, setTab] = useState("1");
  const { id } = useParams();
  const [book, setBook] = useState(getBook(id));
  const tabChange = (_: SyntheticEvent, value: string) => setTab(value);

  useEffect(() => {
    setBook(getBook(id));
  }, [setBook, id]);
  return (
    <Box pb={4} pt={0.2}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <ProductViewCard book={book} />
        </Grid>

        <Grid item xs={12} mt={12}>
          <Card style={{ border: "3px solid black" }}>
            <TabContext value={tab}>
              <Box
                sx={{
                  paddingTop: 1,
                  paddingLeft: 2,
                  borderBottom: 1,
                  borderColor: "divider",
                  backgroundColor: (theme: Theme) =>
                    lightTheme(theme) ? "grey.200" : "divider",
                  "& .MuiTab-root": { fontSize: 12, fontWeight: 600 },
                }}
              >
                <TabList onChange={tabChange}>
                  <Tab disableRipple label="Description" value="1" />
                  <Tab disableRipple label="Reviews" value="2" />
                </TabList>
              </Box>

              <TabPanel value="1">
                <DescriptionCard book={book} />
              </TabPanel>

              <TabPanel value="2">
                <ReviewsCard />
              </TabPanel>
            </TabContext>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MarketplaceDetails;
