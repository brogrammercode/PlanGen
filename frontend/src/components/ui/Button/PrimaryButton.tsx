interface PrimaryButtonProps {
  className?: string;
  label: string;
  loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  className = "",
  label,
  loading = false,
}) => {
  return (
    <button
      className={`px-[15px] py-[7px] rounded-md bg-[#0075DE] cursor-pointer ${className}`}
    >
      {!loading && <span className="text-white">{label}</span>}
      {loading && <span className="text-white">Loading...</span>}
    </button>
  );
};

export default PrimaryButton;
