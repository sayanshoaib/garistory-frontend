import React, { useState, useEffect } from 'react'
import "./CarServicingform.css"
import Web3 from 'web3';
import ContractABI from './ConractABI';

const CarServicingform = () => {
  const [mileage, setMileage] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [servicingCenterSignature, setServicingCenterSignature] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [vin, setVin] = useState("");
  const [odometerReading, setOdometerReading] = useState(0);
  const [serviceType, setServiceType] = useState([]); // Array of uint8
  const [partsUsedInput, setPartsUsedInput] = useState(""); // Input for parts names
  const [partsUsed, setPartsUsed] = useState([]); // Array of strings for parts used
  const [FutureRecomendedService, setFutureRecomendedService] = useState([]); // Array of uint8
  const [description, setDescription] = useState("");

  const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';


  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null)

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const web3Instance = new Web3(window.ethereum);
      window.ethereum.enable() // Request user's permission to connect
        .then(() => {
          const contractInstance = new web3Instance.eth.Contract(ContractABI, contractAddress);
          setWeb3(web3Instance);
          setContract(contractInstance);
        })
        .catch((error) => {
          console.error('Failed to connect to MetaMask:', error);
        });
    }
  }, []);
  // Define serviceTypeMap and recommendedServiceMap
  const serviceTypeMap = {
    OIL_CHANGE: 0,
    TIRE_ROTATION: 1,
    BRAKE_INSPECTION: 2,
    ENGINE_TUNEUP: 3,
    TRANSMISSION_FLUID_CHANGE: 4,
    COOLANT_FLUSH: 5,
    ALIGNMENT: 6,
  };

  const recommendedServiceMap = {
    OIL_CHANGE: 0,
    TIRE_ROTATION: 1,
    BRAKE_INSPECTION: 2,
    ENGINE_TUNEUP: 3,
    TRANSMISSION_FLUID_CHANGE: 4,
    COOLANT_FLUSH: 5,
    ALIGNMENT: 6,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!web3 || !contract) {
      alert('Web3 and contract not initialized. Please install a compatible Ethereum wallet.');
      return;
    }

    try {
      const accounts = await web3.eth.getAccounts();
      console.log("Connected account:", accounts[0]);
      // Send a transaction to the contract to store the data
      await contract.methods
        .storeFormData(
          ownerEmail,
          vin,
          mileage,
          odometerReading,
          servicingCenterSignature,
          serviceType,
          partsUsed,
          FutureRecomendedService,
          description
        )
        .send({ from: accounts[0] });
      console.log('Data stored in the smart contract');

      // Clear form fields
      setMileage(0);
      setTotalCost(0);
      setServicingCenterSignature('');
      setOwnerEmail('');
      setVin('');
      setOdometerReading(0);
      setServiceType([]);
      setPartsUsed([]);
      setFutureRecomendedService([]);
      setDescription('');
      // Clear other form fields...

      console.log('Data stored in the smart contract');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addParts = () => {
    // Add the entered parts name to the partsUsed array
    setPartsUsed([...partsUsed, partsUsedInput]);
    // Clear the input field
    setPartsUsedInput("");
  };

  const removeParts = (index) => {
    // Remove the selected parts name from the partsUsed array
    const updatedParts = partsUsed.filter((_, i) => i !== index);
    setPartsUsed(updatedParts);
  };

  return (
    <div className="servicing-form-container">
      <h1>Service Record Form</h1>
      <div className="servicing-main-form">
        <form onSubmit={handleSubmit}>
          <div className='case1'>
            <div className='case2'><h2>Basic <br></br>information</h2></div>
            <div className='case3'>
              <div className="form-part">

                <div className="form-field">
                  <label htmlFor="ownerEmail">Owner's Email:</label>
                  <input
                    type="email"
                    id="ownerEmail"
                    value={ownerEmail}
                    onChange={(e) => setOwnerEmail(e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="vin">VIN Number:</label>
                  <input
                    type="text"
                    id="vin"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="mileage">Mileage:</label>
                  <input
                    type="number"
                    id="mileage"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="odometerReading">Odometer Reading :</label>
                  <input
                    type="number"
                    id="odometerReading"
                    value={odometerReading}
                    onChange={(e) => setOdometerReading(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>




          <div className='case4'>
            <h2>Service Information</h2>
            <div className="form-part4">
              <div className="form-field">
                <label>Service Type:</label>
                <br></br>
                {Object.keys(serviceTypeMap).map((option, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={`serviceType${index}`}
                      value={option}
                      checked={serviceType.includes(serviceTypeMap[option])}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setServiceType([...serviceType, serviceTypeMap[option]]);
                        } else {
                          setServiceType(serviceType.filter((item) => item !== serviceTypeMap[option]));
                        }
                      }}
                    />
                    <label className='option-label' htmlFor={`serviceType${index}`}>{option}</label>
                  </div>
                ))}
              </div>
              <div className="form-field">
                <label>Future Recommended Service:</label>
                <br></br>
                {Object.keys(recommendedServiceMap).map((option, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={`recommendedService${index}`}
                      value={option}
                      checked={FutureRecomendedService.includes(recommendedServiceMap[option])}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFutureRecomendedService([...FutureRecomendedService, recommendedServiceMap[option]]);
                        } else {
                          setFutureRecomendedService(FutureRecomendedService.filter((item) => item !== recommendedServiceMap[option]));
                        }
                      }}
                    />
                    <label className='option-label' htmlFor={`recommendedService${index}`}>{option}</label>
                  </div>
                ))}
              </div>
              <div className="form-field">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label>Parts Used:</label>
                <div>
                  <input
                    type="text"
                    value={partsUsedInput}
                    onChange={(e) => setPartsUsedInput(e.target.value)}
                    placeholder="Enter part name"
                  />
                  <button type="button" onClick={addParts}>
                    Add Another part
                  </button>
                </div>
                <div className='remove-button'>
                  <ul>
                    {partsUsed.map((part, index) => (
                      <li key={index}>
                        {part}
                        <button type="button" onClick={() => removeParts(index)}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className='case6'>
            <h2>Cost and Validation</h2>
            <div className="form-part5">
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
                <label htmlFor="servicingCenterSignature">Mechanic Signature:</label>
                <input
                  type="text"
                  id="servicingCenterSignature"
                  value={servicingCenterSignature}
                  onChange={(e) => setServicingCenterSignature(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className='ser-rec-submit' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default CarServicingform;