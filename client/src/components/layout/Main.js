import React from 'react';
import Header from './Header'
import SideMenu from './SideMenu'
import {useStyle} from './style/LayoutStyle';
import CssBaseline from '@material-ui/core/CssBaseline'

const Main = (props)=>{
const classes = useStyle()
    return (
        <>
        <div className={classes.root}>
            <CssBaseline/>
        <Header/>
       
        <SideMenu/>
       
        
        
        <div>{props.children}</div>

        </div>
        </>
    )
}
export default Main;