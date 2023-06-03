import { useTheme } from "@emotion/react";
import { Button, Skeleton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/system";
import { getBooks } from "__fakeData__/books/books";
import { CreatureAccessory } from "app/contracts";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralContract from "common/useGeneralContract";
import useGeneralWallet from "common/useGeneralWallet";
import { Small } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import { Signer } from "ethers";
import useCreateSale from "hooks/contracts/useCreateSale";
import { INFTmetadata } from "interface/nftmetadata.interface";
import { FC, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getNFTMetadata } from "utils/api/nftmetadata";
import { getNFTsByAddress } from "utils/api/subgraph/creatureAccessorySubgraph";
import convertTimestamp from "utils/timestampDecode";
export default function WalletNFTsTable() {
  const [books, setBooks] = useState(getBooks(1));
  const { publicKey } = useGeneralWallet((s) => s);
  const [saleLoading, setSaleLoading] = useState<Boolean>(true);

  useEffect(() => {
    getNFTsByAddress(publicKey || "").then((nfts) => {
      console.log(nfts);
      setBooks(nfts);
      setSaleLoading(false);
    });
  }, [setBooks, publicKey]);

  return (
    <>
      {!saleLoading ? (
        <TableContainer component={Paper}>
          <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell width={300}>Sale NFT</TableCell>
                <TableCell align="left">NFT id</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="left">Sales time</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((row: any, _: number) => {
                return <WalletNFTTableRow row={row} key={_} _={_} />;
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
  );
}

type WalletNFTTableProps = {
  row: any;
  _: number;
};
export const WalletNFTTableRow: FC<WalletNFTTableProps> = ({ row, _ }) => {
  const randomPer = Number((Math.random() * 130 + 1).toFixed(2));
  const navigate = useNavigate();
  const wallet = useGeneralWallet((s) => s);
  const { publicKey } = useGeneralWallet((s) => s);
  const CreatureAccessory: CreatureAccessory = useGeneralContract(
    (s) => s.CreatureAccessory
  );
  const theme = useTheme();
  const createSale = useCreateSale();
  const [onSaling, setOnSaling] = useState<boolean>(false);
  const [nftmetadata, setNftmetadata] = useState<INFTmetadata>();
  const [nftBalance, setNfTBalance] = useState<number>();
  useEffect(() => {
    Promise.all([
      getNFTMetadata(row.CreatureAccessory_id),
      CreatureAccessory.balanceOf(publicKey || "", row.CreatureAccessory_id),
    ]).then((res) => {
      setNftmetadata(res[0]);
      setNfTBalance(Number(res[1]));
    });
  }, [row.nftID, publicKey, row.CreatureAccessory_id, CreatureAccessory]);
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
          {nftmetadata?.image ? (
            <AppAvatar
              src={nftmetadata?.image}
              sx={{
                borderRadius: "50%",
                width: 70,
                height: 70,
              }}
            />
          ) : (
            <Skeleton variant="circular" sx={{ width: 70, height: 70 }} />
          )}
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
        <Small fontWeight={800} fontSize={13}>
          {row?.CreatureAccessory_id}
        </Small>
      </TableCell>
      <TableCell align="left">
        <Small fontWeight={800} fontSize={13}>
          {nftBalance}
        </Small>
      </TableCell>
      <TableCell align="left">
        <Small fontWeight={800} fontSize={13}>
          {convertTimestamp(row?.blockTimestamp)}
        </Small>
      </TableCell>
      <TableCell align="left">
        <Small fontWeight={800} fontSize={13}>
          {row?.CreatureAccessory_id}
        </Small>
      </TableCell>
      <TableCell align="left">
        <Button
          size="small"
          sx={{
            border: "1px solid",
            color: "#27CE88",
            fontWeight: "800",
            fontSize: "14px",
          }}
          disabled={onSaling}
          onClick={async () => {
            if (row?.CreatureAccessory_id) {
              setOnSaling(true);
              await createSale(row?.CreatureAccessory_id);
              setOnSaling(false);
            } else toast.error("NFT don't exist in your wallet");
          }}
        >
          Sale now
        </Button>
      </TableCell>
    </TableRow>
  );
};
