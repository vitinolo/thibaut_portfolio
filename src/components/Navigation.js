import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
       <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src='thib.jpeg' alt="profil-pic" width="170px"/>
                    <h3>Thibaut Lenoir</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink  to="/" activeClassName="navActive">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink  to="/competences" activeClassName="navActive">
                            <i className='fas fa-mountain'></i>
                            <span>Compétences</span>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink  to="/portfolio" activeClassName="navActive">
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>    
                    </li>
                    <li>
                        <NavLink  to="/contact" activeClassName="navActive">
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>    
                    </li>
                </ul>    
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/thibaut-lenoir-5ab863238/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/vitinolo" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Vitinolo - 2022</p>
                </div>
            </div>
       </div>
    );
};

export default Navigation;