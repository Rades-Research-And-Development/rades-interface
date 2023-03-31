import { ButtonBase, styled } from "@mui/material";
import { FC } from "react";
import Facebook from "icons/Facebook";
import GoogleIcon from "icons/GoogleIcon";
import Twitter from "icons/Twitter";
import { Stack } from "@mui/system";
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

const SocialOauth: FC<ModalProps> = ({ open, onClose, edit, data }) => {
  // useEffect(() => {
  //   onClose();
  // }, [connection]);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      my={3}
    >
      <StyledButton>
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
  );
};

export default SocialOauth;
