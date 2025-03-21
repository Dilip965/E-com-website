
import './style.css' 
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import imgb from '../../assets/images/usbn.png'

function valuetext(value) {
  return `${value}°C`;
}

function Sidebar(){
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
            return(
          <>

        <div className="sidebar">
        <div className="card border-0 shadow">
        <h3>Category</h3>

        <div className="catList">
          <div className="catItem d-flex align-items-center">
                <span className="img">
                    <img 
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" 
                        width={30} 
                        alt="Category Icon"
                    />
                </span>
                <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
                <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                    30
                </span>
            </div>
        </div>
        <div className="catList">
          <div className="catItem d-flex align-items-center">
                <span className="img">
                    <img 
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" 
                        width={30} 
                        alt="Category Icon"
                    />
                </span>
                <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
                <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                    30
                </span>
            </div>
        </div>
        <div className="catList">
          <div className="catItem d-flex align-items-center">
                <span className="img">
                    <img 
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" 
                        width={30} 
                        alt="Category Icon"
                    />
                </span>
                <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
                <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                    30
                </span>
            </div>
        </div>
        <div className="catList">
          <div className="catItem d-flex align-items-center">
                <span className="img">
                    <img 
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" 
                        width={30} 
                        alt="Category Icon"
                    />
                </span>
                <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
                <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                    30
                </span>
            </div>
        </div>
        <div className="catList">
          <div className="catItem d-flex align-items-center">
                <span className="img">
                    <img 
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" 
                        width={30} 
                        alt="Category Icon"
                    />
                </span>
                <h4 className="mb-0 ml-3 mr-3">Milks & Dairies</h4>
                <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                    30
                </span>
            </div>
        </div>
    </div>
    <div className="card border-0 shadow">
        <h3>Fill By price</h3>
         <Box sx={{ width: 190 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        min={0}
         max={1000} 
         step={1}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
         color="success"
      />
    </Box>
    <div className="d-flex pt-2 pb-2 priceRange d-flex ">
    <span>
        From: <strong className="text-success">{value[0]}</strong>
    </span>
    <span className="textend">
        From: <strong className="text-success">{value[1]}</strong>
    </span>
</div>

<div className='filter'>

<h5>color</h5>
<ul>
   <li><Checkbox/> Red (56)</li> 
   <li><Checkbox/>Green (78)</li>
   <li><Checkbox/>Blue (54)</li>
   <li><Checkbox/> Red (56)</li> 
   <li><Checkbox/>Green (78)</li>
   <li><Checkbox/>Blue (54)</li>
   <li><Checkbox/> Red (56)</li> 
   <li><Checkbox/>Green (78)</li>
   <li><Checkbox/>Blue (54)</li>
   <li><Checkbox/> Red (56)</li> 
   <li><Checkbox/>Green (78)</li>
   <li><Checkbox/>Blue (54)</li>
   <li><Checkbox/> Red (56)</li> 
   <li><Checkbox/>Green (78)</li>
   <li><Checkbox/>Blue (54)</li>
</ul>

</div>
<div className='filter'>

<h5>Item Condition</h5>
<ul>
   <li><Checkbox/> New (1506)</li> 
   <li><Checkbox/>Refurbished (27)</li>
   <li><Checkbox/>Used (45)</li>
   <li><Checkbox/> Red (56)</li> 
   <li><Checkbox/>Green (78)</li>
   <li><Checkbox/>Blue (54)</li>
   <li><Checkbox/> Red (56)</li> 
   <li><Checkbox/>Green (78)</li>
   <li><Checkbox/>Blue (54)</li>
   <li><Checkbox/> Red (56)</li> 
   <li><Checkbox/>Green (78)</li>
   <li><Checkbox/>Blue (54)</li>
   <li><Checkbox/> Red (56)</li> 
   <li><Checkbox/>Green (78)</li>
   <li><Checkbox/>Blue (54)</li>
</ul>

</div>
<div className='d-flex'>
   
<Button id='filter-b'> <FilterAltIcon/>Filter</Button> 
</div>

  </div>

  <div>

<img className='w-100' src={imgb} alt="" />
</div>

      
    
        </div>
        </>
    )
}
export default Sidebar;