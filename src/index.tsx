import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// const rootElem = document.getElementById("root");

// if (rootElem) {

    const root = ReactDOM.createRoot(document.getElementById("root" )  as HTMLElement) ;

    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
// }
