import React, { useState, useRef } from "react";

const FOCUS_TIME = 25 * 60; // 25分钟
const BREAK_TIME = 5 * 60;  // 5分钟

export default function Pomodoro() {
  const [secondsLeft, setSecondsLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isFocus, setIsFocus] = useState(true);
  const timerRef = useRef(null);

  // 格式化时间
  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  // 开始/暂停
  const handleStartPause = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev > 0) return prev - 1;
          clearInterval(timerRef.current);
          // 时间到，切换状态
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

  // 重置
  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setSecondsLeft(isFocus ? FOCUS_TIME : BREAK_TIME);
  };

  // 切换时清理定时器
  React.useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3 shadow-2-8 max-w-md w-full mx-4">
        {/* 标题和图标 */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🍅</div>
          <h1 className="text-3 font-bold text-gray-800">番茄闹钟</h1>
          <p className="text-gray-600">作，高效生活</p>
        </div>

        {/* 倒计时显示 */}
        <div className="text-center mb-8">
          <div className="text-7 font-mono font-bold text-gray-800 mb-4">{formatTime(secondsLeft)}</div>
          
          {/* 状态标签 */}
          <div className="inline-block">
            <span className={`px-6 py-3 rounded-full text-lg font-semibold ${
                isFocus 
                ? 'bg-red-100 text-red-700 border-red-200'
                : 'bg-green-100 text-green-700 border-green-200'
            }`}>
              {isFocus ? "🍅 专注中" : "☕ 休息中"}
            </span>
          </div>
        </div>

        {/* 控制按钮 */}
        <div className="flex gap-4 justify-center">
          <button 
            onClick={handleStartPause}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                isRunning
                ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
          >
            {isRunning ? "⏸️ 暂停" : "▶️ 开始"}
          </button>
          
          <button 
            onClick={handleReset}
            className="px-8 py-4 rounded-xl font-semibold text-lg bg-gray-500 hover:bg-gray-600 text-white transition-all duration-200"
          >
            🔄 重置
          </button>
        </div>

        {/* 说明文字 */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>专注时间：25分钟 | 休息时间：5分钟</p>
          <p className="mt-2">时间到后会自动切换模式</p>
        </div>
      </div>
    </div>
  );
} 