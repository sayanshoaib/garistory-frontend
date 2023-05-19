
import'./Admin.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from '../Button/Button';
import { Link } from "react-router-dom";

const Admin= () => {
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
    const data = [
        { name: "Anom Servicing Center", id: 19},
        { name: "Megha Fusion Vehicle Center", id: 11},
        { name: "Subham Tower Ltd.", id: 25},
      ]
  return (
    
        <div className="App1">
            
             <br></br>
             <div className='servicein'>
             <input className='service-input' type="search" placeholder="Enter Servicing Center Id to Search"  />
             
             <Button className='btns'buttonStyle='btn--test'buttonSize='btn--small'  type="submit" > <i class="fa fa-search"></i></Button>
             </div>
           
            <br></br>
          <table className='Centerlist'>
          <tr>
          <th className='centerhead'>Name of Servicing Center</th>
          <th className='centerhead'>ID</th>
          
        </tr>
            {serviceCenters.map((serviceCenter) =>  {
              return (
                <tr className='centercase' key={serviceCenter.serviceCenterID}>
                  <td className='centers'>{serviceCenter.name}</td>
                  <td className='centers'>{serviceCenter.serviceCenterID}</td>
                  
                  <td className='centers'><Link to={`/admin/${serviceCenter.serviceCenterID}`} className="btn-mobile"> 
                  <button> Delete </button>
                  </Link> 
                  </td>
                  <td className='centers'><Link to={`/admin/${serviceCenter.serviceCenterID}`} className="btn-mobile"> 
                  <button> Update </button>
                  </Link>
                  </td>
                </tr>
              )
            })}
          </table>
          <br></br>
          <div className='createcenter'><Button className='btns'buttonStyle='btn--outline'buttonSize='btn--large'>Create Servicing Center</Button></div>
        </div>
  )
}

export default Admin
