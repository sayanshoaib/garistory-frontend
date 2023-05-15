import React, { useState } from "react";
import axios from "axios";
import "./ServiceCenterReg.css";

const ServiceCenterReg = () => {
  const [serviceCenterID, setServiceCenterID] = useState("");
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
    <div className="service-center-form">
      <h1>Service Center Registration</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="serviceCenterID" className="label">
            Service Center ID:
          </label>
          <input
            type="text"
            id="serviceCenterID"
            name="serviceCenterID"
            value={serviceCenterID}
            onChange={(e) => setServiceCenterID(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
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
            className="input"
          />
        </div>
        <div className="form-group">
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
            className="input"
          />
        </div>
        <div className="form-group">
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
            className="input"
          />
        </div>
        <div className="form-group">
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
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

export default ServiceCenterReg;
