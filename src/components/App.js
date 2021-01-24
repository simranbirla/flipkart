import React, { useState } from "react";
import data from "../data.json";
import Products from "./Products";
import Filters from "./Filters";

const App = () => {
  const [list, setList] = useState(data);

  return (
    <div className="app">
      <Filters setList={setList} list={list} />
      <Products list={list} />
    </div>
  );
};

export default App;
