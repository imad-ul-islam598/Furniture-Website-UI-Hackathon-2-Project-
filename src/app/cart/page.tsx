'use client';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const cartContext = useContext(CartContext);
    const [isCartOpen, setIsCartOpen] = useState(true); // Toggle for showing/hiding cart

    if (!cartContext) {
        return <p>Cart is unavailable.</p>;
    }

    const { cart, removeFromCart, clearCart, updateCartItemQuantity } = cartContext;

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString();
    };

    const handleQuantityChange = (id: string, newQuantity: number) => {
        if (newQuantity > 0) {
            updateCartItemQuantity(id, newQuantity);
        }
    };

    if (!isCartOpen) return null;

    return (
        <div className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-white shadow-xl z-50 transition-transform duration-300">
            {/* Header */}
            <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Shopping Cart</h2>
                <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-500 hover:text-gray-800 text-2xl"
                >
                    &times;
                </button>
            </div>

            {/* Cart Items */}
            <div className="p-6 overflow-y-auto flex-1">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b pb-4 mb-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="ml-4 flex-1">
                                <h3 className="text-base font-semibold">{item.name}</h3>
                                <p className="text-sm text-[#B88E2F]">
                                    {item.quantity} x Rs. {item.price.toLocaleString()}
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(item.id, item.quantity - 1)
                                        }
                                        className="px-2 py-1 border rounded hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(item.id, item.quantity + 1)
                                        }
                                        className="px-2 py-1 border rounded  hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-white bg-gray-500 px-2 rounded-full hover:bg-red-500"
                            >
                                &times;
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
                <div className="p-6 border-t">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-medium">Subtotal</span>
                        <span className="text-lg font-bold text-[#B88E2F]">Rs. {calculateSubtotal()}</span>
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="w-1/2 py-2 border border-black rounded-full hover:bg-yellow-400 transition-all duration-300 hover:border-none"
                            onClick={() => console.log('View Cart')}
                        >
                            View Cart
                        </button>
                        <button
                            className="w-1/2 py-2 border text-black rounded-full border-black r hover:bg-yellow-400 transition-all duration-300 hover:border-none"
                            onClick={() => console.log('Checkout')}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
