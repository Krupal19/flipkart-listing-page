import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

// function Header({ setSearchTitle }) {
function Header() {
    const { theme, toogleTheme } = useContext(ThemeContext);

    return (
        <header className={theme}>
            <span className="brand"><Link to="/" className='link'>Flipkart</Link></span>
            {/* <input type="search" className="search" placeholder="Search here..."
                onChange={(event) => { setSearchTitle(event.target.value); }} /> */}
            <ul className="menu">
                <li><Link to="/" className="link"> Home</Link></li>
                <li><Link to="/cart" className="link"> Cart </Link></li>
                <li><Link to="/deals" className="link"> Deals </Link></li>
                <li>
                    <button
                        className="theme-btn"
                        onClick={() => toogleTheme(theme === "light" ? "dark" : "light")}
                    >
                        {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
                    </button>
                </li>
            </ul>
        </header >
    );
}

export default Header;
