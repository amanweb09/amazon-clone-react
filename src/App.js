import React from 'react';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home'
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
