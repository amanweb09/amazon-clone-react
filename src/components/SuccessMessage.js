import React from 'react';
import '../css/Message.css'

const SuccessMessage = () => {

    return (
        <div className='success_message flex'>
            <div className='success_message_icon'>
                <i className="far fa-check-circle"></i>
            </div>

            <div className='success_message_text'>
                <strong>Success!</strong>
                <p>Signup successful! Please login</p>
            </div>
        </div>
    )
}

export default SuccessMessage;
