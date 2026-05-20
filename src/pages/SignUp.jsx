import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

const inputClass = "auth-input";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username.trim() || !form.email.trim() || !form.password) {
      setError("请填写所有必填项");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("两次输入的密码不一致");
      return;
    }
    if (form.password.length < 6) {
      setError("密码至少需要 6 位");
      return;
    }
    // 暂无后端，仅做前端演示
    navigate("/login", { state: { registered: true, email: form.email } });
  };

  return (
    <AuthLayout title="Sign Up">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="username"
          value={form.username}
          onChange={handleChange}
          className={inputClass}
          autoComplete="username"
        />
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
          autoComplete="new-password"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
          className={inputClass}
          autoComplete="new-password"
        />

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        <button type="submit" className="auth-primary-btn w-full mt-2">
          REGISTER
        </button>
      </form>

      <p className="text-center mt-8">
        <Link to="/login" className="auth-link">
          Back to Login
        </Link>
      </p>
    </AuthLayout>
  );
}
