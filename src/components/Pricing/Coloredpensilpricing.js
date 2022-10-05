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
function Coloredpensilpricing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []); 
const faq = [
    {
        "id": 1 ,
        "question" : "1. What will be the price of framing my Color Pencil Sketch?",
        "answer" : "The Color Pencil Sketch prices for framing your artwork depends on the size of the canvas. You can either click here or place an order by choosing framed as your finishing option to check the prices."
    },
    {
        "id": 2 ,
        "question" : "2. How much will adding another character to by 26*36 Color Pencil Sketch cost?",
        "answer" : "Adding another character to your 26*36 Color Pencil Sketch cost you an additional $35. We also suggest that you increase the canvas size to the next nearest inch so that the artwork looks cohesive and breathable."
    }
  ];
  
      return (
          <div>
               <div id="heading-price" className=" mt-5 pt-5">
          <center>
              <h2 className=' my-3'>Custom Colored Pencil Drawing Price List</h2>
              <p>Hand-Painted Color Pencil Drawings On Art Paper By Real Artists.</p>
           
              <p>Pay Only 30% In Advance. The Rest Only After Approving Your Painting!</p>
          </center>
        </div> 
        <div className='price--list--image'>
          <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/COLOREDPENCIL-pricing-list.jpg'/>
        </div>
        <div className='price--detail '>
        <center>
        <p>Your rolled color pencil drawing will be delivered in an art tube to avoid any damage during transit.</p>
          <p>A colour pencil drawing looks the best when framed.</p>
        </center>
          
        </div>
        <div id="heading-price" className='price--frame--image mt-3'>
        <h2 className='mb-3'>Framing Price List for Color Pencil Drawing</h2>
          <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/framing-price-list.jpg'/>
        </div>
        <div  className='price--description mt-4 mb-5'>
        <center>
          <h2 className="mb-3">Colored Pencil Drawing Finishing Options</h2>
          <p>Displaying your work of art in a frame helps bring the attention it deserves.<br/>
          The right frame always compliments the painting and the space it will sit in. <br/>
          Choose the right frame for your color pencil drawing with our artist-approved collection of frames.
          </p>
          </center>
        </div>
        <div className='price--note'>
          <h3 className='text-bold'>Please note the following:</h3>
          <p className='text-muted'>* Frame pricing does not depend on the type of frame but the size.</p>
          <p  className='text-muted'>* Your framed artwork will not come with a glass top as it may cause the painting to smudge. Glass is fragile and can easily break during transit which can also damage the drawing.</p>
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

export default Coloredpensilpricing;