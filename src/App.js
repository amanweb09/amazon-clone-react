import React, { useEffect, useState } from 'react';
import './App.css'
import Home from './pages/Home'
import Checkout from './pages/Checkout';
import Signup from './pages/Signup'
import Signin from './pages/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartContext } from './context/CartContext'

const App = () => {
    const [cart, setCart] = useState({})

    useEffect(() => {
        const cart = window.sessionStorage.getItem('cart');
        setCart(cart)
    }, [])

    useEffect(() => {
        window.sessionStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <Router>
            <CartContext.Provider value={{ cart, setCart }}>
                <div className='App'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/signin' element={<Signin />} />
                    </Routes>
                </div>
            </CartContext.Provider>
        </Router>
    )
}

export default App;
