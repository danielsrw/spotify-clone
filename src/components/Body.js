import React from 'react';
import '../css/Body.css';
import Header from '../components/Header';
import cover from '../images/pics/image2.jpg';
import playcircle from '../images/icons/playcircle.png'
import heart from '../images/icons/heart.png';
import more from '../images/icons/more.png';
import SongRow from '../components/SongRow'

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify = { spotify } />

            <div className="body__info">
                <img src={cover} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <img src={playcircle} className="body__shuffle" />
                    <img src={heart} style={{ height: "30px" }} />
                    <img src={more} style={{ height: "5px" }} />
                </div>
                <SongRow />
            </div>
        </div>
    )
}

export default Body
