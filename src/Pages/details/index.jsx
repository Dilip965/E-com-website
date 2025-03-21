import React, { useState } from 'react';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import './style.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../component/sidebar/index';
import Rating from '@mui/material/Rating';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from "react-slick";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import ThePerson  from '../../component/person/index';
import Form from '../../component/form/index';
import Product from '../../component/product/index';
import AddCardIcon from '@mui/icons-material/AddCard';

function Detail() {
    // State to track the main image
    const [mainImage, setMainImage] = useState("https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-16-2.jpg");

    const [activeTab, setActiveTab] = useState("description");

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: false
    };
    const sizeOptions = [
      { size: "50g", sku: "FWM15VKT", stock: 8 },
      { size: "60g", sku: "FWM16VKT", stock: 5 },
      { size: "80g", sku: "FWM17VKT", stock: 3 },
      { size: "100g", sku: "FWM18VKT", stock: 10 },
      { size: "150g", sku: "FWM19VKT", stock: 2 },
    ];
    const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);
    const [quantity, setQuantity] = useState(1);
    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };
  
  
    const handleQuantityChange = (e) => {
      setQuantity(Number(e.target.value));
    };
  

    // Thumbnail images array
    const thumbnails = [
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-1.jpg",
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-2.jpg",
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-3.jpg",
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-4.jpg",
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-5.jpg",
        "https://nest-frontend-v6.vercel.app/assets/imgs/shop/thumbnail-6.jpg",
    ];

    return (
        <div className='detail-page'>

            <div className='breadcrum'>
                <ul className="breadcrumbs">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/category">Vegetables & tubers</Link></li>
                    <li>Seeds of Change Organic</li>
                </ul>
            </div>

            <div className='row dcontainer'>
                <div className='col-md-9 part1'>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='productzoom'>
                                <InnerImageZoom zoomType='hover' zoomScale={2} className='w-100' src={mainImage} />
                            </div>

                            <div className='zoomSlider'>
                                <Slider {...settings}>
                                    {thumbnails.map((image, index) => (
                                        <div key={index} className='zoomimage cursor' onClick={() => setMainImage(image)}>
                                            <img className='w-100' src={image} alt="Thumbnail" />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>

                        <div className='col-md-8 productinfo'>
                            <h1>Seeds of Change Organic Quinoa, Brown</h1>
                            <div className='d-flex align-items-center mb-4'>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                <span>(32 reviews)</span>
                            </div>

                            <div className="priceSec d-flex align-items-center mb-3">
                                <span className="text_g selling_p">$38</span>
                                <div className="ml-2 d-flex flex-column">
                                    <span className="text_o">26% Off</span>
                                    <span className="discount">$52</span>
                                </div>
                            </div>

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia,
                                corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum
                                eligendi.
                            </p>

                            <div className="size-selection">
        <span>Size / Weight: </span>
        {sizeOptions.map((option) => (
          <button
            key={option.size}
            className={`size-btn ${selectedSize.size === option.size ? "active" : ""}`}
            onClick={() => handleSizeChange(option)}
          >
            {option.size}
          </button>
        ))}
      </div>

      <div className="cart-actions">
        <select value={quantity} onChange={handleQuantityChange}>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>

        <button className="add-to-cart">
        <span><AddCardIcon/> </span> Add to cart
        </button>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <p>
          <strong>Type:</strong> <span className="green-text">Organic</span>
        </p>
        <p>
          <strong>SKU:</strong> {selectedSize.sku}
        </p>
        <p>
          <strong>MFG:</strong> <span className="green-text">Jun 4, 2024</span>
        </p>
        <p>
          <strong>LIFE:</strong> <span className="green-text">70 days</span>
        </p>
        <p>
          <strong>Tags:</strong> Snack, Organic, Brown
        </p>
        <p>
          <strong>Stock:</strong> <span className="green-text">{selectedSize.stock} Items In Stock</span>
        </p>
      </div>
    </div>

      <div className='detail-box'>
        
    <div className="product-tabs">
      {/* Tab Headers */}
      <div className="tabs">
        <button
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={activeTab === "additional" ? "active" : ""}
          onClick={() => setActiveTab("additional")}
        >
          Additional Info
        </button>
        <button
          className={activeTab === "vendor" ? "active" : ""}
          onClick={() => setActiveTab("vendor")}
        >
          Vendor 
        </button>
        <button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (3)
        </button>
      </div>

     
      <div className="tab-content">
        {activeTab === "description" && (
          <>

          <div className='Product_details'>


       
          <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.

Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
          
 <ul>
<li>Product Dimensions: 10 x 15 x 20 cm</li>
<li>Item Weight: 500g</li>
<li>Manufacturer: Seeds of Change</li>
<li>ASIN: B07PGL2ZSL</li>

 </ul>

 <hr />
 <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>

<h4>
  Packing and Delivery
</h4>
<hr />

<p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.

Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
<h4>Suggested Use</h4>
<br />
<br />
<p>Refrigeration not necessary.</p>
<p>Stir before serving</p>

  <h4>Other Ingredients</h4>   
  <br />
  <br />
  <p>Organic raw pecans, organic raw cashews.</p>
  <p>This butter was produced using a LTG (Low Temperature Grinding) process</p>
  <p>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</p>
      
  <h4>Warning</h4>   
  <br />
  <br />
  <p>Oil separation occurs naturally. May contain pieces of shell.</p>
  </div>
          </>
        )}
        {activeTab === "additional" && (
         <table >
         <tr>
             <th>Attribute</th>
             <th>Specification</th>
         </tr>
         <tr>
             <td>Stand Up Dimensions</td>
             <td>35″L x 24″W x 37-45″H (front to back wheel)</td>
         </tr>
         <tr>
             <td>Folded (w/o wheels)</td>
             <td>32.5″L x 18.5″W x 16.5″H</td>
         </tr>
         <tr>
             <td>Folded (w/ wheels)</td>
             <td>32.5″L x 24″W x 18.5″H</td>
         </tr>
         <tr>
             <td>Door Pass Through</td>
             <td>24″</td>
         </tr>
         <tr>
             <td>Frame</td>
             <td>Aluminum</td>
         </tr>
         <tr>
             <td>Weight (w/o wheels)</td>
             <td>20 LBS</td>
         </tr>
         <tr>
             <td>Weight Capacity</td>
             <td>60 LBS</td>
         </tr>
         <tr>
             <td>Width</td>
             <td>24″</td>
         </tr>
         <tr>
             <td>Handle Height</td>
             <td>37-45″ (ground to handle)</td>
         </tr>
         <tr>
             <td>Wheels</td>
             <td>12″ air / wide track slick tread</td>
         </tr>
         <tr>
             <td>Seat Back Height</td>
             <td>21.5″</td>
         </tr>
         <tr>
             <td>Head Room (Inside Canopy)</td>
             <td>25″</td>
         </tr>
         <tr>
             <td>Color Options</td>
             <td>Black, Blue, Red, White</td>
         </tr>
         <tr>
             <td>Size Options</td>
             <td>M, S</td>
         </tr>
     </table>
     
        )}
        {activeTab === "vendor" && (

        
              <div>
            <h4>Vendor information</h4>

            <div className='d-flex  '>

              <img src="https://nest-frontend-v6.vercel.app/assets/imgs/vendor/vendor-18.svg" alt="" />
             <div>
           <p className='thelogos'><Link>Noodles Co.</Link></p>
           <div className='d-flex align-items-center vendorreview'>
           <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
           <span>(32 reviews)</span>
           </div>
           
          


             </div>
            </div>
            <div className='d-flex'>
            <AddLocationIcon/>
            <span className='bold'>Address :</span>
            <p>5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
            
            </div>
            <div className='d-flex'>
            <HeadsetMicIcon/>
            <span className='bold'>Contact Seller :</span>
            <p>(+91) - 540-025-553</p>
        x
            </div>

     <div>
      <p>Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.</p>


     </div>

              </div>
          
        )}

        {activeTab === "reviews" && (
        
                           <div className='review-tab'>

                              <div className='row'>
                                   <div
                                   className='col-md-8'
                                   
                                   >
                                       <h2>Customer questions & answers</h2>
                               

                                             
                                   <ThePerson/>
                                   <ThePerson/>
                                   <ThePerson/>
                                 

                                 <div className='The_form_Review'>

                                  <h2>Add A review</h2>
                                  <Rating className='' name="half-rating-read" defaultValue={0} precision={0.5} readOnly />
                                  <Form/>


                                 </div>
                                

                              </div>
                              
                              <div className='col-md-4'>
                                 <h4>Customer Review</h4>
                                 <div className='d-flex align-items-center'>
                                 <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                                  <span>
                                  2.5 out of 5</span>
                                  </div>
                                
                                <div className='slider-bar'>
                                 <div className='slider-item d-flex align-items-center'>
                                  <span>5 star</span>
                                  <div className="progress">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}>
                                    65% 
                                  </div>
                                </div>

                                 </div>
                                 <div className='slider-item d-flex align-items-center'>
                                  <span>4 star</span>
                                  <div className="progress">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{ width: "10%" }}>
                                    10%
                                  </div>
                                </div>
                                  
                                 </div>
                                 <div className='slider-item d-flex align-items-center'>
                                  <span>3 star</span>
                                  <div className="progress">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{ width: "5%" }}>
                                    5% 
                                  </div>
                                </div>
                                  
                                 </div>
                                 <div className='slider-item d-flex align-items-center'>
                                  <span>2 star</span>
                                  <div className="progress">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{ width: "10%" }}>
                                    10% 
                                  </div>
                                </div>
                                  
                                 </div>
                                 <div className='slider-item d-flex align-items-center'>
                                  <span>1 star</span>
                                  <div className="progress">
                                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
                                  aria-valuemin="0" aria-valuemax="100" style={{ width: "10%" }}>
                                    10% 
                                  </div>
                                </div>
                                 </div>
                                 
                                 

                                </div>

                          
                                   </div>



                              </div>
                  
                          </div>
          
        )}
      </div>
    </div> 

 
        </div>

       
              </div>
              <h2>Related Product</h2>
              <div className="grid-container">
                            <div className="grid-item"><Product tag="sale" /></div>
                            <div className="grid-item"><Product /></div>
                            <div className="grid-item"><Product tag="hot" /></div>
                            <div className="grid-item"><Product /></div>
                           
                        </div>
             
             <div>

             

             </div>
             </div>

                <div className='col-md-3 part2'>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default Detail;
