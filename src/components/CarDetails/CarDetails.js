import { useLoaderData } from "react-router-dom";
import "./CarDetails.css";
import { Button } from "../../Component/Button";

const CarDetails = () => {
  const car = useLoaderData();
  console.log(car.imageURL);

  return (
    <div className="App">
      <div>
        <h1>{car.make}</h1>
        <img
          className="product--image2"
          src="images/img-3.png"
          alt="product image"
        />
      </div>

      <div className="price">
        <h2>${car.price} BDT</h2>
      </div>
      <div className="holder">
        <div className="hdata">
          <h2>Basic Information</h2>
          <div>
            <table className="car_info">
              <tr>
                <td className="carin">Make</td>
                <td className="carin">{car.make}</td>
              </tr>
              <tr>
                <td className="carin">Model</td>
                <td className="carin">{car.model}</td>
              </tr>
              <tr>
                <td className="carin">Manufacturing Year</td>
                <td className="carin">{car.year}</td>
              </tr>
              <tr>
                <td className="carin">Condition</td>
                <td className="carin">used</td>
              </tr>
              <tr>
                <td className="carin">First purchase year</td>
                <td className="carin">2012</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="hdata">
          <h2>Feature</h2>
          <div>
            <table className="car_info">
              <tr>
                <td className="carin">Color</td>
                <td className="carin">{car.color}</td>
              </tr>
              <tr>
                <td className="carin">Drive Type</td>
                <td className="carin">{car.drive}</td>
              </tr>
              <tr>
                <td className="carin">Transmission</td>
                <td className="carin">{car.transmission}</td>
              </tr>
              <tr>
                <td className="carin">Fuel Type</td>
                <td className="carin">{car.fuel}</td>
              </tr>
              <tr>
                <td className="carin">Engine Size</td>
                <td className="carin">2,000cc</td>
              </tr>
            </table>
          </div>
        </div>

        <div className="hdata_payment">
          <h2>Seller info</h2> <br />
          <h2>
            Name: Siam Sarker <br />
            Place: Earth <br />
            Payement: Bkash(XXX)
          </h2>
        </div>
      </div>

      <div className="hdata_query">
        <h2>If you have any query write us</h2>
        <form className="query">
          <div className="input_form">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
            ></input>
            <br />
            <input
              type="textarea"
              name="email"
              placeholder="Enter your query"
            ></input>
            <br></br>
            <br />
            <Button
              className="btns"
              buttonStyle="btn--test"
              buttonSize="btn--small"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="hdata_payment">
        <h2>Get Detail Information of this vehicle for $$$ BDT ONLY !!!!</h2>
        <Button
          className="btns"
          buttonStyle="btn--test"
          buttonSize="btn--small"
        >
          Apply NOW!!
        </Button>
      </div>
    </div>
  );
};

export default CarDetails;
