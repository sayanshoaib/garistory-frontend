import React from 'react'
import '../../App.css';
import'./Product.css';
import { Button } from '../Button';

function Product() {
  return (
    <main className='main_s'>
      
      <h1> Vehicle Information Registration</h1>
          
      <form className='form_s'>
        <div>
          
          <div className='text_s' >
            
            
            <div><h1>      </h1></div>
            <div className='basic'>
           

              <div className='input'>
              <label htmlFor='vin'>VIN</label>
              <input classname='i' type='number' name='vin' placeholder='Enter Vehicle Identification Number'></input>

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
              <label htmlFor='price'>Market Value</label>
              <input type='text' name='price' placeholder='Enter the price of vehicle'></input>

           </div>
           
           </div>
            
          
            

            </div>
            
            <div><h1>      </h1></div>
            
            <div className='feature'>


<div className='input'>
  <label htmlFor='bodytype'>Body Type</label>
  <input type='text' name='year' placeholder='Enter vehicle body type'></input>

</div>
<div className='input'>
  <label htmlFor='color'>Body Color</label>
  <input type='text' name='color' placeholder='Enter vehicle body color'></input>

</div>
<div className='input'>
  <label htmlFor='fuel'>Fuel</label>
  <input type='text' name='fuel' placeholder=''></input>

</div>
<div className='input'>
  <label htmlFor='drive'>Drive</label>
  <input type='text' name='drive' placeholder=''></input>

</div>

<div className='input'>
  <label htmlFor='transmission'>Transmission</label>
  <input type='text' name='transmission' placeholder=''></input>

</div>

</div>




          </div>

        </div>



        <div className='text_s' >
        <div><h1>      </h1></div>
        <div className='essential'>
              <div className='input'>
                <label htmlFor='rdate'>Initial RegisTration Year</label>
                <input type='date' name='rdate' placeholder='Enter the initial registration date'></input>
              </div>

              <div className='input'>
              <label htmlFor='reg'>Registration Number</label>
              <input type='text' name='reg' placeholder='Enter the registration number'></input>
              </div>

            </div>
            <div><h1>      </h1></div>

          <div className='img'>
            <h1 className='uimage'>Upload Image</h1>
          
            <div className='input'>
              <label htmlFor='image1'>Select front-Image </label>
              <input type='file' name='image1' ></input>

            </div>
            <div className='input'>
              <label htmlFor='image2'>Select Back-Image </label>
              <input type='file' name='image2' ></input>

            </div>

            <div className='input'>
              <label htmlFor='image3'>Select Right-Image </label>
              <input type='file' name='image3' ></input>

            </div>
            <div className='input'>
              <label htmlFor='image4'>Select Left-Image </label>
              <input type='file' name='image4' ></input>

            </div>
            <div className='input'>
              <label htmlFor='image5'>Select Cover Image</label>
              <input type='file' name='image5' ></input>

            </div>

        </div>
        </div>
        
            
      </form>
      <div><h1>      </h1></div>
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

export default Product
