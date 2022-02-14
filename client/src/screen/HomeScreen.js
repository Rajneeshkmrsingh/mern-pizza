import React, { useEffect } from "react";
import Pizza from "../components/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzaState = useSelector((store) => store.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzaState;
  console.log(pizzas)
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <>
    <div className="container mx-auto">
      <Filter/>
      <div className="row d-flex justify-content-center align-content-center gx-0">
        {
        loading ? (
         <div  style={{width:"100px",height:"100px",marginTop:"100px"}}><Loading/></div>
        ) : error ? <Error error="There is something error in loading."/>
        : (
          pizzas.map((pizza) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-11 d-flex justify-content-center">
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )
        }
      </div>
      </div>
    </>
  );
};

export default HomeScreen;
