import React, { useState,useEffect } from "react"; 
import '../../App.css';
import './VehicleEntry.css';

import axios from "axios";

const VehicleEntry= () => {
  const [vehicleID, setVehicleID] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [initialRegistration, setInitialRegistration] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [fuel, setFuel] = useState("");
  const [mileage, setMileage] = useState("");
  const [drive, setDrive] = useState("");
  const [color, setColor] = useState("");
  const [transmission, setTransmission] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  // Function to generate a random VIN
  const generateRandomVIN = async () => {
    try {
      const response = await axios.get("https://www.uuidgenerator.net/api/version1");
      // const randomVIN = response.data.uuids[0];
      console.log(response.data);
      setVehicleID(response.data);
    } catch (error) {
      console.error("Error generating random VIN:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      vehicleID,
      make,
      model,
      year,
      bodyType,
      initialRegistration,
      registrationNumber,
      fuel: parseInt(fuel, 10),
      mileage: parseInt(mileage, 10),
      drive: parseInt(drive, 10),
      color,
      transmission: parseInt(transmission, 10),
      price: parseInt(price, 10),
      imageURL,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/vehicles",
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
  
useEffect(() => {
    generateRandomVIN();
  }, []);

  return (
    <main className='main_s'>

      <h1> Vehicle Information Registration</h1>

      <form className='form_s' onSubmit={handleSubmit} >
        <div>

          <div className='text_s' >


            <div><h1> </h1></div>
            <div className='basic'>
              <div className='input'>
                <label htmlFor='vin'>VIN</label>
                <input type="text" id="vehicleID" name="vehicleID" value={vehicleID}
          onChange={(e) => setVehicleID(e.target.value)} placeholder='Enter Vehicle Identification Number'></input>

                <div className='input'>
                  <label htmlFor='make'>Make</label>
                  <input type="text" id="make" name="make" value={make}
                    onChange={(e) => setMake(e.target.value)} placeholder='Enter the name of manufacturer'></input>

                </div>
                <div className='input'>
                  <label htmlFor='model'>Model</label>
                  <input type="text" id="model" name="model" value={model}
                   onChange={(e) => setModel(e.target.value)} placeholder='Enter the model number'></input>

                </div>
                <div className='input'>
                  <label htmlFor='year'>Year</label>
                  <input type='text' id="year" name="year" value={year}
                   onChange={(e) => setYear(e.target.value)} placeholder='Enter the manufacturing year'></input>

                </div>
                
                <div className='input'>
                  <label htmlFor='price'>Market Value</label>
                  <input   type="number" id="price" name="price" value={price}
                   onChange={(e) => setPrice(e.target.value)} placeholder='Enter the price of vehicle'></input>

                </div>
              </div>
            </div>
            <div><h1>      </h1></div>

            <div className='feature'>


              <div className='input'>
                <label htmlFor='bodytype'>Body Type</label>
                <input type="text" id="bodyType" name="bodyType" value={bodyType}
                 onChange={(e) => setBodyType(e.target.value)} placeholder='Enter vehicle body type'></input>

              </div>
              <div className='input'>
                <label htmlFor='color'>Body Color</label>
                <input type="text" id="color" name="color" value={color}
                   onChange={(e) => setColor(e.target.value)} placeholder='Enter vehicle body color'></input>

              </div>
              <div className='input'>
                <label htmlFor='fuel'>Fuel</label>
                <input  type="number" id="fuel" name="fuel" value={fuel} placeholder='L'
                   onChange={(e) => setFuel(e.target.value)}></input>

              </div>
              <div className='input'>
              <label htmlFor="mileage">Mileage </label>
                <input type="number" id="mileage" name="mileage" value={mileage}
                   onChange={(e) => setMileage(e.target.value)} placeholder='mile'></input>

              </div>
              <div className='input'>
                <label htmlFor='drive'>Drive</label>
                <input type="number" id="drive" name="drive" value={drive}
                    onChange={(e) => setDrive(e.target.value)}placeholder=''></input>

              </div>

              <div className='input'>
                <label htmlFor='transmission'>Transmission</label>
                <input type="number" id="transmission" name="transmission" value={transmission}
                     onChange={(e) => setTransmission(e.target.value)} placeholder=''></input>

              </div>

            </div>

          </div>

        </div>

        <div className='text_s' >
          <div><h1>      </h1></div>
          <div className='essential'>
            <div className='input'>
              <label htmlFor='rdate'>Initial RegisTration </label>
              <input type="text" id="initialRegistration" name="initialRegistration" value={initialRegistration}
                   onChange={(e) => setInitialRegistration(e.target.value)}placeholder='Enter the initial registration date'></input>
            </div>

            <div className='input'>
              <label htmlFor='reg'>Registration Number</label>
              <input type="text" id="registrationNumber" name="registrationNumber" value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)} placeholder='Enter the registration number'></input>
            </div>

          </div>
          <div><h1>      </h1></div>

          <div className='img'>
            <h1 className='uimage'>Upload Image</h1>

            <div className='input'>
              <label htmlFor='image1'>Select front-Image </label>
              <input type="text" id="imageURL" name="imageURL" value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)} ></input>

            </div>
            <div className='input'>
              <label htmlFor='image2'>Select Back-Image </label>
              <input type="text" id="imageURL" name="imageURL" value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)} ></input>

            </div>

            <div className='input'>
              <label htmlFor='image3'>Select Right-Image </label>
              <input type="text" id="imageURL" name="imageURL" value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)} ></input>

            </div>
            <div className='input'>
              <label htmlFor='image4'>Select Left-Image </label>
              <input type="text" id="imageURL" name="imageURL" value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)} ></input>

            </div>
            <div className='input'>
              <label htmlFor='image5'>Select Cover Image</label>
              <input type="text" id="imageURL" name="imageURL" value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)} ></input>

            </div>
            

          </div>
          <div><h1>      </h1></div>
        <div><h1>      </h1></div>
          <button type="submit"> Submit </button>
        </div>
        
        
      </form>
      
      
      <div><h1>      </h1></div>
    </main>
  )
}

export default VehicleEntry;
