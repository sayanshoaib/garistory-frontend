import axios from "axios";
import React, { useState } from "react";
import "./VehicleForm.css";
import { Link } from "react-router-dom";

const VehicleForm = () => {
  const [vehicleID, setVehicleID] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [initialRegistration, setInitialRegistration] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [fuel, setFuel] = useState("");
  const [mileage, setMileage] = useState("");
  const [drive, setDrive] = useState("");
  const [color, setColor] = useState("");
  const [transmission, setTransmission] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      vehicleID,
      make,
      model,
      year,
      bodyType,
      initialRegistration,
      registrationNumber,
      fuel: parseInt(fuel, 10),
      mileage: parseInt(mileage, 10),
      drive: parseInt(drive, 10),
      color,
      transmission: parseInt(transmission, 10),
      price: parseInt(price, 10),
      imageURL,
    };

    try {
      const response = await axios.post("http://localhost:8080/vehicles", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response);
      <Link to={'/vehicles'}></Link>
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="vehicle-form">
        <h1>Vehicle Information Registration</h1>
        <div className="input-group">
          <label htmlFor="vehicleID">Vehicle ID:</label>
          <input
            type="text"
            id="vehicleID"
            name="vehicleID"
            value={vehicleID}
            onChange={(e) => setVehicleID(e.target.value)}
            placeholder="Enter Vehicle ID"
          />
        </div>
        <div className="input-group">
          <label htmlFor="make">Make:</label>
          <input
            type="text"
            id="make"
            name="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            placeholder="Enter Make"
          />
        </div>
        <div className="input-group">
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Enter Model"
          />
        </div>
        <div className="input-group">
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter Year"
          />
        </div>
        <div className="input-group">
          <label htmlFor="bodyType">Body Type:</label>
          <input
            type="text"
            id="bodyType"
            name="bodyType"
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
            placeholder="Enter Body Type"
          />
        </div>
        <div className="input-group">
          <label htmlFor="initialRegistration">Initial Registration:</label>
          <input
            type="text"
            id="initialRegistration"
            name="initialRegistration"
            value={initialRegistration}
            onChange={(e) => setInitialRegistration(e.target.value)}
            placeholder="Enter Initial Registration"
          />
        </div>
        <div className="input-group">
          <label htmlFor="registrationNumber">Registration Number:</label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            placeholder="Enter Registration Number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="fuel">Fuel:</label>
          <input
            type="number"
            id="fuel"
            name="fuel"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            placeholder="Enter Fuel"
          />
        </div>
        <div className="input-group">
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="number"
            id="mileage"
            name="mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            placeholder="Enter Mileage"
          />
        </div>
        <div className="input-group">
          <label htmlFor="drive">Drive:</label>
          <input
            type="number"
            id="drive"
            name="drive"
            value={drive}
            onChange={(e) => setDrive(e.target.value)}
            placeholder="Enter Drive"
          />
        </div>
        <div className="input-group">
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter Color"
          />
        </div>
        <div className="input-group">
          <label htmlFor="transmission">Transmission:</label>
          <input
            type="number"
            id="transmission"
            name="transmission"
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            placeholder="Enter Transmission"
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter Price"
          />
        </div>
        <div className="input-group">
          <label htmlFor="imageURL">Image URL:</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Enter Image URL"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VehicleForm;
