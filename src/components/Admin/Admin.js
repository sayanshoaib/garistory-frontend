import React from 'react'
import'./Admin.css';
import { Button } from '../Button/Button';

function Admin() {
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
            {data.map((val, key) => {
              return (
                <tr className='centercase' key={key}>
                  <td className='centers'>{val.name}</td>
                  <td className='centers'>{val.id}</td>
                  
                  <td className='centers'><Button className='btns'buttonStyle='btn--test'buttonSize='btn--small'>Delete</Button></td>
                  <td className='centers'><Button className='btns'buttonStyle='btn--test'buttonSize='btn--small'>Update</Button></td>
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
