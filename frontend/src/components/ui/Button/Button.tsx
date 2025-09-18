import React, { useState } from "react";

interface ButtonProps {
  children: (isHovered: boolean) => React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex gap-1 items-center justify-center px-[10px] py-[5px] rounded-md hover:bg-gray-100 cursor-pointer transition-all"
    >
      {children(isHovered)}
    </button>
  );
};

export default Button;
