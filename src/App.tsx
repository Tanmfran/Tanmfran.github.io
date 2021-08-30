import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.scss";
import { LeftNav } from "./app/Components/LeftNav/LeftNav";
import { Header } from "./app/Components/Header/Header";
import { Routes } from "./Routes";
import { Canvas } from "./app/Components/Shared/Canvas";

export const App = () => {
  return (
    <div role={"main"} className={"App"}>
      <Canvas />
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
