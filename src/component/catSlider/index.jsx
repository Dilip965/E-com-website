import './style.css'
import Slider from "react-slick";

function CatSlider(){

    var settings = {
        infinite: true,
        speed: 500, // Adjust speed for a smoother effect
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: false,
        autoplay: false// Enables auto-scrolling
         
       
      };

      

    return(
        <>
         <div className="category_slider">
  

          <h2 className='hd'>Feature category</h2>
             
          <Slider className='theslider gap-4' {...settings}>
           
        

          <div className="info-story gap-2">
                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-13.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
            </div>
            <div  className="info-story info-story1">
                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-12.png" />
                <h5>Organic kiwi</h5>
                <p>28 items</p>
            </div>
            <div className="info-story">
                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-11.png" />
                <h5>Peach</h5>
                <p>14 items</p>
            </div>
            <div className="info-story">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                <h5>Red applie</h5>
                <p>54 items</p>
            </div>
            <div className="info-story">
                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png" />
                <h5>Snack</h5>
                <p>56 items</p>
            </div>
            <div className="info-story">
                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-1.png" />
                <h5>vegetable</h5>
                <p>72 items</p>
            </div>
            <div className="info-story">
                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-2.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
            </div>
            <div className="info-story">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                <h5>Straveberry</h5>
                <p>36 items</p>
            </div>
            <div className="info-story">
                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-4.png" />
                <h5>Black Plum</h5>
                <p>123 items</p>
            </div>
            <div className="info-story">
                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-5.png" />
                <h5>Custard apple</h5>
                <p> 34 items</p>
            </div>
            <div className="info-story">
                <img src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-14.png" />
                <h5>Coffee and tea</h5>
                <p> 100 items</p>
            </div>


          </Slider>

        

         </div>
         
        </>
    )
}

export default CatSlider