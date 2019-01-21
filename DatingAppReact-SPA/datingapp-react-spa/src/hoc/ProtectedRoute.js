import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({component: Component, signedIn, ...rest}) => (
    <Route {...rest} render={(props) => {
        return signedIn ? <Component {...props} /> : <Redirect to='/landpage' />
    }}/>
)

export default ProtectedRoute; 