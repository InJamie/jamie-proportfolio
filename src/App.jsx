import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RoutesPage from "./pages/Routes";
import './index.css';
import Gitee from "./assets/gitee-svg.svg";
import Github from "./assets/github-svg.svg";
import Wechat from "./assets/wechat-svg.svg"

export default function App() {
  return (
    <BrowserRouter>
      {/* <div className="min-h-screen flex flex-col"> */}
      <div className="w-full max-w-screen-lg mx-auto px-4">
        {/* 固定 Header */}
        <header className="bg-red-200 p-4 flex justify-between">
          <a href="/">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  fill="currentColor"
  className="w-12 h-12 text-blue-600 bg-base-200 rounded-xl text-xl"
>
  <text x="30" y="70" fontSize="60" fontFamily="Arial" fontWeight="bold">J</text>
</svg>
          </a>
          <nav className="space-x-4">
            <Link to="/" className="btn btn-sm btn-ghost">首页</Link>
            <Link to="/routes" className="btn btn-sm btn-ghost">路线</Link>
          </nav>
        </header>

        {/* 中间内容区域 */}
        <main className="flex-1 bg-base-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<RoutesPage />} />
          </Routes>
        </main>

        {/* 固定 Footer */}
        <footer className="p-4 text-center mb-10">
            {/* fllow me */}
            <div className="pt-30 flex flex-col justify-center items-center mb-10 sm:mb-28 border-t-2 border-base-200">
                <p className="text-3xl">Follow me</p>
                {/* 联系方式图标+跳转 */}
                <div className="flex flex-row gap-4 mt-5">
                    <img src={Gitee} alt="Gitee" className="w-10 h-10" />
                    <img src={Github} alt="Github" className="w-10 h-10" />
                    <img src={Wechat} alt="Wechat" className="w-10 h-10" />

                </div>
            </div>
            {/* copyright */}
            © Jamie的巴拉巴拉公司</footer>
      </div>
    </BrowserRouter>
  );
}