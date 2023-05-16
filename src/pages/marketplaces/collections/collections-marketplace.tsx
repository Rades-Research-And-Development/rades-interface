import { Add, ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { TabContext, TabList } from "@mui/lab";
import { Box, Button, Tab, useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/system";
import useGeneralWallet from "common/useGeneralWallet";
import { H4, Small } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import SearchInput from "components/input-fields/SearchInput";
import AddCustomerModal from "page-sections/collections-marketplace/AddCustomerModal";
import TabLabel from "page-sections/collections-marketplace/TabLabel";
import { customersFakeData } from "page-sections/collections-marketplace/fakeData";
import * as React from "react";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { searchByName } from "utils/utils";

import { styled } from "@mui/material";
import { getBooks } from "__fakeData__/books/books";
import { useNavigate } from "react-router-dom";
import { usernameOptimize } from "utils/usernameOptimize";

export const HeadingWrapper = styled(FlexBox)(({ theme }) => ({
  marginBottom: 15,
  flexWrap: "wrap",
  [theme.breakpoints.down(530)]: {
    "& .MuiButton-root": { width: "100%" },
    "& .MuiInputBase-root": { maxWidth: "100%", marginBottom: 15 },
  },
}));
const CollectionsMarketplace: FC = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState("1");
  const [addCustomer, setAddCustomer] = useState(false);
  const { details, publicKey } = useGeneralWallet((s) => s);
  const [books, setBooks] = useState(getBooks(1));
  const wallet = useGeneralWallet((s) => s);
  const navigate = useNavigate();
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
  return (
    <Box pt={2} pb={4}>
      <HeadingWrapper justifyContent="space-between" alignItems="center">
        <SearchInput
          disable_border
          placeholder="Find Your Collection..."
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <Button
          variant="contained"
          endIcon={<Add />}
          sx={{}}
          // onClick={() => setAddCustomer(true)}
        >
          {t("Add Collection")}
        </Button>

        <AddCustomerModal
          open={addCustomer}
          onClose={() => setAddCustomer(false)}
        />
      </HeadingWrapper>

      <TabContext value={currentTab}>
        <TabList onChange={handleTabChange} variant="scrollable" sx={{ mb: 1 }}>
          {tabs.map(({ value, label, count }) => (
            <Tab
              key={value}
              disableRipple
              value={value}
              label={<TabLabel title={t(label)} total={count} />}
            />
          ))}
        </TabList>

        <>
          {details?.nfts?.[1] || books ? (
            <TableContainer component={Paper}>
              <Table
                size="small"
                sx={{ minWidth: 650 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell width={500}>Collection</TableCell>
                    <TableCell align="left">Volume Total</TableCell>
                    <TableCell align="left">24h Volume</TableCell>
                    <TableCell align="left">24% Volume</TableCell>
                    <TableCell align="left">Sales</TableCell>
                    <TableCell align="left">Floor Price</TableCell>
                    <TableCell align="left">Owner</TableCell>
                    <TableCell align="left">Total Supply</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[...books].map((row: any, _: number) => {
                    const randomPer = Number(
                      (Math.random() * 130 + 1).toFixed(2)
                    );
                    return (
                      <TableRow
                        key={_}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="left">
                          <Stack
                            direction="row"
                            alignItems="center"
                            py={2}
                            spacing={2}
                            style={{ width: "100%" }}
                          >
                            <Small> {_ + 1}</Small>
                            <AppAvatar
                              // src={`${row.metadata.image}`}
                              src={`/static/nfts/books/book-${_ + 1}.png`}
                              sx={{
                                borderRadius: "50%",
                                width: 52,
                                height: 52,
                              }}
                            />{" "}
                            <Small
                              sx={{ cursor: "pointer" }}
                              onClick={() => {
                                navigate("/dashboards/marketplaces");
                              }}
                            >
                              {" "}
                              {row?.volumeInfo?.title?.slice(0, 15) +
                                (row?.volumeInfo?.title.length > 15 ? "" : "")}
                            </Small>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">
                          <FlexBox alignItems="center">
                            <Small fontWeight={800} fontSize={13}>
                              {(Math.random() * 5 + 1).toFixed(2)}
                            </Small>
                            <AppAvatar
                              // src={`${row.metadata.image}`}
                              src={`/static/crypto/ETH.png`}
                              sx={{
                                borderRadius: "50%",
                                width: 20,
                                height: 20,
                              }}
                            />
                          </FlexBox>
                        </TableCell>
                        <TableCell align="left">
                          <FlexBox alignItems="center">
                            <Small fontWeight={800} fontSize={13}>
                              {(Math.random() * 5 + 1).toFixed(2)}
                            </Small>
                            <AppAvatar
                              // src={`${row.metadata.image}`}
                              src={`/static/crypto/ETH.png`}
                              sx={{
                                borderRadius: "50%",
                                width: 20,
                                height: 20,
                              }}
                            />
                          </FlexBox>
                        </TableCell>
                        <TableCell align="left">
                          {/* {row?.metadata?.name} */}
                          <FlexBox alignItems="center">
                            <FlexRowAlign
                              sx={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                              }}
                            >
                              {Math.floor(randomPer) % 2 === 0 && (
                                <ArrowUpward
                                  sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: theme.palette.success.main,
                                  }}
                                />
                              )}
                              {Math.floor(randomPer) % 2 === 1 && (
                                <ArrowDownward
                                  sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: theme.palette.primary.red,
                                  }}
                                />
                              )}
                            </FlexRowAlign>
                            <Small
                              fontWeight={800}
                              fontSize={15}
                              color={
                                Math.floor(randomPer) % 2 === 0
                                  ? theme?.palette.success.main
                                  : theme.palette.primary.red
                              }
                            >
                              {Math.floor(randomPer) % 2 === 0}
                              {randomPer}%
                            </Small>
                          </FlexBox>
                        </TableCell>
                        <TableCell align="left">
                          <Small fontWeight={800} fontSize={13}>
                            {(Math.random() * 5 + 1).toFixed(2)}
                          </Small>
                        </TableCell>

                        <TableCell align="left">
                          <FlexBox alignItems="center">
                            {" "}
                            <Small fontWeight={800} fontSize={13}>
                              {(Math.random() * 5 + 1).toFixed(2)}
                            </Small>
                            <AppAvatar
                              // src={`${row.metadata.image}`}
                              src={`/static/crypto/ETH.png`}
                              sx={{
                                borderRadius: "50%",
                                width: 20,
                                height: 20,
                              }}
                            />
                          </FlexBox>
                        </TableCell>

                        <TableCell align="left">
                          {usernameOptimize(wallet.publicKey || "")}
                        </TableCell>
                        <TableCell align="left">14N</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div style={{ textAlign: "center", width: "100%" }}>
              <H4
                style={{
                  textAlign: "center",
                  color: theme.palette.primary.red,
                }}
              >
                Abort: Collection don't have any NFTs now
              </H4>
            </div>
          )}
        </>
      </TabContext>
    </Box>
  );
};

const tabs = [
  { value: "all", label: "All", count: 35 },
  { value: "hot", label: "Hot", count: 45 },
  { value: "newlisting", label: "New listing", count: 25 },
  { value: "treding", label: "Treding", count: 25 },
  { value: "recommeded", label: "Recommeded", count: 25 },
];

export default CollectionsMarketplace;
