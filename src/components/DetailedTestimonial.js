import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {client,urlFor} from "../sanity"

// import required modules
import { Navigation } from "swiper";

export default function (DetailedTestimonial) {
  const [state, setstate] = useState([])
  const getData = async() => {
    const query = `*[_type=="testimonial"]{
      _id,
      name,
      review,
      image,
    }`;
    const posts = await client.fetch(query);
    setstate(posts)
  }
    useEffect(() => {
        getData()
      }, []);
  return (
    <>
      <center>
        <hr className="h-rule pb-4" /> <h1 style={{ fontSize: "29px" }} className="pb-2 font-bold ">Detailed Testimonial</h1></center>
      <Swiper navigation={true} autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

        modules={[Navigation, Autoplay]} className="mySwiper">
        {state.map(data => {
          return (
            <SwiperSlide key={data._id}>
              <div className='container-flex'>
                <section class="t-bq-section" id="emma">
                  <div class="t-bq-wrapper t-bq-wrapper-boxed">
                    <div class="t-bq-quote t-bq-quote-emma">
                      <div class="t-bq-quote-emma-qmark"><span>&#10077;</span></div>
                      <div class="t-bq-quote-emma-userpic"><img alt="" src={urlFor(data.image).url()}/></div>
                      <div class="t-bq-quote-emma-base">
                        <blockquote class="t-bq-quote-emma-text" cite="Strugatsky brothers">
                          {data.review}
                        </blockquote>
                      <span className="t-bq-quote-emma-base">
                        - {data.name}                        
                      </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </>
  );
}
