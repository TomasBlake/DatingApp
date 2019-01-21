import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditProfileLeft from './EditProfileLeft/EditProfileLeft';
import EditProfileRight from './EditProfileRight/EditProfileRight';
import * as actionCreators from '../Store/actions';

class EditProfile extends React.Component {
    
    componentDidMount () {
        this.props.onGetCurrentUserDetail(this.props.user.id);
    }

    onChangeHandler = (event) => {
        const editedUser = {
            ...this.props.userDetail,
            [event.target.name]: event.target.value
        }
        this.props.onEditUserDetail(editedUser);
    }

    onSubmit = (values) => {
        console.log('SUBMITING...');
        console.log('[Values]',values);
        const updatedUserForSubmit = {
            ...this.props.userDetail,
            ...values
        }
        console.log('[INITIALDATA]', this.props.userDetail);
        console.log('[FORSUBMIT]', updatedUserForSubmit);
        this.props.onSubmitUpdatedUserDetail(this.props.userDetail);
    }
    
    render () {
        return (
            <>
            {this.props.userDetail !== null ? <article className='profiledetail-container'>
                <header className='profiledetail-header'>
                    <h1>{this.props.knownAs}'s profile</h1>
                </header>
                <div style={{display: 'flex'}}>
                    <EditProfileLeft photoUrl={this.props.user.photoUrl}
                        country={this.props.user.country}
                        city={this.props.user.city}
                        age={this.props.user.age}
                        memberSince={this.props.user.created}
                        lastActive={this.props.user.lastActive} />
                    <EditProfileRight
                        aboutUser={{
                            introduction: this.props.userDetail.introduction,
                            lookingFor: this.props.userDetail.lookingFor,
                            interests: this.props.userDetail.interests,
                            photos: this.props.userDetail.photos,
                            knownAs: this.props.user.knownAs,
                            country: this.props.userDetail.country,
                            city: this.props.userDetail.city
                        }}
                        onSubmit={this.onSubmit}
                        changed={(event) => this.onChangeHandler(event)} />
                </div>
            </article> : <h1>User loading...</h1>}
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.customReducer.currentUser,
    userDetail: state.customReducer.currentUserDetail,
    //userDetailFromReduxForm: state.form.values
})

const mapDispatchToProps = dispatch => ({
    onGetCurrentUserDetail: (id) => dispatch(actionCreators.getCurrentUserDetail(id)),
    onEditUserDetail: (editedUser) => dispatch(actionCreators.editCurrentUserDetail(editedUser)),
    onSubmitUpdatedUserDetail: (user) => dispatch(actionCreators.submitUpdatedUserDetail(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));