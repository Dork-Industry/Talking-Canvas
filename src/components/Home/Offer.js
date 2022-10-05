import React, {useState ,useEffect} from 'react';
import {Link} from "react-router-dom"
import "./offer.css"
import { urlFor } from "../../sanity";

function Offer({state}) {
    const [popup , setPopup]  = useState('popup');
    const [blur , setBlur] = useState('');
    useEffect(() => {
        window.onload= function (){
            setTimeout(function(){
              setPopup("popup-show");
              setBlur("body");
            }, 4000)
         }
         
    },[])
    return (
      <>
      {state.map((item) => {
                <div className={blur}>
            <div className={popup}>
                   <div key={item._id} className="contentBox">
                   <div className="close" onClick={(e) => {
                     setPopup("popup")
                     setBlur("")
                   }}></div>
             <div className="imgBx">
                <img src={urlFor(item.image).url()} alt="offer"/>
             </div>
             <div className="content">
               <div>
                <h3>Special Offer</h3>
                <h2>{item.percent}{" "}<sup>%</sup><span>Off</span></h2>
                <p>{state.desc}</p>
                <Link to={item.redirect}>Get the Deal </Link>
               </div>
             </div>
                </div>
                </div>
                
                      </div>
              })}
      </>
      
    );
}

export default Offer;