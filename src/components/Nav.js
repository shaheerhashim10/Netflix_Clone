import React, { useEffect, useState } from 'react';
import './Nav.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';

function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo" />
                <ul className="nav-area">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>My List</li>
                </ul>

                <div className="op12">
                    <ul className="nav-right-side">
                        <SearchIcon className="searchIconStyle" />
                        <li>Children</li>
                        <li>TV Shows</li>
                        <li><NotificationsIcon /></li>
                    </ul>
                    <img className="nav_avatar" src="https://i.ibb.co/2PJGPrT/Netflix-avatar.png" alt="Avatar" />
                    <ArrowDropDownIcon />
                </div>

            </div>
        </div>
    )
}

export default Nav;
