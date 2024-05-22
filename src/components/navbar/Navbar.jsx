import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";

export default function Navbar() {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate('')

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About' },
        { id: 3, text: 'Skills' },
        { id: 4, text: 'Projects' },
        { id: 5, text: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            if (currentPosition < 568) {
                setScrollPosition(currentPosition);
            } else {
                // If the user scrolls beyond 568px, set the background to black
                setScrollPosition(568);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`flex justify-between items-center h-18 max-w-[1600px] mx-auto px-4 text-white fixed top-0 left-0 right-0 z-50 ${scrollPosition < 568 ? 'bg-transparent' : 'bg-[#d8d1f7]'}`}>
            {/* Logo */}
            <h1 className='w-full text-3xl font-bold text-black'>EZ</h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <Link key={item.id}
                        to={item.text}
                        smooth={true}
                        offset={-10}
                        duration={500}
                    >
                        <li

                            className={`p-4 hover: rounded-xl m-2 cursor-pointer duration-300 text-black text-lg  ${scrollPosition < 568 ? 'hover:bg-white' : 'hover:bg-white'}`}
                        >
                            {item.text}
                        </li>
                    </Link>

                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
