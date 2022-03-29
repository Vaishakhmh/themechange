import {useEffect} from 'react'
import './App.css';
import {checkCurrentUser} from './actions/authAction'
import Login from './pages/login'
import Home from './pages/home'
import {Routes,BrowserRouter,Route,Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import Signup from './pages/signup'



function App(props) {
  useEffect(()=>{
     props.checkCurrentUser();
  },[])
  const auth=props.auth.isAuthenticated;
  return (
          <BrowserRouter>
    {auth?<Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="*" element={<Navigate replace to="/"/>}/>
    </Routes>:
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
      }
      </BrowserRouter>
  );
}

const mapStateToProps=(state)=>({
   auth:state.authReducer
})
const mapDispatchToProps=(dispatch)=>({
  checkCurrentUser:()=>dispatch(checkCurrentUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
