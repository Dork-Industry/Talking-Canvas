import React from 'react';
import Testimonial from '../Testimonial';
function Customer() {
    return (
        <div>
             <div class="oilpainting--testimonials--clients">
        <div class="oilpainting--testimonial--heading">
            <center><h1 style={{fontSize: "29px", fontWeight:"500"}} className="my-3" >WHAT OUR COUSTOMERS SAY</h1></center>
        </div>
        <Testimonial/>
    </div>
        </div>
    );
}

export default Customer;