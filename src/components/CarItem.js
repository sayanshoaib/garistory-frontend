import React from 'react';
import './CarItem.css';
import { Button } from './../Component/Button';
import { Link } from 'react-router-dom';

const CarItem = (props) => {
    const {name, city, cost, img, path} = props.car;
    
    return (
        <div className='car'>
            <img src={img} alt=""/>
            <div className='car_text'>
                <h2>{name}</h2>
                <h3>{cost}</h3>
                
                {/* <p>Area: {city}</p> */}
                
                {/* <Button
                // className='car_detail_button'
                buttonStyle='btn--test'
                buttonSize='btn--medium'
                // type="submit"
                >
                Details
                </Button> */}

                <Link to='/carz' className='btn-mobile'>
                <button
                    className={`btn btn--test btn--medium`}
                    // onClick={onClick}
                    // type={type}
                >
                    Details
                </button>
                </Link>
                
            </div>
            
        </div>
    );
};

export default CarItem;