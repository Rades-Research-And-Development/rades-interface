import useModalPopup from "common/useModalPopups";
import { useEffect } from "react";
import API from "utils/api/api";

export function useInterceptor() {
  useEffect(() => {
    API.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error?.response?.status === 403) {
          useModalPopup.setState({ oauthModal: true });
        } else if (error?.response?.status === 401) {
          useModalPopup.setState({ oauthModal: true });
        } else if (error?.response?.status === 500) {
          // console.log("Internal server error. Please try again later");
        } else if (error?.response?.status === 404) {
          useModalPopup.setState({ oauthModal: true });
          // console.log("Resource not found. Please try again later");
        } else if (error?.response?.status === 400) {
          // console.log("Bad request. Please try again later");
        } else if (error?.response?.status === 405) {
          // console.log("Method not allowed. Please try again later");
        }
        if (error.response && error.response.data) {
          return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
      }
    );
  }, [API.interceptors.response]);
}
