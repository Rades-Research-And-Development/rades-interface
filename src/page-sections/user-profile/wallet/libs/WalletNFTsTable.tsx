import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { H3, H4, Small } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import { Stack } from "@mui/system";
import useGeneralWallet from "common/useGeneralWallet";
export default function WalletNFTsTable() {
  const { details, publicKey } = useGeneralWallet((s) => s);
  const theme = useTheme();
  React.useEffect(() => {
    // console.log(details?.nfts);
  }, [details]);
  return (
    <>
      {details?.nfts?.[1] ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <script src=""></script>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Data</TableCell>
                <TableCell align="left">24h Volume</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Description</TableCell>

                <TableCell align="left">Collection</TableCell>
                <TableCell align="left">Mint ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {details?.nfts?.map((row: any, _: number) => {
                const randomPer = Number((Math.random() * 130 + 1).toFixed(2));
                return (
                  <TableRow
                    key={_}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {_ + 1}
                    </TableCell>
                    <TableCell align="center">
                      <Stack
                        direction="row"
                        alignItems="center"
                        py={2}
                        spacing={2}
                        style={{ width: "100%" }}
                      >
                        <AppAvatar
                          src={`${row.metadata.image}`}
                          sx={{
                            borderRadius: "50%",
                            width: 52,
                            height: 52,
                          }}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell align="left">
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
                          fontSize={13}
                          color={
                            Math.floor(randomPer) % 2 === 0
                              ? theme?.palette.success.main
                              : theme.palette.primary.red
                          }
                        >
                          {Math.floor(randomPer) % 2 === 0 ? " + " : " - "}
                          {randomPer}%
                        </Small>
                      </FlexBox>
                    </TableCell>
                    <TableCell align="left">{row?.metadata?.name}</TableCell>
                    <TableCell align="left">
                      {(row?.metadata?.description as String)?.slice(0, 20)}...
                    </TableCell>

                    <TableCell align="left">
                      <a
                        href={`https://explorer.solana.com/address/${row?.collection?.key}?cluster=devnet`}
                      >
                        {row?.collectionId?.slice(0, 20)}...
                      </a>
                    </TableCell>
                    <TableCell align="left">
                      <a
                        href={`https://explorer.solana.com/address/${row?.mint}?cluster=devnet`}
                      >
                        {" "}
                        {row?.owner?.slice(0, 20)}...
                      </a>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div style={{ textAlign: "center", width: "100%" }}>
          <H4 style={{ textAlign: "center", color: theme.palette.primary.red }}>
            Abort: You don't have any NFTs in wallet
          </H4>
        </div>
      )}
    </>
  );
}
