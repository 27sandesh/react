const Filter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <div>
      <label htmlFor="yearFilter">Filter</label>
      <select id="yearFilter" onChange={filterChangeHandler}>
        <option value="">All Years</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};
export default Filter;
