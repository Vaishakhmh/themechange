import {SET_CURRENT_USER,SET_LOADING,UNSET_LOADING,SET_THEME,SET_ERR,USER_REG} from '../actions/actionTypes'

const initialState={
    isAuthenticated:false,
    user:{},
    loading:false,
    error:'',
    registered:false,
}
const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_CURRENT_USER:{
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        }
        case SET_LOADING:{
            return{
                ...state,
                loading:true
            }
        }
        case UNSET_LOADING:{
            return{
                ...state,
                loading:false
            }
        }
        case SET_THEME:{
            return{
                ...state,
               user:{
                   ...state.user,
                   theme:action.payload
               }
            }
        }
        case SET_ERR:{
            return{
                ...state,
                error:action.payload
            }
        }
        case USER_REG:{
            return {
                ...state,
                registered:true
            }
        }
        default:
            return state;
    }
}



export default authReducer;