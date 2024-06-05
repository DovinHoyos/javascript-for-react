import React from "react";
import ReactDom from "react-dom/client";
import {InvoiceApp} from "./components/InvoiceApp"

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvoiceApp/>
  </React.StrictMode>
)
