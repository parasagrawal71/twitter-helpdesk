// API HOST URLs
let HOST_URL;
if (window.location.origin === "https://twitter--helpdesk.herokuapp.com") {
  HOST_URL = "https://twitter-helpdesk--server.herokuapp.com";
} else {
  HOST_URL = "http://localhost:5000";
  // HOST_URL = "https://twitter-helpdesk--server.herokuapp.com";
}
export const API_HOST = HOST_URL;
