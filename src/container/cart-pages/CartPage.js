import Header, { menuHeader } from "../../components/headers/Header";
import Cart from "../../components/cart/Cart";
import { Helmet } from "react-helmet";

const CartPage = (userInfo) => {
  return (
    <div>
      <Helmet>
        <title>Giỏ Hàng</title>
      </Helmet>
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <Cart />
    </div>
  );
};
export default CartPage;
