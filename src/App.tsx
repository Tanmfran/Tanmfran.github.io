import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.scss";
import { LeftNav } from "./app/Components/LeftNav/LeftNav";
import { AppHeader } from "./app/Components/Shared/AppHeader";
import { Routes } from "./Routes";

export const App = () => {
  return (
    <div role={"main"} className={"App"}>
      <Router>
        <AppHeader />
        <LeftNav />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
