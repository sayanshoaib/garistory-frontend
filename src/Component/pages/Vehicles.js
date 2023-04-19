import "./Vehicles.css";
import CardItem from "./CardItem";
import React, { useState, useEffect } from "react";
import { Button } from "./../Button";
import CarContainer from "./../../components/CarContainer";
import { useLoaderData } from "react-router-dom";

function Vehicles() {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const { data } = useLoaderData();
  // console.log(data[0]);

  return (
    <div className="cards">
      <h4>Our Collection of Cars</h4>
      <div className="cards__container">
        <div className="cards__container2">
          <input
            className="card-input"
            type="search"
            placeholder="Enter VIN"
            onChange={handleChange}
            value={searchInput}
          />

          <Button
            className="btns"
            buttonStyle="btn--test"
            buttonSize="btn--large"
            type="submit"
          >
            <i class="fa fa-search"></i>
          </Button>
        </div>

        <CarContainer cars={data} key={data[0].vehicleID}></CarContainer>

        {/* 
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.png'
              text='1011 Toyota X'
              text1='Dhaka'
              label='BDT 20130,000'
              path='/services'
            />
            <CardItem
              src='images/img-4.png'
              text='2015 Toyota Axio'
              text1='Feni'
              label='BDT 230,000'
              path='/services'
            />
             <CardItem
              src='images/img-7.png'
              text='2010 Mazda CX-7'
              text1='Daunkandi'
              label='BDT 43130,000'
              path='/sign-up'
            />
             
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.png'
              text='2017 Honda Shuttle'
              text1='Comilla'
              label='BDT 33130,000'
              path='/services'
            />
            
            
            <CardItem
              src='images/img-6.png'
              text='2011 Toyota Premio'
              text1='Rajshahi'
              label='BDT 11130,000'
              path='/products'
            />
            <CardItem
              src='images/img-7.png'
              text='2000 Toyota Corolla'
              text1='Barisal'
              label='BDT 20130,600'
              path='/sign-up'
            />
          </ul>
        </div>
   */}

        <div className="cards__container2">
          <Button
            className="btns"
            buttonStyle="btn--test"
            buttonSize="btn--large"
            type="submit"
          >
            View All Cars
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
