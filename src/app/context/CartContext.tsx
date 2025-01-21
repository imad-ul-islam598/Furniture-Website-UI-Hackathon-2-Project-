'use client';
import { createContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
    color: string;
    image: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    updateCartItemQuantity: (id: string, quantity: number) => void; // New function
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart from localStorage when the component mounts
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }
            return [...prevCart, item];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateCartItemQuantity = (id: string, quantity: number) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.id === id ? { ...cartItem, quantity } : cartItem
            )
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                updateCartItemQuantity, // Expose the new function
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
