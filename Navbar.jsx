import React, { Component } from 'react'
import Cosmo from '../images/logos.png'
import { useHistory } from "react-router-dom";

export default function Navbar(){

        const history=useHistory();
        return ( 
            <div className='Navbar'>
            <div className='d-inline-flex flex-row w-100  sticky-top shadow-lg'>
                <div className='d-inline-flex ml-3 mt-2 flex-row justify-content-start' >
               l <img src={Cosmo} className='mr-3  w-25'  alt=""/>
                
                </div>

            <div className='d-sm-inline-flex justify-content-end w-100 text-light'>
                   <h5 className='m-4'>
                   <h5 onClick={()=>history.push('/')}>Home</h5></h5>
            
                
                   <h5 className='m-4'>
                   <h5 onClick={()=>history.push('/Cover')}>About Us</h5></h5>
             

          
                   <h5 className='m-4'>
                   <h5 onClick={()=>history.push('/Contact')}>Contact Us</h5></h5>

                   <h5 className='m-4'>
                   <h5 onClick={()=>history.push('/Prod')}>Products</h5></h5>
            

            <h5 className='m-3 btn btn-warning h-50 font-weight-bold text-danger'>
                    <h5 >
                       Login 
                    </h5>
                </h5>

            </div> 
            </div>
            </div>
         );
    }

 
