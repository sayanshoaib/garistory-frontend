import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./UpdateVehicleForm.css";

const UpdateVehicleForm = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchVehicleData(id);
  }, [id]);

  const fetchVehicleData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/vehicles/${id}`);
      const vehicleData = response.data;
      setVehicle(vehicleData);
      setEditMode(false); // Set the initial edit state to false
    } catch (error) {
      console.error("Error fetching vehicle data:", error);
    }
  };

  const toggleEdit = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicle((prevVehicle) => ({
      ...prevVehicle,
      data: {
        ...prevVehicle.data,
        [name]: value,
      },
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
      <button onClick={toggleEdit}>
        {editMode ? "Cancel Edit" : "Edit Vehicle"}
      </button>
      {editMode ? (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make:</label>
          <input
            type="text"
            name="make"
            value={vehicle.data && vehicle.data.make}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={vehicle.data && vehicle.data.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={vehicle.data && vehicle.data.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={vehicle.data && vehicle.data.color}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Drive:</label>
          <input
            type="text"
            name="drive"
            value={vehicle.data && vehicle.data.drive}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Transmission:</label>
          <input
            type="text"
            name="transmission"
            value={vehicle.data && vehicle.data.transmission}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fuel:</label>
          <input
            type="text"
            name="fuel"
            value={vehicle.data && vehicle.data.fuel}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
              type="text"
              name="price"
              value={vehicle.data && vehicle.data.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="imageURL"
              value={vehicle.data && vehicle.data.imageURL}
              onChange={handleChange}
              placeholder="Enter Image URL"
            />
          </div>
          <button type="submit">Update Vehicle</button>
        </form>
      ) : (
        <div>
          <div>
            <label>Make:</label>
            <span>{vehicle.data.make}</span>
          </div>
          <div>
            <label>Model:</label>
            <span>{vehicle.data.model}</span>
          </div>
          <div>
            <label>Year:</label>
            <span>{vehicle.data.year}</span>
          </div>
          <div>
            <label>Color:</label>
            <span>{vehicle.data.color}</span>
          </div>
          <div>
            <label>Drive:</label>
            <span>{vehicle.data.drive}</span>
          </div>
          <div>
            <label>Transmission:</label>
            <span>{vehicle.data.transmission}</span>
          </div>
          <div>
            <label>Fuel:</label>
            <span>{vehicle.data.fuel}</span>
          </div>
          <div>
            <label>Price:</label>
            <span>{vehicle.data.price}</span>
          </div>
          <div>
            <label>Image URL:</label>
            <span>{vehicle.data.imageURL}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateVehicleForm;