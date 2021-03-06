import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DP from '@mui/material/Avatar/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Image from '../download.png'
import { useState } from 'react';
import  {connect} from 'react-redux';
import { loginUser,emptyError } from '../actions/authAction';
import {useNavigate} from 'react-router-dom'




function Login(props){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const Navigate=useNavigate();

  const handleChange=(evt)=>{
       let value=evt.target.value;
       let identifier=evt.target.id;
       if(identifier==='email'){
         setEmail(value);
      }else{
        setPassword(value);
      }
  }
 
  const handleSubmit=()=>{
      props.loginUser(email,password)
  }

 return( <Grid container component="main" sx={{ height: '100vh' }}>
    <CssBaseline />
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundColor:'#0080ff',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
        <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyConten:'center'
        }}
      >
        <img src={Image}/>
        </Box>
    </Grid>
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <DP />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {props.auth.error!==""&&
        <Typography component="h5"color="red">{props.auth.error}</Typography>
      }
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={(e)=>handleChange(e)}
            autoFocus
          />
          <TextField
            type="password"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            onChange={(e)=>handleChange(e)}
            autoFocus
          />
          <LoadingButton
            fullWidth
            loading={props.auth.loading}
            sx={{ mt: 3, mb: 2 }}
            variant="contained"
            onClick={()=>handleSubmit()}
          >
            Sign In
          </LoadingButton>
          <Button onClick={()=>{props.emptyError();Navigate('/signup')}}>Switch to Signup</Button> 
          {props.auth.user.username &&
          <Typography>user registered please login to continuo</Typography>
          }
        </Box>
      </Box>
    </Grid>
  </Grid>
        
    )
}

const mapDispatchToProps=dispatch=>({
  loginUser:(email,password)=>dispatch(loginUser(email,password)),
  emptyError:()=>dispatch(emptyError())
})

const mapStateFromProps=(state)=>({
  auth:state.authReducer
})

export default  connect(mapStateFromProps,mapDispatchToProps)(Login);