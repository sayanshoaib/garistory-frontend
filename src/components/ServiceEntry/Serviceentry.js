
import React, { useState } from "react";
import axios from "axios";
import { ethers } from 'ethers';
import './Serviceentry.css';
import Web3 from 'web3';
import GaristroyContract from './garistory.json';




  const Serviceentry = () =>{
    const [ownerEmail, setOwnerEmail] = useState('');
    const [vin, setVin] = useState('');
    const [mechanicSignature, setMechanicSignature] = useState('');
    const [costOfService, setCostOfService] = useState('');
    const [serviceType, setServiceType] = useState([]);
    const [recommendedFutureServices, setRecommendedFutureServices] = useState([]);
    const [partsUsed, setPartsUsed] = useState([]);
    const [mileage, setMileage] = useState('');
    const [odometerReading, setOdometerReading] = useState('');
    const [description, setDescription] = useState('');
    
  
    const handleServiceTypeChange = (event) => {
      const { value, checked } = event.target;
      if (checked) {
        setServiceType([...serviceType, value]);
      } else {
        setServiceType(serviceType.filter((type) => type !== value));
      }
    };
  
    const handleRecommendedFutureServicesChange = (event) => {
      const { value, checked } = event.target;
      if (checked) {
        setRecommendedFutureServices([...recommendedFutureServices, value]);
      } else {
        setRecommendedFutureServices(
          recommendedFutureServices.filter((type) => type !== value)
        );
      }
    };
  
    const handlePartsUsedChange = (event) => {
      setPartsUsed(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Connect to the blockchain using web3
      
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GaristroyContract.networks[networkId];
      const garistroyInstance = new web3.eth.Contract(
        GaristroyContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      const partsUsedArray = partsUsed.split('\n');

      // Prepare the data for recording servicing
      const data = {
        ownerEmail,
        vin,
        mechanicSignature,
        costOfService,
        serviceType,
        recommendedFutureServices,
        partsUsed,
        mileage,
        odometerReading,
        description,
      };
  
      try {
        // Call the contract's recordServicing function
        await garistroyInstance.methods.recordServicing(
          data.ownerEmail,
          data.vin,
          data.mechanicSignature,
          data.costOfService,
          data.serviceType,
          data.recommendedFutureServices,
          data.partsUsed,
          data.mileage,
          data.odometerReading,
          data.description
        ).send({ from: web3.eth.defaultAccount });
    
        // Clear the form inputs
        setOwnerEmail('');
        setVin('');
        setMechanicSignature('');
        setCostOfService('');
        setServiceType([]);
        setRecommendedFutureServices([]);
        setPartsUsed([]);
        setMileage('');
        setOdometerReading('');
        setDescription('');
    
        // Log success message
        console.log('Information recorded successfully!');
      } catch (error) {
        console.error('Failed to record information:', error);
      }
    };
  
    return (
      <div>
        <h1>Garistroy Servicing</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="ownerEmail">Owner Email:</label>
          <input
            type="email"
            id="ownerEmail"
            value={ownerEmail}
            onChange={(e) => setOwnerEmail(e.target.value)}
            required
          /><br />
  
          <label htmlFor="vin">Vehicle VIN:</label>
          <input
            type="text"
            id="vin"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            required
          /><br />
  
          <label htmlFor="mechanicSignature">Mechanic Signature:</label>
          <input
            type="text"
            id="mechanicSignature"
            value={mechanicSignature}
            onChange={(e) => setMechanicSignature(e.target.value)}
            required
          /><br />
  
          <label htmlFor="costOfService">Cost of Service:</label>
          <input
            type="number"
            id="costOfService"
            value={costOfService}
            onChange={(e) => setCostOfService(e.target.value)}
            required
          /><br />


  
          <label htmlFor="serviceType">Service Type:</label><br />
          <input
            type="checkbox"
            id="oilChange"
            name="OIL_CHANGE"
            value="OIL_CHANGE"
            checked={serviceType.includes('OIL_CHANGE')}
            onChange={handleServiceTypeChange}
          />
          <label htmlFor="oilChange">Oil Change</label><br />
          <input
            type="checkbox"
            id="tireRotation"
            name="TIRE_ROTATION"
            value="TIRE_ROTATION"
            checked={serviceType.includes('TIRE_ROTATION')}
            onChange={handleServiceTypeChange}
          />
          <label htmlFor="brake">TIRE_ROTATION</label><br />
          
          <input
            type="checkbox"
            id="brake"
            name="BRAKE_INSPECTIONe"
            value="BRAKE_INSPECTION"
            checked={serviceType.includes('BRAKE_INSPECTION')}
            onChange={handleServiceTypeChange}
          />
          <label htmlFor="brake">BRAKE INSPECTION</label><br />
           
          <input
            type="checkbox"
            id="engine"
            name="ENGINE_TUNEU"
            value="ENGINE_TUNEUP"
            checked={serviceType.includes('BENGINE_TUNEUP')}
            onChange={handleServiceTypeChange}
          />
          <label htmlFor="engine">ENGINE TUNEUP</label><br />
           
          <input
            type="checkbox"
            id="transmission"
            name="ETRANSMISSION_FLUID_CHANGE"
            value="ETRANSMISSION_FLUID_CHANGE"
            checked={serviceType.includes('TRANSMISSION_FLUID_CHANGE')}
            onChange={handleServiceTypeChange}
          />
           
           <label htmlFor="engine">TRANSMISSION FLUID CHANGE</label><br />
          <input
            type="checkbox"
            id="coolant"
            name="COOLANT_FLUSH"
            value="COOLANT_FLUSH"
            checked={serviceType.includes('COOLANT_FLUSH')}
            onChange={handleServiceTypeChange}
          />
          <label htmlFor="coolant"> COOLANT FLUSH</label><br />
           
          <input
            type="checkbox"
            id="alignment"
            name="ALIGNMENT"
            value="ALIGNMENT"
            checked={serviceType.includes('ALIGNMENT')}
            onChange={handleServiceTypeChange}
          />
          <label htmlFor="alignment"> ALIGNMENT</label><br />
  

          <label htmlFor="recommendedFutureServices">Recommended Future Services:</label><br />
          <input
            type="checkbox"
            id="oilChangef"
            name="oilChangef"
            value="OIL_CHANGE"
            checked={recommendedFutureServices.includes('OIL_CHANGE')}
            onChange={handleRecommendedFutureServicesChange}
          />
          <label htmlFor="oilChange">Oil Change</label><br />
          <input
            type="checkbox"
            id="tireRotationf"
            name="tireRotationf"
            value="TIRE_ROTATION"
            checked={recommendedFutureServices.includes('TIRE_ROTATION')}
            onChange={handleRecommendedFutureServicesChange}
          />
          <label htmlFor="brake">TIRE_ROTATION</label><br />
          
          <input
            type="checkbox"
            id="brakef"
            name="brakef"
            value="BRAKE_INSPECTION"
            checked={recommendedFutureServices.includes('BRAKE_INSPECTION')}
            onChange={handleRecommendedFutureServicesChange}
          />
          <label htmlFor="brake">BRAKE INSPECTION</label><br />
           
          <input
            type="checkbox"
            id="enginef"
            name="enginef"
            value="ENGINE_TUNEUP"
            checked={recommendedFutureServices.includes('BENGINE_TUNEUP')}
            onChange={handleRecommendedFutureServicesChange}
          />
          <label htmlFor="engine">ENGINE TUNEUP</label><br />
           
          <input
            type="checkbox" 
            id="transmissionf"
            name="transmissionf"
            value="ETRANSMISSION_FLUID_CHANGE"
            checked={recommendedFutureServices.includes('TRANSMISSION_FLUID_CHANGE')}
            onChange={handleRecommendedFutureServicesChange}
          />
           
           <label htmlFor="engine">TRANSMISSION FLUID CHANGE</label><br />
          <input
            type="checkbox"
            id="coolantf"
            name="coolantf"
            value="COOLANT_FLUSH"
            checked={recommendedFutureServices.includes('COOLANT_FLUSH')}
            onChange={handleRecommendedFutureServicesChange}
          />
          <label htmlFor="coolant"> COOLANT FLUSH</label><br />
           
          <input
            type="checkbox"
            id="alignmentf"
            name="alignmentf"
            value="ALIGNMENT"
            checked={recommendedFutureServices.includes('ALIGNMENT')}
            onChange={handleRecommendedFutureServicesChange}
          />
          <label htmlFor="alignment"> ALIGNMENT</label><br />


          
         
  
          <label htmlFor="partsUsed">Parts Used:</label><br />
            <textarea
              id="partsUsed"
              value={partsUsed}
              onChange={handlePartsUsedChange}
              required
            ></textarea><br />
  
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="number"
            id="mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            required
          /><br />
  
          <label htmlFor="odometerReading">Odometer Reading:</label>
          <input
            type="number"
            id="odometerReading"
            value={odometerReading}
            onChange={(e) => setOdometerReading(e.target.value)}
            required
          /><br />
  
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea><br />
  
          <button type="submit">Record Servicing</button>
        </form>
      </div>
    );
  };
export default Serviceentry
