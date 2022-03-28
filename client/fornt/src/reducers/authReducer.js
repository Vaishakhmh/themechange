import {SET_CURRENT_USER,SET_LOADING,UNSET_LOADING,SET_THEME} from '../actions/actionTypes'

const initialState={
    isAuthenticated:false,
    user:{},
    loading:false
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
        default:
            return state;
    }
}



export default authReducer;