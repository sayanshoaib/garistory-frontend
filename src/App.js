import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/pages/Home';
import SignUp from './Component/pages/SignUp';
import VehicleEntry from './Component/pages/VehicleEntry';
import Services from './Component/pages/Services';
import Vehicles from './Component/pages/Vehicles';
import Carz from './Component/pages/Carz';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/entry' exact component={VehicleEntry} />
          <Route path='/signUp' exact component={SignUp} />
          <Route path='/services' exact component={Services}></Route>
          <Route path='/vehicles' exact component={Vehicles}></Route>
          <Route path='/carz' exact component={Carz}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
