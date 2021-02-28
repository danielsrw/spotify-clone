import React from 'react';
import '../css/SongRow.css';
import image1 from '../images/pics/image1.jpg';
import image2 from '../images/pics/image2.png';
import image3 from '../images/pics/image3.png';
import image4 from '../images/pics/image4.png';
import image5 from '../images/pics/image5.png';

function SongRow({ track }) {
    return (
        <>
            <div className="songRow">
                <img className="songRow__album" src={image1} />
                <div className="songRow__info">
                    <h1>Bazizana</h1>
                    <p>
                        B Threy - 2040
                    </p>
                </div>
            </div>
            <div className="songRow">
                <img className="songRow__album" src={image2} />
                <div className="songRow__info">
                    <h1>Trapish Music Anthem</h1>
                    <p>
                        Ish Kevin - Twimanukire
                    </p>
                </div>
            </div>
            <div className="songRow">
                <img className="songRow__album" src={image3} />
                <div className="songRow__info">
                    <h1>Sadiva</h1>
                    <p>
                        Mvfasta ft NERIWEST - Exit
                    </p>
                </div>
            </div>
            <div className="songRow">
                <img className="songRow__album" src={image2} />
                <div className="songRow__info">
                    <h1>Vayo</h1>
                    <p>
                        Ish Kevin - Twimanukire
                    </p>
                </div>
            </div>
            <div className="songRow">
                <img className="songRow__album" src={image4} />
                <div className="songRow__info">
                    <h1>Ikinyejama</h1>
                    <p>
                        Ration Music Ent ft B Threy - Rasiyo
                    </p>
                </div>
            </div>
            <div className="songRow">
                <img className="songRow__album" src={image5} />
                <div className="songRow__info">
                    <h1>Supernova</h1>
                    <p>
                        NGAARA - AMARASO
                    </p>
                </div>
            </div>
        </>
    );
}

export default SongRow
