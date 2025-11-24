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
import { API_ENDPOINTS, formatNumbers } from "../../utils";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../config";
import { MOCK_TEMPLATE } from "./Templates";
// import { MOCK_TEMPLATE } from "./Templates";

// interface Category {
//   id: string;
//   name: string;
//   description: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface Task {
  id: string;
  index: number;
  points: number;
  task: string;
  status?: string;
  note: string;
  dateAssigned: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Template {
  id: string;
  name: String;
  description: String;
  imageUrl: string;
  categoryID: string;
  tasks: Task[];
  views: number;
  applied: number;
  createdAt: Date;
  updatedAt: Date;
}

const TemplatePage = () => {
  useEffect(() => {
    const fetchTemplates = async () => {
      const response = await axiosInstance.get(API_ENDPOINTS.TEMPLATES.GET);
      const serverResponse = response.data;
      console.log(serverResponse);
      // setTemplates([]);
      setTemplates(serverResponse);
    };
    fetchTemplates();
  }, []);

  const addTemplate = async () => {
    const template: Template = MOCK_TEMPLATE;
    const response = await axiosInstance.post(
      API_ENDPOINTS.TEMPLATES.ADD,
      template
    );
    const serverResponse = response.data;
    console.log(serverResponse);
  };

  const [templateID, setTemplateID] = useState("");
  const [templates, setTemplates] = useState<Template[]>([]);
  const selectedTemplate = templates.find(
    (t) => t.id === templateID
  ) as Template;

  const transformTemplate = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const uid = user.id;
    const response = await axiosInstance.post(
      API_ENDPOINTS.TEMPLATES.TRANSFORM(selectedTemplate.id, uid)
    );
    const serverResponse = response.data;
    console.log(serverResponse);
  };

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
            <Button
              className="ml-3 border border-gray-200"
              onClick={async () => {
                // await addTemplate();
              }}
            >
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
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                setTemplateID(template.id);
              }}
              className="flex flex-col justify-start items-start p-4 rounded-md bg-white border border-gray-200 flex-shrink-0 cursor-pointer"
            >
              <img
                src={template.imageUrl}
                alt=""
                className="object-cover aspect-video mb-4 rounded-md w-full"
              />
              <span className="text-lg font-semibold">{template.name}</span>
              <span className="text-gray-600 mt-1 text-start">
                {template.description}
              </span>
              <div className="flex items-center w-full justify-between mt-10">
                <div className="flex items-end justify-start">
                  <Eye size={17} />
                  <span className="text-[13px] font-semibold text-gray-600 ml-2">
                    {formatNumbers(template.views)}
                  </span>
                  <Copy size={17} className="ml-5" />
                  <span className="text-[13px] font-semibold text-gray-600 ml-2">
                    {formatNumbers(template.applied)}
                  </span>
                </div>
                <Button
                  className="border border-gray-200"
                  onClick={() => transformTemplate()}
                >
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
      {/* right one */}
      {selectedTemplate && (
        <div className="flex-2 flex flex-col ml-5 h-screen">
          <div>
            <h1 className="text-2xl font-semibold">{selectedTemplate.name}</h1>
            <p className="py-1 text-gray-600">{selectedTemplate.description}</p>
            <div className="mt-3 flex items-end justify-start">
              <Button className="border border-gray-200">
                {(isHovered) => (
                  <>
                    <HoverToggleIcon
                      defaultIcon={Eye}
                      hoverIcon={Eye}
                      isHovered={isHovered}
                    />
                    <span>{formatNumbers(selectedTemplate.views)}</span>
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
                    <span>{formatNumbers(selectedTemplate.applied)}</span>
                  </>
                )}
              </Button>
            </div>
          </div>
          {/* right body */}
          <div className="my-8">
            {selectedTemplate.tasks.map((task) => (
              <div key={task.id} className="flex justify-start">
                <div className="px-3 py-4 w-20 border-r border-b border-gray-300">
                  <span>{`Day ${task.index}`}</span>
                </div>
                <div className="px-3 py-4 border-b border-gray-300 w-[350px] flex flex-col">
                  <span>{task.task}</span>
                  {/* <div className="h-7 w-7 mt-5 rounded-full border border-gray-300"></div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplatePage;
