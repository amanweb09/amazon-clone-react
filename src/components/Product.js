import React from 'react';
import '../css/Product.css'

const Product = ({ id, title, image, price, rating }) => {
    const ratingArray = new Array(rating).fill("ratings");

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

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
