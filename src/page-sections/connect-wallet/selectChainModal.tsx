import {
  AccountBalanceOutlined,
  CameraAlt,
  KeyboardArrowDown,
} from "@mui/icons-material";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import {
  Badge,
  Box,
  Button,
  ButtonBase,
  Grid,
  styled,
  Divider,
  Stack,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { WalletMultiButton as SolanaWalletAdapter } from "@solana/wallet-adapter-react-ui";
import AppModal from "components/AppModal";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import { H2, H6 } from "components/Typography";
import { useFormik } from "formik";
import { FC, useContext, useEffect } from "react";
import AuthenticationLayout from "./AuthenticationLayout";
import * as Yup from "yup";
import EthereumWalletAdapter from "./ethereum/ethereumWalletAdapter";
import AppCheckBox from "components/AppCheckBox";
import FlexBetween from "components/flexbox/FlexBetween";
import { Small } from "components/Typography";
import Facebook from "icons/Facebook";
import GoogleIcon from "icons/GoogleIcon";
import Twitter from "icons/Twitter";
import { userLogin, userRegister } from "utils/api/users";
import ToastContext from "contexts/toastContext";
import { use } from "i18next";
// component props interface
interface ModalProps {
  open: boolean;
  onClose: () => void;
  edit?: boolean;
  data?: any;
}

// styled components
const StyledButton = styled(ButtonBase)(({ theme }) => ({
  width: "100%",
  padding: 12,
  marginBottom: 16,
  borderRadius: "8px",
  fontWeight: "500",
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down(454)]: { width: "100%", marginBottom: 8 },
}));

const StyledAppModal = styled(AppModal)(({ theme }) => ({
  maxWidth: 700,
  minWidth: 300,
  boxShadow: "5px 5px 5px 5px black",
  // boxShadow: theme.shadows[5],
  [theme.breakpoints.down("sm")]: {
    "& .main-form": { height: 200, overflow: "auto" },
  },
}));

const SelectChainModal: FC<ModalProps> = ({ open, onClose, edit, data }) => {
  // useEffect(() => {
  //   onClose();
  // }, [connection]);
  const { toast } = useContext(ToastContext);
  const SignWithGoogle = async () => {
    userLogin("vinkkkxwh@gmail.com", "hi")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.errors?.email) toast.error("email: " + err.errors?.email);
        if (err.errors?.username)
          toast.error("username: " + err.errors?.username);
      });
  };
  return (
    <StyledAppModal open={open} handleClose={onClose}>
      <AuthenticationLayout
        route="/"
        description="New Here?"
        title="Sign in to Rades"
        routeName="Create an account"
      >
        {" "}
        <StyledButton>
          {/* <GoogleIcon sx={{ marginRight: 1, fontSize: "1.2rem" }} /> */}
          <AppAvatar
            src={`/static/crypto/SOL.png`}
            sx={{ marginRight: 1, width: 22, height: 22 }}
          />
          Connect with Solana
          <SolanaWalletAdapter
            onClick={onClose}
            style={{
              fontSize: "1rem",
              background: "none",
              opacity: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
        </StyledButton>
        <StyledButton>
          {/* <GoogleIcon sx={{ marginRight: 1, fontSize: "1.2rem" }} /> */}
          <AppAvatar
            src={`/static/crypto/ETH.png`}
            sx={{ marginRight: 1, width: 22, height: 22 }}
          />
          Connect with Ethereum
          <EthereumWalletAdapter />
        </StyledButton>
        <Divider sx={{ marginTop: 1 }}>
          <Small color="text.disabled" px={1}>
            OR
          </Small>
        </Divider>
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
          my={3}
        >
          <StyledButton onClick={() => SignWithGoogle()}>
            <GoogleIcon sx={{ marginRight: 1, fontSize: "1.2rem" }} />
            Signin with Google
          </StyledButton>

          <StyledButton>
            <Facebook
              sx={{ color: "#2475EF", marginRight: 1, fontSize: "1.2rem" }}
            />
            Signin with Facebook
          </StyledButton>

          <StyledButton>
            <Twitter
              sx={{ color: "#45ABF7", marginRight: 1, fontSize: "1.2rem" }}
            />
            Signin with Twitter
          </StyledButton>
        </Stack>
        {/* <Divider sx={{ marginTop: 1 }}> */}
        <Small color="text.disabled" px={1}>
          By signing in you agree to our Terms & Conditions
        </Small>
        {/* </Divider> */}
      </AuthenticationLayout>
    </StyledAppModal>
  );
};

export default SelectChainModal;
