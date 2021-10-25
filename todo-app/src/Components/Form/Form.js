import React, { useState } from "react";
import "./style.css";

function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    });
  
  const [submitted, setSubmitted] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
      setValues({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.onbeforeunload = function() {
        localStorage.setItem("values", JSON.stringify(values));
    }
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
        {submitted ? <div className="success-message">Success! Thank you for registering</div> : null} <br />
          <label htmlFor="">First Name :</label><br />
          <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            type="text"
            placeholder="Enter your firstname"
          />
          <br />
        </div>

        <div className="mb-3">
          <label htmlFor="">Last Name :</label><br />
          <input
          onChange={handleLastNameInputChange}
            value={values.lastName}
            type="text"
            placeholder="Enter your lastname"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="">Email :</label> <br />
          <input
          onChange={handleEmailInputChange}
            value={values.email}
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <button type="submit" className="bg-primary text-white">Submit</button>
      </form>
    </div>
  );
}

export default Form;
