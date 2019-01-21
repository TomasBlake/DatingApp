import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProfilePartButton.css';

const ProfilePartButton = (props) => {
    return (
        <NavLink to={props.path} className='profilepartbutton'
        activeClassName='active-profilepartbutton'>{props.title}</NavLink>
    );
}

export default ProfilePartButton;