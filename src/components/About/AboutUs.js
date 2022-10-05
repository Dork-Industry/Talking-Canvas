import React from 'react';
import "./aboutus.css";
import img from "./about.jpg"
import DetailedTestimonial from '../DetailedTestimonial';
function AboutUs() {
    return (
        <div className='container mt-5 pt-5 mb-5'>
        <center>  <h1 style={{fontSize: "29px", fontWeight:"500"}} className="py-4">About Us
</h1></center>
          <div className='about--container mb-5'>
            <div className='about--description'>
            <p>
            In <span className='text-bold'>2015</span> , Talking Canvas began as a portrait studio with the ambition of communicating an image's energy through imaginative means. <br/>
When Rajesh Pandey, an expert artist, wanted to offer an outstanding gift choice, he joined forces with the finest artists from <span className='text-bold'>India</span>. <br/>
Although we are now aware that we are not just an organisation that creates pictures from photographs <span className='text-bold'>we create an experience, we connect hearts through art. </span> 
<br/>
A team of dreamers, artists, and designers all working together to create masterpieces that are both beautiful and functional. 
We believe in providing 100% customer satisfaction, not just in theory, but in reality. 
<br/>
Furthermore, we agree that recollections should not be included in a photobook. It should be admired and respected, displayed as a prominent piece or enclosed in hearts.
Therefore, convert your recollections into hand-painted compositions.
            </p>
            
            </div>
            <div className='about--image img-flex'>
<img  src={img} alt=""></img>
            </div>
          </div>
          <DetailedTestimonial/>
        </div>
    );
}

export default AboutUs;