function SearchBar({
  inStockOnly,
  filterText,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        onChange={(e) => onFilterTextChange(e.target.value)}
        type="text"
        placeholder="Search here"
        value={filterText}
      />
      <label htmlFor="">
        <input
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          type="checkbox"
          checked={inStockOnly}
        />{" "}
        {"0"} Only Show Products in Stock
      </label>
    </form>
  );
}
export default SearchBar;
