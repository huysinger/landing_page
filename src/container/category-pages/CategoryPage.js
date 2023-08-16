import Header, { menuHeader } from "../../components/headers/Header";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiGetAllProduct } from "../../services/api/products";
import { Helmet } from "react-helmet";
import { MoneyFormatter } from "../../components/formatter/Formatter";

const CategoryPage = (userInfo) => {
  const navigate = useNavigate();
  const [allProducts, setAllProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState();

  const getAllProduct = async () => {
    const data = await apiGetAllProduct();
    setAllProduct(data?.data);
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  const setOfCategory = [
    ...new Set(allProducts?.map((product) => product.category)),
  ];
  function getFilteredList() {
    if (!selectedCategory) {
      return allProducts;
    }
    return allProducts?.filter(
      (product) => product.category === selectedCategory
    );
  }
  const filteredList = useMemo(getFilteredList, [
    selectedCategory,
    allProducts,
  ]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div>
      <Helmet>
        <title>Phân loại</title>
      </Helmet>
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <div className="py-[56px] px-[10%]">
        <div>
          <div className="d m-4 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
            <button
              onClick={handleCategoryChange}
              className="ct-btn group relative bg-gray-200 p-4 rounded hover:bg-gray-400 focus:bg-gray-400 hover:cursor-pointer"
            >
              All
            </button>
            {setOfCategory?.map((val, index) => (
              <button
                key={index}
                onClick={handleCategoryChange}
                className="group relative bg-gray-200 p-4 rounded hover:bg-gray-400 focus:bg-gray-400 hover:cursor-pointer"
                value={val}
              >
                {val}
              </button>
            ))}
            <button className="hidden group w-[56px] h-[56px] relative bg-gray-200 p-4 rounded hover:bg-gray-400 hover:cursor-pointer">
              <img
                src="https://simpleicon.com/wp-content/uploads/pencil.png"
                alt=""
                width={28}
                height={28}
              />
            </button>
          </div>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredList?.map((product, index) => (
              <div
                key={index}
                className="group relative bg-gray-200 p-4 rounded hover:bg-gray-400 hover:cursor-pointer"
              >
                <div
                  onClick={() => navigate(`/product/${product?.id}`)}
                  className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                >
                  <img
                    src={product?.url}
                    alt={product?.url}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div
                  onClick={() => navigate(`/product/${product?.id}`)}
                  className="mt-4 h-[50px] flex justify-between"
                >
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product?.href}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        />
                        {product?.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product?.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {MoneyFormatter.format(product?.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
