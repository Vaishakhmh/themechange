import {useEffect} from 'react'
import './App.css';
import {checkCurrentUser} from './actions/authAction'
import Login from './pages/login'
import Home from './pages/home'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import {connect} from 'react-redux'



function App(props) {
  useEffect(()=>{
     props.checkCurrentUser();
  },[])
  const auth=props.auth.isAuthenticated;
  return (
          <BrowserRouter>
    {auth?<Routes>
        <Route exact path="/" element={<Home/>}/>
    </Routes>:
    <Routes>
      <Route exact path="/" element={<Login/>}/>
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
