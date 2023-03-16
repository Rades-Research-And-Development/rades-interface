import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import {
  Badge,
  Box,
  ButtonBase,
  Divider,
  Theme,
  styled,
  useMediaQuery,
  Button,
  Grid,
} from "@mui/material";
import { H6, Small, Tiny } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { FC, Fragment, useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { getCookie } from "cookies/cookies";
import { walletGetInfor } from "utils/contract/solana/useWallet";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";
import { useConnection as useSolanaConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import WalletContext from "contexts/walletContext";
import useSolanaWalletDetailsToken from "common/solana/useWalletDetailsToken";
import SelectChainModal from "page-sections/connect-wallet/selectChainModal";
import useEthereumWallet from "common/ethereum/useWallet";
import useEthereumConnection from "common/ethereum/useConnection";

// styled components
const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  padding: 5,
  marginLeft: 4,
  borderRadius: 30,
  border: "1px solid #e93a88",
  "&:hover": { backgroundColor: theme.palette.action.hover },
}));

const StyledSmall = styled(Small)(({ theme }) => ({
  display: "block",
  cursor: "pointer",
  padding: "5px 1rem",
  "&:hover": { backgroundColor: theme.palette.action.hover },
}));

const WalletCredential: FC = () => {
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const { publicKey } = useSolanaWallet() || useEthereumWallet.getState();
  const { connection } =
    useSolanaConnection() || useEthereumConnection.getState();
  const [openChainSelectModal, setOpenChainSelectModal] = useState(false);
  const walletDetailsToken = useSolanaWalletDetailsToken(
    (s) => s.walletDetailsToken
  );

  return (
    <Fragment>
      <StyledButtonBase
        disableRipple
        ref={anchorRef}
        // onClick={() => setAuth(true)}
      >
        {" "}
        <>
          {publicKey ? (
            <>
              {walletDetailsToken.map((res) => {
                console.log(publicKey);
                return (
                  <>
                    <Small mx={1} color="text.errror">
                      <Small fontWeight="600" display="inline">
                        {Number?.(res?.value)}
                      </Small>
                    </Small>
                    <AppAvatar
                      src={`/static/crypto/${res.avatar}.png`}
                      sx={{ width: 22, height: 22 }}
                    />
                  </>
                );
              })}
            </>
          ) : (
            <Button
              onClick={() => setOpenChainSelectModal(true)}
              sx={{ marginLeft: 1, marginRight: 1, fontSize: "14px" }}
            >
              Connect Wallet
            </Button>
          )}
          {/* <WalletMultiButton
            style={{ fontSize: "12px", background: "none", height: "2rem" }}
            startIcon={<AccountBalanceWalletOutlinedIcon />}
          /> */}

          <SelectChainModal
            open={openChainSelectModal}
            onClose={() => setOpenChainSelectModal(false)}
          />
          {/* <AppAvatar
            src={"/static/portfolio/3.png"}
            sx={{ width: 28, height: 28, marginLeft: "0.5rem" }}
          /> */}

          {/* <WalletDisconnectButton /> */}
        </>
      </StyledButtonBase>

      {/* <PopoverLayout
        hiddenViewButton
        maxWidth={230}
        minWidth={200}
        popoverOpen={open}
        anchorRef={anchorRef}
        popoverClose={() => setOpen(false)}
        title={
          <FlexBox alignItems="center" gap={1}>
            <AppAvatar
              src={user?.avatar || "/static/avatar/001-man.svg"}
              sx={{ width: 35, height: 35 }}
            />

            <Box>
              <H6>{user?.name || "User | Publisher"}</H6>
              <Tiny
                style={{
                  border: "1px solid aqua",
                  color: "white",
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
                {user?.wallet_address?.slice(0, 12) + "..." || "---------"}
              </Tiny>
            </Box>
          </FlexBox>
        }
      >
        <Box pt={1}>
          <StyledSmall
            onClick={() => handleMenuItem("/dashboards/user-profile/1")}
          >
            Profile & Account
          </StyledSmall>

          <StyledSmall
            onClick={() => handleMenuItem("/dashboards/user-profile/4")}
          >
            Wallet
          </StyledSmall>

          <Divider sx={{ my: 1 }} />

          <StyledSmall
            onClick={async () => {
              // handleLogout();
              await phantom?.disconnect();
              // .then((res) => {
              //   alert(res);
              //   toast.success("You Logout Successfully");
              //   window.location.href = "/dashboards/connect-wallet";
              // })
              // .catch((err) => {
              //   toast.error("Abort: disconnect problem");
              // });
            }}
          >
            Disconnect
          </StyledSmall>
        </Box>
      </PopoverLayout> */}
    </Fragment>
  );
};

export default WalletCredential;
