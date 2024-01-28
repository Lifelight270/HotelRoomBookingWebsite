import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Auth0Provider
  //   domain="dev-47mrtxuexph4aklb.us.auth0.com"
  //   clientId="QTW7Q8qQhZbC2PnZOMsN4ACHCoIQUNqB"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
    <App />
  // {/* </Auth0Provider> */}
);
