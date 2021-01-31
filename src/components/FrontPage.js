import React from "react";
import Products from "./Products";
import Filters from "./Filters";

const FrontPage = ({ setList, list }) => {
  return (
    <>
      <Filters setList={setList} list={list} />
      <Products setList={setList} list={list} />
    </>
  );
};

export default FrontPage;
