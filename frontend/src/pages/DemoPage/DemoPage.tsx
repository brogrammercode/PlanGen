const LOGIN_IN =
  "https://ik.imagekit.io/disast3r/Plangen/demo/image.png?updatedAt=1762430405013";
const TEMPLATE =
  "https://ik.imagekit.io/disast3r/Plangen/demo/image.png?updatedAt=1762430405013";
const TASK_PROGRESS =
  "https://ik.imagekit.io/disast3r/Plangen/demo/image.png?updatedAt=1762430405013";

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
    <div className="max-w-[1000px] w-full py-70 px-10">
      <h1 className="text-5xl font-semibold ">Server under Maintenance!</h1>
      <p className="text-xl my-2 mb-30">
        Check out how to use Plangen to get your path ready to success
      </p>
      {steps.map((i, index) => (
        <div>
          <h1 className="mt-50 text-2xl font-semibold">{`Step ${
            index + 1
          }`}</h1>
          <p>{i.title}</p>
          <div className="mt-5 h-[600px] w-[1000px] rounded-md flex border border-gray-200 shadow-lg shadow-gray-300 div justify-center">
            <img src={i.imageUrl} alt="" className="" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default DemoPage;
