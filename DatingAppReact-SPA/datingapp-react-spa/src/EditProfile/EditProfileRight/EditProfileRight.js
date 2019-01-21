import React from 'react';
import Button from '../../UIcomponents/Button/Button';
import { Switch, Route, withRouter } from 'react-router-dom';
import EditAboutUser from './EditAboutUser/EditAboutUsers';
import EditPhotos from './EditPhotos/EditPhotos';
import './EditProfileRight.css';

const ProfileDetailRight = (props) => {
    return (
                <section className='right-container'>
                    <header className='profiledetailright-header'>
                        <Button 
                        path={'/editprofile'}
                        className='profilepartbutton'
                        activeClassName='active-profilepartbutton'>
                            Edit Profile
                        </Button>
                        <Button 
                        path={'/editprofile/editphotos'}
                        className='profilepartbutton'
                        activeClassName='active-profilepartbutton'>
                            Edit photos
                        </Button>
                    </header>
                    <div className='profiledetailright-main'>
                        <Switch>
                            <Route path='/editprofile' 
                            exact render={(routeProps) => <EditAboutUser {...routeProps} 
                            aboutUser={props.aboutUser} 
                            changed={props.changed} 
                            onSubmit={props.onSubmit} />} />
                            <Route path='/editprofile/editphotos' 
                            exact
                            render={(routeProps) => <EditPhotos {...routeProps} 
                            photos={props.photos} />} />
                        </Switch>
                    </div>
                </section>
    );
}

export default withRouter(ProfileDetailRight);