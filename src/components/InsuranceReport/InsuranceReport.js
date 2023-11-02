import React, { useState, useEffect } from 'react'
import "./InsuranceReport.css"
import { nanoid } from 'nanoid';

const InsuranceReport = () => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [driverName, setDriverName] = useState('');
  const [witnesses, setWitnesses] = useState([]); // Witnesses as an array
  const [vehicleIds, setvehicleIds] = useState([]);
  const [reportId, setReportId] = useState('');
  const [insuranceCompanyAddress, setInsuranceCompanyAddress] = useState('');
  const [witnessName, setWitnessName] = useState('');
  const [vehicleId, setvehicleId] = useState('');
  const [driverLicenseNumber, setDriverLicenseNumber] = useState('');
  const [insuranceCompanies, setInsuranceCompanies] = useState([]);
  const [insuranceCompanyName, setInsuranceCompanyName] = useState('');

  // Function to generate a random report_id
  const generateReportId = () => {
    const newReportId = nanoid(); // Using nanoid to generate a random ID
    setReportId(newReportId);
  };

  useEffect(() => {
    // Generate a random report_id when the component loads
    generateReportId();
  }, []);

  const handleAddWitness = () => {
    if (witnessName.trim() !== '') {
      setWitnesses([...witnesses, witnessName]);
      setWitnessName(''); // Clear the input field after adding a witness
    }
  };

  const handleRemoveWitness = (index) => {
    const updatedWitnesses = [...witnesses];
    updatedWitnesses.splice(index, 1);
    setWitnesses(updatedWitnesses);
  };


  const handleAddVehicleID = () => {
    if (vehicleId.trim() !== '') {
      setvehicleIds([...vehicleIds, vehicleId]);
      setvehicleId(''); // Clear the input field after adding a witness
    }
  };

  const handleRemoveVehicleID = (index) => {
    const updatedVehicleIds = [...vehicleIds];
    updatedVehicleIds.splice(index, 1);
    setvehicleIds(updatedVehicleIds);
  };
  const handleAddInsuranceCompany = () => {
    if (insuranceCompanyName.trim() !== '') {
      setInsuranceCompanies([...insuranceCompanies, insuranceCompanyName]);
      setInsuranceCompanyName(''); // Clear the input field after adding an insurance company
    }
  };

  const handleRemoveInsuranceCompany = (index) => {
    const updatedInsuranceCompanies = [...insuranceCompanies];
    updatedInsuranceCompanies.splice(index, 1);
    setInsuranceCompanies(updatedInsuranceCompanies);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic goes here
    // Resetting the form fields
    setDate('');
    setLocation('');
    setDescription('');
    setDriverName('');
    setWitnesses([]);
    setvehicleIds([]);
    setInsuranceCompanies([]);
    setWitnessName('');
    setvehicleId('');
    setInsuranceCompanyName('');
    setDriverLicenseNumber('');

  };

  return (
    <div className="acc-form-container">
      <h1> File an Accident Report</h1>
      <p>
        Use this form to report accidents, accident-related incidents, injuries,
        medical situations, criminal activities, etc. If possible report within
        24 hours of an accident.
      </p>
      <form onSubmit={handleSubmit}>

        <div className="acc-rep-title">

          <div className="acc-form-field1">
      
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            
          </div>
          <div className="acc-form-field1">
            <label htmlFor="reportId">Report ID:</label>
            <div className="acc-form-field1">


              <input
                type="text"
                id="reportId"
                value={reportId}
                onChange={(e) => setReportId(e.target.value)}
                placeholder="Randomly generated ID"
                readOnly

              />
              <button type="button" onClick={generateReportId} className='report-id-producer'>
                Generate Report ID
              </button>
            </div>
          </div>
          <div className="acc-form-field1">
            <label htmlFor="insuranceCompanyAddress">Insurance Company Address:</label>
            <input
              type="address"
              id="insuranceCompanyAddress"
              value={insuranceCompanyAddress}
              onChange={(e) => setInsuranceCompanyAddress(e.target.value)}
              className='reort-entry'
            />
          </div>
        </div>
        <div className="accident-form-grid">
          <div className="acc-form-part">
            <h2>Accident Information</h2>
            <div className="acc-form-field">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}

              />
            </div>
            <div className="acc-form-field">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}

              />
            </div>
            <div className="acc-form-field">
              <label htmlFor="witnessName">Witness Name:</label>
              <input
                type="text"
                id="witnessName"
                value={witnessName}
                onChange={(e) => setWitnessName(e.target.value)}

              />
              <button type="button" onClick={handleAddWitness}>
                Add more Witnesses
              </button>
            </div>
            <div className="acc-form-field2">
              <label>Witnesses:</label>
              <ul>
                {witnesses.map((witness, index) => (
                  <li key={index}>
                    {witness}
                    <button type="button" onClick={() => handleRemoveWitness(index)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="acc-form-part1">
            <h2>Personnel Information</h2>
            <div className="acc-form-field">
              <label htmlFor="driverName">Driver Name:</label>
              <input
                type="text"
                id="driverName"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
              />
            </div>
            <div className="acc-form-field">
              <label htmlFor="driverLicenseNumber">Driver License Number:</label>
              <input
                type="text"
                id="driverLicenseNumber"
                value={driverLicenseNumber}
                onChange={(e) => setDriverLicenseNumber(e.target.value)}
              />
            </div>

            <div className="acc-form-field">
              <label htmlFor="vehicleId">Vehicle ID:</label>
              <input
                type="text"
                id="vehicleId"
                value={vehicleId}
                onChange={(e) => setvehicleId(e.target.value)}
              />
              <button type="button" onClick={handleAddVehicleID}>
                Add more Vehicle IDs
              </button>
            </div>
            <div className="acc-form-field2">
              <label>Vehicle IDs:</label>
              <ul>
                {vehicleIds.map((vehicle, index) => (
                  <li key={index}>
                    {vehicle}
                    <button type="button" onClick={() => handleRemoveVehicleID(index)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="acc-form-part2">
          <label htmlFor="insuranceCompanyName">Insurance Company Name:</label>
          <input
            type="text"
            id="insuranceCompanyName"
            value={insuranceCompanyName}
            onChange={(e) => setInsuranceCompanyName(e.target.value)}
          />
          <button type="button" onClick={handleAddInsuranceCompany}>
            Add Insurance Company
          </button>
          <div className="acc-form-field3">
            <label>Insurance Companies:</label>
            <ul>
              {insuranceCompanies.map((company, index) => (
                <li key={index}>
                  {company}
                  <button type="button" onClick={() => handleRemoveInsuranceCompany(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <button className='accident-rep-submit' type="submit">Submit</button>
      </form>
    </div>
  );
};


export default InsuranceReport
