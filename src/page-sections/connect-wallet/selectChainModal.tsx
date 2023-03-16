import {
  AccountBalanceOutlined,
  CameraAlt,
  KeyboardArrowDown,
} from "@mui/icons-material";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import { Badge, Box, Button, ButtonBase, Grid, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { WalletMultiButton as SolanaWalletAdapter } from "@solana/wallet-adapter-react-ui";
import useEthereumConnection from "common/ethereum/useConnection";
import AppModal from "components/AppModal";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import { H2, H6 } from "components/Typography";
import { useFormik } from "formik";
import { FC, useEffect } from "react";
import * as Yup from "yup";
import EthereumWalletAdapter from "./ethereum/ethereumWalletAdapter";

// component props interface
interface ModalProps {
  open: boolean;
  onClose: () => void;
  edit?: boolean;
  data?: any;
}

// styled components
const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  padding: 5,
  marginLeft: 4,
  borderRadius: 30,
  border: "1px solid #e93a88",
  width: "90%",
  "&:hover": { backgroundColor: theme.palette.action.hover },
}));

const StyledAppModal = styled(AppModal)(({ theme }) => ({
  maxWidth: 700,
  minWidth: 300,
  boxShadow: theme.shadows[2],
  [theme.breakpoints.down("sm")]: {
    "& .main-form": { height: 200, overflow: "auto" },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));

const SelectChainModal: FC<ModalProps> = ({ open, onClose, edit, data }) => {
  const connection = useEthereumConnection.getState().connection;
  // useEffect(() => {
  //   onClose();
  // }, [connection]);
  return (
    <StyledAppModal open={open} handleClose={onClose}>
      <H2>{edit ? "Edit Chainlist" : "Select Chain Wallet"}</H2>

      <Box textAlign="center" py={3}>
        <Grid container spacing={1}>
          <Grid item lg={6} xs={12}>
            <StyledButtonBase disableRipple>
              <AppAvatar
                src={`/static/crypto/SOL.png`}
                sx={{ marginLeft: 2, width: 22, height: 22 }}
              />
              <SolanaWalletAdapter
                onClick={onClose}
                style={{
                  fontSize: "1rem",
                  background: "none",
                  height: "3rem",
                }}
              />
            </StyledButtonBase>
          </Grid>
          <Grid item lg={6} xs={12}>
            {" "}
            <StyledButtonBase disableRipple>
              <AppAvatar
                src={`/static/crypto/SOL.png`}
                sx={{ marginLeft: 2, width: 22, height: 22 }}
              />

              <EthereumWalletAdapter onCloseProp={() => onClose()} />
            </StyledButtonBase>
          </Grid>
        </Grid>
      </Box>

      {/* <SolanaWalletAdapter
          onClick={onClose}
          style={{ fontSize: "12px", background: "none", height: "2rem" }}
          startIcon={<AccountBalanceOutlined />}
        /> */}
    </StyledAppModal>
  );
};

export default SelectChainModal;
