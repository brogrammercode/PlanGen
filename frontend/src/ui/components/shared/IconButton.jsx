function IconButton({ icon: Icon }) {
  return (
    <div className="group mr-1 cursor-pointer py-1.5 px-1 rounded hover:bg-[#292929]">
      <Icon
        className="opacity-70 group-hover:opacity-100 transition-opacity"
        height={17}
      />
    </div>
  );
}

export default IconButton;
