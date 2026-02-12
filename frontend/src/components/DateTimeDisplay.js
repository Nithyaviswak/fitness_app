"use client";
import { useState, useEffect } from 'react';

export default function DateTimeDisplay() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // 1. Mark component as mounted so it renders on client only
    setMounted(true);

    // 2. Start the timer to update time every minute
    const timer = setInterval(() => {
      setNow(new Date());
    }, 60 * 1000);

    return () => clearInterval(timer);
  }, []);

  // 3. Helper function to format the date (kept inside the component)
  const formatDateTime = (date) => {
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const fullDate = date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
    const time = date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    return { day, fullDate, time };
  };

  // 4. If not mounted yet (server-side), return nothing to prevent error #418/#423
  if (!mounted) {
    return null; 
  }

  const { day, fullDate, time } = formatDateTime(now);

  return (
    <div className="text-right text-xs text-slate-600">
      <div className="font-semibold text-slate-700">{day}</div>
      <div>{fullDate}</div>
      <div>{time}</div>
    </div>
  );
}