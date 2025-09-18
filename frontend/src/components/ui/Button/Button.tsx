import React, { useState } from "react";

interface ButtonProps {
  children: (isHovered: boolean) => React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex gap-1 items-center justify-center px-[10px] py-[5px] rounded-md hover:bg-gray-100 cursor-pointer transition-all ${className}`}
    >
      {children(isHovered)}
    </button>
  );
};

export default Button;
