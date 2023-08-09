import LoginForm from "../../components/login/Login";
import Header from "../../components/headers/Header";
import "./LoginPage.css";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  const menuHeader = [
    {
      title: "Trang Chủ",
      url: "/",
    },
    {
      title: "Đăng Ký",
      url: "/register",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Đăng Nhập</title>
      </Helmet>
      <Header menu={menuHeader} />
      <div className="login-body">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
