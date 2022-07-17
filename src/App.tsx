import "./App.scss";
import { HashRouter } from "react-router-dom";

import LeftNav from "./app/Components/LeftNav/LeftNav";
import AppRoutes from "./AppRoutes";

export const App = () => {
  return (
    <div className={"app"}>
      <HashRouter>
        <div className={"content"}>
          <LeftNav />
          <AppRoutes />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
