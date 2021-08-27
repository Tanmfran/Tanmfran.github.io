import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';
import {Dashboard} from "./app/Components/Dashboard/Dashboard";
import {LeftNav} from "./app/Components/LeftNav/LeftNav";
import {AppHeader} from "./app/Components/Shared/AppHeader";


export const App = () => {
  return (
      <div role={"main"}>
      <AppHeader></AppHeader>
        <Router>
            <div className={'routerPage'}>
                <LeftNav/>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </div>
        </Router>
      </div>
  );
}

export default App;
