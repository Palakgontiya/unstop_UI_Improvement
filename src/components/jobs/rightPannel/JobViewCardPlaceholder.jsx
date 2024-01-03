

const JobViewCardPlaceholder = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 w-full sm:w-full md:w-[95%] lg:w-[90%] xl:w-[88%] custom-scrollbar ">
        <div className="flex justify-center items-center h-full">
          <div className="bg-white w-full h-full flex flex-col gap-2 p-4 rounded-lg shadow-md">
            <div className="sticky top-0 bg-white p-2 mb-4 rounded-md shadow-md">
              <div className="w-full flex justify-between mt-2">
                <div className="flex-1">
                  {/* Placeholder for SearchBar */}
                  <div className="bg-gray-300 h-8 w-2/3 rounded-md"></div>
                </div>
                <div className="flex-1 flex justify-end">
                  {/* Placeholder for Edit Button */}
                  <button className="inline-flex items-center bg-blue-100 text-blue-500 font-semibold py-1 px-4 rounded-full">
                    <span className="mr-2 text-xs">
                      Smart Search Preference: Placeholder
                    </span>
                    <div className="focus:outline-none">Edit Icon</div>
                  </button>
                </div>
              </div>
              {/* Placeholder for Filter */}
              <div className="bg-gray-300 h-8 w-full rounded-md mt-2"></div>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-4">
              {/* Left Area Scrollable */}
              <div
                className="left-area custom-scrollbar pr-4"
                style={{ flexBasis: "25%" }}
              >
                {/* Placeholder for JobOptions */}
                <div className="bg-gray-300 h-[300px] w-full rounded-md"></div>
              </div>

              {/* Right Area Scrollable */}
              <div
                className="right-area flex-1 custom-scrollbar pr-4"
                style={{ flexBasis: "75%" }}
              >
                {/* Placeholder for JobView */}
                <div className="bg-gray-300 h-[300px] w-full rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobViewCardPlaceholder;
