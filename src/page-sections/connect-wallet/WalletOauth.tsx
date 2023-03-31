import { ButtonBase, styled } from "@mui/material";
import { WalletMultiButton as SolanaWalletAdapter } from "@solana/wallet-adapter-react-ui";
import AppModal from "components/AppModal";
import AppAvatar from "components/avatars/AppAvatar";
import { FC, useContext } from "react";
import WalletAdapter from "./WalletAdapter";
import { Small } from "components/Typography";
import standalChains from "chain";
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

const WalletOauth: FC<ModalProps> = ({ open, onClose, edit, data }) => {
  return (
    <>
      <StyledButton onClick={onClose}>
        {/* <GoogleIcon sx={{ marginRight: 1, fontSize: "1.2rem" }} /> */}
        <AppAvatar
          src={`/static/crypto/SOL.png`}
          sx={{ marginRight: 1, width: 22, height: 22 }}
        />
        Connect with Solana
        <SolanaWalletAdapter
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
      {standalChains.map((chain) => {
        return (
          <StyledButton onClick={onClose}>
            <AppAvatar
              src={`/static/crypto/${chain.symbol}.png`}
              sx={{ marginRight: 1, width: 22, height: 22 }}
            />
            Connect with {chain.chainName}
            <WalletAdapter chain={chain} />
          </StyledButton>
        );
      })}
    </>
  );
};

export default WalletOauth;
