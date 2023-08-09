import Header, { menuHeader } from "../../components/headers/Header";
import Cart from "../../components/cart/Cart";

const CartPage = (userInfo) => {
  return (
    <div>
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <Cart />
    </div>
  );
};
export default CartPage;
