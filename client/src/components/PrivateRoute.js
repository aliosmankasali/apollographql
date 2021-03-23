import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Context} from '../states/store'
import {currentUser} from '../states/atom';
//import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, ...rest}) => {
    const [auth,dispatch] = useContext(Context);
  
    return(
        <Route {...rest} render={props => (
            (
                
                auth.isLogin.durum ? <Component {...props} /> : <Redirect to="/login/" />
            )
        )} />
    )
}


export default PrivateRoute;