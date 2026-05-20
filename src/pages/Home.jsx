import pictureMyself from "../assets/WechatIMG5905.jpg";

function Section({ title, children }) {
  return (
    <section className="card section-card">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="space-y-5 pb-4">
      <section className="card hero-card">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <div className="flex-1 order-2 lg:order-1">
            <span className="tag mb-4">Portfolio · 2025</span>
            <h1 className="hero-title">Jamie&apos;s Website</h1>
            <p className="hero-subtitle mt-3">
              你好，我是 Jamie。热爱设计与开发，正在打造自己的数字作品集与效率小工具。
            </p>
          </div>
          <img
            src={pictureMyself}
            alt="Jamie"
            className="hero-image order-1 lg:order-2 mx-auto lg:mx-0"
          />
        </div>
      </section>

      <Section title="About Me">
        <p className="text-[var(--color-text-muted)] leading-relaxed">
          喜欢把想法变成可用的产品界面，关注用户体验与视觉一致性。
          业余时间会折腾番茄钟、日历等小工具，让日常更高效。
        </p>
      </Section>

      <Section title="Experience">
        <div className="space-y-6">
          <div>
            <p className="entry-title">全栈 / 前端开发（个人项目）</p>
            <p className="entry-meta">2024 — 至今</p>
            <ul className="list-clean">
              <li>使用 React + Vite 搭建个人作品集网站</li>
              <li>实现番茄钟、日程日历等交互功能</li>
              <li>统一站点视觉风格与设计系统</li>
            </ul>
          </div>
          <div>
            <p className="entry-title">设计 & 开发学习</p>
            <p className="entry-meta">持续进行中</p>
            <ul className="list-clean">
              <li>学习 UI/UX 设计与 Tailwind CSS</li>
              <li>探索组件化开发与路由架构</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Projects">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[var(--color-brand-light)] border border-[var(--color-brand-muted)]">
            <p className="font-bold text-[var(--color-text)] mb-1">🍅 番茄闹钟</p>
            <p className="text-sm text-[var(--color-text-muted)]">
              25 分钟专注 + 5 分钟休息，帮助保持工作节奏。
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--color-brand-light)] border border-[var(--color-brand-muted)]">
            <p className="font-bold text-[var(--color-text)] mb-1">📅 日程日历</p>
            <p className="text-sm text-[var(--color-text-muted)]">
              月视图管理事件，规划每日安排。
            </p>
          </div>
        </div>
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {["React", "JavaScript", "Tailwind CSS", "UI Design", "Git"].map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Contact">
        <p className="text-[var(--color-text-muted)] mb-4">
          欢迎交流合作，可以通过以下方式联系我：
        </p>
        <ul className="list-clean">
          <li>
            Email:{" "}
            <a
              href="mailto:jamie@example.com"
              className="text-[var(--color-brand-dark)] font-medium hover:underline"
            >
              jamie@example.com
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-brand-dark)] font-medium hover:underline"
            >
              github.com
            </a>
          </li>
        </ul>
      </Section>
    </div>
  );
}
