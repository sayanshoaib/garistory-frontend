import React, { useEffect, useState } from 'react';
import CarItem from '../components/CarItem';
import './CarContainer.css'

const CarContainer = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
      fetch('car_data.json')
      .then(res => res.json())
      .then(data => setCars(data))
    }, [])
    
    return (
        <div>
             <div id='carContainer'>
                {
                    cars.map(car => <CarItem 
                        car={car}
                        key={car.vehicleID}
                        ></CarItem>)
                }
            </div>
        </div>
    );
};

export default CarContainer;