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
import { getBooks } from "__fakeData__/books/books";
import { useNavigate } from "react-router-dom";
import { usernameOptimize } from "utils/usernameOptimize";
export default function WalletNFTsTable() {
  const { details, publicKey } = useGeneralWallet((s) => s);
  const theme = useTheme();
  const [books, setBooks] = React.useState(getBooks(1));
  const wallet = useGeneralWallet((s) => s);
  const navigate = useNavigate();
  React.useEffect(() => {
    setBooks(getBooks(20));
  }, [setBooks]);
  React.useEffect(() => {
    // console.log(details?.nfts);
  }, [details]);
  return (
    <>
      {details?.nfts?.[1] || books ? (
        <TableContainer component={Paper}>
          <Table size="small" sx={{ minWidth: 650 }} aria-label="simple table">
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
                const randomPer = Number((Math.random() * 130 + 1).toFixed(2));
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
                            navigate("/dashboards/book-reading/123");
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
  );
}
