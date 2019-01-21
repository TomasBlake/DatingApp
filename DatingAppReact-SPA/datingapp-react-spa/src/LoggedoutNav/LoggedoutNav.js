import React from 'react';
import './LoggedoutNav.css';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import * as actionCreators from '../Store/actions';

class LoggedoutNav extends React.Component {
    state = {
        userNameInput: '',
        passwordInput: ''
    }

    inputChangeHandler = (event) => {
        if (event.target.name === 'UserName') {
            this.setState({userNameInput: event.target.value});    
        } else if (event.target.name === 'Password') {
            this.setState({passwordInput: event.target.value});
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const payload = {
            username: this.state.userNameInput,
            password: this.state.passwordInput
        }
        this.props.onSubmit(payload, this.props.history);
    }
    
    render () {
    return (
        <nav className='form-container'>
        <form onSubmit={this.submitHandler}>
            <input type='text' 
            className='form-input'
            name='UserName' 
            placeholder='User Name'
            onChange={this.inputChangeHandler} />
            <input type='password' 
            className='form-input'
            name='Password' 
            placeholder='Password'
            onChange={this.inputChangeHandler} />
            <input type='submit' value='Login' className='form-submit'/>
        </form>
        </nav>
    );
}
}

const mapStateToProps = state => ({
 
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (payload, history) => dispatch(actionCreators.submit(payload, history))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoggedoutNav));