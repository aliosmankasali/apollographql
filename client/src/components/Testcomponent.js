import { useEffect, useContext } from 'react';
//import { useQuery, useMutation} from '@apollo/client';
//import {useSetRecoilState, useRecoilValue} from 'recoil'
//import {testAtom, currentUser} from '../states/atom';
import {Context} from '../states/store';
import Button from '@material-ui/core/Button'
import {LOGIN_MUTATION} from  '../querys'

export const Testcomponent = (props) => {
    const [state,dispatch] = useContext(Context);
    
    useEffect(()=>{
        console.log(state)
    })
    const onClick = ()=>{
         console.log(state)
         
    }
    return (
        
        <div>
           
            <Button variant="contained" color="primary" onClick={onClick}>Giriş</Button>
            </div>
    )

}

