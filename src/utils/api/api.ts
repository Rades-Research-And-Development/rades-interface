/**
 * @file Base API object to use in other api utilities
 */
import { useEffect } from 'react'
import axios, { HeadersDefaults } from "axios";
import { getCookie, removeCookie } from "utils/cookies/cookies";
import { string } from "yup";
import { userOauthWallet } from './users';
import useModalPopup from 'common/useModalPopups';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import cookie from 'react-cookies'
// import { getCookie, setCookie, removeCookie } from 'src/cookies/cookies'
// import { router } from 'react-router-dom'
/**
 * API endpoint
 */
interface CommonHeaderProperties extends HeadersDefaults {
  Authorization?: string;
  "Cache-Control": string;
  Pragma: string;
  headers: object;
  Expires: string;
}
export const REACT_APP_BASE_API_PATH =
  process.env.APP_ENV !== "dev" ? "http://localhost:8080/api" : "https://api.rades.asia/api";

console.log("BASE API PATH:", REACT_APP_BASE_API_PATH);
// console.log(process.env.REACT_APP_BASE_API_PATH)
/**
 * Axious default object
 */
const API = axios.create({
  baseURL: REACT_APP_BASE_API_PATH,
  timeout: 25000,
});

/**
 * The default HTTP request header
 */
// let token =
API.defaults.headers = {
  Authorization: `Token ${getCookie("authentication_code") || ""}`,
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  headers: { "Access-Control-Allow-Origin": "*" },
  Expires: "0",
} as CommonHeaderProperties;

export function changeHeader(token: string) {
  API.defaults.headers = {
    Authorization: `Token ${getCookie("authentication_code") === "undefined" ? "" : getCookie("authentication_code")}`,
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    headers: { "Access-Control-Allow-Origin": "*" },
    Expires: "0",
  } as CommonHeaderProperties;
}

/**
 * The axios interceptor.
 * This will clear the user credential in local storage and redirect to /login page if the credential is not valid or expired
 */
// API.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error?.response?.status === 403) {
//       // window.location.href = "/dashboards/login";
//       // console.log("You are not authorized. Please login again");
//     } else if (error?.response?.status === 401) {
//       // console.log("Your session has expired. Please login again");
//       // window.location.href = "/dashboards/login";
//     } else if (error?.response?.status === 500) {
//       // console.log("Internal server error. Please try again later");
//     } else if (error?.response?.status === 404) {
//       // console.log("Resource not found. Please try again later");
//     } else if (error?.response?.status === 400) {
//       // console.log("Bad request. Please try again later");
//     } else if (error?.response?.status === 405) {
//       // console.log("Method not allowed. Please try again later");
//     }
//     if (error.response && error.response.data) {
//       return Promise.reject(error.response.data);
//     }
//     return Promise.reject(error.message);
//   }
// );

const AxiosInterceptor = ({ children }) => {
  const navigate = useNavigate()
  useEffect(() => {

    const resInterceptor = response => {
      return response;
    }

    const errInterceptor = error => {
      if (error?.response?.status === 403) {
        toast.error("Your session has expired. Please login");
        useModalPopup.setState({ oauthModal: true })
      } else if (error?.response?.status === 401) {
        useModalPopup.setState({ oauthModal: true })
        toast.error("Your session has expired. Please login");
      } else if (error?.response?.status === 500) {
        useModalPopup.setState({ oauthModal: true })
        toast.error("Internal server error. Please try again later");
      } else if (error?.response?.status === 404) {
        navigate("/dashboards/404")
        toast.error("Resource not found. Please try again later");
      } else if (error?.response?.status === 400) {
        toast.error("Bad request. Please try again later");
      } else if (error?.response?.status === 405) {
        toast.error("Method not allowed. Please try again later");
      }
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    }


    const interceptor = API.interceptors.response.use(resInterceptor, errInterceptor);

    return () => API.interceptors.response.eject(interceptor);

  }, [])
  return children;
}


export { AxiosInterceptor }
export default API;
