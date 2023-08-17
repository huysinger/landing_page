import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CartWidget from "./CartWidget";
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
    title: "Phân Loại",
    url: "/category",
  },
  {
    title: "Tin Tức",
    url: "/post",
  },
  {
    title: "About Us",
    url: "/about",
  },
];

const Header = ({ menu, userInfo }) => {
  const navigate = useNavigate();
  const userString = localStorage.getItem("userReact");

  return (
    <div className="header">
      <ul
        className="nav-menu"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ul
          className="main-nav"
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
        {userInfo !== undefined && (
          <ul className="nav-auth">
            <li className="auth-nav">
              <CartWidget />
            </li>
            <li className="auth-nav">
              {userString && (
                <Link to={`/info/${JSON.parse(userString).user.id}`}>
                  {JSON.parse(userString).user.name}
                </Link>
              )}
            </li>
            <li className="auth-nav">
              <button
                onClick={() => {
                  localStorage.removeItem("userReact");
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Header;
