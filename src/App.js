import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Home from "./Component/pages/Home";
import SignUp from "./Component/pages/SignUp";
import VehicleEntry from "./Component/pages/VehicleEntry";
import Serviceentry from "./Component/pages/Serviceentry";
import ServiceReg  from "./Component/pages/ServiceReg";
import Services from "./Component/pages/Services";
import Vehicles from "./Component/pages/Vehicles";
import Admin from "./Component/pages/Admin";
import Carz from "./Component/pages/Carz";
import CarDetails from "./components/CarDetails/CarDetails";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   // useLoaderData
// } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/entry" exact component={VehicleEntry} />
          <Route path="/service_entry" exact component={Serviceentry} />
          <Route path="/service_reg" exact component={ServiceReg} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/services" exact component={Services}></Route>
          <Route path="/vehicles" exact component={Vehicles}></Route>
          <Route path="/carz" exact component={Carz}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/VehicleDetails/:vehicleID">{CarDetails}</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
