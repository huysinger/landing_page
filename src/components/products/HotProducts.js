import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import { apiGetAllProduct } from "../../services/api/products";
import { MoneyFormatter } from "../formatter/Formatter";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HotProducts = () => {
  const [hotProduct, setHotProduct] = useState([]);
  const [cart, setCart] = useLocalStorageState("cart", {});
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
      toastId: 1,
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    apiGetAllProduct()
      .then((response) => {
        setHotProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  const sortedProduct = hotProduct.sort((a, b) => b.likes - a.likes);
  const largestLikeProduct = sortedProduct.slice(0, 5);
  return (
    <div>
      <div>
        <div>
          <Carousel
            responsive={responsive}
            draggable={false}
            autoPlay={true}
            autoPlaySpeed={3500}
            infinite={true}
          >
            {largestLikeProduct?.map((product) => (
              <div
                key={product?.id}
                className=" m-3 border border-[#ccc] border-solid p-4 rounded-lg hover:bg-[#ccc]"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 cursor-pointer">
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
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default HotProducts;
