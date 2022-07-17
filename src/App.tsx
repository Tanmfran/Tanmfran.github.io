import "./App.scss";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import Header from "./app/components/header/Header";
import LeftNav from "./app/components/leftNav/LeftNav";
import AppRoutes from "./AppRoutes";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <div className={"app"}>
        <HashRouter>
          <Header />
          <div className={"content"}>
            <LeftNav />
            <AppRoutes />
          </div>
        </HashRouter>
      </div>
    </Provider>
  );
};

export default App;
