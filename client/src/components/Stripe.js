import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {useDispatch, useSelector} from "react-redux";
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';
import { getuserorders } from "../actions/orderAction";
import { placeorder } from "../actions/orderAction";

const Stripe = ({subtotal}) => {
  const orderState=useSelector((store)=>store.getOrderReducer);
  const{loading,success,error} =orderState
  console.log(loading,success,error)
  const dispatch = useDispatch();
    function tokenHandler(token){
        dispatch(placeorder(subtotal,token))
        dispatch(getuserorders())
    }
  return (
    <>{ loading && <Loading />  }
    {error && <Error error="Problem in transaction"/>}
    {success&&<Success success="Transaction successfull" />}
      <StripeCheckout
        name="Rajneesh Kumar Singh"
        amount={subtotal*100}
        shippingAddress
        billingAddress={false}
        currency="INR"
        stripeKey="pk_test_51KRJxfSCNtwZV5Jxa7muPzoYfIaCFBCIdQUrbom6rSpWvAvt2FMsZ1ZBCsbEPesbi7JrzSeIj1BiTePZuauPa7xE00iDczmJKu"
        token = {tokenHandler}
      >
        
        <button className="stripeBtn">Pay Now</button>
      </StripeCheckout>
    </>
  );
};

export default Stripe;
