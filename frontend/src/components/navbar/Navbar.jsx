import React, { useContext, useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-scroll";
import { GeneralContext } from '../../App';
import './Navbar.css';
import '../../ScrollBar.css';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const { setSkillsClicked } = useContext(GeneralContext);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleSkillClick = () => {
        setSkillsClicked(true);
        setNav(false); // Close the mobile menu after clicking
    };

    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About' },
        { id: 3, text: 'Skills', onClick: handleSkillClick },
        { id: 4, text: 'Projects' },
        { id: 5, text: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            if (currentPosition < 568) {
                setScrollPosition(currentPosition);
            } else {
                setScrollPosition(568);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${scrollPosition < 568 ? 'navbar-transparent' : 'navbar-dark'}`}>
            {/* Logo */}
            <h1
                className={`logo`}
                style={{ color: scrollPosition < 568 ? 'black' : 'cornsilk' }}
            >
                EZ
            </h1>

            {/* Desktop Navigation */}
            <ul className={`nav-items nav-items-desktop`}>
                {navItems.map(item => (
                    <Link key={item.id}
                        to={item.text}
                        smooth={true}
                        offset={-10}
                        duration={300}
                        onClick={item.onClick} // Add onClick handler
                    >
                        <li
                            className='nav-item'
                            style={{ color: scrollPosition < 568 ? 'black' : 'cornsilk' }} // Change color based on scroll position
                        >
                            {item.text}
                        </li>
                    </Link>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='navbar-mobile-icon'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={`navbar-mobile-menu ${nav ? 'navbar-mobile-menu-show' : ''}`}
            >
                {/* Mobile Logo */}
                <h1 className='mobile-logo'>EZ</h1>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <Link key={item.id}
                        to={item.text}
                        smooth={true}
                        offset={-10}
                        duration={500}
                        onClick={handleNav}
                    >
                        <li className='mobile-nav-item'>
                            {item.text}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

