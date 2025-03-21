import React from 'react'
import './index.css'
import Button from '@mui/material/Button';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import About from '../../Pages/About/about'
import CallIcon from '@mui/icons-material/Call';
import HeadphonesIcon from '@mui/icons-material/Headphones';






function Nav() {
    return (
     <>
     
        <div className='row nav_container'>


                        <div className='col-sm-3 firstnav'>

                        <Button className='thebtn' variant="text"> <Grid4x4Icon className='gap-3'/>Broswer By Category <ArrowDownwardIcon/></Button>

                            

                        </div>

                        <div className='col-sm-7 secondnav'>
                            <nav>
                                <ul className='d-flex gap-2'>

                                <li>
                                    <Button>
                                    <Link className='styleremover' to='/'> Home</Link> 

                                    </Button>
                             
                                   
                                </li>
                                <li>

                                <Button>
                                <Link className='styleremover'to='/about'> About</Link>
                                </Button>
                                
                                </li>
                                <li>
                                
                                 <Button>
                                 <Link className='styleremover' to='/blog'> Blog</Link> 

                                </Button> 
                                </li>
                                <li>

                                    <Button>
                                    <Link className='styleremover' to='/shop'> shop</Link>

                                    </Button>
                             
                                </li>
                                <li>

                                <Button>
                                <Link className='styleremover'to='/deals'> Deals</Link>
                                </Button>
                                
                                </li>
                                <li>
                                <Button>
                                <Link className='styleremover' to='/mega_menu'> Mega Menu<ArrowDownwardIcon/></Link>
                                </Button>

                               
                                </li>
                                <li>
                                <Button>
                                <Link className='styleremover' to='/pages'>Pages <ArrowDownwardIcon/></Link>

                                </Button>
                              
                                </li>
                                <li>
                                <Button>
                                <Link className='styleremover'to='/contact'> contacts</Link>
                                </Button>
                                
                                </li>
                             
                                </ul>
                            </nav>
                            </div>

                        <div className='col-sm-2 thirdnav d-flex'>
                              
                               <HeadphonesIcon className='logo-call'/>
                               
                                
                                 <div className='font_size'>
                                <h4 className='number'>1900-888</h4>
                                <p>24/7 Support Center</p>
                                
                                </div> 
                                

                        </div>

        </div>

     </>
    )
}

export default Nav
