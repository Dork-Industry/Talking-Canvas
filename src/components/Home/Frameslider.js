import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";


// import required modules
import { FreeMode ,Pagination } from "swiper";
import {client,urlFor} from "../../sanity"
export default function Frameslider() {
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
    <>
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
            <SwiperSlide key={data._id}>
       
       <div class="slider ms-5">
          <div class="slider1 new"><img src={urlFor(data.image).url()} alt={data.alt} /></div>
          <div class="slider1 slider-info"></div>
          <div class="slider1 slider-cart"><i class="fas fa-shopping-cart text-grey fs-5 ms-1 mt-2"></i></div>
        </div>

</SwiperSlide>
        )
      })}
        
      </Swiper>
    </>
  );
}
