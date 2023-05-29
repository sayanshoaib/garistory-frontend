
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './CarServicingform.css';

const CarServicingform = () =>{
  const [mileage, setMileage] = useState("");
  const [servicePerformed, setServicePerformed] = useState("");
  const [technicianName, setTechnicianName] = useState("");
  const [partName, setPartName] = useState("");
  const [partNumber, setPartNumber] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [dateOfService, setDateOfService] = useState("");
  const [customerSignature, setCustomerSignature] = useState("");
  const [servicingCenterSignature, setServicingCenterSignature] = useState("");
  const [licensePlateNumber, setLicensePlateNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary actions with the form data
    // For example, you can send it to the backend or perform validations

    // Clear form fields
    setMileage("");
    setServicePerformed("");
    setTechnicianName("");
    setPartName("");
    setPartNumber("");
    setTotalCost("");
    setDateOfService("");
    setCustomerSignature("");
    setServicingCenterSignature("");
    setLicensePlateNumber("");
  };

  return (
    <div className="form-container">
    <h1>Service Form</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-part">
        <h2>Service Information</h2>
        <div className="form-field">
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="text"
            id="mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="servicePerformed">Service Performed:</label>
          <input
            type="text"
            id="servicePerformed"
            value={servicePerformed}
            onChange={(e) => setServicePerformed(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="technicianName">Name of Technician:</label>
          <input
            type="text"
            id="technicianName"
            value={technicianName}
            onChange={(e) => setTechnicianName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-part">
        <h2>Part used(if required)</h2>
        <div className="form-field">
          <label htmlFor="partName">Part Name:</label>
          <input
            type="text"
            id="partName"
            value={partName}
            onChange={(e) => setPartName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="partNumber">Part Number:</label>
          <input
            type="text"
            id="partNumber"
            value={partNumber}
            onChange={(e) => setPartNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="form-part">
        <h2>Cost and Validation</h2>
        <div className="form-field">
          <label htmlFor="totalCost">Total Cost:</label>
          <input
            type="number"
            id="totalCost"
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="dateOfService">Date of Service:</label>
          <input
            type="date"
            id="dateOfService"
            value={dateOfService}
            onChange={(e) => setDateOfService(e.target.value)}
          />
        </div>
        <div className="form-field">
            <label htmlFor="customerSignature">Customer Signature:</label>
            <input
              type="text"
              id="customerSignature"
              value={customerSignature}
              onChange={(e) => setCustomerSignature(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="servicingCenterSignature">Servicing Center Signature:</label>
            <input
              type="text"
              id="servicingCenterSignature"
              value={servicingCenterSignature}
              onChange={(e) => setServicingCenterSignature(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default CarServicingform
