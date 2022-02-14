import React, { useEffect } from "react";
import { getuserorders } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Error from "../components/Error";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OrderScreen = () => {
  AOS.init()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuserorders());
  }, []);
  const orderState = useSelector((store) => store.getOrderReducer);
  const { loading, error, orders } = orderState;
  console.log(orders);
  return (
    <>
      <div className="container mx-auto" data-aos="fade-left" >
        <h1 className="text-center">Orders</h1>
        <div className="row justify-content-center">
          <div className="col-md-12">
            {loading && (
              <div className="text-center pt-5">
                {" "}
                <Loading />
              </div>
            )}
            {error && <Error error="There is something error" />}
            {orders.map((order) => {
              return (
                <>
                  <div className="d-flex m-2 p-3" style={{backgroundColor:"red",color:"#fff",borderRadius:"5px"}} data-aos="fade-left">
                    <div className="w-100">
                      <h3 style={{ fontSize: "25px"}}>
                        Item
                      </h3><hr/>
                      {order.orderItems.map((item) => {
                        return (
                          <>
                            <p>{item.name} [{item.varient}] * {item.quantity} = {item.price}</p>
                          </>
                        );
                      })}
                    </div>
                    <div className="w-100">
                      <h3 style={{ fontSize: "25px"}}>
                        Address
                      </h3><hr/>
                      <p>Street:{order.shippingAddress.street}</p>
                      <p>city:{order.shippingAddress.city}</p>
                      <p>Country:{order.shippingAddress.country}</p>
                      <p>Pin:{order.shippingAddress.pincode}</p>
                    </div>
                    <div className="w-100">
                    <h3 style={{ fontSize: "25px"}}> Order Info
                      </h3><hr/>
                      <p>Order Amount: {order.orderAmount}</p>
                      <p>TransactionId: {order.transactionId}</p>
                      <p>ClientId: {order.userid}</p>
                      <p>Date: {order.createdAt.substr(0,10)}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
