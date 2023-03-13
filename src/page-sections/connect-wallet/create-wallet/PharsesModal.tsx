import { Button, Grid, styled } from "@mui/material";
import AppModal from "components/AppModal";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import ImageUploadInput from "components/input-fields/ImageUploadInput";
import Scrollbar from "components/ScrollBar";
import { H2, H6 } from "components/Typography";
import { useFormik } from "formik";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axiosInstance from "utils/axios";
import PASSCODE_BASE from "__fakeData__/wallet/passcode_base";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import { useContext } from "react";
import ToastContext from "contexts/toastContext";
import * as Yup from "yup";
import { RemoveCircleRounded } from "@mui/icons-material";
import LIST_USERS from "__fakeData__/users/users";
import StartIcon from "@mui/icons-material/Start";
// component props interface
interface ModalProps {
  data?: any;
  open: boolean;
  edit?: boolean;
  onClose: (pharses: string[]) => void;
  // onDonePasscode: (data: number[]) => void;
}
// styled components
const StyledAppModal = styled(AppModal)(({ theme }) => ({
  maxWidth: 340,
  minWidth: 200,
  borderRadius: 10,
  border: "3px solid black",
  [theme.breakpoints.down(325)]: { maxWidth: "100%" },
}));
const styledButton = {
  borderRadius: 5,
  border: "2px solid black",
  fontSize: "30px",
};
const PharsesModal: FC<ModalProps> = ({ open, onClose, edit, data }) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  const { toast } = useContext(ToastContext);
  const [pharses, setPharses] = useState<string[] | [] | any>(
    LIST_USERS[0]?.pharses
  );
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const toast_test = () => {
    toast.success("Generate pharses successfully");
  };
  useEffect(() => {
    setPharses(LIST_USERS[0]?.pharses);
  }, [setPharses]);
  return (
    <StyledAppModal open={open} handleClose={() => onClose(pharses)}>
      <H2 mb={2}>{isConfirm ? "Confirm your passcode" : "Your 12 pharses"}</H2>

      <form onSubmit={handleSubmit}>
        <Scrollbar style={{ maxHeight: 400 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <H6 mb={1} style={{ color: "red" }}>
                <strong>Warning: </strong>Your seed phrase is essentially your
                crypto wallet recovery password if you lose access to the device
                where it’s initially stored on.
              </H6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {pharses.map((data: any, _: number) => {
                  return (
                    <Grid item xs={12} key={_}>
                      <Button
                        size="large"
                        variant="outlined"
                        sx={{ border: "2px solid black", fontSize: "15px" }}
                        fullWidth
                      >{`${_ + 1}. ${data} `}</Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Scrollbar>
        <FlexBox justifyContent="flex-end" gap={2} marginTop={4}>
          <Button
            sx={styledButton}
            fullWidth
            size="small"
            variant="outlined"
            onClick={() => {
              onClose(pharses);
            }}
          >
            <KeyboardReturnIcon />
          </Button>
        </FlexBox>
      </form>
    </StyledAppModal>
  );
};

export default PharsesModal;
