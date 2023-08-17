import Cart from "../../components/cart/Cart";
import { Helmet } from "react-helmet";

const CartPage = () => {
  return (
    <div>
      <Helmet>
        <title>Giỏ Hàng</title>
      </Helmet>

      <Cart />
    </div>
  );
};
export default CartPage;
