import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import Logo from '../Logo/Logo';
import LoggedinNav from '../LoggedinNav/LoggedinNav';
import LoggedoutNav from '../LoggedoutNav/LoggedoutNav';

class Header extends React.Component {
    render () {
        return(<header className='header'>
                    <div className='header-container'>
                        <Logo />
                        {this.props.signedIn ? <LoggedinNav />  : <LoggedoutNav />}
                    </div>
                </header>);
    }
}

const mapStateToProps = state => ({
    signedIn: state.customReducer.signedIn
})

export default connect(mapStateToProps, null)(Header);