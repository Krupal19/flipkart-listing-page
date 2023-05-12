import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import ReactSwitch from 'react-switch';
import { ThemeContext } from './ThemeContext';
import { MdOutlineLightMode, MdDarkMode } from "react-icons/ai";

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

                <div className='switch'>
                    <label className='modeLabel'>{theme === "light" ? "light mode" : "dark mode"}</label>
                    <ReactSwitch onChange={toogleTheme} checked={theme === "dark"} />
                </div>
            </ul>
        </header>
    );
}

export default Header;
