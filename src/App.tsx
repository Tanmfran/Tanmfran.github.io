import "./App.scss";
import { Route, Routes, HashRouter } from "react-router-dom";

import Dashboard from "./app/Components/Dashboard/Dashboard";
import { Header } from "./app/Components/Header/Header";
import LeftNav from "./app/Components/LeftNav/LeftNav";
import LokiZone from "./app/Components/LokiZone/LokiZone";

export const App = () => {
  return (
    <div className={"App"}>
      <HashRouter>
        <div>
          {/*Side Menu*/}
          <LeftNav />
          {/*Main Content*/}
          <div id={"main"}>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/loki-zone" element={<LokiZone />} />
              <Route element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
