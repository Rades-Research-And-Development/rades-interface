import { AvatarGroup, ButtonBase, styled } from '@mui/material';
import { WalletMultiButton as SolanaWalletAdapter } from '@solana/wallet-adapter-react-ui';
import AppModal from 'components/AppModal';
import AppAvatar from 'components/avatars/AppAvatar';
import { FC, useContext, useEffect, useState } from 'react';
import WalletAdapter from './WalletAdapter';
import { Small } from 'components/Typography';
import useGeneralWallet from "common/useGeneralWallet";
import standalChains from 'chain';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// component props interface
interface ModalProps {
  open: boolean;
  onClose: () => void;
  edit?: boolean;
  data?: any;
}

function getOWallet(): any  {
  if (window['owallet']) {
      return window['owallet'];
  }
  
  if (document.readyState === "complete") {
      return window['owallet'];
  }
  
  return new Promise((resolve) => {
      const documentStateChange = (event: Event) => {
          if (
              event.target &&
              (event.target as Document).readyState === "complete"
          ) {
              resolve(window['owallet']);
              document.removeEventListener("readystatechange", documentStateChange);
          }
      };
      
      document.addEventListener("readystatechange", documentStateChange);
  });
}
// styled components
const StyledButton = styled(ButtonBase)(({ theme }) => ({
  width: '100%',
  padding: 12,
  marginBottom: 16,
  borderRadius: '8px',
  fontWeight: '500',
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down(454)]: { width: '100%', marginBottom: 8 },
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
              marginBottom: '0',
            }}
            onClick={() => setIsHideChain(!isHideChains)}>
            <StyledButton sx={{ border: 'none' }}>
              {/* <AppAvatar
                src={`/static/crypto/${"ETH"}.png`}
                sx={{ marginRight: 1, width: 22, height: 22 }}
              /> */}
              {isHideChains ? (
                <AvatarGroup max={7}>
                  {[...standalChains, { symbol: 'SOL' }].map((chain) => {
                    return (
                      <AppAvatar
                        src={`/static/crypto/${chain.symbol}.png`}
                        sx={{ marginRight: 1, width: 22, height: 22 }}
                      />
                    );
                  })}
                </AvatarGroup>
              ) : (
                ''
              )}
              Connection With Wallet
            </StyledButton>
          </AccordionSummary>
          <AccordionDetails>
            {standalChains.map((chain, _) => {
              if (chain.chainName === 'Oraichain') {
                return (
                  <StyledButton
                    onClick={async () => {

                      await getOWallet()?.enable(chain.chainName);
                       const key  =  await getOWallet()?.getKey(chain.chainName)
                      console.log('key',key)
                      onClose()
                      useGeneralWallet.setState({
                          publicKey : key.bech32Address,
                          chain : 'ORAI'
                      })
                    }}>
                    <AppAvatar
                      src={`/static/crypto/${chain.symbol}.png`}
                      sx={{ marginRight: 1, width: 22, height: 22 }}
                    />
                    Connect with {chain.chainName}
                  </StyledButton>
                );
              }
              if (_ !== 2) {
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
              }
              return (
                <StyledButton onClick={onClose}>
                  <AppAvatar
                    src={`/static/crypto/SOL.png`}
                    sx={{ marginRight: 1, width: 22, height: 22 }}
                  />
                  Connect with Solana
                  <SolanaWalletAdapter
                    style={{
                      fontSize: '1rem',
                      background: 'none',
                      opacity: 0,
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      zIndex: 0,
                    }}
                  />
                </StyledButton>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default WalletOauth;
