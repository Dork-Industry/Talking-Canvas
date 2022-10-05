import React from 'react';
import Testimonial from '../Testimonial';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Work from '../Work';
import {Link} from "react-router-dom"
import "./price.css"
function Acrylicpricing() {
   
const faq = [
    {
        "id": 1 ,
        "question" : "1. Is there any discount on the Acrylic Painting prices for bulk orders?",
        "answer" : "We will definitely give a discount on the Acrylic Painting prices for bulk orders. Kindly use the contact us button on the home page of the website to talk to our customer representative or write an email to us regarding the same. We will make sure to offer the best discounts."
    },
    {
        "id": 2 ,
        "question" : "2. Are there any hidden charges to my Acrylic Painting price?",
        "answer" : "There are no hidden charges to your Acrylic Painting price. The amount of the painting will be exactly as shown on the website. However, the price may vary if you choose additional services like Finishing options, Timelapse Video Service, or Express Service."
    }
  ];
  
      return (
          <div>
               <div id="heading-price" className=" mt-5 pt-5">
          <center>
              <h2 className=' my-3'>Custom Acrylic Painting Price List</h2>
              <p>Get Your 100% Handmade Acrylic Painting From Photos</p>
           
              <p>Pay Only 30% In Advance. The Rest Only After Approving Your Painting!</p>
          </center>
        </div> 
        <div className='price--list--image'>
          <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/acrylic-painting-price-list.jpg'/>
        </div>
        <div className='price--detail '>
        <center>
        <p>Your Acrylic Painting will be rolled in a sturdy art tube to avoid creasing or other damages while shipping.</p>
          <p>You can also get your Acrylic painting framed and gallery wrapped.</p>
        </center>
          
        </div>
        <div id="heading-price" className='price--frame--image mt-3'>
        <h2 className='mb-3'>Framing and Gallery Wrap Pricing</h2>
          <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/2-1.jpg'/>
        </div>
        <div  className='price--description mt-4 mb-5'>
        <center>
          <h2 className="mb-3">Acrylic Painting Finishing Options</h2>
          <p><span className='text-bold'>Gallery Wrap –</span> Your acrylic painting will be stretched over a wooden frame which creates a great emphasis on the subjects in the painting.<br/>
          <span className='text-bold'>Framed –</span> A framed artwork helps draw the viewers into the artwork by creating boundaries and highlighting the image. Click here to view your framing options.<br/>
          Your gallery wrapped or framed acrylic painting will be shipped in robust packaging to avoid any damage.
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

export default Acrylicpricing;