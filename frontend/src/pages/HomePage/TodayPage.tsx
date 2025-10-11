import { Check } from "lucide-react";
import Button from "../../components/ui/Button/Button";
import HoverToggleIcon from "../../components/ui/Button/HoverToggleIcon";
import Calendar from "../../components/ui/Calendar/Calendar";

const TodayPage = () => {
  return (
    <div className="flex px-5 py-4 mt-[55px]">
      <div className="flex flex-col justify-start items-start flex-1">
        {/* Progress bar Box */}
        <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 flex flex-col items-start justify-start w-[350px]">
          <div className="bg-white rounded-full p-2 border border-gray-200">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1356/1356479.png"
              alt=""
              className="h-5"
            />
          </div>
          <span className="font-semibold mt-6 mb-2.5">Your progress now</span>
          <div className="flex flex-wrap gap-2">
            <div className="h-2 w-14 rounded-xl bg-blue-400" />
            <div className="h-2 w-14 rounded-xl bg-blue-400" />
            <div className="h-2 w-14 rounded-xl bg-gray-300" />
            <div className="h-2 w-14 rounded-xl bg-gray-300" />
            <div className="h-2 w-14 rounded-xl bg-gray-300" />
          </div>
          <div className="w-full flex justify-between items-center mt-3">
            <span className="text-[12px]">8 / 12 Task Complete</span>
            <span className="text-[12px]">68%</span>
          </div>
        </div>
        {/* Heading */}
        <h1 className="mt-5 mb-2">Today's Tasks</h1>
        {/* Task Box */}
        {Array.from({ length: 5 }).map((_) => (
          <div className="p-4 mt-3 rounded-xl border border-gray-200 bg-gray-50 flex flex-col items-start justify-start w-[350px] cursor-pointer">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white rounded-full p-2 border border-gray-200">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/8589/8589433.png"
                    alt=""
                    className="h-5"
                  />
                </div>
                <span className="ml-3">Running</span>
              </div>
              <span className="text-[12px]">9:00 AM - 10:00 PM</span>
            </div>
            <p className="my-3 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              ab.
            </p>
            <Button className="border border-gray-200 mt-2">
              {(isHovered) => (
                <>
                  <HoverToggleIcon
                    defaultIcon={Check}
                    hoverIcon={Check}
                    isHovered={isHovered}
                  />
                  <span>Completed</span>
                </>
              )}
            </Button>
          </div>
        ))}
      </div>
      {/* right part */}
      <div className="flex-4 ml-5">
        <Calendar
          events={[
            { id: 1, date: "2025-10-10", title: "Meeting with team" },
            { id: 2, date: "2025-10-12", title: "Doctor appointment" },
            { id: 3, date: "2025-10-12", title: "Birthday Party 🎉" },
            { id: 4, date: "2025-10-15", title: "Project deadline" },
          ]}
        />
      </div>
    </div>
  );
};

export default TodayPage;
