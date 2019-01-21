import React from 'react';

const AboutUser = (props) => {
    return(
        <div style={{textAlign: 'left', padding: '0px 30px 0 30px'}}>
        <h2>Description</h2>
        <p>{props.aboutUser.introduction}</p>
        <h2>Looking for</h2>
        <p>{props.aboutUser.lookingFor}</p>
        </div>
    );
}

export default AboutUser;