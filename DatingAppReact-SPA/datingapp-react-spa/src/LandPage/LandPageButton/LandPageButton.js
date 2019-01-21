import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandPageButton.css';

const LandPageButton = (props) => {
    return(
        <NavLink 
        to={props.path}
        className={props.type}>{props.title}</NavLink>
    );
}

export default LandPageButton;