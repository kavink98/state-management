import React, { useState } from 'react';
import './Product.css';

export default function Product() {

    const products = [
        {
            emoji: '🍦',
            name: 'ice cream',
            price: 5
        },
        {
            emoji: '🍩',
            name: 'donuts',
            price: 2.5,
        },
        {
            emoji: '🍉',
            name: 'watermelon',
            price: 4
        }
    ];

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    const getTotal = () => {
        return total.toLocaleString(undefined, currencyOptions);
    }

    const add = (product) => {
        setCart((currentCart) => [...currentCart, product.name]);
        setTotal((currentTotal) => currentTotal + product.price);
        console.log(cart);
    }

    const remove = (product) => {
        setCart((currentCart) => currentCart.splice(currentCart.indexOf(product.name), 1));
        setTotal((currentTotal)=> currentTotal - product.price);
        console.log(cart);
    }

    return (
        <div className="wrapper">
            <div>
                Shopping Cart: {cart.length} total items.
            </div>
            <div>Total {getTotal()}</div>
            {products.map(product => (
                <div key={product.name}>
                    <div className="product">
                        <span role="img" aria-label={product.name}>{product.emoji}</span>
                    </div>
                    <button onClick={() => add(product)}>Add</button>
                    <button onClick={() => remove(product)}>Remove</button>
                </div>
            ))}
        </div>
    )
}