import React from 'react';
import logo from "../images/logo.png";
import profile from "../images/profile1.png";
import {Link} from "react-router-dom";
function Navbar() {
    return (
       
        <div>
            <header className='top-nab bg-light fixed-top'>
         
           <Link to="/" className="logo "><img src={logo} alt=""  width="100vw" height="50vw" /></Link>
        
        <div className="menu-bar top-navbar mt-5">
            <ul>
                <li><Link to="/" style={{fontSize:"18px" ,marginLeft:" -20px"}}>Home</Link></li>
                <li><Link to="/gallery" style={{fontSize: "18px"}}>Gallery</Link>
                    <div className="sub-menu-1">
                        <ul>
                            <li><Link to="gallery/oil-painting" style={{fontSize: "14px"}}>Oil Painting Gallery</Link></li>
                            <li><Link to="gallery/pencil-painting" style={{fontSize: "14px"}}>Pencil Sketch Gallery</Link></li>
                            <li><Link to="gallery/charcoal-painting" style={{fontSize: "14px"}}>Charcoal Drawing Gallery</Link></li>
                            <li><Link to="gallery/watercolor-painting" style={{fontSize: "14px"}}>Watercolor Painting Gallery</Link></li>
                            <li><Link to="gallery/colored-pencil-painting" style={{fontSize: "14px"}}>Colored Pencil Drawing Gallery</Link></li>
                            <li><Link to="gallery/acrylic-painting" style={{fontSize: "14px"}}>Acrylic Painting Gallery</Link></li>
                            <li><Link to="gallery/pastel-painting" style={{fontSize: "14px"}}>Pastel Painting Gallery</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to="pricing" style={{fontSize: "18px"}}>Pricing</Link>
                <div className="sub-menu-2">
                        <ul>
                            <li><Link to="pricing/oil-pricing" style={{fontSize: "14px"}}>Oil Painting Pricing</Link></li>
                            <li><Link to="pricing/pencilsketch-pricing" style={{fontSize: "14px"}}>Pencil Sketch Pricing</Link></li>
                            <li><Link to="pricing/charcoal-pricing" style={{fontSize: "14px"}}>Charcoal Drawing Pricing</Link></li>
                            <li><Link to="/pricing/watercolor-pricing" style={{fontSize: "14px"}}>Watercolor Painting Pricing</Link></li>
                            <li><Link to="pricing/coloredpencil-pricing" style={{fontSize: "14px"}}>Colored Pencil Drawing Pricing</Link></li>
                            <li><Link to="pricing/acrylic-pricing" style={{fontSize: "14px"}}>Acrylic Painting Pricing</Link></li>
                            <li><Link to="pricing/pastel-pricing" style={{fontSize: "14px"}}>Pastel Painting Pricing</Link></li>
                        </ul>
                    </div>
                    </li>
                <li><Link to="about-us" style={{fontSize: "18px"}}>About</Link></li>
                <li><Link to="" style={{fontSize: "18px"}}>Help</Link>
                <div className="sub-menu-1">
                        <ul>
                            <li><Link to="size-chart" style={{fontSize: "14px"}}>Size Chart</Link></li>
                            <li><Link to="framing-option" style={{fontSize: "14px"}}>Framing Option</Link></li>
                            <li><Link to="guarantee" style={{fontSize: "14px"}}>Guarantee/ Return Policy</Link></li>
                           
                        </ul>
                    </div></li>
               
            </ul>
        </div>
        <div className='d-flex'>
        <Link to="/cart"><i class="fas fa-shopping-cart fs-3 cart--icon"></i></Link>
          <Link to="/login"><img className='top-navbar'  src={profile} alt="" width="35px" height="35px"  /></Link>  
        </div>
    </header>  
        </div>
    );
}

export default Navbar;