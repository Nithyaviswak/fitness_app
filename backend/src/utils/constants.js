const DAY_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

function getTodayIndex() {
  const jsDay = new Date().getDay(); // 0 = Sunday
  return jsDay === 0 ? 6 : jsDay - 1; // shift so Monday = 0
}

module.exports = { DAY_NAMES, getTodayIndex };
