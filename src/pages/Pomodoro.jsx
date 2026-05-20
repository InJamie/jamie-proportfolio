import { useState, useRef, useEffect } from "react";
import PageHeader from "../components/PageHeader";

const FOCUS_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

export default function Pomodoro() {
  const [secondsLeft, setSecondsLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocus, setIsFocus] = useState(true);
  const timerRef = useRef(null);

  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleStartPause = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev > 0) return prev - 1;
          clearInterval(timerRef.current);
          setIsFocus((f) => {
            const nextIsFocus = !f;
            setSecondsLeft(nextIsFocus ? FOCUS_TIME : BREAK_TIME);
            setIsRunning(false);
            return nextIsFocus;
          });
          return 0;
        });
      }, 1000);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setSecondsLeft(isFocus ? FOCUS_TIME : BREAK_TIME);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  return (
    <div className="pb-4">
      <PageHeader
        title="番茄闹钟"
        subtitle="专注工作，高效生活 · 25 分钟专注 / 5 分钟休息"
      />

      <div className="card section-card max-w-lg mx-auto text-center">
        <div className="text-5xl mb-4">🍅</div>

        <div className="text-6xl sm:text-7xl font-mono font-bold text-[var(--color-text)] mb-6 tracking-tight">
          {formatTime(secondsLeft)}
        </div>

        <span
          className={`inline-block px-5 py-2 rounded-full text-sm font-semibold mb-8 ${
            isFocus
              ? "bg-[var(--color-brand-light)] text-[var(--color-brand-dark)]"
              : "bg-emerald-50 text-emerald-700"
          }`}
        >
          {isFocus ? "专注中" : "休息中"}
        </span>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            type="button"
            onClick={handleStartPause}
            className={`btn ${isRunning ? "btn-secondary" : "btn-primary"}`}
          >
            {isRunning ? "暂停" : "开始"}
          </button>
          <button type="button" onClick={handleReset} className="btn btn-ghost">
            重置
          </button>
        </div>

        <p className="mt-8 text-sm text-[var(--color-text-muted)]">
          时间结束后会自动切换专注 / 休息模式
        </p>
      </div>
    </div>
  );
}
