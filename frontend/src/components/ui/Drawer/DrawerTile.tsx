import React, { type MouseEventHandler } from "react";

interface DrawerTileProps {
  leadingIcon: React.ComponentType<any>;
  actionIcon: React.ComponentType<any>;
  label: string;
  className?: string;
  hideActionIcon?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
}

const DrawerTile: React.FC<DrawerTileProps> = ({
  leadingIcon: LIcon,
  actionIcon: AIcon,
  label,
  className = "",
  hideActionIcon = true,
  onClick,
  selected = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer group flex justify-between px-2 py-1.5 mx-2 my-0.5 w-[200px] hover:bg-[#f1f0ef] ${
        selected ? "bg-[#f1f0ef] text-black" : "text-gray-700"
      } rounded-lg ${className} hover:text-black`}
    >
      <div className="flex gap-2">
        <LIcon color="gray" size={20} />
        <span>{label}</span>
      </div>
      <div
        className={`flex gap-2 ${
          hideActionIcon ? "opacity-0" : "opacity-100"
        } group-hover:opacity-100 transition-opacity duration-150`}
      >
        <AIcon color="gray" size={20} />
      </div>
    </button>
  );
};

export default DrawerTile;
