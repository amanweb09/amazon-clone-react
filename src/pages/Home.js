import React from 'react';
import Product from '../components/Product';
import '../css/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img
                    className='home_image'
                    src="https://m.media-amazon.com/images/I/61WNAYNAN6L._SX1500_.jpg"
                    alt=""
                />

                <div className="home_row flex">
                    <Product
                        id="clone-pr-1"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={250}
                        image='/images/book-1.png'
                        rating={3}
                    />

                    <Product
                        id="clone-pr-2"
                        title='2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray'
                        price={175900}
                        image='/images/laptop-1.png'
                        rating={5}
                    />
                </div>

                <div className="home_row flex">
                    <Product
                        id="clone-pr-3"
                        title='iPhone 13 Pro Max 128gb Gold'
                        price={112500}
                        image='/images/phone-1.png'
                        rating={4}
                    />
                    <Product
                        id="clone-pr-4"
                        title='Xiaomi Mi Band 6 Activity Tracker Smart Band'
                        price={2450}
                        image='/images/fitness-band.png'
                        rating={4}
                    />
                    <Product
                        id="clone-pr-5"
                        title='Nikon D7500 20.9MP DSLR Camera with AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR Lens, Black'
                        price={35975}
                        image='/images/camera.png'
                        rating={4}
                    />

                </div>

                <div className="home_row flex">
                    <Product
                        id="clone-pr-6"
                        title='Hiland Road Bike Aluminum Frame 700c Racing Bike with 14 Speeds Drivetrain'
                        price={45450}
                        image='/images/bicycle.png'
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}
export default Home;