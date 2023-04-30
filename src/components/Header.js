import React from "react";
import { Link } from "react-router-dom";

function Header({ setSearchTitle }) {
    return (
        <header>
            <span className="logoName">Flipkart</span>
            <input
                type="search"
                className="search"
                placeholder="Search here..."
                onChange={(event) => {
                    setSearchTitle(event.target.value);
                }}
            />
            <ul className="menu">
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/cart`}>Cart</Link>
                </li>
                <li>
                    <Link to={`/deals`}>Deal</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
