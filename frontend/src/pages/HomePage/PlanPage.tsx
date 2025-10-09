import Button from "../../components/ui/Button/Button";
import HoverToggleIcon from "../../components/ui/Button/HoverToggleIcon";
import {
  CalendarClockIcon,
  Filter,
  LucideAlignLeft,
  Search,
  SettingsIcon,
} from "lucide-react";

const PlanPage = () => {
  return (
    <div>
      <div className="px-5 py-4 mt-[60px]">
        <h1 className="text-2xl font-semibold">Software Engineer</h1>
        <p className="py-1 text-gray-600">
          Code your dreams - build the future with every keystroke.
        </p>
        <div className="flex justify-between items-end">
          <div className="mt-3 flex items-end justify-start">
            <Button className="border border-gray-200">
              {(isHovered) => (
                <>
                  <HoverToggleIcon
                    defaultIcon={LucideAlignLeft}
                    hoverIcon={LucideAlignLeft}
                    isHovered={isHovered}
                  />
                  <span>Sort</span>
                </>
              )}
            </Button>
            <Button className="ml-3 border border-gray-200">
              {(isHovered) => (
                <>
                  <HoverToggleIcon
                    defaultIcon={Filter}
                    hoverIcon={Filter}
                    isHovered={isHovered}
                  />
                  <span>Filter</span>
                </>
              )}
            </Button>
            <Button className="ml-3 border border-gray-200">
              {(isHovered) => (
                <>
                  <HoverToggleIcon
                    defaultIcon={CalendarClockIcon}
                    hoverIcon={CalendarClockIcon}
                    isHovered={isHovered}
                  />
                  <span>Calendar</span>
                </>
              )}
            </Button>
          </div>
          <div className="flex gap-3">
            <Button className="border border-gray-200">
              {(isHovered) => (
                <>
                  <HoverToggleIcon
                    defaultIcon={Search}
                    hoverIcon={Search}
                    isHovered={isHovered}
                  />
                  <span className="ml-1">Search anything</span>
                </>
              )}
            </Button>
            <Button className="border border-gray-200">
              {(isHovered) => (
                <>
                  <HoverToggleIcon
                    defaultIcon={SettingsIcon}
                    hoverIcon={SettingsIcon}
                    isHovered={isHovered}
                  />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* // body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-5 my-4 p-4 rounded-md bg-gray-100 border border-gray-200">
        {Array.from({ length: 20 }).map((_) => (
          <div className="flex flex-col p-4 rounded-md bg-white border border-gray-200 flex-shrink-0 cursor-pointer">
            <div>
              <span className="text-gray-500">May 26, 2025</span>
            </div>
            <span className="text-lg mt-4 font-semibold">
              Software Developer
            </span>
            <span className="text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptatibus reiciendis official.
            </span>
            <div className="h-[1px] w-full bg-gray-200 mt-6 rounded-2xl" />
            <div className="flex flex-wrap gap-1 mt-4">
              {Array.from({ length: 98 }).map((_, i) => (
                <div
                  className={`h-4 w-4 rounded-[2px] ${
                    i % 2 == 0 || i % 3 == 0 ? "bg-gray-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanPage;
