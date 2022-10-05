import React from 'react';
import Searchbar from '../Searchbar';
import {Link} from "react-router-dom";
function Heading(props) {
    return (
        <div>
             <div class="oil--painting--heading mt-5 pt-5">
             <Searchbar/>
        <center><h1>{props.title}</h1></center>
    </div>
    <div className='oil--painting--container'>
    <div class="oil--painting--gallery--image d-flex justify-content-center">
      <img src={props.image} alt=""/> 
    </div>
    </div>
   
    <div class="btn-container">
       <center><Link to={props.link} class="portrait-btn"> PAINT MY PORTRAIT</Link></center> 
    </div>
    <div class="oil-painting-text">
        <center><span class="text-bold">
        <p>100% Money Back Guarantee + Free Shipping Worldwide!</p>
        <p>Pay Only 30% In Advance. The Rest Only After Approving Your Painting!</p></span></center><br/>
        <p className='mt-2'>{props.para1}</p>
        <p className='mt-2'>{props.para2}</p>
        <p className='mt-2'>{props.para3}</p>
        <p className='mt-2'>{props.para4}</p>
        <p className='mt-2'>{props.para5}</p>
    
    </div>
        </div>
    );
}

export default Heading;