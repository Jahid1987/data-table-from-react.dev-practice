import PropTypes from "prop-types"; // ES6
import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function Products({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        onInStockOnlyChange={setInStockOnly}
        onFilterTextChange={setFilterText}
        filterText={filterText}
        inStockOnly={inStockOnly}
      ></SearchBar>

      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={products}
      ></ProductTable>
    </div>
  );
}
Products.propTypes = {
  products: PropTypes.array.isRequired,
};
export default Products;
