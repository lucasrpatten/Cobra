import React from "react";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import CreateProfile from "./Login/CreateProfile";
import Home from "./Home/Home";
import Playground from "./Playground/Playground";

const ReactDOM = require("react-dom/client");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-profile" element={<CreateProfile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
