import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
  const [byCount, setByCount] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const products = useSelector((state) => state.products.products);

  function sortByCount(a, b) {
    return a.count - b.count;
  }

  function sortByAlphabet(a, b) {
    return a.name.localeCompare(b.name);
  }

  return (
    <div>
      <div onClick={() => setShowDropdown(!showDropdown)} className="select">
        Sort by
      </div>
      {showDropdown && (
        <div className="select-content">
          <button onClick={() => setByCount(true)}>By count</button>
          <button onClick={() => setByCount(false)}>By Alphabet</button>
        </div>
      )}
      <div className="products">
        {[...products]
          .sort(byCount ? sortByCount : sortByAlphabet)
          .map((el) => (
            <div key={el.id}>
              <ProductItem el={el} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
