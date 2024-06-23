import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
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
    console.log(formData);
  };

  return (
    <div>
      <h1>Form</h1>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="Enter your FirstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Enter your LastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
