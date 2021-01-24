import React, { useState } from "react";
import data from "../data.json";
import Products from "./Products";
import Filters from "./Filters";

const App = () => {
  const [list, setList] = useState(data);

  return (
    <div>
      <Products list={list} />
      <Filters setList={setList} list={list} />
    </div>
  );
};

export default App;
