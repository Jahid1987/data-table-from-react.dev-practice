import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import "../css/ProductTable.css";

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

export default ProductTable;
