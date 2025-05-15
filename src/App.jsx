import { useState } from "react";
import "./App.css";

const App = () => {
  const products = [
    "Laptop",
    "Printer",
    "Mouse",
    "Keyboard",
    "Display",
    "Mobile",
    "Projector",
  ];
  const [cart, setCart] = useState([]);
  const [selectedProduct, setselectedProduct] = useState("");
  const addToCart = (e) => {
    e.preventDefault();

    if (selectedProduct) {
      const existingProductIndex = cart.findIndex(
        (item) => item.name === selectedProduct
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += 1;
        setCart(updatedCart);
      } else {
        setCart([...cart, { name: selectedProduct, quantity: 1 }]);
      }
    }
  };
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <header className="app-header">
        <h1>Shopping Cart</h1>
      </header>

      <div className="container">
        <form onSubmit={addToCart}>
          <label htmlFor="products">Products:</label>
          <select
            id="products"
            value={selectedProduct}
            onChange={(e) => setselectedProduct(e.target.value)}
          >
            <option value="">--Select Product--</option>
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
          <button type="submit">Add to Cart</button>
        </form>

        <ul>
          {cart.map((item) => (
            <li key={item.name}>
              {item.name}
              {item.quantity > 1 && ` x ${item.quantity}`}
            </li>
          ))}
        </ul>

        <p>
          {cart.length === 0
            ? "Add Some Items"
            : `You have ${totalItems} items in your cart`}
        </p>
      </div>
    </>
  );
};

export default App;
