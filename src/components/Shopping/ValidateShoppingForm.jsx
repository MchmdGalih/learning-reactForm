import { useState } from "react";

const ValidateShoppingForm = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    product: "",
    quantity: 0,
  });
  const [productIsValid, setProductIsValid] = useState(false);

  const validate = (product) => {
    const isValid =
      product.length === 0 ? setProductIsValid(false) : setProductIsValid(true);
    return isValid;
  };
  const handleChange = (event) => {
    if (event.target.name === "product") {
      validate(event.target.value);
    }
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem(formData);
    setFormData({
      product: "",
      quantity: 0,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Shopping Form Validation</h1>
        <div>
          <label htmlFor="product">Product</label>
          <input
            type="text"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="Enter your product"
          />
        </div>

        {!productIsValid && <p style={{ color: "red" }}>Product is required</p>}

        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="0"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={!productIsValid}>
          Add Item
        </button>
      </form>
    </>
  );
};

export default ValidateShoppingForm;
