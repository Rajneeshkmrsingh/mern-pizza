import axios from "axios";
export const registeruser=(user)=>async(dispatch)=>{
    dispatch({type:"REGISTER_REQUEST"})
    try {
        const response = await axios.post("api/users/register",user)
        console.log(response)
        dispatch({type:"REGISTER_SUCCESS"});
        window.location.href= "/login";
    } catch (error) {
        dispatch({type:"REGISTER_FAILED",payload:error})
    }

};
export const loginuser = (user)=>async (dispatch,getState)=>{
    dispatch({type:"LOGIN_REQUEST"});
    try {
        const res =await axios.post("/api/users/login",user);
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        const currentUser = await getState().userLoginReducer.currentUser;
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
        window.location.href= "/";
        
    } catch (error) {
        dispatch({type:"LOGIN_FAILED",payload:error})    
    }
}

export const logoutuser = ()=>()=>{
    localStorage.setItem("currentUser",null);
    window.location.href= "/login";
};
export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: "GET_USERS_REQUEST" });
    try {
      const response = await axios.get("/api/users/getallusers");
      dispatch({ type: "GET_USERS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "GET_USERS_FAILED", payload: error });
    }
  };

  export const deleteUsers = (userid) => async (dispatch) => {
  
    try {
    const response = await axios.post("/api/users/deleteuser",{userid})
    alert("User deleted successfully");
    console.log(response)
    window.location.reload()
    } catch (error) {
      console.log(error)
    }
  };