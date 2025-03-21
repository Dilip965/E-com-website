import React from 'react'
import logo from "../../assets/images/logo.jpg"
import "../header/header.css"
import SearchIcon from '@mui/icons-material/Search';
import Selectdrop from '../selectdrop/Selectdrop';
import { useState,useEffect } from 'react';
import axios from 'axios';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import DataUsageIcon from '@mui/icons-material/DataUsage';

import FavoriteIcon from '@mui/icons-material/Favorite';
import StoreIcon from '@mui/icons-material/Store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Nav from '../nav/index';
import Button from '@mui/material/Button';


    


function Header() {
    const[isOpenselect,setisOpenselect]=useState(false);


 const[categories,setcategories]=useState(['Milks and Dairies',
  'Wines & Drinks',
  'Clothing & beauty',
  'Fresh Seafood',
  'Pet Foods & Toy',
  'Fast food',
  'Baking material',
  'Vegetables',
  'Fresh Fruit',
  'Bread and Juice',
  'Milks and Dairies',
  'Bread and Juice',
  'standard',
  'basic'

 ]

 )



const country = []; 
useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
}, []);

const getCountry = async (url) => {
    try {
        await axios.get(url).then((res) => {
            if (res != null) {
               
                res.data.data.map((item, index) => {
                    country.push(item.country);
                    // console.log(item.country); 


                });
            }
        });
    } catch (error) {
        console.log(error.message);
    }
};

function openselect(){

    setisOpenselect(!isOpenselect)
}

    return (
        <> 
      
       <div className='Wrap_header'>
        <header>

         <div className='container-header'>

            <div className='row '>
  
                    <div className='col-sm-2 thelogo '>
                        <img className='imagelogo w-100' src={logo} alt="logo" />

                    </div> 
                 

                    <div className='col-sm-4'>

                
                                <div className='Header_Search d-flex' id='1'>
                                <Selectdrop data={categories} />
                                <div className='Onesearch'>

                                        <input type="text" placeholder='Search for Item ...'/>
                                        <SearchIcon className='Search_Icon' />
                                </div>
                                </div>
                    </div>

                    <div className='col-sm-2 Thestory d-flex countryone  ' id='2'>
              
                       
                    <LocationOnSharpIcon />
                    <Selectdrop className="countrylist" data={country} />
                    </div>

                    <div className='col-sm-4'>

                        <ul className='d-flex gap-5 list_item list-inline'>
                        <li className=''><span> <DataUsageIcon/>Compare</span>

                        </li>
                        <li><span><FavoriteIcon/> Wishlist</span>
                        </li>
                        <li><span><StoreIcon/>Card</span></li>
                        <li onClick={openselect}><span  > <AccountBoxIcon/> Account</span>
                                
                                    {isOpenselect && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg p-2 rounded-lg border border-gray-200 z-50 Drop-down-account absolute bg-white shadow-lg p-2 rounded-lg">
                    <li>
                        <Button className="okbtn">My Account</Button>
                    </li>
                    <li>
                        <Button className="okbtn">Order Tracking</Button>
                    </li>
                    <li>
                        <Button className="okbtn">Wishlist</Button>
                    </li>
                    <li>
                        <Button className="okbtn">Setting</Button>
                    </li>
                    <li>
                        <Button className="okbtn">Sign up</Button>
                    </li>
                    </ul>
                )}


                         
                        </li>

                        </ul>
                    </div>

            </div>

            
          </div> 

</header>

<Nav/>
</div>


        </>
    )
}

export default Header

