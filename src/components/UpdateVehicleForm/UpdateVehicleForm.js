import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./UpdateVehicleForm.css";

const UpdateVehicleForm = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetchVehicleData(id);
  }, [id]);

  const fetchVehicleData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/vehicles/${id}`);
      const vehicleData = response.data;
      setVehicle(vehicleData);
    } catch (error) {
      console.error("Error fetching vehicle data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prevVehicle) => ({
      ...prevVehicle,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/vehicles/${id}`, vehicle.data);
      // Handle successful update
      console.log("Vehicle updated successfully!");
    } catch (error) {
      console.error("Error updating vehicle:", error);
    }
  };

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="update-vehicle-form">
      <h2>Update Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make:</label>
          <input
            type="text"
            name="make"
            value={vehicle.data.make}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={vehicle.data.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={vehicle.data.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={vehicle.data.color}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Drive:</label>
          <input
            type="text"
            name="drive"
            value={vehicle.data.drive}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Transmission:</label>
          <input
            type="text"
            name="transmission"
            value={vehicle.data.transmission}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fuel:</label>
          <input
            type="text"
            name="fuel"
            value={vehicle.data.fuel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={vehicle.data.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageURL"
            value={vehicle.data.imageURL}
            // value="images/img-6.png"
            onChange={handleChange}
            placeholder="Enter Image URL"
          />
        </div>
        <button type="submit">Update Vehicle</button>
      </form>
    </div>
  );
};

export default UpdateVehicleForm;
