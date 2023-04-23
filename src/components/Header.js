import React from "react";

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
                    Home
                </li>
                <li>
                    Cart
                </li>
            </ul>
        </header>
    );
}

export default Header;
