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
function Waterpricing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []); 
   
const faq = [
  {
      "id": 1 ,
      "question" : "1.Can I get a discount on my Watercolor Painting Prices?",
      "answer" : "Please use OFF10 at the checkout to get a 10% discount on your Watercolor Painting prices."
  },
  {
      "id": 2 ,
      "question" : "2. What is the best size and price to get a 5-character Watercolor Painting?",
      "answer" : "Our artist suggests that the best size for a 5-character Watercolor Painting is 24×36. However, you may need to go for a bigger canvas size if you want a full-body Watercolor Painting of the characters. The Watercolor Painting prices for 5 characters artwork start at $385."
  }
];

    return (
        <div>
             <div id="heading-price" className=" mt-5 pt-5">
        <center>
            <h2 className=' my-3'>Custom Watercolor Painting Pricing List</h2>
            <p>100% Hand-painted On Watercolor Paper From Your Photos.</p>
         
            <p>Pay Only 30% In Advance. The Rest Only After Approving Your Painting!</p>
        </center>
      </div> 
      <div className='price--list--image'>
        <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/Watercolor-price-list.jpg'/>
      </div>
      <div className='price--detail '>
      <center>
      <p>Your watercolor painting will arrive rolled in a secure art tube to avoid creasing.</p>
        <p>A watercolor painting looks the best when it is framed.</p>
      </center>
        
      </div>
      <div id="heading-price" className='price--frame--image mt-3'>
      <h2 className='mb-3'>Framing Prices for Watercolor Paintings</h2>
        <img src='https://www.portraitflip.com/wp-content/uploads/2022/05/framing-price-list.jpg'/>
      </div>
      <div  className='price--description mt-4 mb-5'>
      <center>
        <h2 className="mb-3">Watercolor Painting Finishing Options</h2>
        <p>Get your watercolor painting framed as it adds to the viewing experience and the decor setting of the place.<br/>
        Your framed watercolor painting does not include a glass top as they can easily break in transit and damage the artwork.
        </p>
        </center>
      </div>
      <div className='price--note'>
        <h3 className='text-bold'>Please note the following:</h3>
        <p className='text-muted'>* Our Framing cost does not depend on the type of frame but on the size of the painting.</p>
      
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

export default Waterpricing;