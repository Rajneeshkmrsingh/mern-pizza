
export const placeOrderReducer = (state={},action)=>{
switch(action.type){
    case "PLACE_ORDER_REQUEST": return {
        loading:true
    }
    case "PLACE_ORDER_SUCCESSS": return{
        loading:false,
        success:true
    }
    case "PLACE_ORDER_ERROR":return {
        loading:false,
        error:action.payload

    }
    default:return state;

}
}
export const getOrderReducer = (state={orders:[]},action)=>{
    switch(action.type){
        case "GET_ORDERS_REQUEST" : return {
            loading:true,
            ...state
        };
        case "GET_ORDERS_SUCCESS" : return{
            loading:false,
            success:true,
            orders:action.payload
        };
        case "GET_ORDERS_FAILED" :return{
            loading:false,
            error:true
        };
        default:return state;
    }
}

export const getAllOrderReducer = (state={orders:[]},action)=>{
    switch(action.type){
        case "GET_ALL_ORDERS_REQUEST" : return {
            loading:true,
            ...state
        };
        case "GET_ALL_ORDERS_SUCCESS" : return{
            loading:false,
            success:true,
            orders:action.payload
        };
        case "GET_ALL_ORDERS_FAILED" :return{
            loading:false,
            error:true
        };
        default:return state;
    }
};

export const orderDeliverReducer = (state={orders:[]},action)=>{
    switch(action.type){
        case "ORDER_DELIVER_REQUEST" : return {
            loading:true,
            ...state
        };
        case "ORDER_DELIVER_SUCCESS" : return{
            loading:false,
            success:true,
            orders:action.payload
        };
        case "ORDER_DELIVER_FAILED" :return{
            loading:false,
            error:true
        };
        default:return state;
    }
}