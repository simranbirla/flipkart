import React, { useState } from "react";
import data from "../data.json";
import Products from "./Products";
import Filters from "./Filters";
import Header from "./Header";
import "../Style/index.css";
const App = () => {
  const [list, setList] = useState(data);

  return (
    <div className="app-main">
      <Header />
      <div className="app">
        <Filters setList={setList} list={list} />
        <Products list={list} />
      </div>
    </div>
  );
};

export default App;
