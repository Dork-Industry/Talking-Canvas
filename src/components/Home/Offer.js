import React, {useState ,useEffect} from 'react';
import {Link} from "react-router-dom"
import "./offer.css"
import { client,urlFor } from "../../sanity";

function Offer() {
    const [popup , setPopup]  = useState('popup');
    const [blur , setBlur] = useState('');
    const [state, setstate] = useState({percent:"",desc:"",redirect:"",image:""})
  const getData = async() => {
    const query = `*[_type=="offer"]{
      _id,
      percent,
      desc,
      redirect,
      image,
    }`;
    const posts = await client.fetch(query);
    posts.map((item) => {
      setstate({percent:item.percent,desc:item.desc,redirect:item.redirect,image:item.image})
    })
  }
    useEffect(() => {
        window.onload= function (){
            // setTimeout(function(){
              getData()
              setPopup("popup-show");
              setBlur("body");
            // }, 7000)
         }
         
    },[])
    let img = state.image ? urlFor(state.image).url() : "./gift.png"
    return (
      <>
      
                <div className={blur}>
            <div className={popup}>
                   <div className="contentBox">
                   <div className="close" onClick={(e) => {
                     setPopup("popup")
                     setBlur("")
                   }}></div>
             <div className="imgBx">
                <img src={img} alt="offer"/>
             </div>
             <div className="content">
               <div>
                <h3>Special Offer</h3>
                <h2>{state.percent}{" "}<sup>%</sup><span>Off</span></h2>
                <p>{state.desc}</p>
                <Link to={state.redirect}>Get the Deal </Link>
               </div>
             </div>
                </div>
                </div>
                
                      </div>
      </>
      
    );
}

export default Offer;