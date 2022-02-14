import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addPizza } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
const AddPizza = () => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const pizzaState=useSelector((store)=>store.addPizzaReducer);
  const{loading,error,success}=pizzaState;
  
  function formHandler(e) {
    e.preventDefault();
    const pizza = {
      name,
      description,
      image,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
      category,
    };
    console.log(pizza);
    dispatch(addPizza(pizza));
  }
  return (
    <div>
      <div className="row justify-content-center">
        <h1 className="text-center my-2" style={{fontSize:"35px"}}>Add New Pizza</h1>
        {loading&&(<div className="text-center"><Loading/></div>)}
        {error &&<Error error="something went wrong."/>}
        {success && <Success success="sent successfully."/>}
        <div className="col-md-8 col-12 m-sm-1 shadow-lg p-3 mb-5 bg-body rounded">
          <form onSubmit={formHandler}>
            <input
              className="form-control my-1"
              type="text"
              placeholder="Pizza Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="form-control my-1"
              type="text"
              placeholder="small Varient Price"
              value={smallPrice}
              onChange={(e) => setSmallPrice(e.target.value)}
            />
            <input
              className="form-control my-2"
              type="text"
              placeholder="Medium Varient Price"
              value={mediumPrice}
              onChange={(e) => setMediumPrice(e.target.value)}
            />
            <input
              className="form-control my-2"
              type="text"
              placeholder="Large Varient Price"
              value={largePrice}
              onChange={(e) => setLargePrice(e.target.value)}
            />
            <input
              className="form-control my-2"
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              className="form-control my-2"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="form-control my-2"
              type="text"
              placeholder="Image link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button className="formBtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPizza;
