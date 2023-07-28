import "./Login.css";
const LoginForm = () => {
  return (
    <div>
      <form>
        <div className="login-container">
          <label for="uname">Tên tài khoản</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label for="psw">Mật khẩu</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button
            type="submit"
            className="login-btn"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
