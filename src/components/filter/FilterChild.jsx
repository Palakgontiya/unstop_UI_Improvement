const FilterChild = ({ filter, options, style }) => {
  return (
    <div>
      <select name="" id="" className={style}>
        <option value="">{filter}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterChild;
