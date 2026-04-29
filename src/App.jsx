import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("home"); 
  // home | products | cart

  return (
    <div className="app-container">

      {/* 🔹 Navbar */}
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("products")}>Products</button>
          <button onClick={() => setPage("cart")}>Cart 🛒</button>
        </div>
      </nav>

      {/* 🔹 Landing Page */}
      {page === "home" && (
        <div className="landing-page">
          <div className="content">
            <h1>Welcome To Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>

            <button onClick={() => setPage("products")}>
              Get Started
            </button>

            <AboutUs />
          </div>
        </div>
      )}

      {/* 🔹 Product List */}
      {page === "products" && (
        <ProductList />
      )}

      {/* 🔹 Cart Page */}
      {page === "cart" && (
        <CartItem onContinueShopping={() => setPage("products")} />
      )}

    </div>
  );
}

export default App;