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
import EthereumWalletAdapter from "./WalletAdapter";
import AppCheckBox from "components/AppCheckBox";
import FlexBetween from "components/flexbox/FlexBetween";
import { Small } from "components/Typography";
import Facebook from "icons/Facebook";
import GoogleIcon from "icons/GoogleIcon";
import Twitter from "icons/Twitter";
import { userLogin, userRegister } from "utils/api/users";
import ToastContext from "contexts/toastContext";
import { use } from "i18next";
import WalletOauth from "./WalletOauth";
import SocialOauth from "./SocialOauth";
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
        <WalletOauth open={open} onClose={onClose} />
        <Divider sx={{ marginTop: 1 }}>
          <Small color="text.disabled" px={1}>
            OR
          </Small>
        </Divider>
        <SocialOauth open={open} onClose={onClose} />
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
