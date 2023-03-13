/**
 * @file Base API object to use in other api utilities
 */

import axios, { HeadersDefaults } from "axios";
import { string } from "yup";
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
  process.env.REACT_APP_BASE_API_PATH || "https://apiedcosy.yitec.net/v1";
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
  // Authorization: `Bearer ${getCookie('accessToken')}`,
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  headers: { "Access-Control-Allow-Origin": "*" },
  Expires: "0",
} as CommonHeaderProperties;

export function changeHeader(token: string) {
  API.defaults.headers = {
    // Authorization: `Bearer ${token}`,
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
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 403) {
      window.location.href = "/dashboards/login";
      console.log("You are not authorized. Please login again");
    } else if (error?.response?.status === 401) {
      console.log("Your session has expired. Please login again");
      window.location.href = "/dashboards/login";
    } else if (error?.response?.status === 500) {
      console.log("Internal server error. Please try again later");
    } else if (error?.response?.status === 404) {
      console.log("Resource not found. Please try again later");
    } else if (error?.response?.status === 400) {
      console.log("Bad request. Please try again later");
    } else if (error?.response?.status === 405) {
      console.log("Method not allowed. Please try again later");
    }
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default API;
