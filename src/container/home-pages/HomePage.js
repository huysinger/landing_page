import Header from "../../components/headers/Header";
import { Link } from "react-router-dom";
import Products from "../../components/products/Products";
import "./HomePage.css";
import { menuHeader } from "../../components/headers/Header";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header menu={menuHeader} />
      <div className="page-body">
        <Link to={"/product"}>
          <img
            src={"https://cellphones.com.vn/media/wysiwyg/1200x400.jpg"}
            alt="banner"
            className="banner"
          />
        </Link>
        <div className="info">
          <h1 className="info-name">CellphoneS</h1>
          <p className="info-description">
            Chúng tôi là công ty hoạt động trong lĩnh vực bán lẻ các sản phẩm
            công nghệ, cùng với dịch vụ sửa chữa điện thoại, máy tính và lĩnh
            vực truyền thông giải trí. Vào 10/2022, CellphoneS có 105 cửa hàng
            tại 25 tỉnh thành, Điện Thoại Vui có 24 trung tâm tại 4 tình thành
            phố, Điện Thoại Vui ASP trung tâm bảo hành uỷ quyền Apple có 6 trung
            tâm tại 4 tỉnh thành, SChannel NetWork - hệ thống kênh giải trí cho
            giới trẻ hơn 10 triệu người theo dõi và 250 triệu lượt xem mỗi
            tháng.
          </p>
        </div>
        <h1 className="best-seller">Sản phẩm</h1>
        <Products />
      </div>
    </div>
  );
};
export default HomePage;
