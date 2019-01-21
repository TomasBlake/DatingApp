import React from 'react';
import './ProfileCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserAlt, faHeart, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProfileCard = (props) => {
    return(
        <div className='card-container'>
        <div className='img-card-container'>
            <img src={props.photoUrl}
            alt='profile'
            className='profile-img' />
            <div className='icon-container'>
            <Link to={'/profiledetail/' + props.id}><div className='icon-box'><FontAwesomeIcon icon={faUserAlt} style={{color: 'white', margin: 'auto'}}/></div></Link>
            <div className='icon-box'><FontAwesomeIcon icon={faHeart} style={{color: 'white', margin: 'auto'}}/></div>
            <div className='icon-box'><FontAwesomeIcon icon={faEnvelope} style={{color: 'white', margin: 'auto'}}/></div>
            </div>
        </div>
        <div className='info-card-container'>
            <p style={{margin: '0px', marginTop: '5px'}}>
            <FontAwesomeIcon icon={faUserAlt} style={{marginRight: '5px'}}/>
            {props.name}, {props.age}</p>
            <p style={{marginTop: '5px', color: 'grey'}}>{props.city}</p>            
        </div>

        </div>
    );
}

export default ProfileCard;