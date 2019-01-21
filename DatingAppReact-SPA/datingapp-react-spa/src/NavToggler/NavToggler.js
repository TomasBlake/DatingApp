import React from 'react';
import './NavToggler.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import ToggledNavBar from '../ToggledNavBar/ToggledNavBar';
import { connect } from 'react-redux';   

class NavToggler extends React.Component {
    state = {
        showNavBar: false
    }

    componentDidMount () {
        document.addEventListener('click', this.clickHandler, false);
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.clickHandler, false);
    }

    clickHandler = (e) => {
        if (this.node.contains(e.target)) {
            this.setState({showNavBar: !this.state.showNavBar});    
        } else {
            this.setState({showNavBar: false})
        }
    }
    
    render () {
        console.log('[SHOWNAVBAR]', this.state.showNavBar);
    return (<div className='nav-toggler-container'>
                <div
                ref={node => this.node = node}
                className='nav-toggler'>
                <img src={this.props.currentUser.photoUrl} className='nav-image' />
                <li style={{display: 'inline-block', textTransform: 'capitalize'}}>Welcome {this.props.currentUser.username}</li>
                <FontAwesomeIcon 
                icon={faArrowAltCircleDown} 
                style={{marginLeft: '5px'}} />
                </div>
                {this.state.showNavBar ? <ToggledNavBar /> : null}
            </div>
    );
    }
}

const mapStateToProps = state => ({
    currentUser: state.customReducer.currentUser
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NavToggler);