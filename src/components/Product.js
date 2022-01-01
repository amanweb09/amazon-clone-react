import React, { useContext } from 'react';
import '../css/Product.css'
import { CartContext } from '../context/CartContext'

const Product = ({ id, title, image, price, rating }) => {
    const ratingArray = new Array(rating).fill("ratings");

    const { cart, setCart } = useContext(CartContext)

    const addToCart = (id) => {
        let _cart = { ...cart }
        
        if (!_cart.items) {
            _cart.items = {};
        }
        if (!_cart.items[id]) {
            _cart.items[id] = 1
        }
        else {
            _cart.items[id] += 1
        }
        if (!_cart.totalItems) {
            _cart.totalItems = 1
        }
        else {
            _cart.totalItems += 1
        }
        setCart(_cart)
    }

    return (
        <div className='product flex'>
            <div className="product_info flex">
                <p>{title}</p>
                <p className="product_price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="product-rating flex">
                {
                    ratingArray.map((_, i) => {
                        return <i key={Math.round(Math.random() * 1E9)} style={{ color: 'gold' }} className="fas fa-star"></i>
                    })
                }

            </div>

            <img src={image} alt="" />

            <button onClick={() => { addToCart(id) }}>Add to Basket</button>
        </div>
    )
}

export default Product
