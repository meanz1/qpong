import "./App.css";
import MainPage from "./main";
import CodePage from "./code";
import InfoPage from "./info";
import MorePage from "./more";
import { Switch, Route, Link, useHistory } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <MainPage />
      </Route>
      <Route exact={true} path="/code">
        <CodePage />
      </Route>
      <Route exact={true} path="/info">
        <InfoPage />
      </Route>
    </Switch>
  );
}

export default App;
