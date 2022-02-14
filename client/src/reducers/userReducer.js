const initialState = {}
export const userRegisterReducer = (state=initialState, action)=>{
switch(action.type){
    case "REGISTER_REQUEST": return {
        loading:true
    }
    case "REGISTER_SUCCESS": return{
        loading:false,
        success:true
    }
    case "REGISTER_FAILED":return {
        loading:false,
        error:action.payload

    }
    default:return state;
}
};
const initialvalue = {}
export const userLoginReducer = (state=initialvalue,action)=>{
    switch(action.type){
        case "LOGIN_REQUEST":return{
            loading:true
        }
        case "LOGIN_SUCCESS":return {
            loading:false,
            success:true,
            currentUser:action.payload
        }
        case "LOGIN_FAILED": return {
            loading:false,
            error:action.payload
        }
        default:return state
    }
}

export const getAllUsersReducer = (state={users:[]},action)=>{
    switch(action.type){
        case "GET_USERS_REQUEST" : return {
            loading:true,
            ...state
        };
        case "GET_USERS_SUCCESS" : return{
            loading:false,
            users:action.payload
        };
        case "GET_USERS_FAILED" :return{
            loading:false,
            error:action.payload
        };
        default:return state;
    }
}