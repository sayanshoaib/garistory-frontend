import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import CarDetails from "./components/CarDetails/CarDetails";
import Carz from "./components/Carz/Carz";
import Serviceentry from "./components/ServiceEntry/Serviceentry";
import ServiceReg from "./components/ServiceReg/ServiceReg";
import Services from "./components/Services/Services";
import VehicleEntry from "./components/VehicleEntry/VehicleEntry";
import Vehicles from "./components/Vehicles/Vehicles";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import VehicleForm from "./components/VehicleForm/VehicleForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: async ({ params }) => {
            //return fetch(`/api/teams/${params.vehicleID}.json`);
            // return fetch("http://localhost:8080/vehicles");
            return fetch("get_car_data.json");
          },
        },
        {
          path: "/vehicle_form",
          element: <VehicleForm></VehicleForm>,
        },
        {
          path: "/service_entry",
          element: <Serviceentry></Serviceentry>,
        },
        {
          path: "/service_reg",
          element: <ServiceReg></ServiceReg>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/vehicles",
          loader: async ({ params }) => {
            // return fetch("http://localhost:8080/vehicles");
            return fetch("get_car_data.json");
          },
          element: <Vehicles></Vehicles>,
        },
        {
          path: "/carz",
          element: <Carz></Carz>,
        },
        {
          path: "/admin",
          element: <Admin></Admin>,
        },
        {
          path: "/entry",
          element: <VehicleEntry></VehicleEntry>
        },
        {
          path: "/VehicleDetails/:vehicleID",
          element: <CarDetails></CarDetails>,
          loader: async ({ params }) => {
            // return fetch(`http://localhost:8080/vehicles/${params.vehicleID}`);
            return fetch("car_details.json");
          },
        },
      ],
    },
  ]);
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
