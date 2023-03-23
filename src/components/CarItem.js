import React from 'react';
import './CarItem.css';
import { Button } from './../Component/Button';

const CarItem = (props) => {
    const {name, city, cost, img, path} = props.car;
    return (
        <div className='car'>
            <img src={img} alt=""/>
            <div className='car_text'>
                <h2>{name}</h2>
                <h3>{cost}</h3>
                {/* <p>Area: {city}</p> */}
                
                <Button
                className='car_detail_button'
                // buttonStyle='btn--test'
                // buttonSize='btn--large'
                // type="submit"
                >
                Details
                </Button>
                
            </div>
            
        </div>
    );
};

export default CarItem;