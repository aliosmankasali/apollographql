import {makeStyles} from '@material-ui/core/styles';

const drawerWidth= 240;
export const useStyle = makeStyles((theme)=>({
    root: {
        display:'flex'
    },
    appBar:{
        zIndex:theme.zIndex.drawer +1
    },
    drawer:{
        width:drawerWidth,
        flexShrink:0
    },
    drawerPaper:{
        width:drawerWidth
    },
    drawerContainer:{
        overflow:'auto'
    }

}))



/* makeStyles((theme)=>{
    root: {
        display:'flex'
    },
    appBar:{
        zIndex:theme.zIndex.drawer +1
    },
    drawer:{
        width:drawerWidth
    },
    drawerPaper:{
        width:drawerWidth
    },
    drawerContainer:{
        overflow:'auto'
    }

}) */