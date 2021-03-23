import React ,{useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom';
import {Context} from '../../states/store'

 const Logout = ()=>{
    const [userState, dispatch] = useContext(Context);
    useEffect(() => {
        dispatch({type:'LOGIN_LOGOUT'})
        localStorage.clear();

    })

    return(
        <Redirect to="/" />
    )
}
export default Logout;