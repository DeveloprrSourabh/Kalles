import { useDispatch, useSelector } from "react-redux";
import { getAllCarts } from "../Slices/cartSlice";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const dispatch = useDispatch();
  const allCart = useSelector((state) => state.cart.allCarts);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    dispatch(getAllCarts());
  }, [dispatch]);

  useEffect(() => {
    if (allCart) {
      setCart(JSON.stringify(allCart));
    }
  }, [allCart]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { useCart, CartProvider };
