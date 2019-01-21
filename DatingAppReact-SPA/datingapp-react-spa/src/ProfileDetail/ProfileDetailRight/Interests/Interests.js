import React from 'react';

const Interests = (props) => {
    return(
        <div style={{textAlign: 'left', padding: '0px 30px 0 30px'}}>
        <h2>Interests</h2>
        <p>{props.interests}</p>
        </div>
    );
}

export default Interests;