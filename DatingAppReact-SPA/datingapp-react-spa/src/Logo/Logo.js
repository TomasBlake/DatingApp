import React from 'react';
import './Logo.css';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <NavLink to='/landpage' className='logo'>Dating App</NavLink>
    );
}

export default Logo;