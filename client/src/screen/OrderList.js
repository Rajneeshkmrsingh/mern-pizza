import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getalluserorders } from "../actions/orderAction";
import { orderDeliver } from "../actions/orderAction";
import Loading from "../components/Loading";
import Error from "../components/Error";
//import Success from "../components/Success";

const OrderList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getalluserorders());
  }, [dispatch]);
  const orderState = useSelector((store) => store.getAllOrderReducer);
  const { error, loading, orders } = orderState;
  return (
    <div>
      <div className="row justify-content-center">
        <h1
          style={{
            fontSize: "30px",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          Order List
        </h1>
        {loading && (
          <div className="text-center">
            <Loading />
          </div>
        )}
        {error && <Error error="There is some error." />}
        <div className="col-md-12 table-responsive-sm">
          <table className="table">
            <thead className="table-dark">
              <tr className="table-bordered">
                <td>Order Id</td>
                <td>Email </td>
                <td>User Id </td>
                <td>Amount</td>
                <td>Date</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((orders, id) => {
                  return (
                    <>
                      <tr key={id}>
                        <td>{orders._id}</td>
                        <td>{orders.email}</td>
                        <td>{orders.userid}</td>
                        <td>{orders.orderAmount}</td>
                        <td>{orders.createdAt.substr(0, 10)}</td>
                        <td>
                          {!orders.isDelivered ? (
                            <button
                              className="formBtn"
                              onClick={() => dispatch(orderDeliver(orders._id))}
                            >
                              Deliver
                            </button>
                          ) : (
                            <h2 style={{ fontSize: "16px", color: "green" }}>
                              Delivered
                            </h2>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
