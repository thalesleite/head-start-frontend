import React, { useState } from 'react';

import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';

import Logo from '../../assets/head-start-branco.png';

import './Header.scss';


function Header() {
    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [services, setServices] = useState(false);
    const [contact, setContact] = useState(false);
    const [login, setLogin] = useState(false);

    function setAllFalse() {
        setHome(false);
        setAbout(false);
        setServices(false);
        setContact(false);
        setLogin(false);
    }

    function setOption(option) {
        setAllFalse();

        if (option === 'home') {
            setHome(true);
        }
        if (option === 'about') {
            setAbout(true);
        }
        if (option === 'services') {
            setServices(true);
        }
        if (option === 'contact') {
            setContact(true);
        }
        if (option === 'login') {
            setLogin(true);
        }
    }

    return (
        <div>
            <div className="header">
                <Link className="logo-container" to="/">
                    <Parallax y={[-40, 0]}>
                        <img src={Logo} alt="Head Start"/>
                    </Parallax> 
                </Link>
                <div className="options">
                    <Link 
                        className={`option ${home ? 'line-bottom' : ''}`}
                        onClick={() => setOption('home')}
                        to="/"
                    >
                        HOME
                    </Link>
                    <a
                        className={`option ${about ? 'line-bottom' : ''}`}
                        onClick={() => setOption('about')}
                        href="/#about-us"
                    >
                        ABOUT US
                    </a>
                    <a
                        className={`option ${services ? 'line-bottom' : ''}`}
                        onClick={() => setOption('services')}
                        href="/#services"
                    >
                        SERVICES
                    </a>
                    <a
                        className={`option ${contact ? 'line-bottom' : ''}`}
                        onClick={() => setOption('contact')}
                        href="/#contact">
                        CONTACT
                    </a>
                    <Link 
                        className={`option ${login ? 'line-bottom' : ''}`}
                        onClick={() => setOption('login')}
                        to="/login">
                        LOGIN
                    </Link>
                    <Link 
                        className="option"
                        onClick={() => {}}
                        to="/">
                        <ShoppingCart />
                    </Link>
                </div>
            </div>
        </div>
        
    );
}

export default Header;