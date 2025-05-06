"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface CartItem {
  id: number;
  title: string;
  image: string;
  price: string;
  count: number;
}

interface CartContextProps {
  cart: CartItem[];
  handleAddToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Charger les données du panier depuis localStorage au démarrage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Sauvegarder les données du panier dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const handleAddToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (product) => product.id === item.id
      );

      if (existingProduct) {
        // Si le produit existe déjà, incrémentez sa quantité
        return prevCart.map((product) =>
          product.id === item.id
            ? { ...product, count: product.count + item.count }
            : product
        );
      } else {
        // Sinon, ajoutez le produit avec une quantité initiale
        return [...prevCart, item];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
