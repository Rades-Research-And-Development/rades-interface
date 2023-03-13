import { Box, Card, Divider, Stack, Grid } from "@mui/material";
import SearchInput from "components/input-fields/SearchInput";
import { H3, H6, Small } from "components/Typography";
import { FC, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AppAvatar from "components/avatars/AppAvatar";
import { Tiny } from "components/Typography";
import UserContext from "contexts/userContext";
import ToastContext from "contexts/toastContext";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import { IconButton } from "@mui/material";
// import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { Button } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import {
  Air,
  AirlineSeatLegroomReducedSharp,
  NoFlashTwoTone,
} from "@mui/icons-material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DiamondIcon from "@mui/icons-material/Diamond";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import {
  walletAirDrop,
  walletGetInfor,
  walletGetSolBalance,
} from "utils/contract/solana/useWallet";
import { transactionToOwner } from "utils/contract/solana/useTransaction";
import { removeCookie } from "utils/cookies/cookies";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router-dom";
import useWalletDetailsNFTs from "common/useWalletDetailsNFT";
import useWalletDetailsToken from "common/useWalletDetailsToken";
import WalletNFTsTable from "./libs/WalletNFTsTable";
// import { getNFTs } from "utils/nfts";
// styled components
const Wallet: FC = () => {
  const { toast } = useContext(ToastContext);
  const { user } = useContext(UserContext);
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const walletDetailsNFTs = useWalletDetailsNFTs((s) => s.walletDetailsNFTs);
  const walletDetailsToken = useWalletDetailsToken((s) => s.walletDetailsToken);
  // const [walletInfo, setWalletInfo] = useState<
  //   {
  //     address: string;
  //     value: Number;
  //     avatar: string;
  //   }[]
  // >();
  // useEffect(() => {
  //   if (publicKey) {
  //     walletGetInfor(connection, publicKey).then((res) => {
  //       setWalletInfo(res);
  //     });
  //     connection.getBalance(publicKey).then((res) => {
  //       setBalance(((res / LAMPORTS_PER_SOL) as number).toFixed(4));
  //     });
  //   }
  // }, [connection, publicKey]);

  // const [balance, setBalance] = useState<any>();
  // useEffect(() => {
  //   if (user?.wallet_address) {
  //     walletGetSolBalance(user?.wallet_address).then((res) => {
  //       setBalance(res as number);
  //     });
  //   }
  // }, [user?.wallet_address, user]);

  const copyWalletAddress = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied wallet address");
    });
  };
  return (
    <>
      <H3 sx={{ my: 2 }}>Wallet</H3>
      {/* <SearchInput
                placeholder="Search Friends..."
                sx={{ my: 2 }}
            /> */}
      <Card
        sx={{ textAlign: "center", padding: 3 }}
        style={{ textAlign: "center", border: "2px solid black" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                width: 50,
                height: 50,
                margin: "auto",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "primary.100",
              }}
            >
              <img src="/static/crypto/SOL.png" alt="solona" width="100%" />
            </Box>
            <H3 mt={2} sx={{ marginBottom: "1rem" }}>
              {walletDetailsToken.filter((token) => token.avatar === "SOL")[0]
                ?.value + " SOL"}
            </H3>
            <Tiny
              style={{
                border: "1px solid black",
                cursor: "pointer",
                borderRadius: "10px",
                padding: "0 0.3rem 0",
              }}
              display="block"
              fontWeight={500}
              color="text.disabled"
              onClick={() => {
                if (publicKey) copyWalletAddress(publicKey.toBase58() as any);
              }}
            >
              {publicKey
                ? publicKey.toBase58().slice(0, 30) + "..." || "---------"
                : "No data"}
            </Tiny>
          </Grid>
          <Grid item xs={12}>
            {/* <Card sx={{ textAlign: "center", padding: 3 }} style={{ textAlign: 'center' }}> */}
            <Grid container pb={2}>
              <Grid item sm={4} xs={0}></Grid>
              <Grid item sm={1} xs={3}>
                <IconButton
                  aria-label="delete"
                  color="inherit"
                  style={{ border: "2px solid black " }}
                  onClick={async () => {
                    toast.promise(
                      walletAirDrop(publicKey?.toBase58()).then((res) => {
                        walletGetSolBalance(publicKey?.toBase58() as any).then(
                          (res) => {
                            toast.success(
                              "Airdrop successfully to " + publicKey?.toBase58()
                            );
                            navigate(0);
                          }
                        );
                      }),
                      {
                        loading: "Airdrop in progress...",
                        error: <b>Could not save.</b>,
                      }
                    );
                  }}
                >
                  <Air />
                </IconButton>{" "}
                <br />
                Airdrop
              </Grid>
              <Grid item sm={1} xs={3}>
                <IconButton
                  aria-label="delete"
                  color="inherit"
                  style={{ border: "2px solid black " }}
                  onClick={async () => {
                    toast.promise(
                      walletAirDrop(user?.wallet_address).then((res) => {
                        walletGetSolBalance(user?.wallet_address).then(
                          (res) => {
                            toast.success(
                              "Airdrop successfully to " + user?.wallet_address
                            );
                            navigate(0);
                          }
                        );
                      }),
                      {
                        loading: "Airdrop in progress...",
                        error: <b>Could not save.</b>,
                      }
                    );
                  }}
                >
                  <GetAppOutlinedIcon />
                </IconButton>{" "}
                <br />
                Recevie
              </Grid>
              <Grid item sm={1} xs={3}>
                <IconButton
                  aria-label="delete"
                  color="inherit"
                  style={{ border: "2px solid black " }}
                  onClick={async () => {
                    toast.promise(
                      await transactionToOwner(user?.wallet_address, 1).then(
                        (res_) => {
                          walletGetSolBalance(user?.wallet_address).then(
                            (res) => {
                              toast.success("Transfer successfully! - " + res_);
                            }
                          );
                        }
                      ),
                      {
                        loading: "Transaction in progress...",
                        error: <b>Could not save.</b>,
                      }
                    );
                  }}
                >
                  <CallMadeOutlinedIcon />
                </IconButton>
                <br />
                Tranfer
              </Grid>
              <Grid item sm={1} xs={3}>
                <Box>
                  <IconButton
                    aria-label="delete"
                    color="inherit"
                    style={{ border: "2px solid black " }}
                    onClick={async () => {
                      walletGetSolBalance(user?.wallet_address).then((res) => {
                        toast.success("Balance:" + res + " SOL");
                      });
                    }}
                  >
                    <SwapHorizOutlinedIcon />
                  </IconButton>
                  <br />
                  Swap
                </Box>
              </Grid>
              <Grid item sm={4} xs={0}></Grid>
            </Grid>
            <Divider style={{ background: "black", height: "2px" }} />
            {/* </Card> */}
            <Grid container pt={2}>
              <Grid item xs={6} style={{ textAlign: "left" }}>
                <Button
                  variant="outlined"
                  sx={{ border: "none" }}
                  endIcon={<HelpOutlineOutlinedIcon />}
                >
                  Wallet
                </Button>
              </Grid>
              <Grid item xs={6} style={{ textAlign: "right" }}>
                <Button
                  variant="outlined"
                  sx={{ border: "none" }}
                  endIcon={<AddCardIcon />}
                >
                  Buy
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              {walletDetailsToken
                ? walletDetailsToken?.map((item) => {
                    return (
                      <Stack
                        direction="row"
                        alignItems="center"
                        py={2}
                        spacing={2}
                        style={{ width: "100%" }}
                      >
                        <AppAvatar
                          src={`/static/crypto/${item.avatar}.png`}
                          sx={{ borderRadius: "50%" }}
                        />
                        <Box>
                          <H6>{`${item?.value} ${item.avatar}`}</H6>
                        </Box>
                      </Stack>
                    );
                  })
                : ""}

              <Grid container>
                <Grid item xs={6} style={{ textAlign: "left" }}>
                  <Button
                    variant="outlined"
                    sx={{ border: "none" }}
                    endIcon={<HelpOutlineOutlinedIcon />}
                  >
                    NFTs
                  </Button>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "right" }}>
                  <Button
                    variant="outlined"
                    sx={{ border: "none" }}
                    endIcon={<AddCardIcon />}
                  >
                    Buy
                  </Button>
                </Grid>
              </Grid>

              <WalletNFTsTable />
              {/* {walletDetailsNFTs?.map((item: any) => {
                return (
                 
                  // <Stack
                  //   direction="row"
                  //   alignItems="center"
                  //   py={2}
                  //   spacing={2}
                  //   style={{ width: "100%" }}
                  // >
                  //   <AppAvatar
                  //     src={`${item.metadata.image}`}
                  //     sx={{ borderRadius: "50%" }}
                  //   />
                  //   <Box>
                  //     <H6>{`${item.metadata.name} ${item.metadata.description}`}</H6>
                  //   </Box>
                  // </Stack>
                );
              })} */}

              {user?.wallet?.nfts?.map((nft: any, _: number) => {
                return (
                  <Stack
                    direction="row"
                    alignItems="center"
                    py={2}
                    spacing={2}
                    style={{ width: "100%" }}
                  >
                    {nft?.key === "BOOKS" ? (
                      <IconButton
                        aria-label="delete"
                        color="inherit"
                        style={{ border: "2px solid black " }}
                      >
                        <LibraryBooksIcon color="primary" />
                      </IconButton>
                    ) : (
                      ""
                    )}
                    {nft?.key === "GEMS" ? (
                      <AppAvatar
                        src={nft?.avatar}
                        sx={{ borderRadius: "50%" }}
                      />
                    ) : (
                      ""
                    )}
                    {nft?.key === "BOXS" ? (
                      <IconButton
                        aria-label="delete"
                        color="inherit"
                        style={{ border: "2px solid black " }}
                      >
                        <AllInboxIcon color="primary" />
                      </IconButton>
                    ) : (
                      ""
                    )}

                    <Box>
                      <H6>{`${nft?.data?.length} ${nft?.key}`}</H6>
                    </Box>
                  </Stack>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};
export default Wallet;
