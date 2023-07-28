import React from "react";
import "./Products.css";
import Filter from "./Filter";
import { useState } from "react";

export const product_list = [
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra 256GB",
    price: "25.000.000",
    category: "Samsung",
    url: "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/2/s23-ultra-xanh.png",
    description:
      "iPhone 6S Plus là chiếc smartphone được thiết kế bởi Apple Inc và được giới thiệu vào 9 tháng 9 năm 2015 tại Bill Graham Civic Auditorium ở San Francisco bởi Giám đốc điều hành Tim Cook. ",
  },
  {
    id: 2,
    name: "Iphone 6",
    price: "1.000.000",
    category: "Iphone",
    url: "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2020/07/iphone-6s-plus-ra-mat-nam-nao-1.jpg",
    description:
      "iPhone 6S Plus là chiếc smartphone được thiết kế bởi Apple Inc và được giới thiệu vào 9 tháng 9 năm 2015 tại Bill Graham Civic Auditorium ở San Francisco bởi Giám đốc điều hành Tim Cook. ",
  },
  {
    id: 3,
    name: "Iphone 7",
    price: "2.000.000",
    category: "Iphone",
    url: "https://iphonebinhphuoc.vn/wp-content/uploads/2021/01/IPHONE-7-SILVER.jpg",
    description:
      "iPhone 7 chính là cái tên đang gây sốt nhất trên sân chơi công nghệ toàn cầu thời gian gần đây. Và còn thú vị hơn nữa khi mà mặc dù chỉ mới ra mắt được hơn 2 tuần nhưng hiện tại bạn đã có thể sở hữu ngay chiếc bom tấn này tại các showroom của Di Động Thông Minh với mức giá tốt nhất trên cả nước thời điểm hiện tại. Dưới đây là bài viết tổng quan về chiếc iPhone 7 đang cực kì hot này.",
  },
  {
    id: 4,
    name: "Samsung Galaxy S23 Ultra 256GB",
    price: "25.000.000",
    category: "Samsung",
    url: "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/2/s23-ultra-xanh.png",
    description:
      "iPhone 6S Plus là chiếc smartphone được thiết kế bởi Apple Inc và được giới thiệu vào 9 tháng 9 năm 2015 tại Bill Graham Civic Auditorium ở San Francisco bởi Giám đốc điều hành Tim Cook. ",
  },
  {
    id: 5,
    name: "Iphone X",
    price: "9.999.900",
    category: "Iphone",
    url: "https://www-konga-com-res.cloudinary.com/w_800,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/L/Y/140063_1535866407.jpg",
    description:
      "The iPhone X display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).",
  },
  {
    id: 6,
    name: "Iphone 6",
    price: "1.000.000",
    category: "Iphone",
    url: "https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2020/07/iphone-6s-plus-ra-mat-nam-nao-1.jpg",
    description:
      "iPhone 6S Plus là chiếc smartphone được thiết kế bởi Apple Inc và được giới thiệu vào 9 tháng 9 năm 2015 tại Bill Graham Civic Auditorium ở San Francisco bởi Giám đốc điều hành Tim Cook. ",
  },
  {
    id: 7,
    name: "Samsung Galaxy S23 Ultra 256GB",
    price: "25.000.000",
    category: "Samsung",
    url: "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/2/s23-ultra-xanh.png",
    description:
      "iPhone 6S Plus là chiếc smartphone được thiết kế bởi Apple Inc và được giới thiệu vào 9 tháng 9 năm 2015 tại Bill Graham Civic Auditorium ở San Francisco bởi Giám đốc điều hành Tim Cook. ",
  },
  {
    id: 8,
    name: "Iphone X",
    price: "9.999.900",
    category: "Iphone",
    url: "https://www-konga-com-res.cloudinary.com/w_800,f_auto,fl_lossy,dpr_1.0,q_auto/media/catalog/product/L/Y/140063_1535866407.jpg",
    description:
      "The iPhone X display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).",
  },
  {
    id: 9,
    name: "Iphone 7",
    price: "2.000.000",
    category: "Iphone",
    url: "https://iphonebinhphuoc.vn/wp-content/uploads/2021/01/IPHONE-7-SILVER.jpg",
    description:
      "iPhone 7 chính là cái tên đang gây sốt nhất trên sân chơi công nghệ toàn cầu thời gian gần đây. Và còn thú vị hơn nữa khi mà mặc dù chỉ mới ra mắt được hơn 2 tuần nhưng hiện tại bạn đã có thể sở hữu ngay chiếc bom tấn này tại các showroom của Di Động Thông Minh với mức giá tốt nhất trên cả nước thời điểm hiện tại. Dưới đây là bài viết tổng quan về chiếc iPhone 7 đang cực kì hot này.",
  },
];

const Products = () => {
  return (
    <section className="products">
      <Filter />
    </section>
  );
};
export default Products;
