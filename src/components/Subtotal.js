import React from 'react';
import '../css/Subtotal.css';

const Subtotal = () => {
    return (
        <div className='subTotal flex'>

            <p>Subtotal (0 items) <strong>0</strong> </p>

            <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
            </small>

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
