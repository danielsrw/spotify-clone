import React from 'react';
import '../css/Sidebar.css';
import spotify from '../images/icons/spotify.png';
import SidebarOption from '../components/SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <img src={spotify} className="sidebar__logo" />
            <SidebarOption title = "Home" />
            <SidebarOption title = "Search" />
            <SidebarOption title = "Your Library" />

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            <SidebarOption title = "Trap Music" />
            <SidebarOption title = "Hiphop" />
            <SidebarOption title = "RnB" />
        </div>
    )
}

export default Sidebar
