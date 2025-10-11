import type { MouseEventHandler } from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} border border-gray-200 hover:bg-gray-100 px-3 h-[38px] cursor-pointer rounded-md flex items-center`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
