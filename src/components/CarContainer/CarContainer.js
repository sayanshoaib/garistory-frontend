import React, { useEffect, useState } from "react";
import CarItem from "../CarItem/CarItem";
import "./CarContainer.css";

const CarContainer = (props) => {
  console.log(props.cars);

  // const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   fetch("car_data.json")
  //     .then((res) => res.json())
  //     .then((data) => setCars(data));
  // }, []);

  return (
    <div>
      <div id="carContainer">
        {props.cars.map((car) => (
          <CarItem car={car} key={car.vehicleID}></CarItem>
        ))}
      </div>
    </div>
  );
};

export default CarContainer;
