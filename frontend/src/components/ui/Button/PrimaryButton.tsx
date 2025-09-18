interface PrimaryButtonProps {
  className?: string;
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className = "",
  label,
}) => {
  return (
    <button
      className={`px-[15px] py-[7px] rounded-md bg-[#0075DE] cursor-pointer ${className}`}
    >
      <span className="text-white">{label}</span>
    </button>
  );
};

export default PrimaryButton;
