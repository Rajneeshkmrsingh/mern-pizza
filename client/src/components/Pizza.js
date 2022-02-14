import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {addtocart} from "../actions/cartActions";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Modal } from "react-bootstrap";

const Pizza = ({ pizza }) => {
  AOS.init();
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarients] = useState("small");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

 

  function handleCart(){
    dispatch(addtocart(pizza,quantity,varient))
    
  } 

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column mainDiv shadow-lg p-3 mb-5 bg-white rounded" data-aos="zoom-in" key={pizza._id}>
        <div onClick={handleShow} className="handleClick">
          <h1 className="pizzaName">{pizza.name}</h1>
          <img
            src={pizza.image}
            className="pizzaImg img-fluid"
            alt={pizza.name}
          />
        </div>
        <div className="d-flex w-100 py-2">
          <div className="left w-100 m-2">
            <p className="text-center">Varients</p>
            <select
              className="form-select p-1"
              onChange={(e) => {
                return setVarients(e.target.value);
              }}
              value={varient}
            >
              {pizza.varients.map((size) => {
                return <option value={size}>{size}</option>;
              })}
            </select>
          </div>
          <div className="right w-100 m-2">
            <p className="text-center">Quantity</p>
            <select
              className="form-select p-1"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            >
              {[...Array(10).keys()].map((i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="d-flex w-100">
          <div className="w-100 m-2">
            <h2 className="price text-center p-1">
              Price: {pizza.prices[0][varient] * quantity} Rs/-
            </h2>
          </div>
          <div className="w-100 m-2 text-center">
            <button className="cart text-center p-1" onClick={handleCart}> ADD TO CART</button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex justify-content-center align-items-center flex-column">
          <img src={pizza.image} alt={pizza.name} style={{width:"350px", height:"300px",margin:"15px 0"}} className="img-fluid "/>
          <p className="text-start">{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button onClick={handleClose} className="cart">Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Pizza;
