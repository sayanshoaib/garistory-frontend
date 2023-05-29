import React, { useState } from "react";
import axios from "axios";
import "./insurance_reg.css";

const InsuranceComReg = () => {
  const [InsuranceComrID, setInsuranceComID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    name: "",
    street: "",
    zipcode: "",
    country: "",
  });
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      serviceCenterID,
      name,
      email,
      address,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/service-center",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response);
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className="insurance-company-form">
      <h1>Insurance Company Registration</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="InsuranceComID" className="label">
            Service Center ID:
          </label>
          <input
            type="text"
            id="InsuranceComID"
            name="InsuranceComID"
            value={InsuranceComID}
            onChange={(e) => setInsuranceComID(e.target.value)}
            placeholder="Enter Service Center ID"
            className="input"
          />
        </div>
        <div className="insform-group">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="input"
          />
        </div>
        <div className="insform-group">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="input"
          />
        </div>
        <div className="insform-group">
          <label htmlFor="addressName" className="label">
            Address Name:
          </label>
          <input
            type="text"
            id="addressName"
            name="addressName"
            value={address.name}
            onChange={(e) =>
              setAddress((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            placeholder="Enter Address Name"
            className="input"
          />
        </div>
        <div className="insform-group">
          <label htmlFor="street" className="label">
            Street:
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={address.street}
            onChange={(e) =>
              setAddress((prevState) => ({
                ...prevState,
                street: e.target.value,
              }))
            }
            placeholder="Enter Street"
            className="input"
          />
        </div>
        <div className="insform-group">
          <label htmlFor="zipcode" className="label">
            Zipcode:
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={address.zipcode}
            onChange={(e) =>
              setAddress((prevState) => ({
                ...prevState,
                zipcode: e.target.value,
              }))
            }
            placeholder="Enter Zipcode"
            className="input"
          />
        </div>
        <div className="insform-group">
          <label htmlFor="country" className="label">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={address.country}
            onChange={(e) =>
              setAddress((prevState) => ({
                ...prevState,
                country: e.target.value,
              }))
            }
            placeholder="Enter Country"
            className="input"
          />
        </div>
        <div className="insform-group">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            className="input"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsuranceComReg;
