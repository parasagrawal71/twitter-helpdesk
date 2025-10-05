// API HOST URLs
let HOST_URL;
if (window.location.origin.includes("twitter")) {
  HOST_URL = "https://twitter-helpdesk-server.onrender.com";
} else {
  HOST_URL = "http://localhost:6001";
  // HOST_URL = "https://twitter-helpdesk-server.onrender.com";
}
export const API_HOST = HOST_URL;
