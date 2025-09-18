import { ChevronDown, ChevronUp } from "lucide-react";
import { Plangen } from "../../../assets";
import Button from "../../ui/Button/Button";
import HoverToggleIcon from "../../ui/Button/HoverToggleIcon";
import PrimaryButton from "../../ui/Button/PrimaryButton";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-[12px] px-[25px]">
      <div className="flex justify-start items-center">
        <Button className="bg-gray-100">
          {() => (
            <img
              src={Plangen}
              alt=""
              height={40}
              width={40}
              className="cursor-pointer"
            />
          )}
        </Button>
        <div className="w-25"></div>
      </div>
      <div className="flex justify-center items-center cursor-pointer gap-2">
        <Button>
          {(isHovered) => (
            <>
              <span>Plangen</span>
              <HoverToggleIcon
                defaultIcon={ChevronDown}
                hoverIcon={ChevronUp}
                isHovered={isHovered}
              />
            </>
          )}
        </Button>
        <Button>
          {() => (
            <>
              <span>Templates</span>
            </>
          )}
        </Button>

        <Button>
          {() => (
            <>
              <span>Leaderboard</span>
            </>
          )}
        </Button>
        <Button>
          {(isHovered) => (
            <>
              <span>Explore</span>
              <HoverToggleIcon
                defaultIcon={ChevronDown}
                hoverIcon={ChevronUp}
                isHovered={isHovered}
              />
            </>
          )}
        </Button>
        <Button>
          {() => (
            <>
              <span>Request a demo</span>
            </>
          )}
        </Button>
      </div>
      <div className="flex gap-5 justify-end items-center">
        <Button>
          {() => (
            <>
              <span>Log in</span>
            </>
          )}
        </Button>
        <PrimaryButton label={"Get Plangen Free"} />
      </div>
    </div>
  );
};

export default Header;
