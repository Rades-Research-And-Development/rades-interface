import { AvatarGroup, ButtonBase, styled } from "@mui/material";
import { WalletMultiButton as SolanaWalletAdapter } from "@solana/wallet-adapter-react-ui";
import AppModal from "components/AppModal";
import AppAvatar from "components/avatars/AppAvatar";
import { FC, useContext, useEffect, useState } from "react";
import WalletAdapter from "./WalletAdapter";
import { Small } from "components/Typography";
import standalChains from "chain";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// component props interface
import { login } from "@eueno/lib-browser";
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
  const [isHideChains, setIsHideChain] = useState<boolean>(true);

  return (
    <>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderTop: `thin solid rgba(255, 255, 255, 0.12)`,
              marginBottom: "0",
            }}
            onClick={() => setIsHideChain(!isHideChains)}
          >
            <StyledButton sx={{ border: "none" }}>
              {/* <AppAvatar
                src={`/static/crypto/${"ETH"}.png`}
                sx={{ marginRight: 1, width: 22, height: 22 }}
              /> */}
              {isHideChains ? (
                <AvatarGroup max={7}>
                  {[...standalChains, { symbol: "SOL" }].map((chain) => {
                    return (
                      <AppAvatar
                        src={`/static/crypto/${chain.symbol}.png`}
                        sx={{ marginRight: 1, width: 22, height: 22 }}
                      />
                    );
                  })}
                </AvatarGroup>
              ) : (
                ""
              )}
              Connection With Wallet
            </StyledButton>
          </AccordionSummary>
          <AccordionDetails>
            {standalChains.map((chain, _) => {
              return (
                <>
                  {_ !== 2 ? (
                    <StyledButton onClick={onClose}>
                      <AppAvatar
                        src={`/static/crypto/${chain.symbol}.png`}
                        sx={{ marginRight: 1, width: 22, height: 22 }}
                      />
                      Connect with {chain.chainName}
                      <WalletAdapter chain={chain} />
                    </StyledButton>
                  ) : (
                    <StyledButton onClick={onClose}>
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
                  )}
                </>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default WalletOauth;
