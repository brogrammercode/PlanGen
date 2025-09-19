import { ArrowRight, ChevronRight } from "lucide-react";
import Button from "../../components/ui/Button/Button";
import HoverToggleIcon from "../../components/ui/Button/HoverToggleIcon";
import PrimaryButton from "../../components/ui/Button/PrimaryButton";

const LandingPage = () => {
  return (
    <section className="max-w-[1800px] flex flex-col items-center">
      <div className="min-h-[700px] flex flex-col items-center justify-end p-4">
        <Button className="mb-5">
          {(isHovered) => (
            <>
              <span className="text-xl">with Plangen</span>
              <HoverToggleIcon
                defaultIcon={ChevronRight}
                hoverIcon={ArrowRight}
                isHovered={isHovered}
              />
            </>
          )}
        </Button>
        <h1 className="text-7xl font-bold text-center">
          Stay consistent, <br />
          reach your potential.
        </h1>
        <p className="text-2xl text-center text-gray-500 my-10">
          Stay consistent with Plangen - track goals, stay focused, and <br />
          turn small steps into big wins!
        </p>
        <div className="flex justify-center items-center gap-5 mb-24">
          <PrimaryButton label={"Download Plangen"} />
          <Button>{() => <span>Request a demo</span>}</Button>
        </div>
      </div>
      <div className="mx-10 h-[750px] w-[1200px] rounded-md flex border border-gray-200 shadow-lg shadow-gray-300">
        <video
          src="https://videos.ctfassets.net/spoqsaf9291f/60rdYX9BPk9yOnCdEb0nJC/a04c661d50bdad019963c8f9da70fa35/Desktop_HomepageHero_compressed_v007_650.mp4"
          // autoPlay
          loop
        ></video>
      </div>
      <div className="mt-20 text-gray-400 flex flex-col items-center">
        <span>Motivating hustlers from</span>
        <div className="flex gap-16 justify-center items-center mt-6 mb-20">
          <img
            src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FjWkCPMAAj0Av69704DQoB%2F84499b606028b276e0bf94c238f07097%2FOpenAI-black-wordmark-cropped.png&w=1200&q=75"
            alt=""
            height={80}
            width={80}
          />
          <img
            src="https://about.x.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png"
            alt=""
            height={20}
            width={20}
          />
          <img
            src="https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg"
            alt=""
            height={80}
            width={80}
          />
          <img
            src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3CSWr4Z4uIvbfO7102KPY%2Fbbd97c8edd0673853ac8dae2887a638d%2Fcursor.png&w=1080&q=75"
            alt=""
            height={80}
            width={80}
          />
          <img
            src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/497492503acb3fa21bbd9dd1aec193c3/Figma-logo-color.svg"
            alt=""
            height={80}
            width={80}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
