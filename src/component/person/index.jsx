import Rating from '@mui/material/Rating';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from "react-slick";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

function ThePerson(){

    return(

        <div>

<div className='d-flex cards'>

<div className='align-items-center'>
   <img src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-3.png" alt="" />
   <p className='thename'>   Pranita Gawade</p>
</div>
<div className='take-right'>
 <span>December 4, 2024 at 3:12 pm  <Rating className='take-right200' name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></span>
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt
 </p>
</div>
  </div>
        </div>
    )
}

export default ThePerson