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
function Pencilpricing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []); 
   
const faq = [
  {
      "id": 1 ,
      "question" : "1. What will be the price of a Pencil Sketch with two humans and one pet?",
      "answer" : "The price of Pencil Sketch for two humans and one pet would be approximately ₹ 200. However, the Pencil Sketch prices may increase with the increase in the canvas size."
  },
  {
      "id": 2 ,
      "question" : "2. What will be the cost of adding a background to my Pencil Sketch?",
      "answer" : "Removing or adding a background to your pencil sketch does not attract any additional charges. PortraitFlip provides all its customizations free of cost."
  },
  {
      "id": 3 ,
      "question" : "3. What will the cost of adding an additional character in the photoshop design?",
      "answer" : "You can add as many characters to your Pencil Sketch as you want before the approval of the photoshop design. Email the photo of the character at support@portraitflip.com and our happiness manager will get back to you with a solution and the additional charges."
  }
];

    return (
        <div>
             <div id="heading-price" className=" mt-5 pt-5">
        <center>
            <h2 className=' my-3'>Custom Pencil Sketch Price List</h2>
            <p>Pencil Sketch Made On Art Paper By Real Artists.</p>
         
            <p>Pay Only 30% In Advance. The Rest Only After Approving Your Painting!</p>
        </center>
      </div> 
      <div className='price--list--image'>
        <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/Pencil-price-list.jpg'/>
      </div>
      <div className='price--detail mb-4'>
      <center>
      <p>Your rolled Pencil Sketch will be delivered in an art tube to avoid any damage during transit.</p>
        <p>We do not offer finishing options for this medium as it can easily get smudged during shipping.</p>
        <p>If you want your artwork to be framed or gallery wrapped check out our oil or acrylic paintings.</p>
      </center>
        
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

export default Pencilpricing;