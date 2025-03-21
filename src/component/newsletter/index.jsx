import './style.css'
import Button from '@mui/material/Button';
function Newsletter(){
    
    return(

        <>
         <div className="Newsletter">
        
      
            <div className='row'>

            <div className='col info-news'>
           <h1>Stay home & get your daily <br />
           needs from our shop</h1>
        <p>Start Your Daily Shopping with Nest Mart</p>
              <div className='box-news'>
                    
                 <input type="text" placeholder='Your Email Addres' />
                 <Button className='subscibe-btn m-auto'>Subscibe</Button>
          

              </div>
                
            </div>
            <div className='col'>
             <img src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-9.png" className='w-100' alt="" />

            </div>

            </div>

         </div>
         
        </>
    );

}
export default Newsletter