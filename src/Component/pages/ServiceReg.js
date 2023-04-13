import React from 'react'
import '../../App.css';
import './ServiceReg.css';
import { Button } from '../Button';

function ServiceReg() {
  return (

        <div className='tex_s1' >


<div><h1> </h1></div>
<div className='initial_info'>
<div><h1> Servicing Center Registration Form</h1></div>
<form className='service_registration'>
  <div className='rinput_s1'>
    <div className='rinput'>
    <label htmlFor='sc_name'>Servicing center name</label>
    <input type='text' name='sc_name' placeholder='Enter the name of servicing center'></input>
     </div>
    <div className='rinput0'>
        <div className='rinput'>
      <label htmlFor='contact'>Contact</label>
      <input type='number' name='contact' placeholder='Enter the contact number'></input>
        </div>
        <div><h1>&nbsp;</h1></div>
        <div className='rinput'>
      <label htmlFor='email'>Email</label>
      <input type='email' name='email' placeholder='Enter the email'></input>
        </div>
    </div>

    
    <div className='rinput'>
      <label htmlFor='address'>Address</label>
      <input type='text' name='address' placeholder='Enter Address'></input>

    </div>
    <div className='rinput0'>
    <div className='rinput1'>
      <label htmlFor='city'>City</label>
      <input type='text' name='city' placeholder=''></input>

    </div>
        <div><h1>&nbsp;</h1></div>
        <div className='rinput1'>
      <label htmlFor='postalcode'>Postal Code</label>
      <input type='text' name='postalcode' placeholder=''></input>

    </div>
    </div>

    
    <div className='rinput0'>
        <div className='rinput'>
      <label htmlFor='pass'>Enter Password</label>
      <input  type='password' name='pass' placeholder='Enter the Password'></input>
        </div>
        <div><h1>&nbsp;</h1></div>
        <div><h1>&nbsp;</h1></div>
        <div><h1>&nbsp;</h1></div>
        <div className='rinput'>
      <label htmlFor='rpass'>Re-Enter Password</label>
      <input  type='password' name='rpass' placeholder='Enter the Password Again'></input>
        </div>
    </div>
  </div>
  </form>
  <div><h1>&nbsp;</h1></div>
        
  <div className='rinput'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--small'
        >
          Submit
        </Button>

      </div>
</div>


<div><h1>      </h1></div>



</div>


      
   
  )
}

export default ServiceReg
