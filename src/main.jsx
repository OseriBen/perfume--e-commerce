import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // ✅ Add this import
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* The CartProvider sits here so the whole app has access to the cart */}
      <CartProvider> 
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);