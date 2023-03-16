import { Button, Grid, styled } from "@mui/material";
import AppModal from "components/AppModal";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import ImageUploadInput from "components/input-fields/ImageUploadInput";
import Scrollbar from "components/ScrollBar";
import { H3, H6 } from "components/Typography";
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
interface ModalProps {}
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

const ImportWallet: FC<ModalProps> = () => {
  return <></>;
};

export default ImportWallet;
