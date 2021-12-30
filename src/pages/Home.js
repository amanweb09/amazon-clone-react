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
                        title='The Lean Startup'
                        price={250}
                        image='/images/book-1.png'
                        rating={3}
                    />

                    <Product
                        id="clone-pr-2"
                        title='Macbook Pro 14-inches 512gb SSD'
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
                        title='Mi Band 5'
                        price={2450}
                        image='/images/fitness-band.png'
                        rating={4}
                    />
                    <Product
                        id="clone-pr-5"
                        title='Nikon DSLR Single Lens Camera'
                        price={35975}
                        image='/images/camera.png'
                        rating={4}
                    />

                </div>

                <div className="home_row flex">
                    <Product
                        id="clone-pr-6"
                        title='Firefox 19-inches 24-gear Bicycle (dual-shock suspensions)'
                        price={25450}
                        image='/images/bicycle.png'
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}
export default Home;