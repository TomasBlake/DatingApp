import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProfileDetailLeftButton.css';

const ProfileDetailLeftButton = (props) => { 
    return (
        <NavLink to='/' className={props.buttonType}>{props.title}</NavLink>
    );
}

export default ProfileDetailLeftButton;