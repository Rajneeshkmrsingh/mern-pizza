import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtocart,deleteFromCart } from "../actions/cartActions";
import Stripe from "../components/Stripe";
import AOS from 'aos';
import 'aos/dist/aos.css';



const CartScreen = () => {
  AOS.init()
  const dispatch = useDispatch();
  const selectCart = useSelector((store) => store.cartReducer);
  const cartItems = selectCart.cartItems;
  const SubTotal = cartItems.reduce((x,item)=> x + item.price ,0)
  /* console.warn(cartItems); */
  return (
    <>
      <div className="container mx-auto " data-aos="fade-down">
        <div className="row">
          <div className="col-md-7 px-1">
            <h1 className="cart-header text-center">CART</h1>
            {cartItems.map((items, id) => {
              return (
                <>
                  <div className="row shadow p-3 mb-5 bg-white rounded mx-0" key={id}>
                    <div className="col-lg-9 ">
                      <h2 className="cartName">
                        {items.name} [{items.varient}]
                      </h2>
                      <h2 className="cartPrice ">
                        Price: {items.quantity} *
                        {items.prices[0][items.varient]}= {items.price}
                      </h2>
                      <h2 className="cartQuantity">Quantity:</h2>
                      <i
                        className="fas fa-plus"
                        onClick={() =>
                          dispatch(
                            addtocart(items, items.quantity + 1, items.varient)
                          )
                        }
                      />
                      {items.quantity}
                      <i
                        className="fas fa-minus"
                        onClick={() => {
                          
                            dispatch(
                              addtocart(
                                items,
                                items.quantity - 1,
                                items.varient
                              )
                            );
                        }}
                      />
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center">
                      <img src={items.image} className="CartItemImage" alt="" />
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center align-items-center">
                      <i className="fas fa-trash" onClick={()=>dispatch(deleteFromCart(items))}></i>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-md-5 subTotal">
            <span>Subtotal: </span>Rs. {SubTotal} /- <br/>
            <Stripe subtotal = {SubTotal}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
