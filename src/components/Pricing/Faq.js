import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div className="container faq-container px-5">
      <Accordion className='rounded rounded-5'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>What is the price of an oil portrait? How do I compute the price for my order?</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our starting price for oil portraits is 130, this is for one character in a size of 12 inches x 12 inches.To compute the price for your Custom Oil Portrait, all you need to do is create your custom order from the Order Now button or get an estimate from the above images.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>How much do I have to pay in advance?</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You only have to pay 30% of your order value to get the painting process started.Once the down payment is paid, the painting process begins, and after some days, the photo of your final painting is shared with you for changes. At this point, you can suggest changes or pay the second half of your bill, and the shipping process starts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel3a-header"
        >
          <Typography><h4>How much do I have to pay for framing or gallery wrapping my portrait?</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The Framing or Gallery Wrapping cost depends upon the size of the portrait selected.To get the exact cost, create your custom order from the order now button, and you will be shown the exact price on the checkout page.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel4a-header"
        >
          <Typography><h4>How much do I have to pay for shipping? Does it vary with size?</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We do not charge anything for our Free Shipping order; a Free Shipping order reaches you in 25-27 business days.We charge 20% of your cart value for Express Shipping orders; these reach you 16-18 business days.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
