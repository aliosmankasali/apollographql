import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../../querys'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  
  const [ formData,setFormData] = useState();
  const history = useHistory();
  
  const [login] = useMutation(LOGIN_MUTATION);
 
  const chageImputHandler = (e) => {
    let name= e.target.name;
    let value = e.target.value;
     setFormData(
      {...formData, [name]:value}
    ) 
  }
  const loginSubmit = (e)=>{
    e.preventDefault();
    login({variables: {username:formData.username,password:formData.password}}).then((data) => {
      const loginUser =  data.data.login
      localStorage.setItem('currentUser', JSON.stringify(loginUser));
      history.push('/');
       
    })
  } 
  const classes = useStyles();
  return (
    
    <Container component="main" maxWidth="xs">
      
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={loginSubmit}  >
          <TextField
          onChange={chageImputHandler}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Kullanıcı Adı"
            name="username"
            autoComplete="email"
            autoFocus
          />
          <TextField
          onChange={chageImputHandler}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Parola"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="hatirla" color="primary" />}
            label="Beni Hatırla"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Giriş
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Parolamı Unuttum
              </Link>
            </Grid>

          </Grid>
        </form>
      </div>
      <Box mt={8}>

      </Box>
    </Container>
  );
}