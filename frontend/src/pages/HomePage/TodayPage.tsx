import { Check } from "lucide-react";
import Button from "../../components/ui/Button/Button";
import HoverToggleIcon from "../../components/ui/Button/HoverToggleIcon";
import Calendar from "../../components/ui/Calendar/Calendar";
import { useEffect, useState } from "react";
import type { Task } from "./TemplatePage";
import { axiosInstance } from "../../config";
import { API_ENDPOINTS } from "../../utils";
import axios from "axios";

interface Plan {
  id: string;
  uid: string;
  tasks: Task[];
  createdAt: Date;
  updatedAt: Date;
}

const TodayPage = () => {
  const [todayTasks, setTodayTasks] = useState<Task[]>([]);
  const [allTasks, setAllTasks] = useState<Task[]>([]);

  const getTodayTasks = async () => {
    const user = localStorage.getItem("user");
  const uid = JSON.parse(user || "{}").id;
    try {

    const response = await axiosInstance.get(
      API_ENDPOINTS.PLANS.GET_BY_USER_ID(uid)
    );
    

    const myPlans = response.data.data.plans;
    const today = new Date();

    const tasks: Task[] = [];
    const allTask: Task[] = [];

    myPlans.forEach((plan: Plan) =>
      plan.tasks.forEach((task) => {
        const taskDate = new Date(task.dateAssigned);

        const isSameDay =
          taskDate.getFullYear() === today.getFullYear() &&
          taskDate.getMonth() === today.getMonth() &&
          taskDate.getDate() === today.getDate();

        if (isSameDay) tasks.push(task);
        allTask.push(task);
        console.log(task);
      })
    );

    setTodayTasks(tasks);
    setAllTasks(allTask);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data
        console.log(`Error getting plans for uid ${uid}: ${JSON.stringify(message)}`)
      } else {
        console.log(`Error getting plans: ${error}`)
      }
    }
  };

  useEffect(() => {
    getTodayTasks();
  }, []);

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
        {todayTasks.map((_, index) => (
          <div
            key={index}
            className="p-4 mt-3 rounded-xl border border-gray-200 bg-gray-50 flex flex-col items-start justify-start w-[350px] cursor-pointer"
          >
            <div className="w-full flex items-center justify-start">
              <div className="bg-white rounded-full p-2 border border-gray-200">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8589/8589433.png"
                  alt=""
                  className="h-5"
                />
              </div>
              <span className="ml-3">{_.task}</span>
            </div>
            <p className="my-3 text-gray-500">{_.note}</p>
            <Button className="border border-gray-200 mt-2">
              {(isHovered) => (
                <>
                  <HoverToggleIcon
                    defaultIcon={Check}
                    hoverIcon={Check}
                    isHovered={isHovered}
                  />
                  <span>{_.status}</span>
                </>
              )}
            </Button>
          </div>
        ))}
      </div>
      {/* right part */}
      <div className="flex-4 ml-5">
        <Calendar
          events={allTasks.map((task) => ({
            id: task.index,
            date: new Date(task.dateAssigned).toISOString().split("T")[0],
            title: task.task,
          }))}
        />
      </div>
    </div>
  );
};

export default TodayPage;
