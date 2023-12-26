const FilterModal = ({ options, optionStyle, setSelectedFilter }) => {
  const onFilterOptionClick = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <div className="flex justify-start items-center p-3 flex-wrap py-8 gap-4 w-96">
      {options.map((option) => (
        <button
          key={option}
          value={option}
          className={`py-2 px-4 border border-gray-400 rounded-full transition duration-300 hover:bg-gray-100 ${optionStyle}`}
          onClick={onFilterOptionClick}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterModal;
