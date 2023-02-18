// API HOST URLs
let HOST_URL;
if (window.location.origin.includes("twitter")) {
  HOST_URL = "https://twitter-helpdesk-server.up.railway.app";
} else {
  HOST_URL = "http://localhost:6001";
  // HOST_URL = "https://twitter-helpdesk-server.up.railway.app";
}
export const API_HOST = HOST_URL;
