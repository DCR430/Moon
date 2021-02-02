import React from 'react'
import Logo from './moon.jpg'
import './Header.css'

function Header() {
    return (
        <div className="header_wrapper">
            {/* logo */}
            <div className="header_logo">
                <img src={Logo} width={175}/>
            </div>
            {/* search */}
            <div className="header_search">
                <div className="header_searchContainer">
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            {/* menu */}
            <div className="header_menuItems">
                <a href="#">Portfolio</a>
                <a href="#">Cash </a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
            
        </div>
    )
}

export default Header
