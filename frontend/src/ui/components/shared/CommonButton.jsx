const CommonButton = ({
  classname = "",
  width,
  label,
  logo,
  isLoading,
  onClick,
}) => {
  return (
    <button
      className={`${classname} flex cursor-pointer m-1 px-3 py-2 border border-gray-50/10 rounded ${
        width ? width : "w-[320px]"
      }`}
      onClick={onClick}
    >
      {logo && <img src={logo} height={10} width={20} />}
      <div className="flex-1 flex justify-center items-center">
        <span className="font-bold">{label}</span>
      </div>
      {isLoading && <div className="loader"></div>}
    </button>
  );
};

export default CommonButton;
