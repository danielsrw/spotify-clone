import React from 'react';
import '../css/Footer.css';
import shuffle from '../images/icons/shuffle.png';
import previous from '../images/icons/previous.png'
import play from '../images/icons/play.png';
import next from '../images/icons/next.png';
import repeat from '../images/icons/repeat.png';
import image1 from '../images/pics/image1.jpg';
import volumeDown from '../images/icons/voulume-down.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src={image1} className="albumLogo" />
                <div className="footer__songInfo">
                    <h4>2040</h4>
                    <p>B Threy</p>
                </div>
            </div>
            <div className="footer__center">
                <img src={shuffle} className="footer__icon" />
                <img src={previous} className="footer__icon" />
                <img src={play} className="footer__large" />
                <img src={next} className="footer__icon" />
                <img src={repeat} className="footer__icon" />
            </div>
            <div className="footer__right">
                <img src={volumeDown} style={{ height: "20px" }} />
            </div>
        </div>
    )
}

export default Footer
