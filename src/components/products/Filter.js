import React from "react";
import { product_list } from "./Products";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Filter.css";

const Filter = () => {
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    setProductList(product_list);
  }, []);
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return productList;
    }
    return productList.filter((item) => item.category === selectedCategory);
  }
  var filteredList = useMemo(getFilteredList, [selectedCategory, productList]);
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const obj2 = [...new Set(product_list.map((obj) => obj.category))];
  return (
    <div>
      <select
        name="category-list"
        id="category-list"
        className="filter"
        onChange={handleCategoryChange}
      >
        <option
          value=""
          className="filter-option"
        >
          Tất cả
        </option>
        {obj2.map((ele) => {
          return (
            <option
              value={ele}
              className="filter-option"
            >
              {ele}
            </option>
          );
        })}
        ;
      </select>
      <div className="products_flex">
        {filteredList.map((obj, index) => {
          return (
            <div
              className="product font-sans"
              key={index}
            >
              <div className="img-wrap">
                <Link to={`/product/${obj.id}`}>
                  <img
                    src={obj.url}
                    alt="product img"
                  />
                </Link>
              </div>
              <div className="product-info p-6">
                <Link
                  to={`/product/${obj.id}`}
                  className="product-name text-lg font-semibold text-slate-900"
                >
                  {obj.name}
                </Link>
                <div className="price text-lg font-semibold text-slate-500">
                  {obj.price}
                </div>
                <div class="flex space-x-4 mb-6 text-sm font-medium">
                  <div class="buy-add-btn flex space-x-4">
                    <button
                      class="buy-btn h-10 px-6 font-semibold rounded-md text-white"
                      type="submit"
                    >
                      Mua ngay
                    </button>
                    <button
                      class="add-cart-btn h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                      type="button"
                    >
                      Thêm giỏ hàng
                    </button>
                  </div>
                  <button
                    class="flex-none items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                    type="button"
                    aria-label="Like"
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Filter;
