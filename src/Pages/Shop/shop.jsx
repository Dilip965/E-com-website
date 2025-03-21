import React from 'react';
import Product from '../../component/product';

const Shop = () => {
    return (
        <div className="shop">
            <h1>Welcome to the Shop</h1>
            <p>Browse our collection of amazing products!</p>
            {/* Add your shop content here */}


      {/* Shop Our Product */}

             {/* <Product/> */}

            <div className='row'>
             
             <div className='col-sm-2'>
                
             <Product/>
                </div> 
                <div className='col-sm-2'>
                
                <Product/>
                   </div> 
                   <div className='col-sm-2'>
                
                <Product/>
                   </div> 
                   <div className='col-sm-2'>
                
                <Product/>
                   </div> 
                   <div className='col-sm-2'>
                
                <Product/>
                   </div> 
                   <div className='col-sm-2'>
                   
                   <Product/>
                      </div> 
                      <div className='col-sm-2'>
                   
                   <Product/>
                      </div> 
                      <div className='col-sm-2'>
                   
                   <Product/>
                      </div> 
                      <div className='col-sm-2'>
                
                <Product/>
                   </div> 
                   <div className='col-sm-2'>
                   
                   <Product/>
                      </div> 
                      <div className='col-sm-2'>
                   
                   <Product/>
                      </div> 
                      <div className='col-sm-2'>
                   
                   <Product/>
                      </div> 

            </div>


            
        </div>
    );
};

export default Shop;