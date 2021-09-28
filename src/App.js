import "./styles.css";
import Login from "./Login.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import Cart from "./Cart";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}
