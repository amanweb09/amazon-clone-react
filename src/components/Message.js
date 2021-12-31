import React from 'react';
import '../css/Message.css'

const Message = () => {
    const failContainer = {
        border: '2px solid red'
    }
    const failIcon = {
        color: 'red'
    }
    const successContainer = {
        border: '2px solid rgb(22, 233, 15)'
    }
    const failIcon = {
        color: 'rgb(22, 233, 15)'
    }

    // <i class="far fa-check-circle"></i>
    return (
        <div className='message flex'>
            <div className='message_icon'>
                <i class="fas fa-exclamation-triangle"></i>
            </div>

            <div className='message_text'>
                <strong>There was a problem</strong>
                <p>User already exists with this email/telephone number</p>
            </div>
        </div>
    )
}

export default Message;
