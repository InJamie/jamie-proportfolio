import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
  });

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

  const calendarDays = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    calendarDays.push(date);
  }

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
      setNewEvent({ title: "", date: "", time: "", description: "" });
      setShowAddEvent(false);
    }
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const getEventsForDate = (date) => {
    return events.filter(
      (event) => event.date === date.toISOString().split("T")[0]
    );
  };

  const monthNames = [
    "一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月",
  ];

  const dayNames = ["日", "一", "二", "三", "四", "五", "六"];

  return (
    <div className="pb-4">
      <PageHeader
        title="日程日历"
        subtitle="管理你的时间，规划你的生活"
        action={
          <button
            type="button"
            onClick={() => setShowAddEvent(true)}
            className="btn btn-primary shrink-0"
          >
            添加事件
          </button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 card section-card">
          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
                )
              }
              className="btn btn-ghost !px-3 !py-2"
            >
              ←
            </button>
            <h2 className="text-xl font-bold text-[var(--color-text)]">
              {currentDate.getFullYear()}年 {monthNames[currentDate.getMonth()]}
            </h2>
            <button
              type="button"
              onClick={() =>
                setCurrentDate(
                  new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
                )
              }
              className="btn btn-ghost !px-3 !py-2"
            >
              →
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center py-2 text-sm font-semibold text-[var(--color-text-muted)]"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((date, index) => {
              const isCurrentMonth = date.getMonth() === currentDate.getMonth();
              const isToday =
                date.toDateString() === new Date().toDateString();
              const dayEvents = getEventsForDate(date);

              return (
                <div
                  key={index}
                  className={`min-h-[72px] p-1.5 rounded-lg border transition-colors ${
                    isCurrentMonth
                      ? "bg-white border-[var(--color-border)]"
                      : "bg-[var(--color-bg)] border-transparent opacity-60"
                  } ${isToday ? "ring-2 ring-[var(--color-brand)] border-transparent" : ""}`}
                >
                  <div
                    className={`text-sm font-semibold mb-1 ${
                      isToday
                        ? "text-[var(--color-brand-dark)]"
                        : isCurrentMonth
                          ? "text-[var(--color-text)]"
                          : "text-[var(--color-text-muted)]"
                    }`}
                  >
                    {date.getDate()}
                  </div>
                  {dayEvents.slice(0, 2).map((event) => (
                    <div
                      key={event.id}
                      className="text-xs bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] px-1 py-0.5 rounded mb-0.5 truncate"
                      title={event.title}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-[var(--color-text-muted)]">
                      +{dayEvents.length - 2}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="card section-card">
          <h3 className="section-title !mb-4">事件列表</h3>
          {events.length === 0 ? (
            <p className="text-[var(--color-text-muted)] text-center py-10 text-sm">
              暂无事件，点击「添加事件」开始规划
            </p>
          ) : (
            <div className="space-y-3 max-h-[480px] overflow-y-auto">
              {events
                .sort(
                  (a, b) =>
                    new Date(a.date + " " + a.time) -
                    new Date(b.date + " " + b.time)
                )
                .map((event) => (
                  <div
                    key={event.id}
                    className="p-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="min-w-0">
                        <h4 className="font-semibold text-[var(--color-text)] truncate">
                          {event.title}
                        </h4>
                        <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                          {event.date}
                          {event.time && ` · ${event.time}`}
                        </p>
                        {event.description && (
                          <p className="text-sm text-[var(--color-text-muted)] mt-1 line-clamp-2">
                            {event.description}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteEvent(event.id)}
                        className="btn btn-ghost !p-2 text-red-500 shrink-0"
                        aria-label="删除"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {showAddEvent && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="card section-card w-full max-w-md">
            <h3 className="text-xl font-bold mb-5">添加新事件</h3>
            <div className="space-y-4">
              <div>
                <label className="input-label">事件标题</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  className="input !rounded-xl"
                  placeholder="输入事件标题"
                />
              </div>
              <div>
                <label className="input-label">日期</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, date: e.target.value })
                  }
                  className="input !rounded-xl"
                />
              </div>
              <div>
                <label className="input-label">时间</label>
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, time: e.target.value })
                  }
                  className="input !rounded-xl"
                />
              </div>
              <div>
                <label className="input-label">描述</label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                  className="input !rounded-xl min-h-[88px] resize-y"
                  rows={3}
                  placeholder="可选"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowAddEvent(false)}
                className="btn btn-ghost flex-1"
              >
                取消
              </button>
              <button
                type="button"
                onClick={handleAddEvent}
                className="btn btn-primary flex-1"
              >
                添加
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
