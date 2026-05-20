import { Outlet } from "react-router-dom";
import HeaderPage from "../pages/HeaderPage";
import Gitee from "../assets/gitee-svg.svg";
import Github from "../assets/github-svg.svg";
import Wechat from "../assets/wechat-svg.svg";

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <div className="site-container pb-8">
        <HeaderPage />
        <main>
          <Outlet />
        </main>

        <footer className="site-footer">
          <h2>Follow me</h2>
          <div className="flex justify-center gap-4 mb-6">
            <img src={Gitee} alt="Gitee" className="social-icon" />
            <img src={Github} alt="Github" className="social-icon" />
            <img src={Wechat} alt="Wechat" className="social-icon" />
          </div>
          <p>© {new Date().getFullYear()} Jamie · 个人作品集</p>
        </footer>
      </div>
    </div>
  );
}
