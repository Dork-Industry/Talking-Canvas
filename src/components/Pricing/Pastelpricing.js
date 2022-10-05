import React, {useEffect} from 'react';
import Testimonial from '../Testimonial';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Work from '../Work';
import {Link} from "react-router-dom"
import "./price.css"
function Pastelpricing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []); 
const faq = [
    {
        "id": 1 ,
        "question" : "1. What will be the price of a pastel portrait of 3 humans and 1 pet?",
        "answer" : "The price of a pastel portrait drawing of three humans and one pet would be approximately ₹ 300. However, the pastel drawing prices may increase due to increments in the canvas size."
    },
    {
        "id": 2 ,
        "question" : "2. What will be the price of a house pastel portrait painting?",
        "answer" : "Our Landscape Oil Painting starts from $130 and increases with the size of the canvas. Get your House Pastel Painting now."
    },
    {
        "id": 3 ,
        "question" : "3. Will a pet be counted as a different character in my pastel drawing?",
        "answer" : "Yes, a pet will be counted as a separate character in your pastel portrait and will be priced as much as a single human character."
    },
    {
        "id": 4 ,
        "question" : "4. Do you charge extra for customization in pastel portraits? ",
        "answer" : "Talking Canvas does customizations free of cost which ranges from changing the background of your artwork to adding a character from a different photo, all of these customizations are done with no questions asked."
    }
  ];
  
      return (
          <div>
               <div id="heading-price" className=" mt-5 pt-5">
          <center>
              <h2 className=' my-3'>Custom Pastel Painting Price List</h2>
              <p>Handmade Pastel Painting On Canvas From Photos</p>
           
              <p>Pay Only 30% In Advance. The Rest Only After Approving Your Painting!</p>
          </center>
        </div> 
        <div className='price--list--image'>
          <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/pastel-painting-price-list.jpg'/>
        </div>
        <div className='price--detail '>
        <center>
        <p>We will deliver your pastel painting rolled in a sturdy tube.</p>
          <p>Pastels are a vibrant medium that will last you a lifetime when taken care of and framing your painting is an excellent way to preserve them.</p>
        </center>
          
        </div>
        <div id="heading-price" className='price--frame--image mt-3'>
        <h2 className='mb-3'>Frame Price List for Pastel Painting</h2>
          <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/framing-price-list.jpg'/>
        </div>
        <div  className='price--description mt-4 mb-5'>
        <center>
          <h2 className="mb-3">Pastel Painting Finishing Options</h2>
          <p>Pastels are best viewed and preserved when framed. Our team has handpicked a collection of 6 wooden frames that you can choose from.<br/>
          Please note that the frame cost doesn’t depend on the type but rather on the size of your painting and your framed pastel painting will not come with a glass top as it can cause the pigment to smudge during shipment.
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

export default Pastelpricing;