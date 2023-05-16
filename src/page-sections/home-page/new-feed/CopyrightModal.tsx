import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack } from "@mui/system";
import AppModal from "components/AppModal";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H2, H4, Small } from "components/Typography";
import UserManagement from "icons/sidebar/UserManagement";
import { FC } from "react";

import { usernameOptimize } from "utils/usernameOptimize";

// component props interface
interface ModalProps {
  open: boolean;
  onClose: () => void;
  editProduct?: boolean;
  data?: any;
  reports: any[];
}

// styled components
const StyledAppModal = styled(AppModal)(({ theme }) => ({
  maxWidth: "80vw",
  minWidth: 300,
  outline: "none",
  padding: "1.5rem",
  border: "1px solid white",
}));

const CreateProductModal: FC<ModalProps> = ({
  open,
  data,
  onClose,
  editProduct,
  reports,
}) => {
  const theme = useTheme();
  return (
    <StyledAppModal open={open} handleClose={onClose}>
      <div
        style={{
          height: "600px",
          overflow: "auto",
        }}
      >
        <H2 marginBottom={2}>
          {editProduct && data ? "Edit Product" : "List of Reports"}
        </H2>
        <>
          {reports[0]?.image ? (
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
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Network</TableCell>
                    <TableCell align="left">Contract</TableCell>
                    <TableCell align="left">NFT_ID</TableCell>
                    <TableCell align="left">24h Volume</TableCell>
                    <TableCell align="left">24% Volume</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports.map((row: any, _: number) => {
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
                              src={row?.image}
                              sx={{
                                borderRadius: "50%",
                                width: 110,
                                height: 110,
                              }}
                            />{" "}
                            <Small sx={{ cursor: "pointer" }}>
                              {" "}
                              {row?.name}
                            </Small>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">
                          <FlexBox alignItems="center">
                            <Small fontWeight={800} fontSize={13}>
                              {row?.description?.slice(0, 15) || "NFT"}
                            </Small>
                          </FlexBox>
                        </TableCell>
                        <TableCell align="left">
                          <FlexBox alignItems="center">
                            <Small fontWeight={800} fontSize={13}>
                              {row?.network || "Ethereum"}
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
                              {usernameOptimize(row?.contract || "") || ""}
                            </Small>
                          </FlexBox>
                        </TableCell>
                        <TableCell align="left">
                          <FlexBox alignItems="center">
                            <Small fontWeight={800} fontSize={13}>
                              {usernameOptimize(row?.nft_id || "") || "0xxx"}
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
      </div>
    </StyledAppModal>
  );
};

export default CreateProductModal;
