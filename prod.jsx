import React, { Component } from 'react'
import Navbar from './Navbar'
import ProductsContextProvider from '../Global/productsdata'
import Products from './Products'
import {Switch,Route} from 'react-router-dom';


function Prod() { 

        return ( 
            <div>
                <Navbar/>
                <ProductsContextProvider>
                    <h5 className="Product">Products</h5>
                    <Switch>
                    <Route path='/' component={Products}/>
                    </Switch>
                </ProductsContextProvider>
            </div>
         )
    }
 
export default Prod ;