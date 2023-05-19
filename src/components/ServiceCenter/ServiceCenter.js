import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ServiceCenter.css";

const ServiceCenter = () => {
  const [serviceCenters, setServiceCenters] = useState([]);

  useEffect(() => {
    const fetchServiceCenters = async () => {
      try {
        // const response = await axios.get("http://localhost:8080/service-center");
        const response = await axios.get("service-center.json");
        setServiceCenters(response.data.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchServiceCenters();
  }, []);

  const handleDelete = async (serviceCenterID) => {
    try {
      const response = await axios.delete(`http://localhost:8080/service-center/${serviceCenterID}`);
      console.log("Response:", response);
      // Update the state to remove the deleted service center
      setServiceCenters((prevServiceCenters) =>
        prevServiceCenters.filter((sc) => sc.serviceCenterID !== serviceCenterID)
      );
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="service-center-list">
      <h1>Service Centers</h1>

      {serviceCenters.length === 0 ? (
        <p>Loading service centers...</p>
      ) : (
        <ul>
          {serviceCenters.map((serviceCenter) => (
            <li key={serviceCenter.serviceCenterID} className="service-center-item">
              <h2>{serviceCenter.name}</h2>
              <p>Email: {serviceCenter.email}</p>
              <p>
                Address: {serviceCenter.address.name}, {serviceCenter.address.street},{" "}
                {serviceCenter.address.zipcode}, {serviceCenter.address.country}
              </p>
              <br />
              <div>
                <Link to={`/service-center/update/${serviceCenter.serviceCenterID}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDelete(serviceCenter.serviceCenterID)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCenter;
