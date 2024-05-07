import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../helpers/conts";
import { useLocation, useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const location = useLocation();

  const [oneProduct, setOneProduct] = useState({});

  //? ADD PRODUCT

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
  }

  //? ADD PRODUCT

  //? GET PRODUCT

  async function readProduct() {
    let { data } = await axios(`${API}/${window.location.search}`);
    setProduct(data);
  }

  //? GET PRODUCT

  //? DELETE PRODUCT

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }
  //? DELETE PRODUCT

  //? GET ONE PRODUCT

  async function getOneProduct(id) {
    let { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
  }

  //? GET ONE PRODUCT

  //? EDIT PRODUCT

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
  }

  //? EDIT PRODUCT

  //? PAGINATION

  const [page, setPage] = useState(1);

  const itemPerPage = 2;

  const count = Math.ceil(product.length / itemPerPage);

  function currentPage() {
    const start = (page - 1) * itemPerPage;
    const end = start + itemPerPage;
    return product.slice(start, end);
  }

  //? PAGINATION

  //? FILTER PRODUCT

  const navigate = useNavigate();

  function filterProduct(query, value) {
    const searchProduct = new URLSearchParams(location.search);
    if (value === "all") {
      searchProduct.delete(query);
    } else {
      searchProduct.set(query, value);
    }
    const url = `${location.pathname}?${searchProduct.toString()}`;
    navigate(url);
    readProduct();
  }

  //? FILTER PRODUCT

  //? SEARCH PRODUCT

  //? SEARCH PRODUCT

  const values = {
    addProduct,
    readProduct,
    product,
    deleteProduct,
    currentPage,
    count,
    setPage,
    getOneProduct,
    oneProduct,
    editProduct,
    filterProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
