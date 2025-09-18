import { ChevronDown, ChevronUp } from "lucide-react";
import { Plangen } from "../../../assets";
import Button from "../../ui/Button/Button";
import HoverToggleIcon from "../../ui/Button/HoverToggleIcon";

const Header = () => {
  return (
    <div className="flex justify-between py-[14px] px-[25px]">
      <div>
        <img
          src={Plangen}
          alt=""
          height={40}
          width={40}
          className="cursor-pointer"
        />
        <div className="w-35"></div>
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
      <div className="flex gap-5">
        <Button>
          {() => (
            <>
              <span>Log in</span>
            </>
          )}
        </Button>
        <button className="px-[15px] py-[7px] rounded-md bg-[#0075DE] cursor-pointer">
          <span className="text-white">Get Plangen Free</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
