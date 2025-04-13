import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import AppLayout from "./component/AppLayout/AppLayout";
import { Postprovider } from "./context/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Postprovider>
    <AppLayout />
  </Postprovider>
);
