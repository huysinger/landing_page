import Header, { menuHeader } from "../../components/headers/Header";
import "./ProductDetail.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  apiReadDetailProduct,
  apiRemoveProduct,
  apiEditProduct,
} from "../../services/api/products";
import { Helmet } from "react-helmet";
import { AiOutlineHeart } from "react-icons/ai";
import useLocalStorageState from "use-local-storage-state";
import { MoneyFormatter } from "../../components/formatter/Formatter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = (userInfo) => {
  const { id } = useParams();
  const HandleLike = async (data) => {
    await apiEditProduct({ ...data, likes: data.likes + 1 });
    readDetailProduct();
  };
  const navigate = useNavigate();
  const [detailProduct, setDetailProduct] = useState(null);
  const [cart, setCart] = useLocalStorageState("cart", {});
  const addToCart = (detailProduct) => {
    detailProduct.quantity = 1;

    setCart((prevCart) => ({
      ...prevCart,
      [detailProduct.id]: detailProduct,
    }));
    toast.success(`Đã thêm ${detailProduct.name} vào giỏ hàng!`, {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: "black-background",
    });
    toast.clearWaitingQueue();
  };

  const readDetailProduct = async () => {
    try {
      if (id) {
        const data = await apiReadDetailProduct(id);
        setDetailProduct(data?.data);
      }
    } catch (error) {
      navigate("/product");
    }
  };

  const onHandleDeleteProduct = async (id) => {
    try {
      await apiRemoveProduct(id);
      navigate("/product");
    } catch (error) {
      console.log("Error");
    }
  };
  useEffect(() => {
    readDetailProduct();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{detailProduct?.name}</title>
      </Helmet>
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <ToastContainer limit={1} />
      <div className="p-4">
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={detailProduct?.url}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {detailProduct?.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {detailProduct?.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-[#d70018]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-[#d70018]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-[#d70018]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-[#d70018]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-[#d70018]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-gray-600 ml-3">0 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed">{detailProduct?.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-black-300 rounded-full w-6 h-6 focus:outline-none" />
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Phiên bản</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                        <option>64GB</option>
                        <option>128GB</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <AiOutlineHeart
                      className="text-3xl cursor-pointer"
                      onClick={() => HandleLike(detailProduct)}
                    />
                    <span>{detailProduct?.likes} likes</span>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {MoneyFormatter.format(detailProduct?.price)}
                  </span>
                  <button
                    onClick={() =>
                      navigate(`/product/edit/${detailProduct?.id}`)
                    }
                    className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => onHandleDeleteProduct(detailProduct?.id)}
                    className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Delete
                  </button>
                  <button
                    className="text-sm flex ml-auto text-white bg-[#d70018] border-0 py-2 px-6 focus:outline-none hover:bg-[#df3346] rounded"
                    onClick={() => addToCart(detailProduct)}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ProductDetail;
