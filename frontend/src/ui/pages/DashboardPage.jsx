import {
  SearchIcon,
  HomeIcon,
  Settings,
  History,
  PlusCircle,
  ChevronDown,
  ShieldCheckIcon,
  CircleQuestionMark,
  Share2Icon,
} from "lucide-react";
import DashboardTile from "../components/Dashboard/DashboardTile";
import IconButton from "../components/shared/IconButton";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      <section className="flex flex-col justify-between bg-[#202020] flex-1">
        <div>
          <div className="cursor-pointer flex items-center m-2 py-1.5 px-2 rounded hover:bg-[#292929]">
            <span className="bg-[#3b3b3b] py-[1px] px-1.5 mr-2.5 rounded">
              H
            </span>
            <span className="font-semibold">Harsh</span>
            <ChevronDown height={18} className="opacity-70" />
          </div>
          <DashboardTile icon={SearchIcon} label="Search" />
          <DashboardTile icon={HomeIcon} label="Home" />
          <DashboardTile icon={PlusCircle} label="Add Plan" />
          <p className="text-[13px] mx-4 mt-6 mb-2 opacity-70">System</p>
          <DashboardTile icon={Settings} label="Settings" />
          <DashboardTile icon={History} label="History" />
        </div>
        <div className="flex justify-between m-3">
          <IconButton icon={Share2Icon} />
          <div className="flex justify-end">
            <IconButton icon={ShieldCheckIcon} />
            <IconButton icon={CircleQuestionMark} />
          </div>
        </div>
      </section>
      <section className="flex-7 bg-[#181918]">
        <div></div>
      </section>
    </div>
  );
};

export default DashboardPage;
