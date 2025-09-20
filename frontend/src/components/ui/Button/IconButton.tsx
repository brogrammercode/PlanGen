import type { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon }) => {
  return <Icon className="m-2 bg-[#252424] rounded-md text-white" />;
};

export default IconButton;
