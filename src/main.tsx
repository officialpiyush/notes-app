import { NhostProvider } from "@nhost/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import nhost from "./utils/nhost";

import "virtual:windi.css";
import { NhostUrqlProvider } from "./providers/urlq";

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NhostProvider nhost={nhost}>
        <NhostUrqlProvider nhost={nhost}>
          <App />
        </NhostUrqlProvider>
      </NhostProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
