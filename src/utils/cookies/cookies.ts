import Cookies from "universal-cookie";
// import React, { Redirect } from 'react-router-dom'
const cookies = new Cookies();
export function setCookie(nameCookie, valCookie) {
  cookies.set(nameCookie, valCookie, { path: "/" });
}
export function removeCookie(nameCookie) {
  cookies.remove(nameCookie, { path: "/" });
}
export function getCookie(nameCookie) {
  return cookies.get(nameCookie);
}
