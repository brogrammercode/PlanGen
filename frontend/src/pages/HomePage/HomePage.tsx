import {
  ArchiveBox,
  Award,
  Calendar,
  Home,
  Medal,
  Settings,
  Star,
  UserOctagon,
} from "iconsax-react";
import {
  ChevronDown,
  ChevronRight,
  ChevronsLeft,
  History,
  Menu,
  MoreHorizontal,
} from "lucide-react";
import DrawerTile from "../../components/ui/Drawer/DrawerTile";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/ui/Button/Button";
import HoverToggleIcon from "../../components/ui/Button/HoverToggleIcon";
import PlanPage from "./PlanPage";

const HomePage = () => {
  const navigate = useNavigate();
  const [drawerTile, setDrawerTile] = useState(0);
  const [drawer, setDrawer] = useState(true);
  return (
    <div className="flex h-screen max-w-screen">
      {drawer ? (
        <nav className="flex flex-col border-r border-gray-100 h-screen bg-[#f9f8f7]">
          <DrawerTile
            leadingIcon={UserOctagon}
            actionIcon={ChevronDown}
            label={"Harsh"}
            className="text-black mt-2 mb-1"
            hideActionIcon={false}
          />
          <DrawerTile
            leadingIcon={Home}
            actionIcon={MoreHorizontal}
            label={"Home"}
            onClick={() => {
              setDrawerTile(1);
              navigate("/");
            }}
            selected={drawerTile === 1}
          />
          <DrawerTile
            leadingIcon={Calendar}
            actionIcon={MoreHorizontal}
            label={"Today"}
            onClick={() => setDrawerTile(2)}
            selected={drawerTile === 2}
          />
          <DrawerTile
            leadingIcon={ArchiveBox}
            actionIcon={MoreHorizontal}
            label={"Templates"}
            onClick={() => setDrawerTile(3)}
            selected={drawerTile === 3}
          />
          <DrawerTile
            leadingIcon={Award}
            actionIcon={MoreHorizontal}
            label={"Plans"}
            onClick={() => setDrawerTile(4)}
            selected={drawerTile === 4}
          />
          <span className="mx-4 mb-2 mt-3 text-gray-600 text-xs">Socials</span>
          <DrawerTile
            leadingIcon={Medal}
            actionIcon={MoreHorizontal}
            label={"Leaderboard"}
            onClick={() => setDrawerTile(5)}
            selected={drawerTile === 5}
          />
          <DrawerTile
            leadingIcon={Star}
            actionIcon={MoreHorizontal}
            label={"Experience"}
            onClick={() => setDrawerTile(6)}
            selected={drawerTile === 6}
          />
          <span className="mx-4 mb-2 mt-3 text-gray-600 text-xs">Utils</span>
          <DrawerTile
            leadingIcon={Settings}
            actionIcon={MoreHorizontal}
            label={"Settings"}
            onClick={() => setDrawerTile(7)}
            selected={drawerTile === 7}
          />
          <DrawerTile
            leadingIcon={History}
            actionIcon={MoreHorizontal}
            label={"History"}
            onClick={() => setDrawerTile(8)}
            selected={drawerTile === 8}
          />
        </nav>
      ) : null}

      <section className={"w-full h-screen overflow-y-auto"}>
        {/* // nav */}
        <div className="flex fixed items-center justify-between w-full px-5 py-3 border-b border-gray-200 bg-white">
          <div className={"flex justify-start items-center gap-3"}>
            <Button
              className="border border-gray-200"
              onClick={() => setDrawer(!drawer)}
            >
              {(isHovered) => (
                <>
                  <HoverToggleIcon
                    defaultIcon={drawer ? ChevronsLeft : Menu}
                    hoverIcon={drawer ? ChevronsLeft : Menu}
                    isHovered={isHovered}
                  />
                </>
              )}
            </Button>
            <Award size={20} color={"black"} />
            <span>Plans</span>
            <ChevronRight size={20} color={"black"} />
            <span>HR Task</span>
          </div>
          <div className="flex justify-end">
            <span className="font-semibold">Plangen</span>
          </div>
        </div>
        {/* // header */}
        <PlanPage />
      </section>
    </div>
  );
};

export default HomePage;
