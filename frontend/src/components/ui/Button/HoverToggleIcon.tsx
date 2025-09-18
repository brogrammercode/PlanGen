import React from "react";
import type { LucideIcon } from "lucide-react";

interface HoverToggleIconProps {
  defaultIcon: LucideIcon;
  hoverIcon: LucideIcon;
  isHovered: boolean;
  size?: number;
  className?: string;
}

const HoverToggleIcon: React.FC<HoverToggleIconProps> = ({
  defaultIcon: DefaultIcon,
  hoverIcon: HoverIcon,
  isHovered,
  size = 15,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center transition-all duration-200 ease-in-out ${className}`}
    >
      {isHovered ? <HoverIcon size={size} /> : <DefaultIcon size={size} />}
    </span>
  );
};

export default HoverToggleIcon;
