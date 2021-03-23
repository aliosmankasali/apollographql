import React from 'react';
import {AppBar,Toolbar, makeStyles} from '@material-ui/core';
import {useStyle} from './style/LayoutStyle'

const Header = (props)=>{
    const classes = useStyle();
    const displayDesktop = () => {
        return(
            <Toolbar>Header Sayfası Deneme</Toolbar>
        )
    }

    return (
        <>
        <AppBar className={classes.appBar}>{displayDesktop()}</AppBar>
        </>
    )
}
export default Header;