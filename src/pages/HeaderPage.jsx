// import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"; // ✅ 别忘了这一行！

import Routes from "./Routes";
import Home from "./Home"; // 注意路径

export default function HeaderPage() {
    return (
        <>
<header className="py-6 flex justify-between flex-row ">
  <div className="basis-1/3 flex flex-row">
  <a href="/" className="flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="w-12 h-12 text-blue-600 bg-base-200 rounded-xl text-xl"
          >
            <text x="30" y="70" fontSize="60" fontFamily="Arial" fontWeight="bold">J</text>
          </svg>
          <p className="flex items-center text-2xl pl-2 font-bold">Jamie</p>
  </a>
          
  </div>
         
          <nav className="space-x-6 basis-1/3 text-xl flex items-center">
            <Link to="/routes" className="text-xl">Project</Link>
            <Link to="/routes" className="text-xl">About Me</Link>
            <Link to="/routes" className="text-xl">Contact</Link>
            <Link to="/pomodoro" className="text-xl">番茄闹钟</Link>
            <Link to="/calendar" className="text-xl">日程日历</Link>
          </nav>
          <div className="basis-1/3 flex justify-end" >
          {/* todo:待完成 */}
          <button >Hire Me</button>
          
          <button >logo</button>

          </div>
        </header>
                </>
    );
}