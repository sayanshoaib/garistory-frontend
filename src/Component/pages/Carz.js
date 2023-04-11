import React from 'react'
import'./Carz.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slidedata from "../Slidedata";
import '../../App.css';
import { productData, responsive } from "../Data";
import { Button } from '../Button';


function Cars() {
      const product = productData.map((item) => (
        <Slidedata
          name={item.name}
          url={item.imageurl}
        />
      ));
        
  return (
    <div className="App">
      
      <Carousel showDots={false} responsive={responsive}>
        {product}
      </Carousel>

      <div><h1>Toyota Suzuki 2010</h1></div>


      <div className='price' >
           <h2>$700,0000 BDT</h2>
      </div>
      <div className='holder'>
        
        <div className='hdata'>
          <h2>Basic Information</h2>
          <div>
          <table className='car_info'>
        
        <tr>
          <td>Make</td>
          <td>Toyota</td>
        </tr>
        <tr>
          <td>Model</td>
          <td>Suzuki</td>
        </tr>
        <tr>
          <td>Manufacturing Year</td>
          <td>2010</td>
        </tr>
        <tr>
          <td>Condition</td>
          <td>used</td>
        </tr>
        <tr>
          <td>First purchase year</td>
          <td>2012</td>
        </tr>
      </table>
          </div>
        </div>
        
        <div className='hdata'>
        <h2>Feature</h2>
          <div>
          <table className='car_info'>
        
        <tr>
          <td>Color</td>
          <td>Black</td>
        </tr>
        <tr>
          <td>Drive Type</td>
          <td>4 WD</td>
        </tr>
        <tr>
          <td>Transmission</td>
          <td>Automatic</td>
        </tr>
        <tr>
          <td>Fuel Type</td>
          <td>Octane</td>
        </tr>
        <tr>
          <td>Engine Size</td>
          <td>2,000cc</td>
        </tr>
      </table>
           
          </div>
          </div> 


          <div className='hdata_payment'>
        <h2>Seller info</h2> <br />

        <h2>
        Name: Hello World <br />
        Place: Earth <br />
        Payement: Bkash(XXX)
        </h2>        
      </div>
  
      </div>

      <div className='hdata_query'>
        <h2>If you have any query write us</h2>
        <form className='query'>
          
        <div className='input_form'>
              <input type='email' name='email' placeholder='Enter your email'></input>
              <br />
              <input type='textarea' name='email' placeholder='Enter your query'></input>
              <br></br>
              <br />
              <Button className='btns'buttonStyle='btn--test'buttonSize='btn--small'>Submit</Button>

        </div>
        </form>
      </div>
      

      <div className='hdata_payment'>
        <h2>Get Detail Information of this vehicle for $$$ BDT ONLY !!!!</h2>
        <Button className='btns'buttonStyle='btn--test'buttonSize='btn--small'>Apply NOW!!</Button>

      </div>
      
      
       
   </div>
      
      
          
     
    
  )
}

export default Cars