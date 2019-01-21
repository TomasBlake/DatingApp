import React from 'react';
import ProfilePartButton from './ProfilePartButtton/ProfilePartButton';
import { withRouter, Switch, Route } from 'react-router-dom';
import AboutUser from './AboutUser/AboutUsers';
import Interests from './Interests/Interests';
import Photos from './Photos/Photos';
import './ProfileDetailRight.css';
import Messages from './Messages/Messages';

const ProfileDetailRight = (props) => {
    return (
                <section className='right-container'>
                    <header className='profiledetailright-header'>
                        <ProfilePartButton path={'/profiledetail/' + props.match.params.id + '/aboutuser'} title={'About ' + props.knownAs} />
                        <ProfilePartButton path={'/profiledetail/'+ props.match.params.id +'/interests'} title='Interests' />
                        <ProfilePartButton path={'/profiledetail/'+ props.match.params.id +'/photos'} title='Photos' />
                        <ProfilePartButton path={'/profiledetail/'+ props.match.params.id +'/messages'} title='Messages' />
                    </header>
                    <div className='profiledetailright-main'>
                        <Switch>
                            <Route path='/profiledetail/:id' exact render={(routeProps) => <AboutUser {...routeProps} aboutUser={props.aboutUser} />} />
                            <Route path='/profiledetail/:id/aboutuser' exact render={(routeProps) => <AboutUser {...routeProps} aboutUser={props.aboutUser} />} />
                            <Route path='/profiledetail/:id/interests' render={(routeProps) => <Interests {...routeProps} interests={props.interests} />} />
                            <Route path='/profiledetail/:id/photos' render={(routeProps) => <Photos {...routeProps} photos={props.photos} />} />
                            <Route path='/profiledetail/:id/messages' render={(routeProps) => <Messages {...routeProps} />} />
                        </Switch>
                    </div>
                </section>
    );
}

export default withRouter(ProfileDetailRight);