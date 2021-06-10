import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AboutUs from './containers/AboutUs/AboutUs';
import ClientProfile from './containers/ClientProfile/ClientProfile';
import ClientRegister from './containers/ClientRegister/ClientRegister';
import Clinics from './containers/Clinics/Clinics';
import Contact from './containers/Contact/Contact';
import DentistProfile from './containers/DentistProfile/DentistProfile';
import DentistRegister from './containers/DentistRegister/DentistRegister';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

function App() {
  return (
    <div className="App">

       <BrowserRouter>
          
          <Header/>

          <Switch>
    
           <Route path="/" exact component={Home}/>
           <Route path="/aboutus" exact component={AboutUs}/>
           <Route path="/contact" exact component={Contact}/>
           <Route path="/register" exact component={Register}/>
           <Route path="/login" exact component={Login}/>
           <Route path="/clinics" exact component={Clinics}/>
           <Route path="/dentistregister" exact component={DentistRegister}/>
           <Route path="/dentistprofile" exact component={DentistProfile}/>
           <Route path="/clientregister" exact component={ClientRegister}/>
           <Route path="/clientprofile" exact component={ClientProfile}/>

    
          </Switch>
        
        </BrowserRouter>

    </div>
  );
}

export default App;
