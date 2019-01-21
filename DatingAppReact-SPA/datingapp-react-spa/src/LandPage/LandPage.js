import React from 'react';
import LandPageButton from './LandPageButton/LandPageButton';
import './LandPage.css';

const LandPage = () => {
    return(<article className='mainpage'>
            <h1 style={{fontSize: '40px'}}>Find your match</h1>
            <p style={{fontSize: '20px', margin: '10px'}}>Come on in to view your matches... All you need to do is sign up!</p>
            <div className='button-container'>
                <LandPageButton type='register-button' path='/landpage' title='Registration' />
                <LandPageButton type='learnmore-button' path='/landpage' title='Learn more' />
            </div>
            </article>);
}

export default LandPage;