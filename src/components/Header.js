import React from 'react'
import SearchBar from './SearchBar';

function Header() {
    return (
        <header>
            <span className="logoName">Flipkart</span>
            <SearchBar />
            <ul className="menu">
                <li>Home</li>
                <li>Cart</li>
            </ul>
        </header>
    )
}

export default Header;