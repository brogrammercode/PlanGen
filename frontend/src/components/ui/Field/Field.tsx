interface FieldProps {
  type?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Field = ({
  type = "text",
  className = "",
  onChange,
  placeholder,
  label,
}: FieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <span className="text-gray-500">{label}</span>}
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`${className}  border border-gray-200 px-3 h-[38px] rounded-md focus:border-blue-500 outline-none focus:border-2`}
      />
    </div>
  );
};

export default Field;
