import React from 'react';
import './LoggedinNav.css';
import NavButton from '../NavButton/NavButton';
import NavToggler from '../NavToggler/NavToggler';

const LoggedinNav = () => {
    return (
            <nav className='main-navigation'>
                    <ul className='left-nav-ul'>
                        <NavButton path='/matches' title='Matches' />
                        <NavButton path='/lists' title='Lists' />
                        <NavButton path='/messages' title='Messages' />
                    </ul>
                    <div className='space-between-nav'>
                    </div>
                    <ul className='right-nav-ul'>
                        <NavToggler />
                    </ul>
            </nav>
    );
}

export default LoggedinNav;