import { Signup } from "../../services/api/auth";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [post, setPost] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.event });
  };
  function handleSubmit(event) {
    event.preventDefault();
    axios.post("");
  }

  return (
    <div>
      <form
        className="login-container"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Tên tài khoản</label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          placeholder="Enter Name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true, minLength: 3 })}
          type="email"
          placeholder="Enter Email"
          name="email"
        />
        {errors.email && errors.email.type === "required" && (
          <p className="errorMsg">Email is required.</p>
        )}
        <label htmlFor="password">Mật khẩu</label>
        <input
          {...register("password", { required: true, minLength: 3 })}
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        {errors.password && errors.password.type === "required" && (
          <p className="errorMsg">Password is required.</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p className="errorMsg">Password should be at-least 5 characters.</p>
        )}
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
