import { useState } from "react";

function ShoppingForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    product: "",
    quantity: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
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
        <h1>Shopping Form</h1>
        <h2>
          Product: {formData.product} and quantity is : {formData.quantity}
        </h2>
        <div>
          <label htmlFor="product">Product</label>
          <input
            type="text"
            id="product"
            name="product"
            placeholder="Enter your product"
            value={formData.product}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ShoppingForm;
