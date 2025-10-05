import {
  HTTP_SERVER_HOST_URL_DEV,
  HTTP_SERVER_HOST_URL_PROD,
} from "../config/config";

// API HOST URLs
let HOST_URL;
if (window.location.origin.includes("twitter")) {
  HOST_URL = HTTP_SERVER_HOST_URL_PROD;
} else {
  HOST_URL = HTTP_SERVER_HOST_URL_DEV;
  // HOST_URL = HTTP_SERVER_HOST_URL_PROD;
}
export const API_HOST = HOST_URL;
