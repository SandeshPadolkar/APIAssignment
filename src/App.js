//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, HashRouter, Switch, Route} from "react-router-dom";
import Page1 from './Component/Page1';

function App() {
  return (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Page1}/>
      </Switch>
    </HashRouter>
  </Router>
  );
}

export default App;
