import React, { useState } from "react";
import data from "../data.json";
import Header from "./Header";
import FrontPage from "./FrontPage";
import "../Style/index.css";

const App = () => {
  const [list, setList] = useState(data);

  return (
    <div className="app-main">
      <Header />
      <div className="app">
        <FrontPage setList={setList} list={list} />
      </div>
    </div>
  );
};

export default App;
