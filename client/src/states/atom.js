import {atom} from 'recoil';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../config'
const token = jwt.sign({name:'apitoken'},JWT_SECRET,{expiresIn:86400})
export const authApi = atom({
    key:"authApi",
    default:{
        token:token
    }
})


  export const currentUser = atom({
    key: 'currentUser',
    default:{
      token:"",
      user:{},
      isLogin:{
          durum:false,
          message:""
      }
  },
  
  });

  export const testAtom = atom({
    key:'testAtom',
    default:{}
  })
/* 
export const authUser = atom({
    key:"authUser",
    default:{
        token:"",
        user:{},
        isLogin:{
            durum:false,
            message:""
        }
    }
}) */