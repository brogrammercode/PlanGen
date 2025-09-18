import { ArrowRight, ChevronRight } from "lucide-react";
import Button from "../../components/ui/Button/Button";
import HoverToggleIcon from "../../components/ui/Button/HoverToggleIcon";
import PrimaryButton from "../../components/ui/Button/PrimaryButton";

const LandingPage = () => {
  return (
    <div className="min-h-[700px] max-w-[1200px] flex flex-col items-center justify-center p-4">
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
      <div className="flex justify-center items-center gap-5">
        <PrimaryButton label={"Get Plangen Free"} />
        <Button>{() => <span>Request a demo</span>}</Button>
      </div>
    </div>
  );
};

export default LandingPage;
