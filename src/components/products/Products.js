import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import { apiGetAllProduct } from "../../services/api/products";
import { MoneyFormatter } from "../formatter/Formatter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "../pagination/Pagination";

let PageSize = 8;

const Products = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useLocalStorageState("cart", {});
  const getAllProduct = async () => {
    const data = await apiGetAllProduct();
    setAllProduct(data?.data);
  };

  const addToCart = (product) => {
    if (cart && cart[product?.id]) {
      setCart((prevCart) => ({
        ...prevCart,
        [product.id]: { ...product, quantity: cart[product.id].quantity + 1 },
      }));
    } else {
      product.quantity = 1;

      setCart((prevCart) => ({
        ...prevCart,
        [product.id]: product,
      }));
    }
    toast.success(`Đã thêm ${product.name} vào giỏ hàng!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: "black-background",
    });
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  const currentPageData = useMemo(() => {
    if (!allProducts) {
      return [];
    }
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allProducts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allProducts]);
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="mt-6 mb-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentPageData?.map((product) => (
            <div
              key={product?.id}
              className="relative border border-[#ccc] border-solid p-4 rounded hover:bg-[#ccc]"
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
                  {MoneyFormatter.format(product?.price)}
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
        <Pagination
          currentPage={currentPage}
          totalCount={allProducts ? allProducts.length : 0}
          pageSize={PageSize}
          onPageChange={(page) => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            return setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
};
export default Products;
