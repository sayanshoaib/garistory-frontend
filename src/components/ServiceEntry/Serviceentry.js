
import React, { useState } from "react";
import axios from "axios";
import { ethers } from 'ethers';
import './Serviceentry.css';
import Web3 from 'web3';
import GaristroyContract from './contracts/Garistroy.json'; // Replace with the actual contract ABI

const contractAddress = 'YOUR_CONTRACT_ADDRESS';

const serviceTypes = [
  'OIL_CHANGE',
  'TIRE_ROTATION',
  'BRAKE_INSPECTION',
  'ENGINE_TUNEUP',
  'TRANSMISSION_FLUID_CHANGE',
  'COOLANT_FLUSH',
  'ALIGNMENT'
];


  const Serviceentry = () =>{
    const [ownerEmail, setOwnerEmail] = useState('');
  const [vin, setVin] = useState('');
  const [mechanicSignature, setMechanicSignature] = useState('');
  const [costOfService, setCostOfService] = useState('');
  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);
  const [recommendedFutureServices, setRecommendedFutureServices] = useState([]);
  const [partsUsed, setPartsUsed] = useState([]);
  const [mileage, setMileage] = useState('');
  const [odometerReading, setOdometerReading] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.ethereum) {
      alert('Please install MetaMask to interact with the Ethereum network.');
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    try {
      const contract = new ethers.Contract(contractAddress, GaristroyContract.abi, signer);

      const serviceTypeValues = selectedServiceTypes.map((type) => GaristroyContract.VehicleServiceType[type]);

      const tx = await contract.recordServicing(
        ownerEmail,
        vin,
        mechanicSignature,
        ethers.utils.parseEther(costOfService),
        serviceTypeValues,
        recommendedFutureServices.map((type) => GaristroyContract.VehicleServiceType[type]),
        partsUsed,
        parseInt(mileage),
        parseInt(odometerReading),
        description
      );

      await tx.wait();

      alert('Servicing record submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the servicing record.');
    }
  };

  return (
    <div className="App">
      <h1>Garistroy Servicing Record</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="ownerEmail">Owner Email:</label>
        <input type="email" id="ownerEmail" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} required />

        <label htmlFor="vin">VIN:</label>
        <input type="text" id="vin" value={vin} onChange={(e) => setVin(e.target.value)} required />

        

        <label htmlFor="selectedServiceTypes">Service Types:</label>
        {serviceTypes.map((type) => (
          <div key={type}>
            <input
              type="checkbox"
              id={type}checked={selectedServiceTypes.includes(type)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedServiceTypes([...selectedServiceTypes, type]);
                } else {
                  setSelectedServiceTypes(selectedServiceTypes.filter((t) => t !== type));
                }
              }}
            />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}

        <label htmlFor="recommendedFutureServices">Recommended Future Services:</label>
        {serviceTypes.map((type) => (
          <div key={type}>
            <input
              type="checkbox"
              id={type}
              checked={recommendedFutureServices.includes(type)}
              onChange={(e) => {
                if (e.target.checked) {
                  setRecommendedFutureServices([...recommendedFutureServices, type]);
                } else {
                  setRecommendedFutureServices(recommendedFutureServices.filter((t) => t !== type));
                }
              }}
            />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}

        <label htmlFor="partsUsed">Parts Used:</label>
        <input type="text" id="partsUsed" value={partsUsed} onChange={(e) => setPartsUsed(e.target.value)} required />

        <label htmlFor="mileage">Mileage:</label>
        <input type="number" id="mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} required />

        <label htmlFor="odometerReading">Odometer Reading:</label>
        <input type="number" id="odometerReading" value={odometerReading} onChange={(e) => setOdometerReading(e.target.value)} required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label htmlFor="mechanicSignature">Mechanic Signature:</label>
        <input type="text" id="mechanicSignature" value={mechanicSignature} onChange={(e) => setMechanicSignature(e.target.value)} required />

        <label htmlFor="costOfService">Cost of Service:</label>
        <input type="number" id="costOfService" value={costOfService} onChange={(e) => setCostOfService(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Serviceentry
