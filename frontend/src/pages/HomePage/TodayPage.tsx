const TodayPage = () => {
  return (
    <div className="flex px-5 py-4 mt-[60px]">
      <div className="flex flex-col justify-start items-start flex-1">
        {/* Progress bar */}
        <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 flex flex-col items-start justify-start w-[350px]">
          <div className="bg-white rounded-full p-2 border border-gray-200">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1356/1356479.png"
              alt=""
              className="h-5"
            />
          </div>
          <span className="font-semibold mt-8 mb-2.5">Your progress now</span>
          <div className="flex flex-wrap gap-2">
            <div className="h-2 w-14 rounded-xl bg-blue-400" />
            <div className="h-2 w-14 rounded-xl bg-blue-400" />
            <div className="h-2 w-14 rounded-xl bg-gray-300" />
            <div className="h-2 w-14 rounded-xl bg-gray-300" />
            <div className="h-2 w-14 rounded-xl bg-gray-300" />
          </div>
          <div className="w-full flex justify-between items-center mt-3">
            <span className="text-[12px]">8 / 12 Task Complete</span>
            <span className="text-[12px]">68%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayPage;
