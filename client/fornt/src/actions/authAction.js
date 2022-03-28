import {SET_CURRENT_USER,SET_LOADING,UNSET_LOADING,SET_THEME} from './actionTypes'
import axios from 'axios'
import axiosInstance from '../axios';

export const loginUser=(email,password)=>(dispatch)=>{
    dispatch(setLoading(true));
   axios.post('http://localhost:5000/login',{email,password}).then((res)=>{
    localStorage.setItem('sapience',res.data.token);
    dispatch(setLoading(false));
    dispatch(set_current_user(res.data.user));
   }).catch(()=>{
       dispatch(setLoading(false));
   })   
}

export const checkCurrentUser=()=>(dispatch)=>{
    dispatch(setLoading(true));
    axiosInstance.get('http://localhost:5000/validateToken').then((res)=>{
        dispatch(set_current_user(res.data));
        dispatch(setLoading(false));
    }).catch((err)=>{
        dispatch(setLoading(false));
    }) 
}

export const setTheme=(theme)=>(dispatch)=>{
    dispatch(setLoading(true));
    axiosInstance.get(`http://localhost:5000/changeTheme/${theme}`).then((res)=>{
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