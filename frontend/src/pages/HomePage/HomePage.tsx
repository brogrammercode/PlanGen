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
import TodayPage from "./TodayPage";
import TemplatePage from "./TemplatePage";

const NAV_ITEMS = [
  { id: 1, label: "Home", icon: Home, route: "/" },
  { id: 2, label: "Today", icon: Calendar },
  { id: 3, label: "Templates", icon: ArchiveBox },
  { id: 4, label: "Plans", icon: Award },
  { section: "Socials" },
  { id: 5, label: "Leaderboard", icon: Medal },
  { id: 6, label: "Experience", icon: Star },
  { section: "Utils" },
  { id: 7, label: "Settings", icon: Settings },
  { id: 8, label: "History", icon: History },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [drawerTile, setDrawerTile] = useState(2);
  const [drawer, setDrawer] = useState(true);
  const currentNav = NAV_ITEMS.find((item) => item.id === drawerTile);
  return (
    <div className="flex h-screen max-w-screen">
      {drawer && ( 
        <nav className="flex flex-col border-r border-gray-100 h-screen bg-[#f9f8f7]">
          <DrawerTile
            leadingIcon={UserOctagon}
            actionIcon={ChevronDown}
            label="Harsh"
            className="text-black mt-2 mb-1"
            hideActionIcon={false}
          />
          {NAV_ITEMS.map((item, idx) =>
            item.section ? (
              <span
                key={`section-${idx}`}
                className="mx-4 mb-2 mt-3 text-gray-600 text-xs"
              >
                {item.section}
              </span>
            ) : (
              <DrawerTile
                key={item.id}
                leadingIcon={item.icon ?? Star}
                actionIcon={MoreHorizontal}
                label={item.label ?? ""}
                onClick={() => {
                  setDrawerTile(item.id ?? 1);
                  if (item.route) navigate(item.route);
                }}
                selected={drawerTile === item.id}
              />
            )
          )}
        </nav>
      )}

      {/* Main content */}
      <section className="w-full h-screen overflow-y-auto">
        {/* Top Navbar */}
        <div className="flex fixed items-center justify-between w-full px-5 py-3 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <Button
              className="border border-gray-200"
              onClick={() => setDrawer(!drawer)}
            >
              {(isHovered) => (
                <HoverToggleIcon
                  defaultIcon={drawer ? ChevronsLeft : Menu}
                  hoverIcon={drawer ? ChevronsLeft : Menu}
                  isHovered={isHovered}
                />
              )}
            </Button>
            {/* Dynamic icon + label */}
            {currentNav?.icon && <currentNav.icon size={20} color="black" />}
            <span>{currentNav?.label}</span>
            {/* Breadcrumb example */}
            {drawerTile === 4 && (
              <>
                <ChevronRight size={20} color="black" />
                <span>HR Task</span>
              </>
            )}
          </div>

          <div className="flex justify-end">
            <span className="font-semibold">Plangen</span>
          </div>
        </div>

        {/* Page Content */}
        <div>
          {drawerTile === 2 ? (
            <TodayPage />
          ) : drawerTile === 3 ? (
            <TemplatePage />
          ) : (
            <PlanPage />
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
