import LoginForm from "../../components/login/Login";
import Header from "../../components/headers/Header";
import "./LoginPage.css";

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
      <Header menu={menuHeader} />
      <div className="login-body">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
