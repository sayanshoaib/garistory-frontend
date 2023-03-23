
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import{BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/pages/Home';

import SignUp from './Component/pages/SignUp';
import Product from './Component/pages/Product';

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
       <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/product' exact component={Product}/>
        <Route path='/signUp' exact component={SignUp}/>
        
       </Switch>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
