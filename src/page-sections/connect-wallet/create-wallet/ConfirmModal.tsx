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
  onDoneComfirmPharses: (data: string[]) => void;
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
interface ButtonPharseProps {
  content: string;
  contents: string[];
  onConfirmPharses: (content: any) => void;
}
const ButtonPharse: FC<ButtonPharseProps> = ({
  contents,
  content,
  onConfirmPharses,
}) => {
  const [dis, setDis] = useState<boolean>(false);
  useEffect(() => {
    if (contents.includes(content)) setDis(true);
    else setDis(false);
  }, [contents, content]);
  return (
    <Button
      disabled={dis}
      onClick={() => {
        onConfirmPharses(content);
      }}
      size="large"
      variant="outlined"
      sx={{ border: "2px solid black", fontSize: "15px" }}
      fullWidth
    >
      {content}
    </Button>
  );
};
const PharsesConfirmModal: FC<ModalProps> = ({
  open,
  onClose,
  edit,
  data,
  onDoneComfirmPharses,
}) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  const { toast } = useContext(ToastContext);
  const [pharses, setPharses] = useState<string[]>(LIST_USERS[0]?.pharses);
  const [confirmPharses, setConfirmPharses] = useState<string[]>([]);
  useEffect(() => {
    setPharses(LIST_USERS[0]?.pharses);
  }, [setPharses, setConfirmPharses]);

  const onConfirmPharses = (data: string) => {
    let hi = confirmPharses.concat(data);
    setConfirmPharses(hi);
  };
  const deletePharse = () => {
    setConfirmPharses(
      confirmPharses.filter((data: string, _: number) => {
        return _ !== confirmPharses.length - 1;
      })
    );
  };
  const submitPharse = () => {
    if (String(pharses) === String(confirmPharses)) {
      onDoneComfirmPharses(confirmPharses);
      toast.success("Create wallet successfully");
    } else {
      toast.error("Comfirm pharses unsuccessfully");
    }
  };
  const shuffle = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  return (
    <StyledAppModal open={open} handleClose={() => onClose(pharses)}>
      <H2 mb={2}> {"Comfirm your pharses"}</H2>
      <form onSubmit={handleSubmit}>
        <Scrollbar style={{ maxHeight: 460 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <H6 mb={1}>12 Pharses</H6>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  border: "2px solid black",
                  textAlign: "center",
                  height: "100px",
                }}
              >
                {confirmPharses.map((data: string, _: number) => {
                  return (
                    <Grid item xs={4} key={_} style={{ fontSize: "12px" }}>
                      {`${_ + 1}. ${data}`}{" "}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {shuffle(pharses).map((data: any, _: number) => {
                  return (
                    <Grid item xs={4} key={_}>
                      <ButtonPharse
                        contents={confirmPharses}
                        content={data}
                        onConfirmPharses={onConfirmPharses}
                      ></ButtonPharse>
                    </Grid>
                  );
                })}

                <Grid item xs={4} style={{ textAlign: "center" }}>
                  <BackspaceOutlinedIcon
                    onClick={deletePharse}
                    style={{ marginTop: "1.5rem", fontSize: "30px" }}
                  />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} style={{ textAlign: "center" }}>
                  <StartIcon
                    onClick={submitPharse}
                    style={{ marginTop: "1.5rem", fontSize: "30px" }}
                  />
                </Grid>
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

export default PharsesConfirmModal;
