import React from 'react';
import Sliders from '../Home/slider/index'
import CatSlider from '.././../component/catSlider/index'
import Banners from '../../component/banners/index'
import PopProduct  from '../../component/Popularproduct/index';
import Product  from '../../component/product/index';
import './home.css'
import Banner4 from '../../assets/images/banner4.png'
import Slider from "react-slick";
import Newsletter from '../../component/newsletter/index'
import Topselling from '../Home/topselling/index'




const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

    return (
        <div className="home">
            <Sliders/>
            <CatSlider/>    
            <Banners/>  
    
              <div className="popproduct d-flex">
                

                <h2 className="hd"> Popular Product 
                </h2>
                <ul className='m-auto d-flex gap-3'>
                <li className='list-inline-item'>
                  <a href="">All</a>
                </li>
                <li className='list-inline-item'>
                  <a href="">Milks & Dairies</a>
                </li>
                <li className='list-inline-item'>
                  <a href=""> Coffes & Teas</a>
                </li>
                <li className='list-inline-item'>
                  <a href=""> Pet Foods</a>
                </li>
                <li className='list-inline-item'>
                  <a href=""> Meats</a>
                </li>
                <li className='list-inline-item'>
                  <a href="">Vegetable 
                  </a>
                </li>

              <li className='list-inline-item'>
                  <a href="">Fruits</a>
              </li>
                </ul>


              </div>

            
              <div className="grid-container">
                        <div className="grid-item">

                          <Product tag='sale'/>
                        </div>
                        <div className="grid-item">
                        <Product/>

                        </div>
                        <div className="grid-item">
                        <Product tag='hot'/>

                        </div>
                        <div className="grid-item">
                        <Product/>

                        </div>
                        <div className="grid-item">
                        <Product tag='new'/>

                        </div>
                        <div className="grid-item">
                        <Product tag='sale'/>

                        </div>
                        <div className="grid-item">
                        <Product tag='sale'/>

                        </div>
                        <div className="grid-item">
                        <Product />

                        </div>
                        <div className="grid-item">
                        <Product tag='hot'/>

                        </div>
                        <div className="grid-item">
                        <Product />

                        </div>

                                            
                </div>
            
                <div className="popproduct d-flex">
                    

                    <h2 className="hd"> Daily Best Sells
                    </h2>
                    <ul className='m-auto d-flex gap-3'>
                    <li className='list-inline-item'>
                      <a href="">Featured</a>
                    </li>
                    <li className='list-inline-item'>
                      <a href="">Popular</a>
                    </li>
                    <li className='list-inline-item'>
                      <a href=""> New Added</a>
                    </li>
                  
                    </ul>


                </div>

                <div className='row SliderBanner2'>

                <div className='col-md-3'>
                  <img src={Banner4} className='w-100' alt="" />
                </div>
                <div className='col-md-9'>
                <Slider {...settings}>
                  <div>
                  <Product/>
                  </div>
                  <div>
                  <Product/>
                  </div>
                  <div>
                  <Product/>
                  </div>
                  <div>
                  <Product/>
                  </div>
                  <div>
                  <Product/>
                  </div>
                  <div>
                  <Product/>
                  </div>
                  <div>
                  <Product/>
                  </div>
                  <div>
                  <Product/>
                  </div>
                </Slider>


                </div>

               </div> 

                <div className='topselling'>
                <div className='row'>
                  <div className='col'>
                     <Topselling tittle='Top selling'/>
          
                  </div>
                  <div className='col'>

                  <Topselling tittle='Trending Product'/>

                  </div>
                  <div className='col'>
                  <Topselling tittle='Recently Added' />

                  </div>
                  <div className='col'>
                  <Topselling tittle='Top Rated'/>

                  </div>



                </div>

                </div>

           
          </div>
    );
};

export default Home;