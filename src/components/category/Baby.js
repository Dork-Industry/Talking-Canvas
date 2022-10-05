import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Link } from "react-router-dom"
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../Home/styles.css";

import {client,urlFor} from "../../sanity"
// import required modules
import { FreeMode ,Pagination } from "swiper";
function Baby() {
const [val , setVal] = useState("");
const [open, setOpen] = useState("custom-model-main")
const handleClick = (e) => {
  const a = e.target.dataset.tag;
  console.log(a)
  setVal(a);
  setOpen("custom-model-main model-open")
}
const [data, setData] = useState([])
  const getData = async() => {
    const query = `*[_type=="baby"]{
      _id,
      popup,
      image,
      alt,
      description,
    }`;
    const posts = await client.fetch(query);
    setData(posts)
  }
    useEffect(() => {
        getData()
      }, []);
    return (
        <div>
        <div className='container w-4/5 gallery-container  px-4'>
<div className='glass'>
    <div className='row gallery-bg '>
    {data.map(item => {
      return (
        <div className='col-md-3 py-4 px-4 popup-link' key={item._id}>
        <div className='gallery-box text-center'>
       <img data-tag={urlFor(item.image).url()}  src={urlFor(item.image).url()} alt={item.alt} onClick={handleClick}></img>
        </div> 
        </div>
      )
    })}
        </div>
        </div>
        </div>
        <div class={open}>
    <div class="custom-model-inner">        
    <div class="close-btn" onClick={() => setOpen("custom-model-main")}>×</div>
        <div class="custom-model-wrap">
            <div class="pop-up-content-wrap">
            <img  src={val} ></img>
            </div>
        </div>  
    </div>  
    <div class="bg-overlay"></div>
</div> 
        <div className='gallery-slider'>
                 <Swiper
        slidesPerView={"auto"}
        spaceBetween={1}

       freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode , Pagination]}
        className="mySwiper  pt-5"
        
      >
      {data.map(item => {
        return (
            <SwiperSlide key={item._id}>
       
       <div class="slider ms-5">
          <div class="slider1 new"><img src={urlFor(item.image).url()} alt={item.alt} /></div>
          <div class="slider1 slider-info pt-2 ps-2 text-white">{item.description}</div>
          <div class="slider1 slider-cart"><Link to="/category"><i class="fas fa-shopping-cart text-grey fs-5 ms-1 mt-2"></i></Link></div>
        </div>

</SwiperSlide>
        )
      })}
        
      </Swiper>
      </div>
        </div>
    );
}

export default Baby;