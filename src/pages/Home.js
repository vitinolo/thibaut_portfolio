import React from 'react';
import Navigation from '../components/Navigation';
import ThibautCv from '../documents/Thibaut_Lenoir_cv.pdf';
import Thib from '../img/thib.jpg'

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <img src={Thib}/>
                    <h1>Thibaut Lenoir</h1>
                    <h2>Developpeur web</h2>
                    <div className="pdf">
                        <a href={ThibautCv} target="blank">Télécharger cv</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;