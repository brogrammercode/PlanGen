import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Button from "../Button/Button";

type CalendarEvent = {
  id: string | number;
  date: string; // ISO string like "2025-10-10"
  title: string;
};

interface CalendarProps {
  events: CalendarEvent[];
}

const Calendar = ({ events }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");

  const startDate = startOfMonth.startOf("week");
  const endDate = endOfMonth.endOf("week");

  const days: Dayjs[] = [];
  let day = startDate.clone();
  while (day.isBefore(endDate, "day") || day.isSame(endDate, "day")) {
    days.push(day);
    day = day.add(1, "day");
  }

  return (
    <div className="h-[124vh] w-full p-4 rounded-xl border border-gray-200 bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          className="border border-gray-200 mt-2"
          onClick={() => setCurrentDate(currentDate.subtract(1, "month"))}
        >
          {() => <span>Previous</span>}
        </Button>
        <h2 className="text-lg font-semibold">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <Button
          className="border border-gray-200 mt-2"
          onClick={() => setCurrentDate(currentDate.add(1, "month"))}
        >
          {() => <span>Next</span>}
        </Button>
      </div>

      {/* Weekdays */}
      <div className="mt-5 grid grid-cols-7 text-center font-medium text-gray-600 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7">
        {days.map((day, index) => {
          const isCurrentMonth = day.month() === currentDate.month();
          const isToday = day.isSame(dayjs(), "day");

          // Filter events that belong to this day
          const dayEvents = events.filter((ev) =>
            day.isSame(dayjs(ev.date), "day")
          );

          return (
            <div
              key={day.toString()}
              className={`cursor-pointer h-45 border-l ${
                index % 7 === 6 ? "border-r" : ""
              } border-t border-gray-200 p-2 flex flex-col items-start justify-start text-sm ${
                isCurrentMonth ? "bg-white" : "bg-gray-100 text-gray-400"
              } ${isToday ? "border-blue-500 bg-blue-50" : ""}`}
            >
              {/* Day number */}
              <div
                className={
                  isToday
                    ? "rounded-full px-2 py-1 border border-gray-200 bg-blue-500"
                    : ""
                }
              >
                <span
                  className={`text-xs font-medium ${
                    isToday ? "text-white" : ""
                  }`}
                >
                  {day.date()}
                </span>
              </div>

              {/* Events */}
              <div className="flex flex-col gap-1.5 mt-3 w-full">
                {dayEvents.map((ev, i) => (
                  <div
                    key={i}
                    className="py-1 px-2 text-xs rounded-md bg-blue-100 text-blue-700 truncate w-full"
                  >
                    {ev.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
