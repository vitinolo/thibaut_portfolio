import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <div className="header">
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>Le Mans</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <span >06 30 57 79 68</span> 
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                    <span >lenoir677@gmail.com</span> 
                            </li>
                        </ul>
                    </div>
                    <div className="socialNetwork">
                        <ul>
                            <a href="https://www.linkedin.com/in/thibaut-lenoir-5ab863238/" target="_blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4>
                                <i className='fab fa-linkedin'></i>
                            </a>
                            <a href="https://github.com/vitinolo" target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className='fab fa-github'></i>
                            </a>
                        </ul>
                    </div>            
                </div>
            </div>
        </div>
    );
};

export default Contact;