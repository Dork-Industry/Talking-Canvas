import React,{useState, useEffect} from 'react';
import Heading from './Heading';
import Video from './Video';
import Customer from './Customer';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../Product/charcoal/charcoal (1).jpg"
import img2 from "../Product/charcoal/charcoal (2).jpg"
import img3 from "../Product/charcoal/charcoal (3).jpg"
import img4 from "../Product/charcoal/charcoal (4).jpg"
import img5 from "../Product/charcoal/charcoal (5).jpg"
import img6 from "../Product/charcoal/charcoal (6).jpg"
import img7 from "../Product/charcoal/charcoal (7).jpg"
import img8 from "../Product/charcoal/charcoal (8).jpg"
import charcoalHeading from "../Product/charcoal/charcoal-heading.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../Home/styles.css";


// import required modules
import { FreeMode ,Pagination } from "swiper";
import "./gallery.css"
function CharcoalGallery() {
    const [val , setVal] = useState("");
    const [open, setOpen] = useState("custom-model-main")
    const handleClick = (e) => {
      const a = e.target.dataset.tag;
      console.log(a)
      setVal(a);
      setOpen("custom-model-main model-open")
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    const slider = [
        {
            "id" : 1,
            "image": img1
        },
        {
            "id" : 2,
            "image": img2
        },
        {
            "id" : 3,
            "image": img3
        },
        {
            "id" : 4,
            "image": img4
        },  
        {
            "id" : 5,
            "image": img5
        },  
        {
            "id" : 6,
            "image": img6
        },  
        {
            "id" : 7,
            "image": img7
        },  
        {
            "id" : 8,
            "image": img8
        },  
    ]
    return (
        <div>
           <Heading title="Charcoal Drawing Gallery" image={charcoalHeading}  para1="Charcoal Drawings are stunning black and white handmade drawings that look classic, bold, and fantastic!" para2="Charcoal Drawings are one of the bestsellers here at PortraitFlip." para3="We house Professional Charcoal Drawing artists who use high-quality charcoal pencils and premium quality papers" para4="to deliver an experience of a lifetime!" link="/product/charcoal" />
          
           <Customer />
           <div className="multiple--img--continer--heading">
            <center><h1 style={{fontSize: "29px", fontWeight:"500"}}>CHARCOAL DRAWING GALLERY</h1></center>
        </div>
        <div className='container w-4/5 gallery-container my-4  px-4'>
<div className='glass'>
    <div className='row gallery-bg '>
    {slider.map(data => {
      return (
        <div className='col-md-3 py-4 px-4' key={data.id}>
    <img value={data.id} data-tag={data.image}  src={data.image} alt={data.alt} onClick={handleClick}></img>
    </div>
  )
})}
    
    </div>
    </div>
    </div>
    <div class={open}>
    <div class="custom-model-inner">        
    <div class="close-btn" onClick={() => setOpen("custom-model-main")}>??</div>
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
        className="mySwiper mb-5 pt-5"
        
      >
      {slider.map(data => {
        return (
            <SwiperSlide key={data.id}>
       
       <div className="slider ms-5">
          <div className="slider1 new"><img src={data.image} alt={data.alt} /></div>
          <div className="slider1 slider-info"></div>
          <div className="slider1 slider-cart"><i className="fas fa-shopping-cart text-grey fs-5 ms-1 mt-2"></i></div>
        </div>

</SwiperSlide>
        )
      })}
        
      </Swiper>
      </div>
      <Video video1="https://www.youtube.com/embed/tgbNymZ7vqY" video2="https://www.youtube.com/embed/tgbNymZ7vqY" />
        </div>
    );
}

export default CharcoalGallery;