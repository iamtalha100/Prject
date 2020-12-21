import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Welcome from './Components/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import  './CSS/Style.css';
import ProductsContextProvider from './Global/productsdata'
import Products from './Components/Products'
import Footer from './Components/footer'
import Cover from './Components/Productshown'
import Home from './Components/Home'
import Prod from './Components/prod'
import Contact from './Components/Contact Us'



class App extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="App">
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/Cover' component={Cover}/>
                <Route path='/Contact' component={Contact}/>
                <Route path='/Prod' component={Prod}/>
                
            </Switch>
            <br/>
               <Footer/>
            </div>
         );
    }
}
 
export default App;
