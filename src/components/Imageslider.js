import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import data from "./Home/Blog.json";

// import required modules
import { FreeMode, Pagination , Navigation } from "swiper";
import Card from "./Card";
export default function Blo() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={180}
        freeMode={true}
        Navigation
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
            0: {
                slidesPerview: 1 ,
               
            },
            480: {
                slidesPerview: 2 ,
               
            },
            980: {
                slidesPerview: 4 ,
                
            },
        }}
      >
      {data.map(blog => {
       
        return (
            <SwiperSlide>
            <div className="card card-slider pb-4" style={{width:"270px"}}>
                    <div className="car-body ">
                        <p className="text-muted "> {blog.date}</p><br/>
                        
                        <h4 style={{fontWeight:"bold"}}>{blog.name}</h4>
                            <br/>
                        <h4>{blog.review}
                        </h4> <br />

                
                </div>
              </div>
        </SwiperSlide>
        )
      })}
       
       
      </Swiper>
    </>
  );
}
