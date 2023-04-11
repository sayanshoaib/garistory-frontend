import React from 'react';
import './CarDetails.css'
import { useLoader } from '../../hooks/useLoader';

const CarDetails = ({match}) => {
    const { vehicleID } = match.params;
    console.log(vehicleID);
//   const { data, error, isLoading } = useLoader(`http://localhost:8080/vehicles/${vehicleID}`);
    return (
        <div>
            <h1>Hello World! {vehicleID}</h1>
        </div>
    );
};

export default CarDetails;