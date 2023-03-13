import { Box, Modal, styled } from "@mui/material";
import { BoxProps } from "@mui/system";
import { FC } from "react";
import { lightTheme } from "../constants";

// ---------------------------------------------------------
type AppModalProps = {
  open: boolean;
  handleClose: () => void;
};
// ---------------------------------------------------------

const Wrapper = styled(Box)(({ theme }) => ({
  top: "50%",
  left: "50%",
  padding: 24,
  maxWidth: 680,
  width: "100%",
  borderRadius: "4px",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  backgroundColor: lightTheme(theme)
    ? "#fff"
    : theme.palette.background.default,
}));

const AppModal: FC<AppModalProps & BoxProps> = ({
  children,
  open,
  handleClose,
  ...props
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Wrapper {...props}>{children}</Wrapper>
    </Modal>
  );
};

export default AppModal;
