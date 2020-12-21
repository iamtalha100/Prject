import React, { Component } from 'react'
import Welcome from './welcome'
import Navbar from './Navbar'
import ProductsContextProvider from '../Global/productsdata'
import Products from './Products'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar/>
                <Welcome/>
                <ProductsContextProvider>
                <h5 className="Product">Products</h5>
                    <Route path='/' component={Products}/>
                </ProductsContextProvider>

           </div>
         );
    }
}
 
export default Home;