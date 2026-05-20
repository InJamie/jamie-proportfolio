import React, { useState } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    description: ""
  });

  // 获取当前月份的第一天和最后一天
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());

  // 生成日历网格
  const calendarDays = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    calendarDays.push(date);
  }

  // 添加事件
  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
      setNewEvent({ title: "", date: "", time: "", description: "" });
      setShowAddEvent(false);
    }
  };

  // 删除事件
  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  // 获取指定日期的事件
  const getEventsForDate = (date) => {
    return events.filter(event => event.date === date.toISOString().split('T')[0]);
  };

  // 月份名称
  const monthNames = [
    "一月", "二月", "三月", "四月", "五月", "六月",
    "七月", "八月", "九月", "十月", "十一月", "十二月"
  ];

  // 星期名称
  const dayNames = ["日", "一", "二", "三", "四", "五", "六"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* 标题栏 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">日程日历</h1>
              <p className="text-gray-600 mt-1">管理你的时间，规划你的生活</p>
            </div>
            <button
              onClick={() => setShowAddEvent(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-200">
              ➕ 添加事件
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 日历视图 */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            {/* 月份导航 */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                ◀️
              </button>
              <h2 className="text-2xl font-bold text-gray-800">
                {currentDate.getFullYear()}年 {monthNames[currentDate.getMonth()]}
              </h2>
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                ▶️
              </button>
            </div>

            {/* 星期标题 */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map(day => (
                <div key={day} className="text-center py-2 font-semibold text-gray-600">
                  {day}
                </div>
              ))}
            </div>

            {/* 日历网格 */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, index) => {
                const isCurrentMonth = date.getMonth() === currentDate.getMonth();
                const isToday = date.toDateString() === new Date().toDateString();
                const dayEvents = getEventsForDate(date);
                
                return (
                  <div
                    key={index}
                    className={`min-h-[80px] p-2 border border-gray-200 ${
                      isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                    } ${isToday ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <div className={`text-sm font-semibold ${
                      isCurrentMonth ? 'text-gray-800' : 'text-gray-400'
                    } ${isToday ? 'text-blue-600' : ''}`}>
                      {date.getDate()}
                    </div>
                    {dayEvents.length > 0 && (
                      <div className="mt-1">
                        {dayEvents.slice(0, 2).map(event => (
                          <div
                            key={event.id}
                            className="text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded mb-1 truncate"
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-gray-500">
                            +{dayEvents.length - 2} 更多
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 事件列表 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📋 事件列表</h3>
            {events.length === 0 ? (
              <p className="text-gray-500 text-center py-8">暂无事件，点击"添加事件"开始规划</p>
            ) : (
              <div className="space-y-3">
                {events
                  .sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time))
                  .map(event => (
                    <div key={event.id} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{event.title}</h4>
                          <p className="text-sm text-gray-600">
                            📅 {event.date} {event.time && `⏰ ${event.time}`}
                          </p>
                          {event.description && (
                            <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                          )}
                        </div>
                        <button
                          onClick={() => handleDeleteEvent(event.id)}
                          className="text-red-500 hover:text-red-700 ml-2">
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* 添加事件模态框 */}
        {showAddEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4">添加新事件</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">事件标题</label>
                  <input
                    type="text"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="输入事件标题"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">日期</label>
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">时间</label>
                  <input
                    type="time"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">描述</label>
                  <textarea
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="3"
                    placeholder="输入事件描述"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowAddEvent(false)}
                  className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  取消
                </button>
                <button
                  onClick={handleAddEvent}
                  className="flex-1 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  添加
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 