import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-hiking'></i>
                    <span>Randonnée</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-palette'></i>
                    <span>Peinture</span>
                </li>
                <li className='hobby'>
                    <i class='fas fa-music'></i>
                    <span>Piano</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;