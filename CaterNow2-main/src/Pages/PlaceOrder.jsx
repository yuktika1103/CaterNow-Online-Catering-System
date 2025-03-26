import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Style/PlaceOrder.css";

function PlaceOrder() {
    const location = useLocation();
    const { caterer, pkg, quantity, addons, totalPrice } = location.state;

    const [orders, setOrders] = useState([
        { id: 1, item: '', quantity: '' }
    ]);

    const handleChange = (id, field, value) => {
        const updatedOrders = orders.map(order => {
            if (order.id === id) {
                return { ...order, [field]: value };
            }
            return order;
        });
        setOrders(updatedOrders);
    };

    const addOrderField = () => {
        const newId = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1;
        setOrders([...orders, { id: newId, item: '', quantity: '' }]);
    };

    const removeOrderField = (id) => {
        if (orders.length > 1) {
            setOrders(orders.filter(order => order.id !== id));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = orders.every(order => order.item && order.quantity);
        if (!isValid) {
            alert('Please fill all fields');
            return;
        }

        // Calculate total quantity of custom items
        const customQuantity = orders.reduce((sum, order) => sum + parseInt(order.quantity), 0);

        const payload = {
            catererName: caterer.name,
            packageType: pkg.name,
            quantity: quantity + customQuantity,
            customizations: orders.map(order => `${order.item} x ${order.quantity}`),
            addons: addons, 
            totalPrice: totalPrice
        };
        console.log("Payload to backend:", payload);

        try {
            const response = await fetch("http://localhost:8080/place-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include", // session-based login
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Failed to place order");
            }
            const data = await response.text(); // since your controller returns just a String
            alert(data); // will show "Order placed successfully for username"
            console.log("Backend response:", data);
        } catch (err) {
            console.error(err);
            alert("Error placing order");
        }
    };

    return (
        <div className="order-container">
            <div className="order-box">
                <h2>Place Order for {caterer.name} - {pkg.name}</h2>
                <p>Package Quantity: {quantity} plates</p>
                <p>Total Price: ₹{totalPrice}</p>
                <form onSubmit={handleSubmit}>
                    {orders.map((order) => (
                        <div className="form-row" key={order.id}>
                            <div className="form-group">
                                <label>Custom Food Item</label>
                                <input
                                    type="text"
                                    value={order.item}
                                    onChange={(e) => handleChange(order.id, 'item', e.target.value)}
                                    placeholder="Enter food item"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input
                                    type="number"
                                    value={order.quantity}
                                    onChange={(e) => handleChange(order.id, 'quantity', e.target.value)}
                                    placeholder="Enter quantity"
                                    min="1"
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                className="remove-btn"
                                onClick={() => removeOrderField(order.id)}
                                disabled={orders.length === 1}
                            >
                                ×
                            </button>
                        </div>
                    ))}

                    <button type="button" onClick={addOrderField} className="add-btn">
                        + Add More Items
                    </button>
                    <button type="submit" className="submit-btn">
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PlaceOrder;
