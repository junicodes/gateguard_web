import axios from "axios";
import { Storage } from "./storageUtility";
import { apiOrigin, version } from "./api-routes/v1.js";
import { LOG_USER_OUT } from "../react-wrapper/Redux/types";
import { FindUrlPath } from "./FindUrlPath";

export default async function apiRequest(
  { url, method, body },
  dispatch,
  tokenPermit = true
) {
  let user, token;

  console.log(tokenPermit);

  if (tokenPermit) {
    user = Storage.getItem("sifuse-user");
    token = user ? user.token : null;
  }

  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    // 'Access-Control-Allow-Origin': '*',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await axios.request({
      url,
      method,
      baseURL: `${apiOrigin}${version}`,
      data: body,
      headers,
      responseType: "json",
      validateStatus: function (status_1) {
        return status_1 >= 200 && status_1 <= 501; // default
      },
    });
      
    const alertify = await import("alertifyjs");
    alertify.set("notifier", "position", "top-center");


    switch (response.status) {
      case 500:
        alertify.error("An unexpected error has occured, please refresh, check internet connection and try again or contact support.");
        break;
      case 501:
        alertify.error("Ooops something not right, please refresh and try angain or contact support.");
        break;
      case 401:
        dispatch({
          type: LOG_USER_OUT,
        });
        break;
      case 422:
        response.data.errors ? Object.entries(response.data.errors).forEach(([key, value]) => alertify.error(`${key}: ${value}`)) : alertify.error(response.data.message);
        break;
      case 400:
           alertify.error(response.data.message);
        break;
      default:
        return response;
    }

  } catch (error) {
    const alertify = await import("alertifyjs");
    alertify.set("notifier", "position", "top-center");
    alertify.error(
      "An unexpected error has occured, please refresh, check internet connection and try again or contact support."
    );
  }
}
