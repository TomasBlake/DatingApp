import React from 'react';
import { withRouter } from 'react-router-dom';
import './NavButton.css';
import { NavLink } from 'react-router-dom';

const NavButton = (props) => {

    return (
        <NavLink to={props.path} 
        activeClassName='nav-link-active' 
        className={props.blackVersion ? 'nav-link black-version' : 'nav-link'}
        onClick={props.clicked}>
        {props.title}
        </NavLink>
    );
}

export default NavButton;
