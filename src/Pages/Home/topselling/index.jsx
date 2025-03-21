
import './style.css'
import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'
import img3 from '../../../assets/images/img3.jpg'

import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';

function Topselling(props){

    return(<>
     
        <div className="top-selling-component">
        <h3 className="tittle-selling" >{props.tittle}</h3>

        <div className='inside-selling d-flex'> 
           <div className='selling-photo '>
              <Link>
              <img src={img1} alt="" />
              </Link>
            
           </div>
           <div className='info-selling  '>
              <Link to='/'> <h4>Nestle Original Coffee-Mate Coffee Creamer</h4> </Link>
              <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
              <div className='price d-flex align-tem-center'>
                    
                    <span className='new_price'>$28.25</span>
                    <span className='old_price'> $32.33</span>

            </div>

              
           </div>

        </div>
        <div className='inside-selling d-flex'> 
           <div className='selling-photo '>
              <Link>
              <img src={img2} alt="" />
              </Link>
            
           </div>
           <div className='info-selling  '>
              <Link to='/'> <h4>Nestle Original Coffee-Mate Coffee Creamer</h4> </Link>
              <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
              <div className='price d-flex align-tem-center'>
                    
                    <span className='new_price'>$28.25</span>
                    <span className='old_price'> $32.33</span>

            </div>

              
           </div>

        </div>
        <div className='inside-selling d-flex'> 
           <div className='selling-photo '>
              <Link>
              <img src={img3} alt="" />
              </Link>
            
           </div>
           <div className='info-selling  '>
              <Link to='/'> <h4>Nestle Original Coffee-Mate Coffee Creamer</h4> </Link>
              <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
              <div className='price d-flex align-tem-center'>
                    
                    <span className='new_price'>$28.25</span>
                    <span className='old_price'> $32.33</span>

            </div>

              
           </div>

        </div>
        

        </div>

           
     
       
    </>
        
    )
}
export default Topselling