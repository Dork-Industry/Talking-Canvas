import React from 'react';
import {Link} from "react-router-dom";

import "./button.scss";
function Button() {
    return (
        <div>
            <div className="button-container">
  <Link to="/category" className="button button-wiggle">Order Now</Link>
  <Link to="/contact-us" className="button button-pulse">Contact Us</Link>
</div>
        </div>
    );
}

export default Button;