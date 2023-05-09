import React from "react";
import { Link } from "react-router-dom";

function Header({ setSearchTitle }) {
    return (
        <header>
            <span className="brand">Flipkart</span>
            {/* <input type="search" className="search" placeholder="Search here..."
                onChange={(event) => { setSearchTitle(event.target.value); }} /> */}
            <ul className="menu">
                <Link to="/" className="link">
                    <li>Home</li>
                </Link>
                <Link to="/cart" className="link">
                    <li>Cart</li>
                </Link>
                <Link to="/deals" className="link">
                    <li>Deals</li>
                </Link>
            </ul>
        </header>
    );
}

export default Header;
