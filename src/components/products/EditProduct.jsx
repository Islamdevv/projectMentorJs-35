import React, { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

const init = {
  name: "",
  image: "",
  descr: "",
  price: "",
  type: "",
};

const EditProduct = () => {
  const { getOneProduct, oneProduct, editProduct } = useProduct();
  const [inputValues, setInputValues] = useState(init);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setInputValues(oneProduct);
    }
  }, [oneProduct]);

  function handleInpValues(e) {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: +e.target.value };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  }

  function handleSaveProduct() {
    editProduct(id, inputValues);
    navigate("/list");
  }

  return (
    <div className="main_content">
      <div className="admin_content">
        <input
          onChange={handleInpValues}
          type="text"
          name="name"
          placeholder="Name"
          value={inputValues.name}
        />
        <input
          onChange={handleInpValues}
          type="text"
          name="image"
          placeholder="imageURL"
          value={inputValues.image}
        />
        <input
          onChange={handleInpValues}
          type="text"
          name="descr"
          placeholder="Description"
          value={inputValues.descr}
        />
        <input
          onChange={handleInpValues}
          type="text"
          name="price"
          placeholder="Price"
          value={inputValues.price}
        />

        <input
          onChange={handleInpValues}
          type="text"
          name="type"
          placeholder="Type"
        />
        <button onClick={handleSaveProduct}>save</button>
      </div>
    </div>
  );
};

export default EditProduct;
