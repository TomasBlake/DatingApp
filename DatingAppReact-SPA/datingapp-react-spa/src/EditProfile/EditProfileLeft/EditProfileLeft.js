import React from 'react';
import Button from '../../UIcomponents/Button/Button';
import './EditProfileLeft.css';
import '../../UIcomponents/Button/Button.css';

const ProfileDetailLeft = ({photoUrl, country, city, age, lastActive, memberSince}) => {
    return (
                <section className='left-container'>
                    <div className='profiledetail-img-container'>
                        <img src={photoUrl} className='profiledetail-img' />
                    </div>
                    <div className='profiledetail-text-container'>
                        <p><strong>Location:</strong></p>
                        <p>{country}, {city}</p>
                        <p><strong>Age:</strong></p>
                        <p>{age}</p>
                        <p><strong>Last active:</strong></p>
                        <p>{lastActive}</p>
                        <p><strong>Member since:</strong></p>
                    <   p>{memberSince}</p>
                    </div>
                    <div className='profile-button-container'>
                        <input type='submit' 
                            form='editUserDetailForm' 
                            disabled={false} 
                            className='save-changes-button' 
                            value='Save changes' />
                    </div>
                </section>
    );
}

export default ProfileDetailLeft;