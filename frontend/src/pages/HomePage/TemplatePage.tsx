import {
  CalendarClockIcon,
  ChevronRightIcon,
  Copy,
  Eye,
  Filter,
  LucideAlignLeft,
  Search,
  SettingsIcon,
} from "lucide-react";
import Button from "../../components/ui/Button/Button";
import HoverToggleIcon from "../../components/ui/Button/HoverToggleIcon";

const TemplatePage = () => {
  return (
    <div className="px-5 py-4 mt-[60px] flex">
      <div className="flex flex-col flex-5">
        <h1 className="text-2xl font-semibold">New and notable templates</h1>
        <p className="py-1 text-gray-600">
          We have helped a lot of legends focusing on their bulls eye target
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
        {/* body */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-3 my-8 p-4 rounded-md bg-gray-100 border border-gray-200">
          {Array.from({ length: 20 }).map((_) => (
            <div className="flex flex-col p-4 rounded-md bg-white border border-gray-200 flex-shrink-0 cursor-pointer">
              <img
                src="https://cdn.dribbble.com/userupload/44971227/file/85266d8541fa2a2cfec94c447dd1e9df.jpg?resize=1024x652&vertical=center"
                alt=""
                className="object-cover"
              />
              <span className="text-lg font-semibold">Software Developer</span>
              <span className="text-gray-600 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci voluptatibus reiciendis official.
              </span>
              <div className="flex items-center justify-between mt-10">
                <div className="flex items-end justify-start">
                  <Eye size={17} />
                  <span className="text-[13px] font-semibold text-gray-600 ml-2">
                    17.6K
                  </span>
                  <Copy size={17} className="ml-5" />
                  <span className="text-[13px] font-semibold text-gray-600 ml-2">
                    4.7K
                  </span>
                </div>
                <Button className="border border-gray-200">
                  {(isHovered) => (
                    <>
                      <span>Start</span>
                      <HoverToggleIcon
                        defaultIcon={ChevronRightIcon}
                        hoverIcon={ChevronRightIcon}
                        isHovered={isHovered}
                      />
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* rigth one */}
      <div className="flex-2 flex flex-col ml-5 h-screen">
        <div>
          <h1 className="text-2xl font-semibold">Software Engineer</h1>
          <p className="py-1 text-gray-600">
            We have helped a lot of legends focusing on their bulls eye target
          </p>
          <div className="mt-3 flex items-end justify-start">
            <Button className="border border-gray-200">
              {(isHovered) => (
                <>
                  <HoverToggleIcon
                    defaultIcon={Eye}
                    hoverIcon={Eye}
                    isHovered={isHovered}
                  />
                  <span>5.3K</span>
                </>
              )}
            </Button>
            <Button className="ml-3 border border-gray-200">
              {(isHovered) => (
                <>
                  <HoverToggleIcon
                    defaultIcon={Copy}
                    hoverIcon={Copy}
                    isHovered={isHovered}
                  />
                  <span>11.7K</span>
                </>
              )}
            </Button>
          </div>
        </div>
        {/* right body */}
        <div className="my-8">
          {Array.from({ length: 29 }).map((_) => (
            <div className="flex justify-start">
              <div className="px-3 py-4 border-r border-b border-gray-300">
                <span>Day 1</span>
              </div>
              <div className="px-3 py-4 border-b border-gray-300 w-[350px] flex flex-col">
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque nihil similique quibusdam?
                </span>
                <div className="h-7 w-7 mt-5 rounded-full border border-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
