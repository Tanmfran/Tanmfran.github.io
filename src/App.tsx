import "./App.scss";
import { HashRouter } from "react-router-dom";

import Header from "./app/Components/Header/Header";
import LeftNav from "./app/Components/LeftNav/LeftNav";
import AppRoutes from "./AppRoutes";

export const App = () => {
  return (
    <div className={"app"}>
      <HashRouter>
        <Header />
        <div className={"content"}>
          <LeftNav />
          <AppRoutes />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
