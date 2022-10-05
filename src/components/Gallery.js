import React , {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";




function Gallery() {
    const [image , setImage] = useState("https://www.portraitflip.com/wp-content/uploads/2022/03/Couple.jpg");
  
    return (
        <div>
               {/* <section id="gallery-button">
        <div className="container">
            <div className="row">
                <center>
                <div className="card-gallery-2">
                    <div className="share">
                        <a href="#"> <img src={dummy} alt="" style={{height: "12%" ,width:"12%"}} className="rounded-circle "/></a>
                        <a href="#"> <img src={dummy} alt="" style={{height: "12%" ,width:"12%"}} className="rounded-circle "/></a>
                        <a href="#"> <img src={dummy} alt="" style={{height: "12%", width:"12%"}} className="rounded-circle "/></a>
                        <a href="#"> <img src={dummy} alt="" style={{height: "12%" ,width:"12%"}} className="rounded-circle "/></a>
                        <a href="#"> <img src={dummy} alt="" style={{height: "12%", width:"12%"}} className="rounded-circle "/></a>
                        <a href="#"> <img src={dummy} alt="" style={{height: "12%" ,width:"12%"}} className="rounded-circle "/></a>
                    </div>
                </div>
            </center>
            </div>
        </div>
    </section> */}

    <div className='container md:w-11/12 lg:w-3/5  gallery' id="gallery">
            <div className='row  justify-content-center mt-5 mb-5 pb-5'>
                <div className='col-10 glass' >
                <div className='row pt-2 pb-2'>
              
                    {/* <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2022/03/Couple.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Couple.jpg")}

                    /></a></div>
                   <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2020/10/pet-portraits.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2020/10/pet-portraits.jpg")}

                    /></a></div>
                   <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2020/10/Baby-portraits.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2020/10/Baby-portraits.jpg")}

                    /></a></div>
                   <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2022/03/Family.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Family.jpg")}

                    /></a></div>
                   <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2022/03/Christmas.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Christmas.jpg")}

                    /></a></div>
                   <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2022/03/Compilation.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Compilation.jpg")}

                    /></a></div> */}

                    <div class="section full-height over-hide  px-sm-0">
		<div class="container ">
			<div class="row full-height justify-content-center">
				<div class="col-lg-10 col-xl-8 align-self-center padding-tb">
					<div class="section mx-auto text-center slider-height-padding">
			          	<input class="checkbox frst" type="radio" id="slide-1" name="slider" onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Family.jpg")}/>
			          	<label for="slide-1"></label>
			          	<input class="checkbox scnd" type="radio" name="slider" id="slider-2" onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Couple.jpg")}/>
			          	<label for="slider-2"></label>
			          	<input class="checkbox thrd" type="radio" name="slider" id="slider-3" onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2020/10/pet-portraits.jpg")}/>
			          	<label for="slider-3"></label>
			          	<input class="checkbox foth" type="radio" name="slider" id="slider-4" onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2020/10/Baby-portraits.jpg")}/>
			          	<label for="slider-4"></label>
                          <input class="checkbox fifth" type="radio" name="slider" id="slider-5" onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Christmas.jpg")}/>
			          	<label for="slider-5"></label>
                          <input class="checkbox six" type="radio" name="slider" id="slider-6" onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Compilation.jpg")}/>
			          	<label for="slider-6"></label>
				    </div>
			    </div>
	      	</div>
	    </div>
	</div>
                </div>
               
                       
                </div>
            </div>
           </div>
{/* 
 <div className="gallery-slider py-5">
    <div className="container">
        <div className="card-gallery">
            <div className="carousel slide py-5" id="myCarousel-gallery" data-bs-ride="carousel" style="margin-top: 10px;">
    
                <ol className="carousel-indicators">
                    <li  data-bs-target="#myCarousel-gallery" data-bs-slide-to="0" className="active"></li>
                    <li  data-bs-target="#myCarousel-gallery" data-bs-slide-to="1" ></li>
                    <li  data-bs-target="#myCarousel-gallery" data-bs-slide-to="2" ></li>
                    <li  data-bs-target="#myCarousel-gallery" data-bs-slide-to="3" ></li>
                    <li  data-bs-target="#myCarousel-gallery" data-bs-slide-to="4" ></li>
                    <li  data-bs-target="#myCarousel-gallery" data-bs-slide-to="5" ></li>
                    <li  data-bs-target="#myCarousel-gallery" data-bs-slide-to="6" ></li>
                    <li  data-bs-target="#myCarousel-gallery" data-bs-slide-to="7" ></li>
                    <li  data-bs-target="#myCarousel-gallery" data-bs-slide-to="8" ></li>
                </ol>
                <div className="carousel-inner">
               
                    <div className="carousel-item-1 carousel-item active  " style={{marginTop:"-60px "}}>
                        <div className="container container-slider ">
                            <div className="row">
                         
                                <div className="col-md-4 py-5 "></div>
                                <div className="col-md-4 py-5 ">
                                    <center><a href="/img/desktop1.png" className="fancybox" data-fancybox="gallery1">
                                        <img src="/Paint1/image/dummy-image-square.jpg" alt="img1" height="80%" width="80%" />
                                    </a></center>
                                  </div>
                                <div className="col-md-4 py-5 "></div>
                            </div>
                        </div>
                    </div>
        
                    <div className="carousel-item-1 carousel-item " style={{marginTop:"-60px "}}>
                        <div className="container container-slider ">
                            <div className="row">
               
                                <div className="col-md-4 py-5 "></div>
                                <div className="col-md-4 py-5 ">
                                    <center><a href="/img/desktop1.png" className="fancybox" data-fancybox="gallery1">
                                        <img src="/Paint1/image/dummy-image-square.jpg" alt="img1" height="80%" width="80%" />
                                    </a></center>
                                  </div>
                                <div className="col-md-4 py-5 "></div>
                            </div>
                        </div>
                    </div>
              
                    <div className="carousel-item-1 carousel-item" style={{marginTop:"-60px "}}>
                        <div className="container container-slider ">
                            <div className="row">
                     
                                <div className="col-md-4 py-5 "></div>
                                <div className="col-md-4 py-5 ">
                                    <center><a href="/img/desktop1.png" className="fancybox" data-fancybox="gallery1">
                                        <img src="/Paint1/image/dummy-image-square.jpg" alt="img1" height="80%" width="80%" />
                                    </a></center>
                                  </div>
                                <div className="col-md-4 py-5 "></div>
                            </div>
                        </div>
                    </div>
                  
                 
                   
                    
                </div>
            
                <button className="carousel-control-prev prev-button"  type="button" data-bs-target="#myCarousel-gallery" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{color: "#333"}}></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next next-button" type="button" data-bs-target="#myCarousel-gallery" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
        </div>
    </div>
</div> */}

{/* <div id="carouselExampleFade" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={dummy} alt="img1" height="80%" width="80%" />
    </div>
    <div className="carousel-item">
    <img src={dummy} alt="img1" height="80%" width="80%" />
    </div>
    <div className="carousel-item">
    <img src={dummy} alt="img1" height="80%" width="80%" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
<div className='container w-4/5 gallery-container  gallery-bg px-4'>
<div className='glass'>
    <div className='row '>
        <div className='col-md-3 py-4 px-4'>
        <img src={image} alt=""></img>
        </div>
        <div className='col-md-3 py-4 px-4 '>
        <img src={image} alt=""></img> 
        </div>
        <div className='col-md-3 py-4 px-4 '>
        <img src={image} alt=""></img>  
        </div>
        <div className='col-md-3 py-4 px-4 '>
        <img src={image} alt=""></img> 
        </div>
    </div>
    <div className='row'>
        <div className='col-md-3 py-4 px-4 '>
        <img src={image} alt=""></img>
        </div>
        <div className='col-md-3 py-4 px-4 '>
        <img src={image} alt=""></img>  
        </div>
        <div className='col-md-3 py-4 px-4 '>
        <img src={image} alt=""></img>   
        </div>
        <div className='col-md-3 py-4 px-4 '>
        <img src={image} alt=""></img>
        </div>
    </div>
</div>

</div>
<section className='gallery-slider'>
<Swiper
        slidesPerView={1} 
        spaceBetween={10}
        className="mySwiper">
    
       
        <SwiperSlide>
        <center>
                <div className="card card-slider " style={{width:"80%"}}>
                    <img src={image} alt=""></img> 
                </div>
        </center>
        </SwiperSlide>
        <SwiperSlide>
        <center>
                <div className="card card-slider " style={{width:"90%"}}>
                    <img src={image} alt=""></img> 
                </div>
        </center>
        </SwiperSlide>
        <SwiperSlide>
        <center>
                <div className="card card-slider " style={{width:"90%"}}>
                    <img src={image} alt=""></img> 
                </div>
        </center>
        </SwiperSlide>
        <SwiperSlide>
        <center>
                <div className="card card-slider " style={{width:"90%"}}>
                    <img src={image} alt=""></img> 
                </div>
        </center>
        </SwiperSlide>
        <SwiperSlide>
        <center>
                <div className="card card-slider " style={{width:"90%"}}>
                    <img src={image} alt=""></img> 
                </div>
        </center>
        </SwiperSlide>
        

     
    </Swiper> 
</section>
        </div>
    );
}

export default Gallery;