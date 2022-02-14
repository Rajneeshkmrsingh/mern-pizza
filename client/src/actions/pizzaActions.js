import axios from "axios";
export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/getallpizzas");
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};


export const filterPizzas = (searchKey, category) => async (dispatch) => {
  var filterPizza;
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/getallpizzas");

    filterPizza = response.data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchKey)
    );
    if (category !== "all") {
      filterPizza = response.data.filter(
        (pizza) => pizza.category.toLowerCase() === category
      );
    }

    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: filterPizza });
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAILED", payload: error });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZA_REQUEST" });
  try {
    const response = await axios.post("/api/pizzas/addpizza",{pizza});
    dispatch({ type: "ADD_PIZZA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ADD_PIZZA_FAILED", payload: error });
  }
};

export const getPizzaById = (pizzaid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZA_BY_ID_REQUEST" });
  try {
    const response = await axios.post("/api/pizzas/pizzaid",{pizzaid});
    dispatch({ type: "GET_PIZZA_BY_ID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZA_BY_ID_FAILED", payload: error });
  }
};
export const updatePizza = (updatedpizza) => async (dispatch) => {
  dispatch({ type: "UPDATE_PIZZA_REQUEST" });
  try {
    const response = await axios.post("/api/pizzas/updatepizza",{updatedpizza});
    dispatch({ type: "UPDATE_PIZZA_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "UPDATE_PIZZA_FAILED", payload: error });
  }
};
export const deletePizza = (pizzaid) => async (dispatch) => {
  
  try {
  const response = await axios.post("/api/pizzas/deletepizza",{pizzaid})
  alert("pizza deleted successfully");
  console.log(response)
  window.location.reload()
  } catch (error) {
    dispatch({ type: "UPDATE_PIZZA_FAILED", payload: error });
  }
};

