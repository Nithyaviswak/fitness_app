"use client";

import { useEffect, useState } from "react";

function formatDateTime(date) {
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const fullDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  return { day, fullDate, time };
}

export default function DateTimeDisplay() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const { day, fullDate, time } = formatDateTime(now);

  return (
    <div className="text-right text-xs text-slate-600">
      <div className="font-semibold text-slate-700">{day}</div>
      <div>{fullDate}</div>
      <div>{time}</div>
    </div>
  );
}
