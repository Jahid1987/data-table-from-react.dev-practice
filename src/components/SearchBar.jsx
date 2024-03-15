import PropTypes from "prop-types"; // ES6
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
SearchBar.propTypes = {
  inStockOnly: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  onFilterTextChange: PropTypes.func.isRequired,
  onInStockOnlyChange: PropTypes.func.isRequired,
};
export default SearchBar;
