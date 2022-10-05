import React from 'react';
import {Link} from "react-router-dom";
import map from "../images/map.png";
function Footer() {
    return (
        <div>
            <div className='container footer-container mb-5 pb-4'>
            <hr/>
            <div className='icons-social container '>
            <div className='row  justify-content-center'>
                <div className='col-12 text-center' >
                    <i class="fab fa-facebook-f fs-4 text-white rounded-circle social-fb"></i>
                    <i class="fab fa-twitter fs-4 text-white rounded-circle social"></i>
                    <i class="fab fa-instagram fs-4 text-white rounded-circle social"></i>
                    <i class="fab fa-linkedin fs-4 text-white rounded-circle social"></i>
                    <i class="fab fa-pinterest fs-4 text-white rounded-circle social"></i>
                </div>
            </div>
  </div> 
                <div className='row'>
             
                    <div className='col-md-3 col-6  py-4'>
                    
                    {/* <ul>
                        <li>India</li>
                        <li>India</li>
                        <li>India</li>
                        <li>India</li>
                        <li>India</li>
                        <li>India</li>
                    </ul> */}
                    <h3 className='fs-4 px-4'>About Us</h3>
                <p className='ps-4 text-xs'>We are world's No 1 choice for custom Portraits. We turn your images and photo into 100% hand-painted Portraits and deliver woldwide</p>
                    </div>
                 <div className='col-md-3 col-6 px-5 py-4'>
                    <h3 className='fs-4'>quick links</h3>
                <Link to="/"> <i class="fas fa-arrow-right"></i> Home </Link> <br />
                <Link to="#"> <i class="fas fa-arrow-right"></i> About Us </Link> <br />
                <Link to="#"> <i class="fas fa-arrow-right"></i> Contact Us </Link> <br />
                <Link to="#"> <i class="fas fa-arrow-right"></i> Blog </Link> <br />
                
                    </div>
                    <div className='col-md-3 col-6 px-5  py-4'>
                    <h3 className='fs-4'>Explore</h3>
                <Link to="/product/oil-painting"> <i class="fas fa-arrow-right"></i> Oil Painting </Link> <br />
                <Link to="/product/watercolor"> <i class="fas fa-arrow-right"></i> Water Color </Link> <br />
                <Link to="/product/charcoal"> <i class="fas fa-arrow-right"></i> Charcoal Painting </Link> <br />
                <Link to="/product/pensil-sketch-painting"> <i class="fas fa-arrow-right"></i> Pensil Sketch </Link> <br />
                <Link to="/pricing"> <i class="fas fa-arrow-right"></i> Pricing </Link>
                    </div>
                    <div className='col-md-3 col-6  py-4'>
                    <h3 className='fs-4'>contact info</h3>
                <Link to="#"> <i class="fas fa-phone"></i> +123-456-7890 </Link> <br />
                <Link to="#"> <i class="fas fa-phone"></i> +91-6206517870 </Link> <br />
                <Link to="#"> <i class="fas fa-envelope"></i> dorkindustries@gmail.com</Link>
                <img src={map} class="map pt-3" alt="" />
                    </div>
                </div>
            </div>
            
            <div className="credit text-center pb-5 mt-5"> Copyright by <span>Dork Industries</span> | all rights reserved! </div>

        </div>
    );
}

export default Footer;