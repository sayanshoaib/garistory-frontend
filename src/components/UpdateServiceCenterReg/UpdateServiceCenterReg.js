import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateServiceCenterReg = ({ match }) => {
  const serviceCenterID = match.params.serviceCenterID;
  const [serviceCenter, setServiceCenter] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: {
      name: "",
      street: "",
      zipcode: "",
      country: ""
    }
  });

  useEffect(() => {
    const fetchServiceCenter = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/service-center/${serviceCenterID}`);
        setServiceCenter(response.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchServiceCenter();
  }, [serviceCenterID]);

  useEffect(() => {
    if (serviceCenter) {
      setFormData({
        name: serviceCenter.name,
        email: serviceCenter.email,
        address: {
          name: serviceCenter.address.name,
          street: serviceCenter.address.street,
          zipcode: serviceCenter.address.zipcode,
          country: serviceCenter.address.country
        }
      });
    }
  }, [serviceCenter]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/service-center/${serviceCenterID}`, formData);
      console.log("Service Center updated successfully!");
      // Optionally, you can redirect to a different page or show a success message.
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error case
    }
  };

  if (!serviceCenter) {
    return <p>Loading service center...</p>;
  }

  return (
    <div>
      <h2>Update Service Center</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address-name">Address Name:</label>
          <input
            type="text"
            id="address-name"
            name="address.name"
            value={formData.address.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address-street">Street:</label>
          <input
            type="text"
            id="address-street"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address-zipcode">Zip Code:</label>
          <input
            type="text"
            id="address-zipcode"
            name="address.zipcode"
            value={formData.address.zipcode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address-country">Country:</label>
          <input
            type="text"
            id="address-country"
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateServiceCenterReg;
