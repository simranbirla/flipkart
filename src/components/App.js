import React, { useState } from "react";
import Products from "./Products";
import Filters from "./Filters";

const App = () => {
  const [dis, setDis] = useState("Display");
  return (
    <div>
      <Products dis={dis} />
      <Filters setDis={setDis} />
    </div>
  );
};

export default App;
