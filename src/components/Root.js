import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import { ThemeContext } from './ThemeContext';

function Root() {
    const [theme, setTheme] = useState("light");

    const toogleTheme = () => {
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    }
    return (
        <>
            <ThemeContext.Provider value={{ theme, toogleTheme }}>
                <Header />
                <Outlet />
            </ThemeContext.Provider >
        </ >
    )
}

export default Root