import React from "react";
import data from "../data.json";

const Filters = (props) => {
  const onCLickSort = (order) => {
    let sorted;
    if (order === "A") {
      sorted = data.sort((a, b) => a.price - b.price);
    } else {
      sorted = data.sort((a, b) => b.price - a.price);
    }
    props.setList([...sorted]);
  };

  const onChangeSize = (e) => {
    if (e.target.value === "All") {
      props.setList(data);
    } else {
      const filtered = data.filter((item) => item.size === e.target.value);
      props.setList(filtered);
    }
  };

  const onClickFilter = (param, type) => {
    const filtered = data.filter((item) => item[param] === type);
    props.setList(filtered);
  };

  return (
    <div>
      <button onClick={() => onClickFilter("gender", "M")}>Gender Men</button>
      <button onClick={() => onClickFilter("gender", "F")}>Gender Women</button>
      <button onClick={() => onClickFilter("gender", "U")}>Unisex</button>
      <button onClick={() => props.setList(data)}>All</button>
      <button onClick={() => onCLickSort("A")}>Lowest to highset</button>
      <button onClick={() => onCLickSort("D")}>Highset</button>
      <button onClick={() => onClickFilter("wear", "Top")}>Top</button>
      <button onClick={() => onClickFilter("wear", "Pant")}>Bottoms</button>

      <select onChange={(e) => onChangeSize(e)}>
        <option value="All">Select</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">Extra Large</option>
      </select>
      <p>
        <button onClick={() => onClickFilter("brand", "Roadster")}>
          Roadster
        </button>
        <button onClick={() => onClickFilter("brand", "HRX")}>HRX</button>
        <button onClick={() => onClickFilter("brand", "Woodland")}>
          Woodland
        </button>
        <button onClick={() => onClickFilter("brand", "Cotton")}>Cotton</button>
      </p>
    </div>
  );
};

export default Filters;
