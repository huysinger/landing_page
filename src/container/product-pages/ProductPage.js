import { Link } from "react-router-dom";
import Header from "../../components/headers/Header";
import "./ProductPage.css";
import Products from "../../components/products/Products";
import { menuHeader } from "../../components/headers/Header";

const ProductPage = () => {
  return (
    <div>
      <Header menu={menuHeader} />
      <div className="product-page-body">
        <Products />
      </div>
    </div>
  );
};
export default ProductPage;
