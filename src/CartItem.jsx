import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ Calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.cost.toString().replace("₹", ""));
      return total + price * item.quantity;
    }, 0);
  };

  // ✅ Calculate subtotal for each item
  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.toString().replace("₹", ""));
    return price * item.quantity;
  };

  // ✅ Continue Shopping
  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  // ✅ Checkout (dummy)
  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  // ✅ Increment quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        amount: item.quantity + 1,
      })
    );
  };

  // ✅ Decrement quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          amount: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // ✅ Remove item
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-card" key={item.name}>
              <img src={item.image} alt={item.name} width="100" />

              <h3>{item.name}</h3>

              <p>Unit Price: ₹{item.cost}</p>

              <p>Subtotal: ₹{calculateTotalCost(item)}</p>

              <div>
                <button onClick={() => handleIncrement(item)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleDecrement(item)}>-</button>
              </div>

              <button onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          ))}

          <h3>Total Amount: ₹{calculateTotalAmount()}</h3>

          <button onClick={handleContinueShopping}>
            Continue Shopping
          </button>

          <button onClick={handleCheckoutShopping}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartItem;