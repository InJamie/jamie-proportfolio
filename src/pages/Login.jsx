import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const inputClass = "auth-input";

export default function Login() {
  const location = useLocation();
  const [form, setForm] = useState({
    email: location.state?.email ?? "",
    password: "",
  });
  const [message, setMessage] = useState(
    location.state?.registered ? "注册成功，请登录" : ""
  );

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password) {
      setMessage("请填写邮箱和密码");
      return;
    }
    // 暂无后端，仅做前端演示
    setMessage("登录功能待接入后端");
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="email address"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          autoComplete="email"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
          className={inputClass}
          autoComplete="current-password"
        />

        {message && (
          <p
            className={`text-sm text-center ${
              location.state?.registered ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <button type="submit" className="auth-primary-btn w-full mt-2">
          LOGIN
        </button>
      </form>

      <p className="text-center mt-8">
        <Link to="/signup" className="auth-link">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
}
