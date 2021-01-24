import React from "react";

const Filters = (props) => {
  return (
    <div>
      <button onClick={() => props.setDis("See this works")}>CLICK ME</button>
    </div>
  );
};

export default Filters;
