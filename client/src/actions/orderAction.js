import axios from "axios";

export const placeorder = (subtotal,token)=>async (dispatch,getState)=>{
    
    dispatch({type:"PLACE_ORDER_REQUEST"});
    const cartItems = getState().cartReducer.cartItems;
    const currentUser = getState().userLoginReducer.currentUser
    try {
         await axios.post("/api/orders/placeorder",{subtotal,token,cartItems,currentUser});
        dispatch({type:"PLACE_ORDER_SUCCESSS"})

    } catch (error) {
        dispatch({type:"PLACE_ORDER_ERROR",payload:error})
        
    }
}
export const getuserorders=()=>async(dispatch,getState)=>{
    dispatch({type:"GET_ORDERS_REQUEST"});
    try {
        const currentUser = getState().userLoginReducer.currentUser;
        const response =await axios.post("/api/orders/getorders",{userid:currentUser._id});
        dispatch({type:"GET_ORDERS_SUCCESS",payload : response.data})
    } catch (error) {
        dispatch({type:"GET_ORDERS_FAILED",payload : error})   
    }
}    
export const getalluserorders=()=>async(dispatch)=>{
    dispatch({type:"GET_ALL_ORDERS_REQUEST"});
    try {
    
        const response =await axios.get("/api/orders/getallorders");
        dispatch({type:"GET_ALL_ORDERS_SUCCESS",payload : response.data})
    } catch (error) {
        dispatch({type:"GET_ALL_ORDERS_FAILED",payload : error})   
    }
} 
   
export const orderDeliver=(orderid)=>async(dispatch)=>{
    dispatch({type:"ORDER_DELIVER_REQUEST"})
    try {
        await axios.post("/api/orders/orderdeliver",{orderid});
        alert("order delivered successfully.")
        const orders = await axios.get("/api/orders/getallorders") 
        dispatch({type:"ORDER_DELIVER_SUCCESS",payload : orders.data})
        window.location.reload()
    } catch (error) {
        dispatch({type:"ORDER_DELIVER_FAILED",payload : error})   
    }
} 
   