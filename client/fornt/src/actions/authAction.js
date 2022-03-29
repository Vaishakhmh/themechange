import {SET_CURRENT_USER,SET_LOADING,UNSET_LOADING,SET_THEME,SET_ERR,USER_REG} from './actionTypes'
import axiosInstance from '../axios';

export const loginUser=(email,password)=>(dispatch)=>{
    dispatch(setLoading(true));
    axiosInstance.post('/login',{email,password}).then((res)=>{
    window.localStorage.setItem('sapience',res.data.token);
    axiosInstance.defaults.headers.common['Authorization']="Bearer:"+res.data.token;
    console.log(axiosInstance.defaults.headers.common);
    dispatch(setLoading(false));
    dispatch(set_current_user(res.data.user));
   }).catch((err)=>{
       dispatch(setLoading(false));
       console.log(err.response);
       dispatch(validateError(err.response.data));
   })   
}

export const signupUser=(email,password,username)=>(dispatch)=>{
    dispatch(setLoading(true));
    axiosInstance.post('/register',{email,password,username}).then((res)=>{
        dispatch(setLoading(false));
        window.localStorage.setItem('sapience',res.data.token);
        axiosInstance.defaults.headers.common['Authorization']="Bearer:"+res.data.token;
        dispatch(set_current_user(res.data.user))
    }).catch((err)=>{
        dispatch(setLoading(false));
        dispatch(validateError(err.response.data.err.message));
    })
}

export const emptyError=()=>(dispatch)=>{
    dispatch(validateError(''));
}

export const registered=()=>()=>({
  type:USER_REG,
  action:true  
})


export const validateError=(data)=>({
   type:SET_ERR,
   payload:data
})

export const checkCurrentUser=()=>(dispatch)=>{
    dispatch(setLoading(true));
    axiosInstance.defaults.headers.common['Authorization']="Bearer:"+window.localStorage.getItem('sapience');
    axiosInstance.get('/validateToken').then((res)=>{
        dispatch(set_current_user(res.data));
        dispatch(setLoading(false));
    }).catch((err)=>{
        dispatch(setLoading(false));
    }) 
}

export const setTheme=(theme)=>(dispatch)=>{
    dispatch(setLoading(true));
    axiosInstance.get(`/changeTheme/${theme}`).then((res)=>{
        dispatch(set_theme(theme));
        dispatch(setLoading(false));
    }).catch((err)=>{
        dispatch(setLoading(false));
    })
}

export const set_theme=(theme)=>({
    type:SET_THEME,
    payload:theme
})

export const set_current_user=(data)=>({
   type:SET_CURRENT_USER,
   payload:data
})

export const setLoading=(identifier)=>({
    type:identifier===true?SET_LOADING:UNSET_LOADING
})