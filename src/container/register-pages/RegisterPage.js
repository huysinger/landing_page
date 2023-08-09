import SignUpForm from "../../components/register/Register";
import Header from "../../components/headers/Header";
import "./RegisterPage.css";
import { Helmet } from "react-helmet";

const RegisterPage = () => {
  const menuHeader = [
    {
      title: "Trang Chủ",
      url: "/",
    },
    {
      title: "Đăng Nhập",
      url: "/login",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Đăng Ký</title>
      </Helmet>
      <Header menu={menuHeader} />
      <div className="login-body">
        <SignUpForm />
      </div>
    </div>
  );
};
export default RegisterPage;
