import React from 'react';

import {Drawer, List, ListItem,ListItemIcon, ListItemText, Toolbar} from '@material-ui/core';
import {useStyle} from './style/LayoutStyle'
const SideMenu = (props)=>{
const classes = useStyle();
  return  ( 
      <>
  <Drawer className={classes.drawer}
    variant="permanent"
    anchor="left"
   classes={{
       paper:classes.drawerPaper
   }}
    >
        <Toolbar />
        Deneme
    </Drawer>
    </>
    )
}
export default SideMenu;