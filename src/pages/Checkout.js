import React from 'react'
import Header from '../components/Header';
import Subtotal from '../components/Subtotal';
import '../css/Checkout.css'

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
        </>
    )
}

export default Checkout;
