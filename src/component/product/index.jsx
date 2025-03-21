import './style.css'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

function Product(prop){

    return(
     <>
    
  
     <div className='productcontainer'>

            <div className='tag-div'><span className={`badge ${prop.tag}`}>{prop.tag}</span></div>
           <div className='image_wraper'>
             <img  className='w-100'src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-2-2.jpg" alt="" />
           
              <div className='overlay'>
                <ul className='list list-inline '>

             <li className='list-inline-item' tooltip="Add to wish list"><Link><FavoriteOutlinedIcon/></Link> </li>
            
             <li className='list-inline-item' tooltip="Compare"> <Link><CompareArrowsOutlinedIcon/></Link></li>
             <li className='list-inline-item' tooltip="Quick View"> <Link><RemoveRedEyeOutlinedIcon/></Link></li>
                  
                </ul>


              </div>
           </div>
          <div className='info'>
              <span className='cat_name'> <Link>Snack</Link></span>
              <h4 className='tittle'><Link>Seeds of Change Organic Quinoa, Brown</Link></h4>
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
               <span className='brand d-block'> By <Link >Eqfira</Link></span>
               <div className='d-flex align-tem-center'>
                  <div className='price d-flex align-tem-center'>
                    
                          <span className='new_price'>$28.25</span>
                          <span className='old_price'> $32.33</span>

                  </div>
                <Button className='ml-auto Add_to_card'><AddShoppingCartOutlinedIcon/>Add</Button>



               </div>
                 
         </div>     
         
     </div>
     
     
     </>


    )
}
export default Product