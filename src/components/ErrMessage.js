import React from 'react';
import '../css/Message.css'

const ErrMessage = ({ message }) => {

    return (
        <div className='message flex'>
            <div className='message_icon'>
                <i className="fas fa-exclamation-triangle"></i>
            </div>

            <div className='message_text'>
                <strong>There was a problem</strong>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ErrMessage;
