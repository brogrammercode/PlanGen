function DashboardTile({ icon: Icon, label, onClick }) {
  const iconClassName = "mr-2 opacity-70 group-hover:opacity-100";
  return (
    <div
      className="group flex items-center mx-2 my-1 py-2 px-2 rounded hover:bg-[#292929] cursor-pointer"
      onClick={onClick}
    >
      {Icon && <Icon className={iconClassName} height={17} />}
      <span className="opacity-70 group-hover:opacity-100">{label}</span>
    </div>
  );
}

export default DashboardTile;
