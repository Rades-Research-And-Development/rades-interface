import { Box, Card, Divider, Stack, Grid } from "@mui/material";
import SearchInput from "components/input-fields/SearchInput";
import { H3, H4, H5, H6, Small } from "components/Typography";
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

import { useNavigate } from "react-router-dom";
import WalletNFTsTable from "./libs/WalletNFTsTable";
import useGeneralWallet from "common/useGeneralWallet";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralUtilsWallet from "common/useGeneralUtilsWallet";

// import { getNFTs } from "utils/nfts";
// styled components
const Wallet: FC = () => {
  const { toast } = useContext(ToastContext);
  const { user } = useContext(UserContext);
  const { publicKey, details } = useGeneralWallet((s) => s);
  const { connection, chainRPC } = useGeneralConnection((s) => s);

  const navigate = useNavigate();
  // const { walletAirDrop } = useGeneralUtilsWallet((s) => s);
  // const walletDetailsNFTs = useWalletDetailsNFTs((s) => s.walletDetailsNFTs);
  // const walletDetailsToken = useWalletDetailsToken((s) => s.walletDetailsToken);
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
      <Card
        sx={{ textAlign: "center", padding: 3 }}
        style={{ textAlign: "center", border: "2px solid black" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ width: 100 }}>
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
              <img
                src={`/static/crypto/${chainRPC.symbol}.png`}
                alt=""
                width="100%"
              />
            </Box>
            <H3 mt={2} sx={{ marginBottom: "1rem" }}>
              {details?.tokens
                .filter(
                  (token) =>
                    token.key === chainRPC.RPC?.[0].nativeCurrency?.symbol
                )[0]
                ?.value?.toFixed?.(2) +
                ` ${chainRPC.RPC?.[0].nativeCurrency?.symbol}`}
            </H3>
            <Button
              sx={{
                // border: "1px solid black",
                cursor: "pointer",
                borderRadius: "10px",
                padding: "0 0.3rem 0",
              }}
              onClick={async () => {
                if (publicKey) copyWalletAddress(publicKey as any);
              }}
            >
              {publicKey
                ? (
                    <>
                      {publicKey.slice(0, 30)} <br />{" "}
                      {publicKey.slice(30, -1) + publicKey.slice(-1)}
                    </>
                  ) || "---------"
                : "No data"}
            </Button>
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={10}>
            {/* <Card sx={{ textAlign: "center", padding: 3 }} style={{ textAlign: 'center' }}> */}
            <Grid container pb={2}>
              <Grid item sm={4} xs={0}></Grid>
              <Grid item sm={1} xs={3} sx={{ textAlign: "center" }}>
                <IconButton
                  aria-label="delete"
                  color="inherit"
                  style={{ border: "2px solid black " }}
                  onClick={async () => {}}
                >
                  <Air />
                </IconButton>{" "}
                <br />
                Airdrop
              </Grid>
              <Grid item sm={1} xs={3} sx={{ textAlign: "center" }}>
                <IconButton
                  aria-label="delete"
                  color="inherit"
                  style={{ border: "2px solid black " }}
                >
                  <GetAppOutlinedIcon />
                </IconButton>{" "}
                <br />
                Recevie
              </Grid>
              <Grid item sm={1} xs={3} sx={{ textAlign: "center" }}>
                <IconButton
                  aria-label="delete"
                  color="inherit"
                  style={{ border: "2px solid black " }}
                >
                  <CallMadeOutlinedIcon />
                </IconButton>
                <br />
                Tranfer
              </Grid>
              <Grid item sm={1} xs={3} sx={{ textAlign: "center" }}>
                <Box>
                  <IconButton
                    aria-label="delete"
                    color="inherit"
                    style={{ border: "2px solid black " }}
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
              {details?.tokens
                ? details?.tokens?.map((item) => {
                    return (
                      <Stack
                        direction="row"
                        alignItems="center"
                        py={2}
                        spacing={2}
                        style={{ width: "100%" }}
                      >
                        <AppAvatar
                          src={`/static/crypto/${item.key}.png`}
                          sx={{ borderRadius: "50%" }}
                        />
                        <Box>
                          <H6>{`${item?.value?.toFixed?.(2)} ${item.key}`}</H6>
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
          <Grid item xs={0} sm={1}></Grid>
        </Grid>
      </Card>
    </>
  );
};
export default Wallet;
