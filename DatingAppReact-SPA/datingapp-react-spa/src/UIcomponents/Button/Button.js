import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.css';

const Button = ({children, click = null, className, activeClassName = '', path = '/'}) => {
    return (
        <NavLink 
        to={path} 
        className={className}
        activeClassName={activeClassName}
        onClick={click}>
        {children}
        </NavLink>
    );
}

export default Button;