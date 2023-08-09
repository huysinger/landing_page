import React, { useEffect, useState } from "react";
import "./Filter.css";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import { apiGetAllProduct } from "../../services/api/products";

const Filter = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProduct] = useState(null);
  const [cart, setCart] = useLocalStorageState("cart", {});
  const getAllProduct = async () => {
    const data = await apiGetAllProduct();
    setAllProduct(data?.data);
  };

  const addToCart = (product) => {
    product.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div>
      <div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allProducts?.map((product) => (
            <div
              key={product?.id}
              className="relative bg-gray-200 p-4 rounded hover:bg-gray-400"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 cursor-pointer">
                <img
                  onClick={() => navigate(`/product/${product?.id}`)}
                  src={product?.url}
                  alt={product?.url}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div
                onClick={() => navigate(`/product/${product?.id}`)}
                className="mt-4 h-[50px] flex justify-between cursor-pointer"
              >
                <div>
                  <h3 className="text-sm text-gray-700">{product?.name}</h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product?.price}
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  className="p-2 text-white bg-[#d70018] hover:bg-[#df3346] rounded"
                  onClick={() => addToCart(product)}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Filter;
