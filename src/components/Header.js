import React from 'react';
import '../css/Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
            <NavLink to='/'>
                <img className='header_logo' src="/images/logo.png" alt="" />
            </NavLink>

            <div className="header_search flex">
                <input type="text" name="search" id="search" />
                <div className='header_search_icon flex-center'>
                    <i className="fas fa-search"></i>
                </div>
            </div>

            <div className="header_nav flex">
                <NavLink to='/signin'>
                    <div className="header_option">
                        <span className="header_option_line_one">
                            Hello Guest
                        </span>
                        <span className="header_option_line_two">
                            Signin
                        </span>
                    </div>
                </NavLink>

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
                    <NavLink to="/checkout">
                        <i className="fas fa-shopping-bag"></i>
                        <span className='header_option_line_two header_basket_count'>0</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;
