import PropTypes from "prop-types"; // ES6
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products, inStockOnly, filterText }) {
  const rows = [];
  let lastCategory = null;

  console.log(filterText, inStockOnly);

  products.map((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
    lastCategory = product.category;
  });

  return (
    <table id="data-table" border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
};
export default ProductTable;
