import React,{useEffect} from 'react';
import Testimonial from '../Testimonial';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Work from '../Work';
import {Link} from "react-router-dom"
import "./price.css"
function Oilpricing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []); 
   
const faq = [
  {
      "id": 1 ,
      "question" : "1. What is the oil painting price for 12*12?",
      "answer" : "Our Oil Painting Prices start from $130. The Oil Painting Prices increase with the number of characters and the size of the canvas. You can check your prices here or by simply placing an order with us."
  },
  {
      "id": 2 ,
      "question" : "2. Do you charge extra for customization in oil painting?",
      "answer" : "Talking Canvas does not charge anything extra for customization. From changing the background of your artwork to adding a character from a different photo, all the personalization is done at no additional cost."
  },
  {
      "id": 3 ,
      "question" : "3. Will a pet be counted as one character in my Oil Painting?",
      "answer" : "No, Pet is counted and priced as a different character in Oil Paintings."
  },
  {
      "id": 4 ,
      "question" : "4. What is the price of Landscape Oil Painting?      ",
      "answer" : "Our Landscape Oil Painting starts from ₹  130 and increased with the size of the canvas."
  }
];

    return (
        <div>
             <div id="heading-price" className=" mt-5 pt-5">
        <center>
            <h2 className=' my-3'>Custom Oil Painting Price List</h2>
            <p>Best And Affordable Handmade Oil Paintings Made From Photos</p>
         
            <p>Pay Only 30% In Advance. The Rest Only After Approving Your Painting!</p>
        </center>
      </div> 
      <div className='price--list--image'>
        <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/oil-painting-price-list.jpg'/>
      </div>
      <div className='price--detail '>
      <center>
      <p>Your oil painting will be rolled in a hard-shell tube to prevent any damage while shipping.</p>
        <p>To get a display-ready painting, check out our finishing for oil painting.</p>
      </center>
        
      </div>
      <div id="heading-price" className='price--frame--image mt-3'>
      <h2 className='mb-3'>Framing and Gallery Wrap Pricing</h2>
        <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/2-1.jpg'/>
      </div>
      <div  className='price--description mt-4 mb-5'>
      <center>
        <h2 className="mb-3">Oil Painting Finishing Options</h2>
        <p>We offer two finishing options for oil paintings; Gallery wrapped and Framed.<br/>
        Your gallery-wrapped 0il painting will be stretched over a wooden frame that will give your artwork a 3D look. <br/>
        The right frame will enhance your oil painting by adding depth to it. You can get one from our handpicked selection of frames.<br/>Your oil painting will arrive in a secured bubble wrap placed in a durable cardboard box to avoid damage during transit.
        </p>
        </center>
      </div>
      <div className='price--note'>
        <h3 className='text-bold'>Please note the following:</h3>
        <p className='text-muted'>* Frame pricing does not depend on the type of frame but the size.</p>
        <p  className='text-muted'>* Paintings don’t come with a glass on top as the paintings should be left in the open air to avoid smudging.</p>
      </div>
<Testimonial/>
<h2 className='bold ps-3 mt-4'>Frequently Asked Question</h2>
    <hr />
    <div className="container faq-container px-5 mt-5">
    {faq.map(data => {
      return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id={data.id}
        >
          <Typography>{data.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         {data.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
    })} 
    </div>
    <Work/>
    <div className="gallery--page--heading mt-5 pb-5">
        <center>
         <Link to="/category"> <span class="button button-pulse">Order Now</span></Link> 
            <p>100% Money Back Guarantee + Free Shipping Worldwide!</p>
         
            <p>Pay Only 30% In Advance. The Rest Only After Approving Your Painting!</p>
        </center>
    </div> 
        </div>
    );
}

export default Oilpricing;