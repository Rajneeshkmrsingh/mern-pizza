import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Link, useNavigate, Outlet } from "react-router-dom";

const AdminScreen = () => {
  //const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userState = useSelector((store) => store.userLoginReducer.currentUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userState.isAdmin) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <div className="container mx-auto admin">
        <h1 className="text-center">Admin Panel</h1>
        <div className="adminnav row my-2 ">
          <div className="col-md-10 col-12 mx-auto justify-content-center ">
            <ul className="d-flex my-2 justify-content-center">
              <li>
                <Link to="/admin/userlist" className="adminLink">
                  UserList
                </Link>
              </li>
              <li>
                <Link to="/admin/orderlist" className="adminLink">
                  OrderList
                </Link>
              </li>
              <li>
                <Link to="/admin/pizzalist" className="adminLink">
                  PizzaList
                </Link>
              </li>
              <li>
                <Link to="/admin/addpizza" className="adminLink">
                  AddPizza
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminScreen;
