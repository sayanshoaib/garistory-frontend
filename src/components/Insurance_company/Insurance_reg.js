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
   const [registrationNumber, setRegistrationNumber] = useState("");
  const [autoCoverage, setAutoCoverage] = useState("");
  const [lifeCoverage, setLifeCoverage] = useState("");
  const [licenseInformation, setLicenseInformation] = useState({
    licenseNumber: "",
    licenseType: "",
    validityPeriod: "",
    licenseStatus: "",
    issuingAuthority: "",
  });
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      InsuranceComrID,
      name,
      email,
      address,
      password,
      registrationNumber,
      autoCoverage,
      lifeCoverage,
      licenseInformation,
      contactNumber,
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
            Insurance Company ID:
          </label>
          <input
            type="text"
            id="InsuranceComID"
            name="InsuranceComID"
            value={InsuranceComrID}
            onChange={(e) => setInsuranceComID(e.target.value)}
            placeholder="Enter Insurance Company ID"
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
            placeholder="Enter Your Name"
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
            placeholder="Enter Your Email"
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
            placeholder="Enter Address Name"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="street" className="label">
            Street:
          </label>
          <input
            type="text"
            id="street" name="street"
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
            placeholder="Enter Zipcode"
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
            placeholder="Enter Country"
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
            placeholder="Enter Your Password"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="autoCoverage" className="label">
            Auto Coverage:
          </label>
          <input
            type="boolean"
            id="autoCoverage"
            name="autoCoverage"
            value={autoCoverage}
            onChange={(e) => setAutoCoverage(e.target.value)}
            placeholder="Enter Auto Coverage"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lifeCoverage" className="label">
            Life Coverage:
          </label>
          <input
            type="boolean"
            id="lifeCoverage"
            name="lifeCoverage"
            value={lifeCoverage}
            onChange={(e) => setLifeCoverage(e.target.value)}
            placeholder="Enter Life Coverage"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="licenseNumber" className="label">
            License Number:
          </label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={licenseInformation.licenseNumber}
            onChange={(e) =>
              setLicenseInformation((prevState) => ({
                ...prevState,
                licenseNumber: e.target.value,
              }))
            }
            placeholder="Enter License Number"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="licenseType" className="label">
            License Type:
          </label>
          <input
            type="text"
            id="licenseType"
            name="licenseType"
            value={licenseInformation.licenseType}
            onChange={(e) =>
              setLicenseInformation((prevState) => ({
                ...prevState,
                licenseType: e.target.value,
              }))
            }
            placeholder="Enter License Type"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="validityPeriod" className="label">
            Validity Period:
          </label>
          <input type="text"
            id="validityPeriod"
            name="validityPeriod"
            value={licenseInformation.validityPeriod}
            onChange={(e) =>
              setLicenseInformation((prevState) => ({
                ...prevState,
                validityPeriod: e.target.value,
              }))
            }
            placeholder="Enter Validity Period"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="licenseStatus" className="label">
            License Status:
          </label>
          <input
            type="text"
            id="licenseStatus"
            name="licenseStatus"
            value={licenseInformation.licenseStatus}
            onChange={(e) =>
              setLicenseInformation((prevState) => ({
                ...prevState,
                licenseStatus: e.target.value,
              }))
            }
            placeholder="Enter License Status"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="issuingAuthority" className="label">
            Issuing Authority:
          </label>
          <input
            type="text"
            id="issuingAuthority"
            name="issuingAuthority"
            value={licenseInformation.issuingAuthority}
            onChange={(e) =>
              setLicenseInformation((prevState) => ({
                ...prevState,
                issuingAuthority: e.target.value,
              }))
            }
            placeholder="Enter Issuing Authority"
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
