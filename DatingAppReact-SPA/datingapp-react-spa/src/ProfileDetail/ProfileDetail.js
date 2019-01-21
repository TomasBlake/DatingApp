import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ProfileDetail.css';
import ProfileDetailLeft from './ProfileDetailLeft/ProfileDetailLeft';
import ProfileDetailRight from './ProfileDetailRight/ProfileDetailRight';
import * as actionCreators from '../Store/actions';

class ProfileDetail extends React.Component {
    
    componentDidMount () {
        const id = this.props.match.params.id;
        this.props.onGetUser(id);
    }
    
    render () {
        return (
            <>
            {(this.props.selectedUser !== null) ?
            (<article className='profiledetail-container'>
                <header className='profiledetail-header'>
                    <h1>{this.props.selectedUser.knownAs}'s profile</h1>
                </header>
                <div style={{display: 'flex'}}>
                <ProfileDetailLeft photoUrl={this.props.selectedUser.photoUrl}
                country={this.props.selectedUser.country}
                city={this.props.selectedUser.city}
                age={this.props.selectedUser.age}
                memberSince={this.props.selectedUser.created}
                lastActive={this.props.selectedUser.lastActive} />
                <ProfileDetailRight aboutUser={{
                    introduction: this.props.selectedUser.introduction,
                    lookingFor: this.props.selectedUser.lookingFor
                    }}
                interests={this.props.selectedUser.interests}
                photos={this.props.selectedUser.photos}
                knownAs={this.props.selectedUser.knownAs} />
                </div>
            </article>)
             : (<h1>Loading user...</h1>)}
             </>
        );
    }
}

const mapStateToProps = state => ({
    selectedUser: state.customReducer.selectedUser
})

const mapDispatchToProps = dispatch => ({
    onGetUser: (id) => dispatch(actionCreators.getUser(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileDetail));