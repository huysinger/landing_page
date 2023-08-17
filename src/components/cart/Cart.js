import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Quantifier } from "./Quantifier";
import "./Cart.css";
import { MoneyFormatter } from "../formatter/Formatter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiEditProduct } from "../../services/api/products";
import Header, { menuHeader } from "../../components/headers/Header";

const Cart = (userInfo) => {
  const navigate = useNavigate();
  const [cart, setCart] = useLocalStorageState("cart", {});
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const handleRemoveProduct = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };
  const storedData = localStorage.getItem("cart");
  const parsedData = JSON.parse(storedData);
  const handleUpdateQuantity = (productId, state) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (state == "increase") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity - 1,
          };
        }
      }
      return updatedCart;
    });
  };
  const getProducts = () => Object.values(cart || {});

  const handleOrder = async (data) => {
    for (const itemId in data) {
      const item = data[itemId];
      const itemIdNumber = parseInt(itemId);
      const orderValue = item.quantity;
      await apiEditProduct({
        ...item,
        id: itemIdNumber,
        order: item.order + parseInt(orderValue),
      });
    }

    if (storedData && Object.values(cart || {}).length != 0) {
      localStorage.removeItem("cart");
      toast.success(`Đặt hàng thành công!`, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      toast.clearWaitingQueue();
      navigate("/cart");
    } else {
      toast.error(`Giỏ hàng trống!`, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      toast.clearWaitingQueue();
    }
  };
  const handleRemoveAll = () => {
    localStorage.removeItem("cart");
    navigate("/cart");
  };
  useEffect(() => {
    getProducts();
  }, []);
  const totalPrice = getProducts().reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <div>
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <section className="py-[56px] px-[10%]">
        <ToastContainer limit={1} />
        <h1 className="text-[24px] p-[1%] font-medium">Giỏ hàng</h1>

        <div className="flex flex-col">
          {storedData && Object.values(cart || {}).length != 0 ? (
            getProducts().map((product) => (
              <div
                key={product.id}
                className="product-cart"
              >
                <img
                  src={product.url}
                  alt={product.name}
                />
                <h3
                  className="cursor-pointer"
                  onClick={() => navigate(`/product/${product?.id}`)}
                >
                  {product.name}
                </h3>
                <Quantifier
                  productId={product?.id}
                  removeProductCallback={() => handleRemoveProduct(product.id)}
                  handleUpdateQuantity={handleUpdateQuantity}
                />
                <p>{MoneyFormatter.format(product.price * product.quantity)}</p>
              </div>
            ))
          ) : (
            <div className="product-cart">
              <p className="m-auto p-8 text-gray-400 text-xl ">
                Giỏ hàng trống...
              </p>
            </div>
          )}
        </div>
        <div className="text-xl flex flex-col items-end">
          <p className="font-medium my-4">
            Tổng thanh toán: {MoneyFormatter.format(totalPrice)}
          </p>
          <div className="flex flex-row">
            <button
              onClick={() => handleRemoveAll()}
              className="font-medium mx-8 px-4 py-2 border border-solid border-[#d70018] hover:bg-[#df3346] hover:text-white rounded text-black"
            >
              Xóa tất cả
            </button>
            <button
              onClick={() => handleOrder(parsedData)}
              className="font-medium px-4 py-2 bg-[#d70018] hover:bg-[#df3346] rounded text-white"
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cart;
