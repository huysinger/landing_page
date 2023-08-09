import "./Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Signup } from "../../services/api/auth";

const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onHandleSubmit = (data) => {
    setData(data);
    console.log(data);
    Signup(data)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        className="login-container"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <label htmlFor="name">Tên tài khoản</label>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Enter Name"
        />
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Enter Email"
        />

        <label htmlFor="password">Mật khẩu</label>
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Enter Password"
        />

        <button
          type="submit"
          className="login-btn"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};
export default SignUpForm;
