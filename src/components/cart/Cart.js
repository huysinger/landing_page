import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Quantifier } from "./Quantifier";
import "./Cart.css";
import { MoneyFormatter } from "../formatter/Formatter";

const Cart = () => {
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
  useEffect(() => {
    const storedData = localStorage.getItem("cart");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
    }
  }, []);
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

  const totalPrice = getProducts().reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <section className="cart-body">
      <h1>Giỏ hàng</h1>

      <div className="container-cart">
        {getProducts().map((product) => (
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
        ))}
      </div>
      <div className="text-xl flex flex-col items-end">
        <p className="font-medium my-4">
          Tổng thanh toán: {MoneyFormatter.format(totalPrice)}
        </p>
        <button className="font-medium px-4 py-2 bg-[#d70018] hover:bg-[#df3346] rounded text-white">
          Đặt hàng
        </button>
      </div>
    </section>
  );
};
export default Cart;
