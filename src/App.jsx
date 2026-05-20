import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RoutesPage from "./pages/Routes";
import HeaderPage from "./pages/HeaderPage";
import './index.css';
import Gitee from "./assets/gitee-svg.svg";
import Github from "./assets/github-svg.svg";
import Wechat from "./assets/wechat-svg.svg"
import Pomodoro from "./pages/Pomodoro";
import Calendar from "./pages/Calendar";


export default function App() {
  return (
    <BrowserRouter>
      {/* <div className="min-h-screen flex flex-col"> */}
      <div className="w-3/4 max-w-1600px mx-auto px-4">
        {/* <HeaderPage/> */}
        <HeaderPage/>
        {/* 中间内容区域 */}
        <main className="flex-1 bg-base-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/calendar" element={<Calendar />} />
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