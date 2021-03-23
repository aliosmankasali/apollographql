import React, { useReducer, createContext} from 'react';
import {userReducer} from './reducer'
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../config'
const token = jwt.sign({name:'apitoken'},JWT_SECRET,{expiresIn:86400})
const localUser = JSON.parse(localStorage.getItem('currentUser'));

const initialState ={
    user: localUser? localUser.user : null,
    id:localUser? localUser.id:"",
    isLogin: localUser? localUser.isLogin: {durum:false, message:"Oturum açılmadı"}
}

const Store = ({children})=>{
    const [state, dispatch] = useReducer(userReducer, initialState);
    return (
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}
export const Context = createContext(initialState);
export default Store;