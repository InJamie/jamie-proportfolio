import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function RoutesPage() {
  const projects = [
    { title: "番茄闹钟", desc: "专注计时工具", to: "/pomodoro", emoji: "🍅" },
    { title: "日程日历", desc: "事件规划与管理", to: "/calendar", emoji: "📅" },
    { title: "个人首页", desc: "作品集与简介", to: "/", emoji: "🏠" },
  ];

  return (
    <div className="pb-4">
      <PageHeader title="项目" subtitle="站点内的功能与页面一览" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="card section-card hover:shadow-lg transition-shadow group"
          >
            <span className="text-3xl mb-3 block">{item.emoji}</span>
            <h3 className="font-bold text-[var(--color-text)] group-hover:text-[var(--color-brand-dark)]">
              {item.title}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
