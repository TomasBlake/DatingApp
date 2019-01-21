import jwtDecode from 'jwt-decode';
import * as actionTypes from './actionTypes';

export const submit = (payload, history) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SUBMIT_PENDING
        })
        fetch('http://localhost:5000/api/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)})
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    const decodedToken = jwtDecode(data.token);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('decodedToken', JSON.stringify(decodedToken));
                    localStorage.setItem('user', JSON.stringify(data));
                    history.replace('/matches');
                    dispatch({
                        type: actionTypes.SUBMIT_SUCCESS,
                        payload: data
                    })
                } else {
                    dispatch({
                        type: actionTypes.SUBMIT_FAIL,
                        payload: data
                    })     
                }
                
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.SUBMIT_FAIL,
                    payload: err
                })
            })
        }
    }

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('decodedToken');
    localStorage.removeItem('user');
    return {
        type: actionTypes.LOGOUT
    };
}

export const getUsers = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.GETUSERS_PENDING
        })
        fetch('http://localhost:5000/api/users', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length) {
                return dispatch({
                    type: actionTypes.GETUSERS_SUCCESS,
                    payload: data
                })
            } else {
                return dispatch({
                    type: actionTypes.GETUSERS_FAIL,
                    payload: data
                })
            }
        })
        .catch(err => dispatch({
            type: actionTypes.GETUSERS_FAIL,
            payload: err
        }))
    }
}

export const loadUserFromToken = (user) => ({
            type: actionTypes.LOAD_USER_FROM_TOKEN,
            payload: user
        })

export const getUser = (id) => {
  return dispatch => {
      dispatch({
          type: actionTypes.GET_USER_PENDING
      })
      fetch('http://localhost:5000/api/users/' + id, {
          method: 'get',
          headers : {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data.id){
          return dispatch({
          type: actionTypes.GET_USER_SUCCESS,
          payload: data
      })} else {
        return dispatch({
            type: actionTypes.GET_USER_FAIL,
            payload: data
        })
      }
    })
    .catch(error => dispatch({
        type: actionTypes.SUBMIT_FAIL,
        payload: error
    }))
  }  
}

export const getCurrentUserDetail = (id) => {
    return dispatch => {
        dispatch({
            type: actionTypes.GET_CURRENT_USER_DETAIL_PENDING
        });
        fetch('http://localhost:5000/api/users/' + id,{
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => response.json())
        .then(data => {
            if (data.id) {
                return dispatch({
                    type: actionTypes.GET_CURRENT_USER_DETAIL_SUCCESS,
                    payload: data
                })} else {
                return dispatch({
                    type: actionTypes.GET_CURRENT_USER_DETAIL_FAIL,
                    payload: data
                    })
                }
            }).catch(error => {
                return dispatch({
                    type: actionTypes.GET_CURRENT_USER_DETAIL_FAIL,
                    payload: error
                })
            })
    }
}

export const editCurrentUserDetail = (user) => ({
        type: actionTypes.EDIT_CURRENT_USER_DETAIL,
        payload: user
})

export const submitUpdatedUserDetail = (user) => {
    return dispatch => {
        console.log('[SUBMITING...]')
        dispatch({
            type: actionTypes.SUBMIT_UPDATED_USER_DETAIL_PENDING
        })
        fetch('http://localhost:5000/api/users/' + user.id, {
            method:'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                introduction: user.introduction,
                lookingFor: user.lookingFor,
                interests: user.interests,
                city: user.city,
                country: user.country,
            })
        }).then(response => { 
            console.log(response)
            if(response.status === 204){
                return dispatch({
                    type: actionTypes.SUBMIT_UPDATED_USER_DETAIL_SUCCESS
                })
            } else {
                return dispatch({
                    type: actionTypes.SUBMIT_UPDATED_USER_DETAIL_FAIL
                })
                }
            }).catch(error => {
                return dispatch({
                    type: actionTypes.SUBMIT_UPDATED_USER_DETAIL_FAIL
            })
        })
        }
}

