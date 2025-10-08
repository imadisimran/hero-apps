import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import './Header.css'
import { Github } from 'lucide-react';
import Container from '../Container/Container';

const Header = () => {

    const navLinks = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/apps'><li>Apps</li></NavLink>
        <NavLink to='/installation'><li>Installation</li></NavLink>
    </>


    return (
        <header className='bg-base-100 shadow-sm'>
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold space-y-3">
                                {navLinks}
                            </ul>
                        </div>
                        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                        <Link to='/'>
                            <div className='flex gap-3 items-center'>
                                <img className='max-w-12' src={logo} alt='Logo' />
                                <h3 className='font-bold text-lg text-[#6e38e6] hidden md:block'>HERO.IO</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-8 font-bold">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a href='https://github.com/imadisimran/hero-apps' className="btn bg-gradient-to-br from-[#6e38e6] to-[#9d70ff] text-white"><Github />Contribute</a>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;