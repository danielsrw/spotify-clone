import React from 'react';
import '../css/Header.css';
import search from '../images/icons/search.png';
import Avatar from '../images/pics/avatar.jpg'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img style={{ height: "13px" }} src={search} />
                <input type="text" placeholder="Search for Artist, Song" />
            </div>
            <div className="header__right">
                <img src={Avatar} />
                <h4>Daniels Rw</h4>
            </div>
        </div>
    )
}

export default Header
