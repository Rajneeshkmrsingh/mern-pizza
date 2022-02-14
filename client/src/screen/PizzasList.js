import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas, deletePizza } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from "react-router-dom";

const PizzasList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  const pizzaState = useSelector((store) => store.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzaState;
  console.log(pizzas, error, loading);
  return (
    <div>
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Pizza List
      </h1>
      <br />
      {loading && (
        <div className="text-center">
          <Loading />
        </div>
      )}
      {error && <Error error="Something went wrong" />}
      <div className="table-responsive-sm">
        <table className="table">
          <thead className="table-dark">
            <tr className="table-bordered">
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza) => {
                return (
                  <>
                    <tr>
                      <td>{pizza.name}</td>
                      <td>
                        small:{pizza.prices[0].small}
                        <br />
                        medium:{pizza.prices[0].medium} <br />
                        large:{pizza.prices[0].large} <br />
                      </td>
                      <td>{pizza.category}</td>
                      <td>
                        <span
                          className="fa fa-trash"
                          onClick={() => dispatch(deletePizza(pizza._id))}
                        />
                        <Link to={`/admin/editpizza/${pizza._id}`}>
                          <span className="fa fa-edit" />
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PizzasList;
