
import React from 'react'
import '../../App.css';
import './Serviceentry.css';
import { Button } from '../Button';

function Serviceentry() {

  

  return (
    <main className='main_s1'>

      <h1>Vehicle Servicing Data Form</h1>

      <form className='form_s1' >
        <div>

          <div className='text_s1' >


            <div><h1> </h1></div>
            <div className='vehicle_info'>
            <div><h2> Vehicle information</h2></div>
              <div className='input_s1'>
                <div className='input'>
                <label htmlFor='vin'>VIN</label>
                <input classname='i' type='number' name='vehicleID' placeholder='Enter Vehicle Identification Number'></input>
                 </div>
                <div className='input'>
                  <label htmlFor='make'>Make</label>
                  <input type='text' name='make' placeholder='Enter the name of manufacturer'></input>

                </div>
                <div className='input'>
                  <label htmlFor='model'>Model</label>
                  <input type='text' name='model' placeholder='Enter the model number'></input>

                </div>
                <div className='input'>
                  <label htmlFor='year'>Year</label>
                  <input type='date' name='year' placeholder='Enter the manufacturing year'></input>

                </div>
                <div className='input'>
                  <label htmlFor='brand'>Brand</label>
                  <input type='text' name='year' placeholder='Enter the brand name'></input>

                </div>
                <div className='input'>
                  <label htmlFor='price'>Lisence plate number</label>
                  <input type='text' name='price' placeholder='Enter the price of vehicle'></input>

                </div>
              </div>
            </div>
            <div><h1>      </h1></div>




            <div className='customer_info'>
            <div><h2> Customer information</h2></div>
              <div className='input_s2'>
                <div className='input'>
                <label htmlFor='name'>Name</label>
                <input classname='i' type='text' name='customer_name' placeholder='Enter customer name'></input>
                 </div>
                <div className='input'>
                  <label htmlFor='address'>Adress</label>
                  <input type='text' name='address' placeholder='Enter the address of customer'></input>

                </div>
                <div className='input'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' name='email' placeholder='Enter the email of customer'></input>

                </div>
                <div className='input'>
                  <label htmlFor='contact'>Contact</label>
                  <input type='number' name='contact' placeholder='Enter the contact number'></input>

                </div>
                <div className='input'>
                  <label htmlFor='lisence_reg'>Lisence Registration Number</label>
                  <input type='text' name='lisence_reg' placeholder='Enter the lisence registration number'></input>

                </div>
              </div>
            </div>
            <div><h1>      </h1></div>

           

          </div>

        </div>

        <div className='text_s1' >
          <div><h1>      </h1></div>
          <div className='service_details'>
          <div><h2> Service Details</h2></div>
            <div className='input'>
              <label htmlFor='sdate'>Date of service</label>
              <input type='date' name='sdate' placeholder=''></input>
            </div>

            <div className='input'>
              <label htmlFor='mileage'>Mileage</label>
              <input type='text' name='mileage' placeholder='Enter the mileage of vehicle'></input>
            </div>
            <div className='input'>
              <label htmlFor='technician'>Name of technician</label>
              <input type='text' name='technician' placeholder='Enter the name of assigned technician'></input>
            </div>

            <div className='input'>
              <label htmlFor='type_of_service'>Services performed</label>
              <input type='text' name='type_of_service' placeholder=''></input>
            </div>

            <div className='input'>
              <label htmlFor='repair'>List of made repair</label>
              <input type='text' name='repair' placeholder=''></input>
            </div>

          </div>
          <div><h1>      </h1></div>
          

          <div className='parts_used'>
          <div><h2> parts used</h2></div>
            <div className='input'>
              <label htmlFor='pname'>Name of the part</label>
              <input type='text' name='pname' placeholder=''></input>
            </div>

            <div className='input'>
              <label htmlFor='pnumber'>part Number</label>
              <input type='number' name='pnumber' placeholder='Enter the part registration number'></input>
            </div>
            <div className='input'>
                           <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small'>
                                 Add another part
                           </Button>
                           <div><h1>      </h1></div>
            </div>

            <div className='input'>
              <label htmlFor='quantity'>Total quantity of changed parts </label>
              <input type='number' name='quantity' placeholder=''></input>
            </div>

            <div className='input'>
              <label htmlFor='recommendation'>Recommendation</label>
              <input type='text' name='recommendation' placeholder=''></input>
            </div>

            
          </div>
         
          
        </div>


      </form>
      <div><h1>      </h1></div>
      <form className='form_s2' >
      <div className='text_s1' >
         
          <div className='final'>
          <div><h2> </h2></div>
            <div className='input'>
              <label htmlFor='date'>Date of service</label>
              <input type='date' name='sate' placeholder=''></input>
              
            </div>
            <div><h1>  &nbsp;  &nbsp;  </h1></div>
            <div className='input'>
              <label htmlFor='amount'>Total Amount</label>
              <input type='text' name='amount' placeholder=''></input>
            </div>
            <div><h1>  &nbsp;  &nbsp;  </h1></div>
            <div className='input'>
              <label htmlFor='signature'>Customer Signature</label>
              <input type='text' name='signature' placeholder=''></input>
            </div>

            

            

          </div>
          
          <div><h1>      </h1></div>
          
        </div>
        </form>
      <div className='input'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--small'
        >
          Submit
        </Button>

      </div>
      <div><h1>      </h1></div>
    </main>
  )
}

export default Serviceentry
