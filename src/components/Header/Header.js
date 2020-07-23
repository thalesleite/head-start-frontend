import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../assets/head-start-branco.png';

import './Header.scss';


function Header() {
    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [courses, setCourses] = useState(false);
    const [contact, setContact] = useState(false);
    const [login, setLogin] = useState(false);

    function setAllFalse() {
        setHome(false);
        setAbout(false);
        setCourses(false);
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
        if (option === 'courses') {
            setCourses(true);
        }
        if (option === 'contact') {
            setContact(true);
        }
        if (option === 'login') {
            setLogin(true);
        }
    }

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img src={Logo} alt="Head Start"/>
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
                    className={`option ${courses ? 'line-bottom' : ''}`}
                    onClick={() => setOption('courses')}
                    href="/#courses"
                >
                    COURSES
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
            </div>
        </div>
    );
}

export default Header;