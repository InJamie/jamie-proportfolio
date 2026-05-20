import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoutesPage from "./pages/Routes";
import Pomodoro from "./pages/Pomodoro";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SiteLayout from "./layouts/SiteLayout";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
