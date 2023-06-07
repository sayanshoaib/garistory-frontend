
import React, { useState } from "react";
import axios from "axios";
import './Serviceentry.css';
import Web3 from 'web3';
import GaristroyContract from './contracts/Garistroy.json'; // Replace with the actual contract ABI


  const Serviceentry = () =>{
    const [ownerEmail, setOwnerEmail] = useState('');
  const [vin, setVin] = useState('');
  const [mechanicSignature, setMechanicSignature] = useState('');
  const [costOfService, setCostOfService] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [odometerReading, setOdometerReading] = useState(0);
  const [description, setDescription] = useState('');
  const [serviceType, setServiceType] = useState({
    OIL_CHANGE: false,
    TIRE_ROTATION: false,
    BRAKE_INSPECTION: false,
    ENGINE_TUNEUP: false,
    TRANSMISSION_FLUID_CHANGE: false,
    COOLANT_FLUSH: false,
    ALIGNMENT: false
  });
  const [recommendedFutureServices, setRecommendedFutureServices] = useState([]);
  const [partsUsed, setPartsUsed] = useState([]);
  const web3 = new Web3(window.ethereum);
  const handleServicingRecord = async () => {
    try {
      const accounts = await web3.eth.requestAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GaristroyContract.networks[networkId];
      const contractInstance = new web3.eth.Contract(
        GaristroyContract.abi,
        deployedNetwork.address
      );

      const selectedServiceTypes = Object.entries(serviceType)
        .filter(([, value]) => value)
        .map(([key]) => key);

      await contractInstance.methods
        .recordServicing(
          ownerEmail,
          vin,
          mechanicSignature,
          costOfService,
          selectedServiceTypes,
          recommendedFutureServices,
          partsUsed,
          mileage,
          odometerReading,
          description
        )
        .send({ from: accounts[0] });

      // Reset the input fields
      setOwnerEmail('');
      setVin('');
      setMechanicSignature('');
      setCostOfService(0);
      setMileage(0);
      setOdometerReading(0);
      setDescription('');

      console.log('Servicing record saved successfully!');
    } catch (error) {
      console.error('Error saving servicing record:', error);
    }
  };

  const handleServiceTypeChange = (event) => {
    const { name, checked } = event.target;
    setServiceType((prevServiceType) => ({
      ...prevServiceType,
      [name]: checked
    }));
  };

  const handleRecommendedFutureServicesChange = (event) => {
    const { value } = event.target;
    setRecommendedFutureServices((prevRecommendedFutureServices) =>
      prevRecommendedFutureServices.includes(value)
        ? prevRecommendedFutureServices.filter((service) => service !== value)
        : [...prevRecommendedFutureServices, value]
    );
  };

  const handlePartsUsedChange = (event) => {
    const { value } = event.target;
    setPartsUsed((prevPartsUsed) =>
      prevPartsUsed.includes(value)
        ? prevPartsUsed.filter((part) => part !== value)
        : [...prevPartsUsed, value]
    );
  };
  

  return (
    <div>
    <h1>Servicing Record Form</h1>
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="ownerEmail">Owner Email:</label>
      <input
        type="text"
        id="ownerEmail"
        value={ownerEmail}
        onChange={(e) => setOwnerEmail(e.target.value)}
      />
      <br />

      <label htmlFor="vin">VIN:</label>
      <input
        type="text"
        id="vin"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
      />
      <br />

      <label htmlFor="mechanicSignature">Mechanic Signature:</label>
      <input
        type="text"
        id="mechanicSignature"
        value={mechanicSignature}
        onChange={(e) => setMechanicSignature(e.target.value)}
      />
      <br />

      <label htmlFor="costOfService">Cost of Service:</label>
      <input
        type="number"
        idvalue={costOfService}
        onChange={(e) => setCostOfService(e.target.value)}
      />
      <br />

      <label htmlFor="mileage">Mileage:</label>
      <input
        type="number"
        id="mileage"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
      />
      <br />

      <label htmlFor="odometerReading">Odometer Reading:</label>
      <input
        type="number"
        id="odometerReading"
        value={odometerReading}
        onChange={(e) => setOdometerReading(e.target.value)}
      />
      <br />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <h2>Service Type:</h2>
      <label htmlFor="OIL_CHANGE">Oil Change</label>
      <input type="checkbox" id="OIL_CHANGE" />
      
      <label htmlFor="TIRE_ROTATION">TIRE ROTATION</label>
      <input type="checkbox" id="TIRE_ROTATION" />
     
      <label htmlFor=" BRAKE_INSPECTION"> BRAKE INSPECTION</label>
      <input type="checkbox" id=" BRAKE_INSPECTION" />
      
      <label htmlFor="ENGINE_TUNEUP">ENGINE TUNEUP</label>
      <input type="checkbox" id="ENGINE_TUNEUP" />
      
      <label htmlFor="TRANSMISSION_FLUID_CHANGE">TRANSMISSION FLUID CHANGE</label>
      <input type="checkbox" id="TRANSMISSION_FLUID_CHANGEO" />

      <label htmlFor="COOLANT_FLUSH">COOLANT FLUSH</label>
      <input type="checkbox" id="COOLANT_FLUSH" />

      <label htmlFor="ALIGNMENT">ALIGNMENT</label>
      <input type="checkbox" id="ALIGNMENT" />
      {/* Add similar checkboxes for other service types */}

      {/* Add input fields for recommendedFutureServices and partsUsed */}
      <label htmlFor="recommendedFutureServices">Recommended Future Services:</label>
        <input
          type="checkbox"
          id="recommendedFutureServices"
          value={recommendedFutureServices}
          onChange={handleRecommendedFutureServicesChange}
        />
        <br></br>
        <label htmlFor="partsUsed">Parts Used:</label>
   <input
  type="text"
  id="partsUsed"
  value={partsUsed}
  onChange={handlePartsUsedChange}
   />
<br />
      <button type="submit" onClick={handleServicingRecord}>
        Save Servicing Record
      </button>
    </form>
  </div>
);
};

export default Serviceentry
