import React from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {logoutuser} from "../actions/userAction";

const Navbar = () => {
  const cartState = useSelector((store)=>store.cartReducer)
  let statelength= cartState.cartItems.length;
  const dispatch = useDispatch();
  
  /* const userState = useSelector((store)=>store.userLoginReducer.currentUser);
  console.log(userState) */
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
 
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            PIZ<span>zza</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><i class="fa-solid fa-bars" style={{fontSize:"28px"}} /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* navbtn */}
                {currentUser?(
                  <div className="dropdown">
                  <button
                    className="dropdown-toggle navbtn"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   {currentUser.name}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="/order">
                        Orders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={()=>dispatch(logoutuser())}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
                ):(<Link to="/login" className="nav-link">
                Login
              </Link>)}
                {/* navbtn */}
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart {statelength === 0 ? "" : statelength}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
