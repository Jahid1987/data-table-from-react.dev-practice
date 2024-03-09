import "./App.css";
import Nav from "./components/Nav";
import Button from "./components/Button";
import { useState } from "react";
import ProductTable from "./components/ProductTable";
import Products from "./components/Products";

function App() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];
  return (
    <div>
      <nav className="container">
        <Nav></Nav>
        <Products products={products}></Products>
        <Button count={count} color={"red"} onClick={increaseCount}></Button>
      </nav>
    </div>
  );
}

export default App;
