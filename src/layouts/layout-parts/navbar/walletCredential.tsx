import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Box, ButtonBase, Divider, styled, Button } from "@mui/material";
import { H6, Small, Tiny } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import { FC, Fragment, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { getCookie } from "cookies/cookies";
import SelectChainModal from "page-sections/connect-wallet/selectChainModal";
import useGeneralWallet from "common/useGeneralWallet";
import WalletCredentialDetails from "./walletCredentialDetails";
import FlexBox from "components/flexbox/FlexBox";
import { copyClipboard } from "utils/copyClipboard";
import useGeneralConnection from "common/useGeneralConnection";
import Web3 from "web3";
import { toast } from "react-hot-toast";
import useGeneralUtilsWallet from "common/useGeneralUtilsWallet";
import ToastContext from "contexts/toastContext";
import { removeCookie } from "utils/cookies/cookies";
import useModalPopup from "common/useModalPopups";
import IChains from "interface/chains.interface";
import { usernameOptimize } from "utils/usernameOptimize";
import API from "utils/api/api";

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
  border: "1px solid #27CE88",
  "&:hover": { backgroundColor: theme.palette.action.hover },
}));

const WalletCredential: FC = () => {
  const anchorRef = useRef(null);
  const generalWallet = useGeneralWallet((s) => s);
  const generalConnection = useGeneralConnection((s) => s);
  const { oauthModal } = useModalPopup((s) => s);
  // const [openChainSelectModal, setOpenChainSelectModal] = useState(false);

  const navigate = useNavigate();
  const [openWalletDetails, setOpenWalletDetails] = useState<boolean>(false);
  const ultiGeneral = useGeneralUtilsWallet((s) => s);
  const { toast } = useContext(ToastContext);

  const onDisconnect = () => {
    removeCookie("authentication_code");
    (API.defaults.headers as any).Authorization = `Token`;
    if (generalConnection.chainRPC.symbol === "SOL") {
    } else {
      useGeneralConnection.setState({
        connection: new Web3(),
        chainRPC: {} as IChains,
      });
      useGeneralWallet.setState({ publicKey: "", chain: "" });
      useModalPopup.setState({ oauthModal: true });
    }
  };
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
              {usernameOptimize(generalWallet?.publicKey)}
              <AppAvatar
                src={`/static/portfolio/3.png`}
                sx={{ width: 22, height: 22, marginLeft: 1 }}
              />
            </Button>
          ) : (
            <Button
              onClick={() => useModalPopup.setState({ oauthModal: true })}
              startIcon={<AccountBalanceWalletOutlinedIcon />}
              sx={{ marginLeft: 1, marginRight: 1, fontSize: "14px" }}
            >
              Connect Wallet
            </Button>
          )}

          <SelectChainModal
            open={oauthModal}
            onClose={() => useModalPopup.setState({ oauthModal: false })}
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
              navigate("/dashboards/user-profile/profile");
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
              copyClipboard(generalWallet?.publicKey || "").then((res) => {
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
              setOpenWalletDetails(false);
              if (generalConnection.chainRPC.symbol) {
                onDisconnect();
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
