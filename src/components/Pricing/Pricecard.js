import React from 'react';
import "./price.css";
import SimpleAccordion from './Faq';
import Searchbar from '../Searchbar';
import data from "./pricing.json";
import {Link} from "react-router-dom"
function Heading() {
 
    
    return (
        <div >
        
            {/* {data.map(data => {
                return (
                    <div key={data.id}>
                    <div className='container-header'>
                    <section id="cases" className="cases flex-grid-pricing section-padding-pricing">
        <header className="section-header-pricing">
         
          <h2>Best And Affordable Prices of Custom Paintings From Photo (Guaranteed)</h2>
          <h4> 100% Money Back Guarantee + Free Shipping Worold Wide!</h4>
          <p>
            Pay Only 30% In Advance. The Rest Only After Approving Your Painting!
          </p>
          
        </header>
       
      </section>
      </div>
   
    <section className="pricing flex-columns-pricing">
        <div className='container-pricing'>
        <div className="row-pricing">
            <div className="column-pricing">
                <div className="column-1-pricing">
                  
                    <img src={data.imageUrl} alt="dummy-Image" className="imgSize" />
                </div>
            </div>
            
        </div>
        </div>
    </section>
    </div>
                )
            })} */}
           
            <div id="heading-price" className='price-heading-container pt-2 mt-5'> 
            <div className='search-price pt-5'> <Searchbar /></div>
           
         <h2>Best And Affordable Prices of Custom Paintings From Photo (Guaranteed)</h2>
         <h4> 100% Money Back Guarantee + Free Shipping World Wide!</h4>
         <p>
           Pay Only 30% In Advance. The Rest Only After Approving Your Painting!
         </p>
                </div>
{data.map(data =>{
    return (
        <div className='price-container pricing-bg'>
                
                <div id='image-price'>
                <div className="column-1-pricing">
                  
                  <img src={data.imageUrl} alt={data.alt} className="imgSize" />
              </div>
                </div>
                <div id="price-detail">
                <div className="column-pricing">
                <div className="column-2-pricing text-center ">
                    <h1>{data.title}</h1>
                    
                    <p className='text-muted'>{data.paragraph} <br/>
                    A <span className="bold">{data.span}</span> {data.paragraph2} <br/>
                    {data.price} <br/>
                    {data.paragraph3}</p>
                    <span className="bold">{data.span2}</span>{data.paragraph4} <br/>
                    <div className="row-pricing">
                        <div className="column-pricing">
                            <Link to={data.linkUrl} className="pricing-button">{data.button}</Link>

                        </div>
                    </div>
                </div>
            </div>
                </div>
                </div>
          
    )
})}
<div className='pricing-faq-container'>
    <h2 className='bold'>Frequently Asked Question</h2>
    <hr/>
    <SimpleAccordion/>  
</div>
    
</div>
    
      
    );
}

export default Heading;