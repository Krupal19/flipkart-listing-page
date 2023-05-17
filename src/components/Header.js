import React, { useContext } from 'react';
// import SearchBar from "./SearchBar"; 
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

// function Header({ setSearchTitle }) {
function Header({ cartItemCount }) {
    const { theme, toogleTheme } = useContext(ThemeContext);

    function btnThemeChange() {
        const newTheme = theme === "light" ? "dark" : "light";
        toogleTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    return (
        <header className={theme}>
            <span className="brand"><Link to="/" className='link'>Flipkart</Link></span>
            {/* <SearchBar setSearchValue={setSearchValue} /> */}
            <ul className="menu">
                <li><Link to="/" className="link"> Home</Link></li>
                <li><Link to="/cart" className="link"> Cart <span className="cart-item-count">{cartItemCount}</span></Link></li>
                <li><Link to="/deals" className="link"> Deals </Link></li>
                <li>
                    <button className="theme-btn" onClick={btnThemeChange}>
                        {theme === "light" ? <MdDarkMode /> : <MdOutlineLightMode />}
                    </button>
                </li>
            </ul>
        </header >
    );
}

export default Header;
