import Header from "../../components/headers/Header";
import "./AboutPage.css";
import { menuHeader } from "../../components/headers/Header";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer/Footer";

const AboutPage = (userInfo) => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Header
        menu={menuHeader}
        userInfo={userInfo}
      />
      <div className="about-body">
        <img
          src="https://media.loveitopcdn.com/3807/dong-phuc-cellphones-01.jpg"
          alt="staff"
          className="staff-img"
        />
        <div className="about-name">
          <h1>About Us</h1>
        </div>
        <div className="about-description">
          <p style={{ textAlign: "center" }}>
            CellphoneS - Điện thoại, laptop, tablet, phụ kiện chính hãng!
          </p>{" "}
          CellphoneS là một công ty chuyên cung cấp các sản phẩm và dịch vụ liên
          quan đến điện thoại di động. CellphoneS được thành lập vào năm 2010
          bởi ông Nguyễn Văn A, một doanh nhân có kinh nghiệm lâu năm trong lĩnh
          vực công nghệ. CellphoneS hiện có hơn 100 cửa hàng trên khắp cả nước,
          cung cấp các sản phẩm chính hãng từ các thương hiệu nổi tiếng như
          Samsung, Apple, Huawei, Oppo, Vivo, Xiaomi và nhiều hãng khác.
          CellphoneS cũng có dịch vụ bảo hành, sửa chữa, thay thế linh kiện và
          tư vấn miễn phí cho khách hàng. CellphoneS luôn đặt chất lượng sản
          phẩm và sự hài lòng của khách hàng lên hàng đầu. CellphoneS mong muốn
          trở thành đối tác tin cậy của mọi người trong việc sử dụng và trải
          nghiệm điện thoại di động.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
