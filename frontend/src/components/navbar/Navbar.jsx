import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-scroll";
import '../../ScrollBar.css';

export default function Navbar() {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

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
                setScrollPosition(568);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex justify-between items-center max-w-[1600px] mx-auto px-4 fixed top-0 left-0 right-0 z-50 ${scrollPosition < 568 ? 'bg-transparent' : 'bg-[#282828]'}`} style={{ minHeight: '70px' }}>
            {/* Logo */}
            <h1 className='w-16 text-3xl font-bold text-mainColor'
                style={{ color: scrollPosition < 568 ? 'black' : 'cornsilk' }}
            >EZ</h1>

            {/* Desktop Navigation */}
            <ul className='hidden md:flex flex-1 justify-evenly'>
                {navItems.map(item => (
                    <Link key={item.id}
                        to={item.text}
                        smooth={true}
                        offset={-10}
                        duration={300}
                    >
                        <li
                            className={`p-4 hover:scale-120 rounded-xl m-2 cursor-pointer duration-300 text-lg ${scrollPosition < 568 ? 'text-black' : 'text-mainColor'}`}
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
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#282828] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                {/* Mobile Logo */}
                <h1 className='w-full text-3xl font-bold text-mainColor m-4'>EZ</h1>

                {/* Mobile Navigation Items */}
                {navItems.map(item => (
                    <Link key={item.id}
                        to={item.text}
                        smooth={true}
                        offset={-10}
                        duration={500}
                        onClick={handleNav} // Close the menu when an item is clicked
                    >
                        <li
                            className='p-4 border-b border-gray-600 rounded-xl m-2 cursor-pointer duration-300 text-mainColor hover:bg-mainColor hover:text-black'
                        >
                            {item.text}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};
