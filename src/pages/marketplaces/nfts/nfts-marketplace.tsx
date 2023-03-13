import { Box, Grid, Stack } from "@mui/material";
import SearchInput from "components/input-fields/SearchInput";
import ProductCard from "page-sections/marketplaces/ProductCard";
import SearchFilter from "page-sections/marketplaces/SearchFilter";
import { StyledPagination } from "page-sections/libs/styledComponents";
import { FC, useEffect, useState } from "react";
// import { searchByName } from "utils/utils";
// import LIST_BOOKS from '__fakeData__/books/books'
// import { getBooks } from "utils/api/books-api";
import { getBooks } from "__fakeData__/books/books";

// styled components
const Marketplaces: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  // const [searchValue, setSearchValue] = useState("");
  // const [filteredItem, setFilteredItem] = useState(productList);
  const [books, setBooks] = useState(getBooks(1));

  useEffect(() => {
    setBooks(getBooks(20));
  }, [setBooks]);

  // useEffect(() => {
  //   const result = searchByName(productList, searchValue);
  //   setFilteredItem(result);
  // }, [searchValue]);

  return (
    <Box pt={2} pb={4}>
      <Box marginTop={3}>
        <Grid container spacing={3}>
          <Grid item lg={12} sm={12} xs={12}>
            <SearchInput disable_border placeholder="Find Products" />
          </Grid>

          <Grid item lg={2} sm={2} xs={12}>
            <SearchFilter />
          </Grid>

          <Grid item lg={10} sm={10} xs={12}>
            <Grid container spacing={4}>
              {books.map((item, _) => (
                <Grid item xs={6} sm={3} key={item.id}>
                  <ProductCard
                    product={item}
                    _={_}
                    handleClick={() => setOpenModal(true)}
                  />
                </Grid>
              ))}
            </Grid>

            <Stack alignItems="center" marginTop={4}>
              <StyledPagination
                count={4}
                shape="rounded"
                //   onChange={handleChange}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Marketplaces;
