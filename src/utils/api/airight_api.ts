import axios from "axios";
import { limitArticlesLoaded } from "../../constants";
import API from "./api";

const API_KEY_AIRIGHT =
  "esyYxzf5w9cUUsXnvLfnESc5rZ43JG6aTys24RdVctx2cYQUC2ZdXGUdkr9KBvX1";
const AIRIGHT_ENDPOINT =
  "https://staging-api-aioracle.airight.io/api-key/report/";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export async function getReportInfo(file: File) {
  const formData = new FormData();
  formData.append("image", file);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      "api-key": API_KEY_AIRIGHT,
      "Access-Control-Allow-Origin": "*",
    },
  };
  try {
    const response = await axios.post(
      CORS_PROXY + AIRIGHT_ENDPOINT,
      formData,
      config
    );
    console.log("RP Info: ", response);
  } catch (error) {
    console.log("RP Info got Error: ");
    console.log(error);
  }
  return 0;
}

export async function getReportInfos(files: any[]) {
  for (let i = 0; i < files.length; i++) {
    const rpInfo = await getReportInfo(files[i]);
    console.log(rpInfo);
  }
  return 0;
}
