import React , { useState, useEffect }from 'react'
import "./InsuranceReport.css"

const InsuranceReport=() =>{
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [contributingFactor, setContributingFactor] = useState("");
    const [driverName, setDriverName] = useState('');
  const [driverContactNumber, setDriverContactNumber] = useState('');
  const [driverNID, setDriverNID] = useState('');
  const [issuerName, setIssuerName] = useState('');
  const [issuerContactNumber, setIssuerContactNumber] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [witnessName, setWitnessName] = useState('');
  const [witnessContactNumber, setWitnessContactNumber] = useState('');
  const [witnessNID, setWitnessNID] = useState('');
  const [claimNumber, setClaimNumber] = useState('');
  const [adjusterName, setAdjusterName] = useState('');
  const [adjusterContactNumber, setAdjusterContactNumber] = useState('');
  const [claimStatus, setClaimStatus] = useState('');
  const [accidentImageUrl, setAccidentImageUrl] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Form submission logic goes here
  
      // Resetting the form fields
      setDate("");
      setTime("");
      setLocation("");
      setDescription("");
      setContributingFactor("");
      setDriverName('');
    setDriverContactNumber('');
    setDriverNID('');
    setIssuerName('');
    setIssuerContactNumber('');
    setPolicyNumber('');
    setWitnessName('');
    setWitnessContactNumber('');
    setWitnessNID('');
    setClaimNumber('');
    setAdjusterName('');
    setAdjusterContactNumber('');
    setClaimStatus('');
    setAccidentImageUrl('');
    };
  
    return (
        <div className="acc-form-container">
    <h1>Accident Report</h1>
    <form onSubmit={handleSubmit}>
      <div className="acc-form-part">
        <h2>Accident Information</h2>
        <div className="acc-form-field">
        <label htmlFor="date">Date:</label>
             <input
             type="date"
             id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
        </div>
        <div className="acc-form-group">
             <label htmlFor="time">Time:</label>
            <input
               type="time"
              id="time"
               value={time}
               onChange={(e) => setTime(e.target.value)}
             />
          </div>
  
           <div className="acc-form-group">
            <label htmlFor="location">Location:</label>
             <input
               type="text"
              id="location"
               value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
           </div>
  
           <div className="acc-form-group">
            <label htmlFor="description">Description:</label>
             <textarea
               id="description"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
             />
           </div>
  
           <div className="acc-form-group">
            <label htmlFor="contributingFactor">Contributing Factor:</label>
            <textarea
             id="contributingFactor"
              value={contributingFactor}
              onChange={(e) => setContributingFactor(e.target.value)}
            />
           </div>
      </div>
      <div className="acc-form-part">
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
            <label htmlFor="driverContactNumber">Driver Contact Number:</label>
            <input
              type="text"
              id="driverContactNumber"
              value={driverContactNumber}
              onChange={(e) => setDriverContactNumber(e.target.value)}
            />
          </div>
          <div className="acc-form-field">
            <label htmlFor="driverNID">Driver NID:</label>
            <input
              type="text"
              id="driverNID"
              value={driverNID}
              onChange={(e) => setDriverNID(e.target.value)}
            />
          </div>
          <div className="acc-form-field">
    <label htmlFor="issuerName">Issuer Name:</label>
    <input
      type="text"
      id="issuerName"
      value={issuerName}
      onChange={(e) => setIssuerName(e.target.value)}
    />
  </div>
  <div className="acc-form-field">
    <label htmlFor="issuerContactNumber">Issuer Contact Number:</label>
    <input
      type="text"
      id="issuerContactNumber"
      value={issuerContactNumber}
      onChange={(e) => setIssuerContactNumber(e.target.value)}
    />
  </div>
  <div className="acc-form-field">
    <label htmlFor="policyNumber">Policy Number:</label>
    <input
      type="text"
      id="policyNumber"
      value={policyNumber}
      onChange={(e) => setPolicyNumber(e.target.value)}
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
  </div>
  <div className="acc-form-field">
    <label htmlFor="witnessContactNumber">Witness Contact Number:</label>
    <input
      type="text"
      id="witnessContactNumber"
      value={witnessContactNumber}
      onChange={(e) => setWitnessContactNumber(e.target.value)}
    />
  </div>
  <div className="acc-form-field">
    <label htmlFor="witnessNID">Witness NID:</label>
    <input
      type="text"
      id="witnessNID"
      value={witnessNID}
      onChange={(e) => setWitnessNID(e.target.value)}
    />
  </div>
        
      </div>
      <div className="acc-form-part">
        <h2>Accident Photo Update</h2>
        <div className="acc-form-field">
            <label htmlFor="AccidentImageUrl">Accident Image URL:</label>
            <input
              type="text"
              id="AccidentImageUrl"
              value={accidentImageUrl}
              onChange={(e) => setAccidentImageUrl(e.target.value)}
            />
          </div>
          
       
        </div>
      <div className="acc-form-part">
        <h2>Claim information</h2>
        <div className="acc-form-field">
            <label htmlFor="claimNumber">Claim Number:</label>
            <input
              type="text"
              id="claimNumber"
              value={claimNumber}
              onChange={(e) => setClaimNumber(e.target.value)}
            />
          </div>
          <div className="acc-form-field">
            <label htmlFor="adjusterName">Adjuster's Name:</label>
            <input
              type="text"
              id="adjusterName"
              value={adjusterName}
              onChange={(e) => setAdjusterName(e.target.value)}
            />
          </div>
          <div className="acc-form-field">
            <label htmlFor="adjusterContactNumber">Adjuster's Contact Number:</label>
            <input
              type="text"
              id="adjusterContactNumber"
              value={adjusterContactNumber}
              onChange={(e) => setAdjusterContactNumber(e.target.value)}
            />
          </div>
          <div className="acc-form-field">
            <label htmlFor="claimStatus">Claim Status:</label>
            <input
              type="text"
              id="claimStatus"
              value={claimStatus}
              onChange={(e) => setClaimStatus(e.target.value)}
            />
          </div>
       
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default InsuranceReport
