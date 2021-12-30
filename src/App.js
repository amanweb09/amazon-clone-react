import React from 'react';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home'
import Checkout from './pages/Checkout';
import Signup from './pages/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
