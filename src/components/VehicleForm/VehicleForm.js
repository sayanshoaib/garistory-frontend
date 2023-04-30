import React, { useState } from 'react';
import axios from 'axios';

const VehicleForm = () => {
  const [vehicleID, setVehicleID] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [initialRegistration, setInitialRegistration] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [fuel, setFuel] = useState('');
  const [mileage, setMileage] = useState('');
  const [drive, setDrive] = useState('');
  const [color, setColor] = useState('');
  const [transmission, setTransmission] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');

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
      fuel,
      mileage,
      drive,
      color,
      transmission,
      price,
      imageURL,
    };

    try {
      const response = await axios.post('http://localhost:8080/vehicle', data);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="vehicleID">Vehicle ID:</label>
        <input
          type="text"
          id="vehicleID"
          name="vehicleID"
          value={vehicleID}
          onChange={(e) => setVehicleID(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="make">Make:</label>
        <input
          type="text"
          id="make"
          name="make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bodyType">Body Type:</label>
        <input
          type="text"
          id="bodyType"
          name="bodyType"
          value={bodyType}
          onChange={(e) => setBodyType(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="initialRegistration">Initial Registration:</label>
        <input
          type="text"
          id="initialRegistration"
          name="initialRegistration"
          value={initialRegistration}
          onChange={(e) => setInitialRegistration(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="registrationNumber">Registration Number:</label>
        <input
          type="text"
          id="registrationNumber"
          name="registrationNumber"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fuel">Fuel:</label>
        <input
          type="number"
          id="fuel"
          name="fuel"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mileage">Mileage:</label>
        <input
          type="number"
          id="mileage"
          name="mileage"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="drive">Drive:</label>
        <input
          type="number"
          id="drive"
          name="drive"
          value={drive}
          onChange={(e) => setDrive(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="transmission">Transmission:</label>
        <input
          type="number"
          id="transmission"
          name="transmission"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageURL">Image URL:</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default VehicleForm;
