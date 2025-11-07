import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { Plangen } from "../../../assets";
import Button from "../../ui/Button/Button";
import HoverToggleIcon from "../../ui/Button/HoverToggleIcon";
import PrimaryButton from "../../ui/Button/PrimaryButton";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-[11px] px-[25px] ${
        scrolled ? "border-b border-gray-200" : ""
      }`}
    >
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
      <div className="block lg:hidden">
        <Menu size={24} className="cursor-pointer" />
      </div>
      <div className="hidden lg:flex justify-center items-center cursor-pointer gap-2">
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
      <div className="hidden lg:flex gap-5 justify-end items-center">
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
