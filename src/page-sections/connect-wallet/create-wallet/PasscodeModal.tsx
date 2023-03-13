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
import StartIcon from "@mui/icons-material/Start";
// component props interface
interface ModalProps {
  data?: any;
  open: boolean;
  edit?: boolean;
  onClose: () => void;
  onDonePasscode: (data: number[]) => void;
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
const PasscodeModal: FC<ModalProps> = ({
  open,
  onClose,
  edit,
  data,
  onDonePasscode,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  const { toast } = useContext(ToastContext);
  const [passcode, setPasscode] = useState<number[]>(
    Array.from(Array(6)).map(() => -1)
  );
  const [confirmPasscode, setConfirmPasscode] = useState<number[]>(
    Array.from(Array(6)).map(() => -2)
  );
  const [passcodeIndex, setPasscodeIndex] = useState<number>(0);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const toast_test = () => {
    toast.success("Generate passcode successfully");
  };
  // useEffect(() => {

  // }, [onDonePasscode, passcode, confirmPasscode, onClose])

  const onInputPasscode = (pass: number) => {
    if (isConfirm)
      setConfirmPasscode(
        confirmPasscode.map((data: number, _: number) =>
          _ === passcodeIndex ? pass : data
        )
      );
    else
      setPasscode(
        passcode.map((data: number, _: number) =>
          _ === passcodeIndex ? pass : data
        )
      );
    if (passcodeIndex !== 6) setPasscodeIndex(passcodeIndex + 1);
  };
  const next = () => {
    if (String(passcode) === String(confirmPasscode)) {
      onDonePasscode(confirmPasscode);
      toast.success("Generate passcode successfully");
      onClose();
    } else if (isConfirm) toast.error("Generate passcode unsuccessfully");
    if (passcodeIndex === 6 && !isConfirm) {
      setPasscodeIndex(0);
      setIsConfirm(true);
    }
  };
  const deletePasscode = () => {
    if (isConfirm)
      setConfirmPasscode(
        confirmPasscode.map((data: number, _: number) =>
          _ === passcodeIndex ? -1 : data
        )
      );
    else
      setPasscode(
        passcode.map((data: number, _: number) =>
          _ === passcodeIndex ? -1 : data
        )
      );
    if (passcodeIndex !== 0) setPasscodeIndex(passcodeIndex - 1);
  };

  return (
    <StyledAppModal open={open} handleClose={onClose}>
      <H2 mb={2}>
        {isConfirm ? "Confirm your passcode" : "1. Enter your passcode"}
      </H2>

      <form onSubmit={handleSubmit}>
        {/* <Scrollbar style={{ maxHeight: 400 }}> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <H6 mb={1}>Your passcode</H6>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            {(isConfirm ? confirmPasscode : passcode).map(
              (pass: number, _: number) => {
                return (
                  <>
                    {pass === -1 || pass === -2 ? (
                      <CircleOutlinedIcon />
                    ) : (
                      <CircleIcon />
                    )}
                  </>
                );
              }
            )}
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={1}>
              {PASSCODE_BASE.map((data: number, id: number) => {
                return (
                  <Grid item xs={4}>
                    <Button
                      onClick={() => {
                        onInputPasscode(data);
                      }}
                      size="large"
                      key={id}
                      variant="outlined"
                      sx={styledButton}
                      fullWidth
                    >
                      {data}
                    </Button>
                  </Grid>
                );
              })}
              <Grid item xs={4} style={{ textAlign: "center" }}>
                <BackspaceOutlinedIcon
                  style={{ marginTop: "1.5rem", fontSize: "30px" }}
                  onClick={deletePasscode}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  onClick={() => {
                    onInputPasscode(0);
                  }}
                  size="large"
                  variant="outlined"
                  sx={styledButton}
                  fullWidth
                >
                  0
                </Button>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "center" }}>
                <StartIcon
                  style={{ marginTop: "1.5rem", fontSize: "30px" }}
                  onClick={next}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* </Scrollbar> */}

        <FlexBox justifyContent="flex-end" gap={2} marginTop={4}>
          <Button
            sx={styledButton}
            fullWidth
            size="small"
            variant="outlined"
            onClick={onClose}
          >
            <KeyboardReturnIcon />
          </Button>
        </FlexBox>
      </form>
    </StyledAppModal>
  );
};

export default PasscodeModal;
