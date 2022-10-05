import React  from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../Home/styles.css";
import data from "./oilimage.json"

// import required modules
import { FreeMode ,Pagination } from "swiper";
function Oilgallery() {
    return (
        <div>
        <div className='container w-4/5 gallery-container  px-4'>
<div className='glass'>
    <div className='row gallery-bg '>
    {data.map(data => {
      return (
        <div className='col-md-3 py-4 px-4' key={data.id}>
        <img src={data.image} alt={data.alt}></img>
        </div>
      )
    })}
        
        </div>
        </div>
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
        className="mySwiper mt-5 pt-5"
        
      >
      {data.map(data => {
        return (
            <SwiperSlide key={data.id}>
       
       <div class="slider ms-5">
          <div class="slider1 new"><img src={data.image} alt={data.alt} /></div>
          <div class="slider1 slider-info"></div>
          <div class="slider1 slider-cart"><i class="fas fa-shopping-cart text-grey fs-5 ms-1 mt-2"></i></div>
        </div>

</SwiperSlide>
        )
      })}
        
      </Swiper>
      </div>
        </div>
    );
}

export default Oilgallery;