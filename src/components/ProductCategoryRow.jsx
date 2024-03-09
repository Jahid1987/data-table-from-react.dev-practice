function ProductCategoryRow({ category }) {
  const categoryStyle = {
    textAlign: "center",
    backgroundColor: "#ccc",
    color: "#333",
  };
  return (
    <tr>
      <th style={categoryStyle} colSpan="2">
        {category}
      </th>
    </tr>
  );
}
export default ProductCategoryRow;
