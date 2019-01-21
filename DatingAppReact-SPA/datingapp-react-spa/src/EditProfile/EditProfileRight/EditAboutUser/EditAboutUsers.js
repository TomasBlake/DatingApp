import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './EditAboutUser.css';

let AboutUserForm = (props) => {
    const { handleSubmit } = props;
    console.log('[PROPS]', props);
    return(
            <form style={{textAlign: 'left', padding: '0px 30px 0 30px'}} 
            id='editUserDetailForm' 
            onSubmit={handleSubmit(props.onSubmit)}>
                <label htmlFor='introduction'>Description</label>
                <Field name='introduction' 
                    component='textarea' 
                    type='text' 
                    onChange={props.changed} 
                    value={props.aboutUser.introduction}></Field>
                <label htmlFor='lookingFor'>Looking for</label>
                <Field name='lookingFor' 
                    component='textarea' 
                    type='text' 
                    onChange={props.changed} 
                    value={props.aboutUser.lookingFor}></Field>
                <label htmlFor='interests'>Interests</label>
                <Field name='interests' 
                    component='textarea' 
                    type='text' 
                    onChange={props.changed} 
                    value={props.aboutUser.interests}></Field>
                <h2>Location details:</h2>
                <label htmlFor='city'>City</label>
                <Field name='city' 
                    component='textarea' 
                    type='text' 
                    onChange={props.changed} 
                    value={props.aboutUser.city}></Field>
                <label htmlFor='country'>Country</label>
                <Field name='country' 
                    component='textarea' 
                    type='text' 
                    onChange={props.changed} 
                    value={props.aboutUser.country}></Field>
            </form>
    );
}

AboutUserForm = reduxForm({
    form: 'editUserDetailForm'
})(AboutUserForm)

AboutUserForm = connect(
    state => ({
        initialValues: state.customReducer.currentUserDetail
    })
)(AboutUserForm)

export default AboutUserForm;