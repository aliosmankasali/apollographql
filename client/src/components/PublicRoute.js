import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Context} from '../states/store';



const PublicRoute = ({component: Component, restricted=false, ...rest}) => {
    const [auth,dispatch] = useContext(Context);
   
    return(
        
        <Route {...rest} render={props => (
            (
                auth.isLogin.durum  && restricted ? <Redirect to="/" />
                    : <Component {...props} />
                
            )
       )} /> 
    )

}

export default PublicRoute;