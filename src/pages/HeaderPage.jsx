import { Link, NavLink } from "react-router-dom";

const navClass = ({ isActive }) =>
  `nav-link${isActive ? " nav-link-active" : ""}`;

export default function HeaderPage() {
  return (
    <header className="site-header flex flex-wrap items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-2.5 shrink-0">
        <span className="logo-mark">J</span>
        <span className="text-xl font-bold text-[var(--color-text)]">Jamie</span>
      </Link>

      <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 order-3 sm:order-none w-full sm:w-auto">
        <NavLink to="/" end className={navClass}>
          首页
        </NavLink>
        <NavLink to="/routes" className={navClass}>
          项目
        </NavLink>
        <NavLink to="/pomodoro" className={navClass}>
          番茄钟
        </NavLink>
        <NavLink to="/calendar" className={navClass}>
          日历
        </NavLink>
      </nav>

      <div className="flex items-center gap-2 shrink-0">
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/signup" className="btn btn-primary text-sm !py-2 !px-4">
          Sign Up
        </Link>
      </div>
    </header>
  );
}
