import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Parallax } from 'react-scroll-parallax';
import { HashLink as Link } from 'react-router-hash-link';
import Badge from '@material-ui/core/Badge';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';

import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectLanguage } from '../../redux/language/language.selectors';

import EN_DATA from '../../data/language/english.data';
import PT_DATA from '../../data/language/portuguese.data';

import Logo from '../../assets/head-start-branco.png';

import './Header.scss';


function Header({ cartItems, language }) {
    // getting language text
    const menu = language === 'EN' ? EN_DATA.menu : PT_DATA.menu;
    const ItemsQtty = cartItems?.length;

    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [services, setServices] = useState(false);
    const [contact, setContact] = useState(false);
    const [login, setLogin] = useState(false);
    const [cart, setCart] = useState(false);

    function setAllFalse() {
        setHome(false);
        setAbout(false);
        setServices(false);
        setContact(false);
        setLogin(false);
        setCart(false);
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
        if (option === 'cart') {
            setCart(true);
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
                        { menu[0] }
                    </Link>
                    <Link
                        className={`option ${services ? 'line-bottom' : ''}`}
                        onClick={() => setOption('services')}
                        to="/#services"
                    >
                        { menu[1] }
                    </Link>
                    <Link
                        className={`option ${about ? 'line-bottom' : ''}`}
                        onClick={() => setOption('about')}
                        to="/#about-us"
                    >
                        { menu[2] }
                    </Link>
                    <Link
                        className={`option ${contact ? 'line-bottom' : ''}`}
                        onClick={() => setOption('contact')}
                        to="/#contact">
                        { menu[3] }
                    </Link>
                    <Link 
                        className={`option ${login ? 'line-bottom' : ''}`}
                        onClick={() => setOption('login')}
                        to="/login">
                        { menu[4] }
                    </Link>
                    <Link 
                        className={`option ${cart ? 'line-bottom' : ''}`}
                        onClick={() => setOption('cart')}
                        to="/cart">
                        <Badge badgeContent={ItemsQtty} color="primary">
                            <ShoppingCart />
                        </Badge>
                    </Link>
                </div>
    
                <BurgerMenu />
            </div>
        </div>
        
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    language: selectLanguage
});
  
export default connect(mapStateToProps)(Header);