import React, { useState, type MouseEventHandler } from "react";

interface ButtonProps {
  children: (isHovered: boolean) => React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex gap-1 items-center justify-center px-[10px] py-[5px] rounded-md hover:bg-gray-100 cursor-pointer transition-all ${className}`}
    >
      {children(isHovered)}
    </button>
  );
};

export default Button;
