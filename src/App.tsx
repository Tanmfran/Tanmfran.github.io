import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.scss";
import { LeftNav } from "./app/Components/LeftNav/LeftNav";
import { Header } from "./app/Components/Header/Header";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <div role={"main"} className={"App"}>
      <Router>
        <Header />
        <div className={"pageContent"}>
          <LeftNav />
          <Routes />
        </div>
      </Router>
    </div>
  );
};

export default App;
