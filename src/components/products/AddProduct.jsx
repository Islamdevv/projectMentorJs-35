import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";

const init = {
  name: "",
  image: "",
  descr: "",
  price: "",
  type: "",
};

const AddProduct = () => {
  const { addProduct } = useProduct();

  const [inputValues, setInputValues] = useState(init);

  function handleInpValues(e) {
    if (e.target.name === "price") {
      let obj = { ...inputValues, [e.target.name]: +e.target.value };
      setInputValues(obj);
    } else {
      let obj = { ...inputValues, [e.target.name]: e.target.value };
      setInputValues(obj);
    }
  }

  function handleSubmit() {
    addProduct(inputValues);
  }

  return (
    <div className="main_content">
      <div className="admin_content">
        <input
          onChange={handleInpValues}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          onChange={handleInpValues}
          type="text"
          name="image"
          placeholder="imageURL"
        />
        <input
          onChange={handleInpValues}
          type="text"
          name="descr"
          placeholder="Description"
        />
        <input
          onChange={handleInpValues}
          type="text"
          name="price"
          placeholder="Price"
        />
        <input
          onChange={handleInpValues}
          type="text"
          name="type"
          placeholder="Type"
        />

        <button onClick={handleSubmit}>create</button>
      </div>
    </div>
  );
};

export default AddProduct;
