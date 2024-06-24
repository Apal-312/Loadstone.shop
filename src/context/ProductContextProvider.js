import axios from "axios";
import React, { act, createContext, useContext, useReducer } from "react";
import { API, API_CATEGORY } from "../helpers/const";
import { useNavigate } from "react-router-dom";
export const ProductContext = createContext();
export const useProduct = () => useContext(ProductContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
  categories: [],
};

const ProductContextProvider = ({ children }) => {
  const reduser = (state = INIT_STATE, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GETONEPRODUCT":
        return { ...state, oneProduct: action.payload };
      case "GET_CATEGORIES":
        return { ...state, categories: action.payload };
    }
  };

  //!CREATE
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reduser, INIT_STATE);
  const createProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/products");
  };

  //!get
  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  //!DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
  };

  //!get one product
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GETONEPRODUCT",
      payload: data,
    });
  };

  //!edit
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate("/products");
  };

  //! createCategory
  const createCategory = async (newCategory) => {
    await axios.post(API_CATEGORY, newCategory);
    navigate("/products");
  };

  //!getcategories
  const getCategories = async () => {
    const { data } = await axios(API_CATEGORY);
    console.log(data);
    dispatch({
      type: "GET_CATEGORIES",
      payload: data,
    });
  };

  // ! FILTER
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search); //  ? URLSearchParams - принимает 2 параметра: 1)  2) содердимое радио-группы
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
  };

  const values = {
    createProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    createCategory,
    getCategories,
    categories: state.categories,
    fetchByParams,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;

// todo delete - удаляет продукты
// ? set - добавляет продукты
