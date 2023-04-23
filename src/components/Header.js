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
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Cart</a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
