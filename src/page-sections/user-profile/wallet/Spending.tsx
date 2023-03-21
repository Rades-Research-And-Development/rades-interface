import { Box, Card, Divider, Stack, Grid } from "@mui/material";
import SearchInput from "components/input-fields/SearchInput";
import { H3, H6, Small } from "components/Typography";
import { FC, useContext, useEffect } from "react";
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
import { NoFlashTwoTone } from "@mui/icons-material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DiamondIcon from "@mui/icons-material/Diamond";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import { useNavigate } from "react-router-dom";
// styled components
const Spending: FC = () => {
  const { toast } = useContext(ToastContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

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
        style={{ textAlign: "center" }}
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
              <img src="/static/crypto/solona.png" alt="solona" width="100%" />
            </Box>
            <H3 mt={2} sx={{ marginBottom: "1rem" }}>
              3.76 SOL
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
                copyWalletAddress(user?.wallet_address);
              }}
            >
              {user?.wallet_address?.slice(0, 30) + "..." || "---------"}
            </Tiny>
          </Grid>
          <Grid item xs={12}>
            {/* <Card sx={{ textAlign: "center", padding: 3 }} style={{ textAlign: 'center' }}> */}
            <Grid container pb={2}>
              <Grid item xs={4}>
                <IconButton
                  aria-label="delete"
                  color="inherit"
                  style={{ border: "2px solid black " }}
                >
                  <GetAppOutlinedIcon />
                </IconButton>{" "}
                <br />
                Receive
              </Grid>
              <Grid item xs={4}>
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
              <Grid item xs={4}>
                <Box>
                  <IconButton
                    aria-label="delete"
                    color="inherit"
                    style={{ border: "2px solid black " }}
                    onClick={() => {
                      navigate("/dashboards/book-swaping");
                    }}
                  >
                    <SwapHorizOutlinedIcon />
                  </IconButton>
                  <br />
                  Swap
                </Box>
              </Grid>
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
              {user?.wallet?.cryptos?.map((crypto: any, _: number) => {
                return (
                  <Stack
                    direction="row"
                    alignItems="center"
                    py={2}
                    spacing={2}
                    style={{ width: "100%" }}
                  >
                    <AppAvatar
                      src={crypto?.avatar}
                      sx={{ borderRadius: "50%" }}
                    />
                    <Box>
                      <H6>{`${
                        crypto?.key === "SOL" ? 3.76 : crypto?.total - 53.87
                      } ${crypto?.key}`}</H6>
                    </Box>
                  </Stack>
                );
              })}

              <Grid container>
                <Grid item xs={6} style={{ textAlign: "left" }}>
                  <Button
                    variant="outlined"
                    sx={{ border: "none" }}
                    endIcon={<HelpOutlineOutlinedIcon />}
                  >
                    Items
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
export default Spending;
