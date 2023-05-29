import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import CarDetails from "./components/CarDetails/CarDetails";
import Carz from "./components/Carz/Carz";
import Serviceentry from "./components/ServiceEntry/Serviceentry";
import ServiceReg from "./components/ServiceReg/ServiceReg";
import ServiceCenterReg from "./components/ServiceCenterReg/ServiceCenterReg";
import Services from "./components/Services/Services";
import VehicleEntry from "./components/VehicleEntry/VehicleEntry";
import Vehicles from "./components/Vehicles/Vehicles";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import VehicleForm from "./components/VehicleForm/VehicleForm";
import ServiceCenter from "./components/ServiceCenter/ServiceCenter";
import UpdateVehicleForm from "./components/UpdateVehicleForm/UpdateVehicleForm";
import UpdateServiceCenterReg from "./components/UpdateServiceCenterReg/UpdateServiceCenterReg";
import InsuranceComReg from "./components/Insurance_company/Insurance_reg";
import CarServicingform from "./components/CarServicingform/CarServicingform";


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
            return fetch("http://localhost:8080/vehicles");
            // return fetch("get_car_data.json");
          },
        },
        {
          path: "/entry",
          element: <VehicleEntry></VehicleEntry>,
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
          path: "/service_center_reg",
          element: <ServiceCenterReg></ServiceCenterReg>,
        },
        
        {
          path: "/insurance_com_reg",
          element: <InsuranceComReg></InsuranceComReg>,
        },

        {
          path: "/service_center",
          element: <ServiceCenter></ServiceCenter>
        },
        {
          path: "/service_center_form",
          element: <CarServicingform></CarServicingform>
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
            return fetch("http://localhost:8080/vehicles");
            // return fetch("get_car_data.json");
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
          path: "/vehicle_form",
          element: <VehicleForm></VehicleForm>
        },
        {
          path: "/VehicleDetails/:vehicleID",
          element: <CarDetails></CarDetails>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:8080/vehicles/${params.vehicleID}`);
            // return fetch("car_details.json");
          },
        },

        {
          path: "/vehicles/:id/update",
          element: <UpdateVehicleForm></UpdateVehicleForm>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:8080/vehicles/${params.id}`);
            // return fetch("car_details.json");
          },
        },

        {
          path: "/service-center/update/:serviceCenterID",
          element: <UpdateServiceCenterReg></UpdateServiceCenterReg>,
          // loader: async ({ params }) => {
          //   return fetch(`http://localhost:8080/vehicles/${params.id}`);
          //   // return fetch("car_details.json");
          // },
        },

        // <Route path="/vehicles/:id/update" element={<UpdateVehicleForm />} />
        // <Route path="/service-center/update/:serviceCenterID" component={UpdateServiceCenterReg} />


        {
          path: "/admin/:serviceCenterID",
          element: <Admin></Admin>,
          loader: async ({ params }) => {
            return fetch("service_data.json");
          }, 
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
