import './style.css'
import banner1 from '../../assets/images/banner-1.png'
import banner2 from '../../assets/images/banner-2.png'
import banner3 from '../../assets/images/banner-3.png'
import Button from '@mui/material/Button';



function Banners(){

    return(
                <>
                    <div className='bannerhome'>

                          <div className='row'>

                             <div className='col'>

                                  <div className='box'>
                                      
                                     <img className='w-100 transion' src={banner1} alt="" />
                                     <h1>Everyday Fresh & <br />
                                          Clean with Our <br />
                                          Products</h1>
                                       <Button className='Shop_now'>Shop Now</Button>
                                  </div>
                              

                             </div>
                             <div className='col'>
                              
                                <div className='box'>
                                     <img className='w-100 transion' src={banner2} alt="" />
                                       <h1> Make your Breakfast  <br />
                                       Healthy and Easy <br /></h1>
                                       <Button className='Shop_now'>Shop Now</Button>
                                  </div>
                             </div>
                             <div className='col'>
                                <div className='box'>
                                        <img className='w-100 transion' src={banner3} alt="" />
                                         <h1>The best  <br />
                                         Products  <br/>Online  </h1>
                                         <Button className='Shop_now'>Shop Now</Button>
                                  </div>
                             </div>
                           

                          </div>
                        
                    </div>


                </>

    )
}

export default Banners