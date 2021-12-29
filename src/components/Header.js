import React from 'react';
import '../css/Header.css';


const Header = () => {
    return (
        <div className='header'>
            <img className='header_logo' src="/images/logo.png" alt="" />

            <div className="header_search flex">
                <input type="text" name="search" id="search" />
                <div className='header_search_icon flex-center'>
                    <i className="fas fa-search"></i>
                </div>
            </div>

            <div className="header_nav flex">
                <div className="header_option">
                    <span className="header_option_line_one">
                        Hello Guest
                    </span>
                    <span className="header_option_line_two">
                        Signin
                    </span>
                </div>

                <div className="header_option">
                    <span className="header_option_line_one">
                        Returns
                    </span>
                    <span className="header_option_line_two">
                        & Orders
                    </span>
                </div>

                <div className="header_option">
                    <span className="header_option_line_one">
                        Your
                    </span>
                    <span className="header_option_line_two">
                        Prime
                    </span>
                </div>

                <div className="flex-center header_option_basket">
                    <i className="fas fa-shopping-bag"></i>
                    <span className='header_option_line_two header_basket_count'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
