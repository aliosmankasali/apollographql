import React ,{useContext, useEffect, useState} from "react"
//import logo from './logo.svg';
//import { useRecoilValue, useRecoilState, useSetRecoilState} from 'recoil';
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink} from '@apollo/client';
import {BrowserRouter, Switch} from 'react-router-dom';

import {Testcomponent} from './components/Testcomponent';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './components/Home';
import LoginPage from './components/Admin/Login';
import Logout from './components/Admin/Logout';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from './config'

import './App.css';

const createApolloClient = (apiToken)=>{
    return new ApolloClient({
      link: new HttpLink({
        uri:'http://localhost:3001/grapi',
        headers:{
          Authorization: `Bearer ${apiToken}`
        }
      }),
      cache: new InMemoryCache(),
    })
}


function App() {
  const token = jwt.sign({name:'apitoken'},JWT_SECRET,{expiresIn:86400})
  const [apiToken,setApiToken] = useState(token)
  const client = createApolloClient(apiToken)
  //const setTestAtom = useSetRecoilState(testAtom);
  useEffect(() => {
console.log()
  })
  return (
    
    <ApolloProvider client={client}>
      
      <BrowserRouter>
        <Switch>
        
        <PublicRoute   component={Home} path="/" exact/>
        <PublicRoute restric={false}  path="/logout" component={Logout} />
        <PublicRoute restricted={true} path="/login" component={LoginPage} />
        <PrivateRoute  component={Testcomponent} path="/test" />
        
        </Switch>
      </BrowserRouter>
      
      </ApolloProvider>
     

  );
}

export default App;
