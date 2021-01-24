import React from "react";
import data from "../data.json";

const Filters = (props) => {
  const onClickGender = (gender) => {
    const filtered = data.filter((item) => item.gender === gender);
    props.setList(filtered);
  };

  const onCLickSort = (order) => {
    let sorted;
    if (order === "A") {
      sorted = data.sort((a, b) => a.price - b.price);
    } else {
      sorted = data.sort((a, b) => b.price - a.price);
    }
    props.setList([...sorted]);
  };

  const onClickWear = (category) => {
    const filtered = data.filter((item) => item.wear === category);
    props.setList(filtered);
  };

  const onChangeSize = (e) => {
    if (e.target.value === "All") {
      props.setList(data);
    } else {
      const filtered = data.filter((item) => item.size === e.target.value);
      props.setList(filtered);
    }
  };

  return (
    <div>
      <button onClick={() => onClickGender("M")}>Gender Men</button>
      <button onClick={() => onClickGender("F")}>Gender Women</button>
      <button onClick={() => onClickGender("U")}>Unisex</button>
      <button onClick={() => props.setList(data)}>All</button>
      <button onClick={() => onCLickSort("A")}>Lowest to highset</button>
      <button onClick={() => onCLickSort("D")}>Highset</button>
      <button onClick={() => onClickWear("Top")}>Top</button>
      <button onClick={() => onClickWear("Pant")}>Bottoms</button>

      <select onChange={(e) => onChangeSize(e)}>
        <option value="All">Select</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">Extra Large</option>
      </select>
    </div>
  );
};

export default Filters;
