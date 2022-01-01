import React from 'react'
import Header from '../components/Header';
import Subtotal from '../components/Subtotal';
import '../css/Checkout.css'
import { NavLink } from 'react-router-dom'

const Checkout = () => {
    return (
        <>
            <Header />
            <div className='checkout flex'>
                <div className="checkout_left">
                    <img
                        className='checkout_ad'
                        src="/images/checkout-ad.png"
                        alt="ad"
                    />

                    <div>
                        <h2 className="checkout_title">
                            Your Shopping Basket
                        </h2>
                    </div>
                </div>

                <div className="checkout_right">
                    <Subtotal />
                </div>
            </div>

            <div className='cart_items_container'>
                <ul>
                    <li>
                        <div className='checkout_item_wrapper flex'>
                            <img src="/images/book-1.png" alt="" />
                            <div>
                            <h3>Macbook Pro 14' 512gb SSD</h3>
                            <p>Eligible for Free Shipping</p>
                            <div className="links flex">
                                <p>Delete</p>
                                <p>Save for later</p>
                            </div>
                            Rs. 251
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Checkout;
