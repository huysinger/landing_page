import { Signin } from "../../services/api/auth";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmitLogin = async (data) => {
    try {
      const user = await Signin(data);
      localStorage.setItem("userReact", JSON.stringify(user?.data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="login-container"
        onSubmit={handleSubmit(onSubmitLogin)}
      >
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
          {...register("password", { required: true, minLength: 5 })}
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
          Đăng nhập
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
