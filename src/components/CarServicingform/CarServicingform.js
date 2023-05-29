
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CarServicingform = () =>{
        const { id } = useParams();
        const [vehicle, setVehicle] = useState(null);
// for entering new info
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
      
        useEffect(() => {
          fetchVehicleData(id);
        }, [id]);
      
        const fetchVehicleData = async (id) => {
          try {
            const response = await axios.get(`http://localhost:8080/vehicles/${id}`);
            const vehicleData = response.data;
            setVehicle(vehicleData);
          } catch (error) {
            console.error("Error fetching vehicle data:", error);
          }
        };
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setVehicle((prevVehicle) => ({
            ...prevVehicle,
            [name]: value,
          }));
        };

        
       // for entereing new info
        const handleSubmit2 = (event) => {
            event.preventDefault();
            event.preventDefault();

            // Perform form submission logic here
            // You can access the form values using the state variables defined above
            console.log("Mileage:", mileage);
            console.log("Service Performed:", servicePerformed);
            console.log("Technician Name:", technicianName);
            console.log("License Plate Number:", licensePlateNumber);
            console.log("Part Name:", partName);
            console.log("Part Number:", partNumber);
            console.log("Total Cost:", totalCost);
            console.log("Date of Service:", dateOfService);
            console.log("Customer Signature:", customerSignature);
            console.log("Servicing Center Signature:", servicingCenterSignature);
          
            // Reset form fields
            setMileage("");
            setServicePerformed("");
            setTechnicianName("");
            setLicensePlateNumber("");
            setPartName("");
            setPartNumber("");
            setTotalCost("");
            setDateOfService("");
            setCustomerSignature("");
            setServicingCenterSignature("");
          };
      
       // const handleSubmit = async (e) => {
        //   e.preventDefault();
        //   try {
        //     await axios.put(`http://localhost:8080/vehicles/${id}`, vehicle.data);
        //     // Handle successful update
        //     console.log("Vehicle updated successfully!");
        //   } catch (error) {
        //     console.error("Error updating vehicle:", error);
        //   }
        // };
      
        if (!vehicle) {
          return <div>Loading...</div>;
        }
      
        return (
            <div className="root">
                <form onSubmit={handleSubmit2}>
          {/* <div className="service-vehicle-form">
            <h2>Information We have on Vehicle</h2>
            
              <div>
                <label>Make:</label>
                <input
                  type="text"
                  name="make"
                  value={vehicle.data.make}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Model:</label>
                <input
                  type="text"
                  name="model"
                  value={vehicle.data.model}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Year:</label>
                <input
                  type="text"
                  name="year"
                  value={vehicle.data.year}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Color:</label>
                <input
                  type="text"
                  name="color"
                  value={vehicle.data.color}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Drive:</label>
                <input
                  type="text"
                  name="drive"
                  value={vehicle.data.drive}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Transmission:</label>
                <input
                  type="text"
                  name="transmission"
                  value={vehicle.data.transmission}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Fuel:</label>
                <input
                  type="text"
                  name="fuel"
                  value={vehicle.data.fuel}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Price:</label>
                <input
                  type="text"
                  name="price"
                  value={vehicle.data.price}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Image URL:</label>
                <input
                  type="text"
                  name="imageURL"
                  value={vehicle.data.imageURL}
                  // value="images/img-6.png"
                  onChange={handleChange}
                  placeholder="Enter Image URL"
                />
              </div>
              <button type="submit">Update Vehicle</button>
           
          </div> */}



          <h2>Part 1: Mileage, Service Performed, Technician Name</h2>
          

          <div className="service-vehicle-form">
            <div>
          <label htmlFor="mileage">Mileage:</label>
          <input
            type="text"
            id="mileage"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="servicePerformed">Service Performed:</label>
          <input
            type="text"
            id="servicePerformed"
            value={servicePerformed}
            onChange={(e) => setServicePerformed(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="technicianName">Technician Name:</label>
          <input
            type="text"
            id="technicianName"
            value={technicianName}
            onChange={(e) => setTechnicianName(e.target.value)}
            required
          />

          </div>
          </div>
          <h2>Part 2: Part information(if requaired)</h2>

          <div className="service-vehicle-form">
          <div>

          <label htmlFor="partName">Part Name:</label>
          <input
            type="text"
            id="partName"
            value={partName}
            onChange={(e) => setPartName(e.target.value)}
            
          />
        </div>
        <div>
          <label htmlFor="partNumber">Part Number:</label>
          <input
            type="text"
            id="partNumber"
            value={partNumber}
            onChange={(e) => setPartNumber(e.target.value)}
            
          />
        </div>
        
          </div>
          <h2>Part 3: Memo and validation</h2>
          <div className="service-vehicle-form">
          <div>
          <label htmlFor="totalCost">Total Cost:</label>
          <input
            type="number"
            id="totalCost"
            value={totalCost}
            onChange={(e) => setTotalCost(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfService">Date of Service:</label>
          <input
            type="date"
            id="dateOfService"
            value={dateOfService}
            onChange={(e) => setDateOfService(e.target.value)}
            required
          />
        </div>
        <div>
  <label htmlFor="licensePlateNumber">License Plate Number:</label>
  <input
    type="text"
    id="licensePlateNumber"
    value={licensePlateNumber}
    onChange={(e) => setLicensePlateNumber(e.target.value)}
    required
  />
</div>
        <div>
          <label htmlFor="customerSignature">Customer Signature:</label>
          <input
            type="text"
            id="customerSignature"
            value={customerSignature}
            onChange={(e) => setCustomerSignature(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="servicingCenterSignature">Servicing Center Signature:</label>
          <input
            type="text"
            id="servicingCenterSignature"
            value={servicingCenterSignature}
            onChange={(e) => setServicingCenterSignature(e.target.value)}
            required
          />
        </div>
        </div>
          <button type="submit">Submit</button>
          

          </form>
          </div>
        );
      };
export default CarServicingform
