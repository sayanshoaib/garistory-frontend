import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

// import Navbar from "./Component/Navbar";
// import Footer from "./Component/Footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import Main from "./layouts/Main/Main";


function App() {
  console.log("Before router");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/entry",
          element: <VehicleEntry></VehicleEntry>
        },
        {
          path: "/service_entry",
          element: <Serviceentry></Serviceentry>
        },
        {
          path: "/service_reg",
          element: <ServiceReg></ServiceReg>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/services",
          element: <Services></Services>
        },
        {
          path: "/vehicles",
          element: <Vehicles></Vehicles>
        },
        {
          path: "/carz",
          element: <Carz></Carz>
        },
        {
          path: "/admin",
          element: <Admin></Admin>
        },
        {
          path: "/VehicleDetails",
          element: <CarDetails></CarDetails>
        }
      ]
    }
  ]);
  console.log("After route");
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

      {/* <Router>
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
      </Router> */}
    </div>
  );
}
export default App;
