// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ServiceCenter.css";

// const ServiceCenter = () => {
//   const [serviceCenters, setServiceCenters] = useState([]);

//   useEffect(() => {
//     const fetchServiceCenters = async () => {
//       try {
//         // const response = await axios.get("http://localhost:8080/service-center");
//         const response = await axios.get("service-center.json");
//         setServiceCenters(response.data.data);
//       } catch (error) {
//         console.error("Error:", error.message);
//       }
//     };

//     fetchServiceCenters();
//   }, []);

//   return (
//     <div className="service-center-list">
//       <h1>Service Centers</h1>

//       {serviceCenters.length === 0 ? (
//         <p>Loading service centers...</p>
//       ) : (
//         <form>
//           {serviceCenters.map((serviceCenter) => (
//             <li key={serviceCenter.serviceCenterID} className="service-center-item">
//               <h2>{serviceCenter.name}</h2>

//               <label htmlFor='sc_name'>Servicing center name</label>
//               <input value={serviceCenter.name}/> 
//               <label htmlFor='sc_email'>Servicing center email</label>
//               <input value={serviceCenter.email}/> 
//               <label htmlFor='sc_address_name'>Address name</label>
//               <input value={serviceCenter.address.name}/> 
//               <label htmlFor='sc_address_street'>Address Street</label>
//               <input value={serviceCenter.address.street}/> 
//               <label htmlFor='sc_address_zicode'>Address Zipcod</label>
//               <input value={serviceCenter.address.zipcod}/> 
//               <label htmlFor='sc_address_country'>Country</label>
//               <input value={serviceCenter.address.country}/> 
//             </li>
//           ))}
//         </form>
//       )}
//     </div>
//   );
// };

// export default ServiceCenter;







import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ServiceCenter.css";

const ServiceCenter = () => {
  const [serviceCenters, setServiceCenters] = useState([]);

  useEffect(() => {
    const fetchServiceCenters = async () => {
      try {
        // const response = await axios.get("http://localhost:8080/service-center");
        const response = await axios.get("service-center.json");
        setServiceCenters(response.data.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchServiceCenters();
  }, []);

  return (
    <div className="service-center-list">
      <h1>Service Centers</h1>

      {serviceCenters.length === 0 ? (
        <p>Loading service centers...</p>
      ) : (
        <ul>
          {serviceCenters.map((serviceCenter) => (
            <li key={serviceCenter.serviceCenterID} className="service-center-item">
              <h2>{serviceCenter.name}</h2>
              <p>Email: {serviceCenter.email}</p>
              <p>Address: {serviceCenter.address.name}, {serviceCenter.address.street}, {serviceCenter.address.zipcode}, {serviceCenter.address.country}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCenter;