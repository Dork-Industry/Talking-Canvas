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
function Charcoalpricing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []); 
   
const faq = [
  {
      "id": 1 ,
      "question" : "1.What is the price of adding characters from different photos for my Charcoal Drawing?",
      "answer" : "We do not charge anything extra for adding characters from different photos into one painting. Place your order with Charcoal Drawing with the exact number of characters on an ideal canvas size and we will have it compile for you with our Merged Photo Service."
  },
  {
      "id": 2 ,
      "question" : "2. What will be the Charcoal Drawing price of a custom size canvas?",
      "answer" : "The Charcoal Drawing price of a custom size would be same as the cost of the nearest size available on our website. All you have to do is next size available near your custom size and place the order. Do not forget to mention your custom size in the suggestion box."
  }
];

    return (
        <div>
             <div id="heading-price" className=" mt-5 pt-5">
        <center>
            <h2 className=' my-3'>Custom Charcoal Drawing Price List</h2>
            <p>Charcoal Sketch Made On Art Paper By Real Artists.</p>
         
            <p>Pay Only 30% In Advance. The Rest Only After Approving Your Painting!</p>
        </center>
      </div> 
      <div className='price--list--image'>
        <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/CHARCOAL-price-list.jpg'/>
      </div>
      <div className='price--detail mb-4'>
      <center>
      <p className='py-1'>Your charcoal drawing will be shipped rolled in an art tube and can be framed later on.</p>
        <p className='py-1'>We do not offer finishing options for charcoal sketches as the drawing can get smudged in transit.</p>
        <p className='py-1'>
        If you want a gallery wrapped or framed artwork you can check out our oil or acrylic paintings.
        </p>
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

export default Charcoalpricing;