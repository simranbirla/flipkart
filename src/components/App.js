import React, { useState } from "react";
import data from "../data.json";
import Header from "./Header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import FrontPage from "./FrontPage";
import Cart from "./Cart";
import "../Style/index.css";

const App = () => {
  const [list, setList] = useState(data);

  return (
    <div className="app-main">
      <BrowserRouter>
        <Header />
        <Switch>
          <>
            <div className="app">
              <Route
                path="/"
                exact
                component={() => <FrontPage setList={setList} list={list} />}
              />
            </div>
            <Route path="/cart" exact component={Cart} />
          </>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
