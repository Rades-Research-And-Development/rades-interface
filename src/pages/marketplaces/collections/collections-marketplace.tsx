import { Add, ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { TabContext, TabList } from "@mui/lab";
import { Box, Button, Skeleton, Tab, useTheme } from "@mui/material";
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
import { getSales } from "utils/api/subgraph/marketplaceSubgraph";
import { copyClipboard } from "utils/copyClipboard";
import { toast } from "react-hot-toast";
import convertTimestamp from "utils/timestampDecode";
import { INFTmetadata } from "interface/nftmetadata.interface";
import { getNFTMetadata } from "utils/api/nftmetadata";
import useBuySale from "hooks/contracts/useBuySale";

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
  const [saleLoading, setSaleLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    getSales(10, 1).then((res) => {
      setBooks(res?.data?.saleCreateds);
      setSaleLoading(false);
    });
  }, [setBooks]);

  const [searchValue, setSearchValue] = useState("");

  const handleTabChange = (_: SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <Box pt={2} pb={4}>
      <HeadingWrapper justifyContent="space-between" alignItems="center">
        <SearchInput
          disable_border
          placeholder="Find Your Collection..."
          onChange={(e) => setSearchValue(e.target.value)}
          style={{
            border: "1px solid",
            color: "#27CE88",
            fontWeight: "800",
            fontSize: "14px",
          }}
        />
        {/* 
        <Button variant="contained" endIcon={<Add />} sx={{}}>
          {t("Add Collection")}
        </Button> */}

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
          {!saleLoading ? (
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
                    <TableCell width={300}>Sale NFT</TableCell>

                    <TableCell align="left">NFT address</TableCell>
                    <TableCell align="left">NFT id</TableCell>
                    <TableCell align="left">Sales time</TableCell>

                    <TableCell align="left">Volume Total</TableCell>
                    <TableCell align="left">24h Volume</TableCell>
                    <TableCell align="left">24% Volume</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Floor Price</TableCell>
                    <TableCell>Action</TableCell>
                    {/* <TableCell align="left">Owner</TableCell>
                    <TableCell align="left">Total Supply</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {books.map((row: any, _: number) => {
                    return <CollectionTableRow row={row} key={_} _={_} />;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <div style={{ textAlign: "center", width: "100%" }}>
              {Array.from(Array(8).keys()).map((res, _) => {
                return (
                  <Stack spacing={1} key={_}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "3rem", borderRadius: "10px" }}
                    />
                  </Stack>
                );
              })}
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

type CollectionTableRowProps = {
  row: any;
  _: number;
};
export const CollectionTableRow: FC<CollectionTableRowProps> = ({ row, _ }) => {
  const randomPer = Number((Math.random() * 130 + 1).toFixed(2));
  const navigate = useNavigate();
  const wallet = useGeneralWallet((s) => s);
  const theme = useTheme();
  const [nftmetadata, setNftmetadata] = useState<INFTmetadata>();
  const buySale = useBuySale();
  const [onBuy, setOnBuy] = useState(false);
  useEffect(() => {
    getNFTMetadata(row.nftID).then((res) => {
      setNftmetadata(res);
    });
  }, [row.nftID]);
  return (
    <TableRow
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
          // style={{ width: "100%" }}
        >
          <AppAvatar
            // src={`${row.metadata.image}`}
            src={nftmetadata?.image}
            sx={{
              borderRadius: "50%",
              width: 70,
              height: 70,
            }}
          />{" "}
          <Small
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/dashboards/marketplaces");
            }}
          >
            {" "}
            {nftmetadata?.name} | {nftmetadata?.description?.slice(0, 30)}
          </Small>
        </Stack>
      </TableCell>
      <TableCell align="left">
        <FlexBox alignItems="center">
          <Small
            fontWeight={800}
            fontSize={13}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              toast.success("Copy that!");
              copyClipboard(row?.nftAddress);
            }}
          >
            {usernameOptimize(row?.nftAddress)}
          </Small>
        </FlexBox>
      </TableCell>
      <TableCell align="left">
        <FlexBox alignItems="center">
          <Small
            fontWeight={800}
            fontSize={13}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              toast.success("Copy that!");
              copyClipboard(row?.nftID);
            }}
          >
            {row?.nftID}
          </Small>
        </FlexBox>
      </TableCell>
      <TableCell align="left">
        <FlexBox alignItems="center">
          <Small fontWeight={800} fontSize={13}>
            {convertTimestamp(row?.blockTimestamp)}
          </Small>
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
        <FlexBox alignItems="center">
          {" "}
          <Small fontWeight={800} fontSize={13}>
            {row?.price}
          </Small>
          <AppAvatar
            // src={`${row.metadata.image}`}
            src={`/static/crypto/RAD.png`}
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

      {/* <TableCell align="left">
        {usernameOptimize(wallet.publicKey || "")}
      </TableCell>
      <TableCell align="left">14N</TableCell> */}
      <TableCell align="left">
        <Button
          size="small"
          sx={{
            border: "1px solid",
            color: "#27CE88",
            fontWeight: "800",
            fontSize: "14px",
          }}
          disabled={onBuy}
          onClick={async () => {
            if (wallet.publicKey && row?.Marketplace_id) {
              setOnBuy(true);
              await buySale(row?.Marketplace_id, 1, wallet.publicKey);
              setOnBuy(false);
            } else toast.error("Can't connect your wallet or Item not exist!");
          }}
        >
          Buy now
        </Button>
      </TableCell>
    </TableRow>
  );
};
