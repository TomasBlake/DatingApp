import React from 'react';
import { connect } from 'react-redux';
import ProfileCard from '../ProfileCard/ProfileCard';
import * as actionCreators from '../Store/actions';
import './Matches.css';

class Matches extends React.Component {
    componentDidMount () {
        this.props.onGetProfileCards();
    }
    render () {
    return(
        <div className='matches-container'>
            {this.props.users.length ? this.props.users.map(user => {
                return <ProfileCard photoUrl={user.photoUrl} 
                key={user.id}
                id={user.id}
                name={user.username} 
                age={user.age}
                city={user.city} /> 
            }) : 'Loading users...'}
        </div>);
    }
}

const mapStateToProps = state => ({
    users: state.customReducer.users
})

const mapDispatchToProps = dispatch => ({
    onGetProfileCards: () => dispatch(actionCreators.getUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Matches); 