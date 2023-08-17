import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  const cartData = localStorage.getItem("cart");
  const parsedData = JSON.parse(cartData);
  var totalQuantity = 0;
  if (parsedData) {
    Object.values(parsedData).forEach(
      (val) => (totalQuantity = totalQuantity + val.quantity)
    );
  }
  return (
    <Link
      to={`/cart`}
      className="flex"
    >
      <AiOutlineShoppingCart style={{ fontSize: "24px" }} />
      {totalQuantity}
    </Link>
  );
};
export default CartWidget;
