import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  // State to track added products
  const [addedToCart, setAddedToCart] = useState({});

  // Plants Array
  const plantsArray = [
    {
      id: 1,
      name: "Aloe Vera",
      category: "Medicinal",
      image: "https://via.placeholder.com/150",
      description: "Good for skin and health",
      cost: 100,
    },
    {
      id: 2,
      name: "Tulsi",
      category: "Medicinal",
      image: "https://via.placeholder.com/150",
      description: "Holy plant with healing properties",
      cost: 80,
    },
    {
      id: 3,
      name: "Mint",
      category: "Aromatic",
      image: "https://via.placeholder.com/150",
      description: "Fresh and fragrant herb",
      cost: 50,
    },
    {
      id: 4,
      name: "Lavender",
      category: "Aromatic",
      image: "https://via.placeholder.com/150",
      description: "Relaxing fragrance plant",
      cost: 120,
    },
  ];

  // Add to Cart Function
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  return (
    <div>
      <h2>Our Plants 🌿</h2>

      <div className="product-grid">
        {plantsArray.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />

            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>₹{plant.cost}</p>

            <button
              onClick={() => handleAddToCart(plant)}
              disabled={addedToCart[plant.name]}
            >
              {addedToCart[plant.name] ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;