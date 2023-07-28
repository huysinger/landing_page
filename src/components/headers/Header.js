import React from "react";
import { Link } from "react-router-dom";

export const menuHeader = [
  {
    title: "Trang Chủ",
    url: "/",
  },
  {
    title: "Sản Phẩm",
    url: "/product",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Đăng Nhập",
    url: "/login",
  },
  {
    title: "Đăng Ký",
    url: "/register",
  },
];

const Header = ({ menu }) => {
  return (
    <div className="header">
      <ul
        className="nav"
        style={{ display: "flex" }}
      >
        <div className="logo-header">
          <img
            src={
              "https://cdn2.cellphones.com.vn/200x/media/favicon/default/logo-cps.png"
            }
            alt="Logo"
          />
        </div>
        {menu?.map((menu, index) => {
          return (
            <li
              className="header-nav"
              key={index}
            >
              <Link to={menu?.url}>{menu?.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
