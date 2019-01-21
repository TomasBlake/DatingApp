import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../Store/actions';
import NavButton from '../NavButton/NavButton';
import './ToggledNavBar.css';

class ToggledNavBar extends React.Component {
    logoutMethod = () => {
        this.props.onLogout();
    }
    render () {
    return (
            <nav className='toggle-nav-bar'>
                <NavButton blackVersion='true' path='/editprofile' title='Edit profile' />
                <hr className='line'></hr>
                <NavButton blackVersion='true' 
                path='/landpage' 
                title='Logout'
                clicked={this.logoutMethod} />
            </nav>);
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(actionCreators.logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToggledNavBar));