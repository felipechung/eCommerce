import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/Shop/ShopPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
