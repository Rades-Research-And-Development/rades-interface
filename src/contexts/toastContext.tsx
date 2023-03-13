import { createContext } from "react";
import toast from "react-hot-toast";

interface IToastContext {
  toast: any;
}

const defaultState = {
  toast: toast,
};

const ToastContext = createContext<IToastContext>(defaultState);

export default ToastContext;
