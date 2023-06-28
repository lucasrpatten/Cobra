import React from "react";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import CreateProfile from "./Login/CreateProfile";
import Home from "./Home/Home";
import PyGym from "./PyGym/PyGym";
import Lesson from "./Lessons/Lesson";

const ReactDOM = require("react-dom/client");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(

    <HashRouter>
      <div className="bg-dark-gray">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pygym/:challengeID" element={<PyGym />} />
          <Route path="/lessons/:lessonModule/:lesson" element={<Lesson />} />
      </Routes>
      </div>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
