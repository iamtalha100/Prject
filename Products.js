import React, {useContext} from 'react';
import {ProductsContext} from '../Global/productsdata';


const Products = () =>{
 const {products} = useContext(ProductsContext);
   
        return ( 
            <div className='container'>
                     
                   
            <div className='products'>
              {products.map((products)  => (
                  <div className='product' key={products.id}>
               <div className='product-image' key={products.id}>
                   <img src={products.image} alt='not found' />
                   </div>
                   <div className='products-details'>
                    <div className='products-name'> 
                        {products.name}
                    </div>
                    <div className='products-prize'>
                RS {products.price}.00
                    </div>
                   </div>
                   <div className='add-to-cart'>
                       Add To Cart 
                   </div>

                </div>
              ))} 
            </div>
            </div>
         );
    
}
 
export default Products;