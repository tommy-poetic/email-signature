import React from "react";
import {createRoot} from "react-dom/client"; // eslint-disable-line n/file-extension-in-import
import App from "@components/App";
import "unfonts.css";
import "./reset.scss";

createRoot(document.querySelector("#root")!).render(<React.StrictMode><App/></React.StrictMode>);
