import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import LandPage from './LandPage/LandPage';
import Matches from './Matches/Matches';
import Lists from './Lists/Lists';
import Messages from './Messages/Messages';
import ProfileDetail from './ProfileDetail/ProfileDetail';
import * as actionCreators from './Store/actions';
import ProtectedRoute from './hoc/ProtectedRoute';
import EditProfile from './EditProfile/EditProfile';

class App extends Component {
  
  componentDidMount () {
    this.props.onloadUserFromToken();
  }
  
  render() {
    const routes = (
      <Switch>
      <ProtectedRoute path='/matches' signedIn={this.props.signedIn} component={Matches} />
      <ProtectedRoute path='/lists' signedIn={this.props.signedIn} component={Lists} />
      <ProtectedRoute path='/messages' signedIn={this.props.signedIn} component={Messages} />
      <ProtectedRoute path='/profiledetail/:id' signedIn={this.props.signedIn} component={ProfileDetail} />
      <ProtectedRoute path='/editprofile' signedIn={this.props.signedIn} component={EditProfile} />
      <Route path='/landpage' component={LandPage} />
      <Route path='/' component={LandPage} />
      </Switch>
    )
    return (
      <div className="App">
      <Layout>
        {routes}
      </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signedIn: state.customReducer.signedIn
})

const mapDispatchToProps = dispatch => ({
  onloadUserFromToken: () => {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user')
    if (!token || token === '' || !user || user === '') {
    return; 
  } else {
    user = JSON.parse(user);
    return dispatch(actionCreators.loadUserFromToken(user));
  }
  
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
