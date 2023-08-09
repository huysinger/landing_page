import { product_list } from "../../components/products/Products";
import Header from "../../components/headers/Header";
import { useLocation } from "react-router-dom";
import "./ProductDetail.css";
import { menuHeader } from "../../components/headers/Header";

const ProductDetail = () => {
  const url = useLocation();
  const product_id = url.pathname.slice(-1);
  return (
    <div>
      <Header menu={menuHeader} />
      <div className="product-dt-body">
        {product_list.map((obj) => {
          if (obj.id == product_id)
            return (
              <div>
                <img
                  src={obj.url}
                  alt="product img"
                  className="detail-img"
                />
                <h1>{obj.name}</h1>
                <p>{obj.price}</p>
                <p>{obj.description}</p>
              </div>
            );
        })}
      </div>
    </div>
  );
};
export default ProductDetail;
