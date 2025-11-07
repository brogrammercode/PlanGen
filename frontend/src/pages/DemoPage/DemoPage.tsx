import { ArrowDown } from "lucide-react";

const LOGIN_IN =
  "https://ik.imagekit.io/disast3r/Plangen/demo/image.png?updatedAt=1762430405013";
const TEMPLATE =
  "https://ik.imagekit.io/disast3r/Plangen/demo/template_page.png?updatedAt=1762506335890";
const TASK_PROGRESS =
  "https://ik.imagekit.io/disast3r/Plangen/demo/plan_page.png?updatedAt=1762512658456";

interface Steps {
  title: string;
  imageUrl: string;
}

const steps: Steps[] = [
  {
    title: "Log in / Register to our portal",
    imageUrl: LOGIN_IN,
  },
  {
    title: "Check for templates (Where you want to see yourself)",
    imageUrl: TEMPLATE,
  },
  {
    title: "Complete the daily tasks and track your progress",
    imageUrl: TASK_PROGRESS,
  },
];

const DemoPage = () => {
  return (
    <div className="py-40 lg:py-70 px-10">
      <h1 className="text-5xl font-semibold ">Server under Maintenance!</h1>
      <p className="text-xl my-2 mb-30">
        Check out how to use Plangen to get your path ready to success
      </p>
      <ArrowDown size={23} />
      {steps.map((i, index) => (
        <div className="mt-20 lg:mt-50">
          <h1 className="text-2xl font-semibold">{`Step ${index + 1}`}</h1>
          <p>{i.title}</p>
          <div className="mt-5 h-[250px] md:height-[400px] lg:h-[600px] max-w-[1000px] rounded-md flex border border-gray-200 shadow-lg shadow-gray-300 justify-center">
            <img src={i.imageUrl} alt="object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default DemoPage;
