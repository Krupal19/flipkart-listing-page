import React from "react";
import { Link } from "react-router-dom";

function Header({ setSearchTitle }) {
    return (
        <header>
            <span className="brand">Flipkart</span>
            {/* <input type="search" className="search" placeholder="Search here..."
                onChange={(event) => { setSearchTitle(event.target.value); }} /> */}
            <ul className="menu">
                <li><Link to="/" className="link"> Home</Link></li>
                <li><Link to="/cart" className="link"> Cart </Link></li>
                <li><Link to="/deals" className="link"> Deals </Link></li>
            </ul>
        </header>
    );
}

export default Header;
