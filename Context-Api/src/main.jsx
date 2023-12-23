import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NoteContext } from "./contextApi/NoteContext.jsx";

ReactDOM.render(
  <React.StrictMode>
    <NoteContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NoteContext>
  </React.StrictMode>,
  document.getElementById("root")
);
