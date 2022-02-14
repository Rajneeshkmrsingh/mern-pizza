import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import Register from "./screen/Register";
import Login from "./screen/Login";
import OrderScreen from "./screen/OrderScreen";
import AdminScreen from "./screen/AdminScreen";
import AddPizza from "./screen/AddPizza";
import OrderList from "./screen/OrderList";
import UserList from "./screen/UserList";
import PizzasList from "./screen/PizzasList";
import EditPizza from "./screen/EditPizza";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<OrderScreen />} />
          <Route path="admin" element={<AdminScreen />}>
            <Route path="" element={<UserList />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="orderlist" element={<OrderList />} />
            <Route path="pizzalist" element={<PizzasList />} />
            <Route path="addpizza" element={<AddPizza />} />
            <Route path="editpizza" element={<EditPizza />}>
              <Route path=":pizzaid" element={<EditPizza />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
