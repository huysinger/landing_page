import Header from "../../components/headers/Header";
import { menuHeader } from "../../components/headers/Header";
import { apiGetAllProduct } from "../../services/api/products";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import Products from "../../components/products/Products";

const ProductPage = (userInfo) => {
  const navigate = useNavigate();
  const [allProducts, setAllProduct] = useState(null);

  const getAllProduct = async () => {
    const data = await apiGetAllProduct();
    setAllProduct(data?.data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Sản phẩm</title>
      </Helmet>
      <ToastContainer limit={4} />
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <div className="py-[56px] px-[10%]">
        <button
          onClick={() => navigate("/product/add")}
          className="m-4 w-[60px] h-[40px] bg-[#d70018] text-white rounded"
        >
          Add
        </button>
        <Products />
      </div>
    </div>
  );
};
export default ProductPage;
