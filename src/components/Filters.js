import React, { useState } from "react";
import data from "../data.json";
import "../Style/Filters.css";

const Filters = (props) => {
  const [filters, setFilters] = useState({});

  const onCLickSort = (order) => {
    let sorted;
    if (order === "A") {
      sorted = props.list.sort((a, b) => a.price - b.price);
    } else {
      sorted = props.list.sort((a, b) => b.price - a.price);
    }
    props.setList([...sorted]);
  };

  const onChangeSize = (e) => {
    if (e.target.value === "All") {
      props.setList(data);
    } else {
      const filtered = props.list.filter(
        (item) => item.size === e.target.value
      );
      props.setList(filtered);
    }
  };

  const onClickFilter = (param, type) => {
    setFilters({ ...filters, [param]: type });
    const filtered = data.filter((item) => item[param] === type);
    props.setList(filtered);
  };

  const clearAll = () => {
    setFilters({});
    props.setList(data);
  };

  return (
    <div className="filters">
      <div className="applied-filters">
        <p>{filters.gender}</p> <p>{filters.brand}</p> <p>{filters.wear}</p>
      </div>
      <h3>
        Clear all filters
        <button onClick={() => clearAll()}>Clear</button>
      </h3>
      <div className="filters_sort">
        <button onClick={() => onCLickSort("A")}>
          <i className="fas fa-sort-numeric-down"></i>
          {"  "}Lowest to highest
        </button>
        <button onClick={() => onCLickSort("D")}>
          {" "}
          <i className="fas fa-sort-numeric-up-alt"></i>
          {"  "}Highest to Lowest
        </button>
      </div>

      <div className="filters_gender">
        <h4>Gender</h4>
        <div className="filters_gender-main">
          <button onClick={() => onClickFilter("gender", "M")}>Men</button>
          <button onClick={() => onClickFilter("gender", "F")}>Women</button>
          <button onClick={() => onClickFilter("gender", "U")}>Unisex</button>
        </div>
      </div>

      <div className="filters_size">
        <h4>Size:</h4>
        <select onChange={(e) => onChangeSize(e)}>
          <option value="All">Select</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra Large</option>
        </select>
      </div>

      <div className="filters_wear">
        <h4>Category:</h4>
        <div className="filters_wear-main">
          <button onClick={() => onClickFilter("wear", "Top")}>Top</button>
          <button onClick={() => onClickFilter("wear", "Pant")}>Bottoms</button>
        </div>
      </div>

      <div className="filters_brand">
        <h4>Brands:</h4>
        <div className="filters_brand-main">
          <button onClick={() => onClickFilter("brand", "Roadster")}>
            Roadster
          </button>
          <button onClick={() => onClickFilter("brand", "HRX")}>HRX</button>
          <button onClick={() => onClickFilter("brand", "Woodland")}>
            Woodland
          </button>
          <button onClick={() => onClickFilter("brand", "Cotton")}>
            Cotton
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
