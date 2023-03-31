import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Box, ButtonBase, Divider, styled, Button } from "@mui/material";
import { H6, Small, Tiny } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import { FC, Fragment, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { getCookie } from "cookies/cookies";
import useSolanaWalletDetailsToken from "common/useWalletDetailsToken";
import SelectChainModal from "page-sections/connect-wallet/SelectChainModal";
import useGeneralWallet from "common/useGeneralWallet";
import WalletCredentialDetails from "./walletCredentialDetails";
import FlexBox from "components/flexbox/FlexBox";
import { copyClipboard } from "utils/copyClipboard";
import useGeneralConnection from "common/useGeneralConnection";
import Web3 from "web3";
import { toast } from "react-hot-toast";
import useGeneralUtilsWallet from "common/useGeneralUtilsWallet";
import ToastContext from "contexts/toastContext";
import { useWallet } from "@solana/wallet-adapter-react";

// styled components
// const StyledSmall = styled(Small)(({ theme }) => ({
//   padding: "3px 12px",
//   borderRadius: "4px",
//   display: "block",
//   fontSize: 12,
//   backgroundColor: (theme as any).palette.action.hover,
//   color: (theme as any).palette.text.secondary,
// }));
const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  padding: 5,
  marginLeft: 6,
  borderRadius: 30,
  border: "1px solid #e93a88",
  "&:hover": { backgroundColor: theme.palette.action.hover },
}));

const WalletCredential: FC = () => {
  const anchorRef = useRef(null);
  const generalWallet = useGeneralWallet((s) => s);
  const generalConnection = useGeneralConnection((s) => s);
  const [openChainSelectModal, setOpenChainSelectModal] = useState(false);
  const navigate = useNavigate();
  const [openWalletDetails, setOpenWalletDetails] = useState<boolean>(false);
  const ultiGeneral = useGeneralUtilsWallet((s) => s);
  const { toast } = useContext(ToastContext);

  const { connected, disconnect } = useWallet();
  return (
    <Fragment>
      <StyledButtonBase
        disableRipple
        ref={anchorRef}
        // onClick={() => setAuth(true)}
      >
        {" "}
        <>
          {generalWallet?.publicKey ? (
            <Button onClick={() => setOpenWalletDetails(true)}>
              {generalWallet.details?.tokens?.map((res) => {
                return (
                  <>
                    <Small mx={0.2} color="text.errror">
                      <Small fontWeight="600" display="inline">
                        {Number?.(res?.value).toFixed(2)}
                      </Small>
                    </Small>

                    <AppAvatar
                      src={`/static/crypto/${res.key}.png`}
                      sx={{
                        width: 22,
                        height: 22,
                        marginRight: 1,
                        marginLeft: 0.5,
                      }}
                    />
                  </>
                );
              })}
              {generalWallet?.publicKey.slice(0, 20)}
              <AppAvatar
                src={`/static/portfolio/3.png`}
                sx={{ width: 22, height: 22, marginLeft: 1 }}
              />
            </Button>
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

      <WalletCredentialDetails
        hiddenViewButton
        maxWidth={300}
        popoverOpen={openWalletDetails}
        anchorRef={anchorRef}
        popoverClose={() => setOpenWalletDetails(false)}
        title={
          <FlexBox alignItems="center" gap={1}>
            <Box>
              <H6>{"Wallet details"}</H6>
            </Box>
          </FlexBox>
        }
      >
        <Box pt={1} sx={{ textAlign: "left" }}>
          <Button
            onClick={() => {
              navigate("/dashboards/user-profile/4");
            }}
            color="primary"
            style={{ width: "100%", fontSize: "14px" }}
          >
            {" "}
            Profile
          </Button>
          <br />
          <Button
            onClick={() => {
              copyClipboard(generalWallet.publicKey).then((res) => {
                toast.success("Copy address successfully");
              });
            }}
            color="primary"
            style={{ width: "100%", fontSize: "14px" }}
          >
            {" "}
            Copy wallet
          </Button>

          <Button
            onClick={() => {
              if (connected) {
                disconnect();
              }
            }}
            color="primary"
            style={{ width: "100%", fontSize: "14px" }}
          >
            {" "}
            Disconnect
          </Button>
        </Box>
      </WalletCredentialDetails>
    </Fragment>
  );
};

export default WalletCredential;
