import Header from "../../components/headers/Header";
import { menuHeader } from "../../components/headers/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import LatestPosts from "../../components/latest-posts/LatestPosts";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotProducts from "../../components/products/HotProducts";
import BestSeller from "../../components/products/BestSeller";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(undefined);
  const getUser = () => {
    const user = localStorage.getItem("userReact");
    if (user) {
      const userJson = JSON.parse(user);
      setUserInfo(userJson);
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="home-page">
      <ToastContainer limit={4} />
      <Helmet>
        <title>CellphoneS</title>
      </Helmet>
      <Header
        userInfo={userInfo}
        menu={menuHeader}
      />
      <div className="py-[56px] px-[10%]">
        <Carousel
          responsive={responsive}
          draggable={false}
          autoPlay={true}
          autoPlaySpeed={3500}
          infinite={true}
        >
          <img
            src={"https://cellphones.com.vn/media/wysiwyg/1200x400.jpg"}
            alt="banner"
            className="pt-[4px] m-auto w-[100%] h-[420px] cursor-pointer"
            onClick={() => navigate("/product")}
          />
          <img
            src={
              "https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/78FD7174-0C85-4E5D-A07D-4BD660CAF818.png"
            }
            alt="banner"
            className="pt-[4px] m-auto w-[100%] h-[420px] cursor-pointer"
            onClick={() => navigate("/product/18")}
          />
        </Carousel>
        <div className="info">
          <h1 className="text-[32px] font-medium flex justify-center py-[20px] text-[#d70018]">
            CellphoneS
          </h1>
          <p className="text-[20px] flex text-center">
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
        <LatestPosts />
        <h1 className="text-[32px] font-medium flex py-[48px] px-[32px] justify-left text-[#d70018]">
          Sản phẩm hot🔥
        </h1>
        <HotProducts />
        <h1 className="text-[32px] font-medium flex py-[48px] px-[32px] justify-left text-[#d70018]">
          Bán chạy nhất
        </h1>
        <BestSeller />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
