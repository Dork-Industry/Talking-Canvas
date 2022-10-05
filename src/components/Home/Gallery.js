import React from 'react';
import {Link , Outlet } from 'react-router-dom';
import "./Slider.css";


// import required modules


function Gallery() {

    return (
        <div>
            {/* <div className='container md:w-11/12 lg:w-3/5  gallery' id="gallery">
            <div className='row  justify-content-center mt-5 mb-5 pb-5'>
                <div className='col-10 glass' >
                <div className='row pt-2 pb-2'>
                    <div className="section full-height over-hide  px-sm-0">
                        <div className="container ">
                            <div className="row full-height justify-content-center">
                                <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
                                    <div className="section mx-auto text-center slider-height-padding">
                                      <Link to="baby"> <div> <input className="checkbox frst" type="radio" id="slide-1" name="slider" />   <label htmlFor="slide-1"></label></div></Link>
                                     
                                        <Link to="compilation"><div><input className="checkbox scnd" type="radio" name="slider" id="slider-2" />
                                        <label htmlFor="slider-2"></label></div></Link>
                                        <input className="checkbox thrd" type="radio" name="slider" id="slider-3" />
                                        <label htmlFor="slider-3"></label>
                                        <input className="checkbox foth" type="radio" name="slider" id="slider-4" />
                                        <label htmlFor="slider-4"></label>
                                        <input className="checkbox fifth" type="radio" name="slider" id="slider-5" />
                                        <label htmlFor="slider-5"></label>
                                        <input className="checkbox six" type="radio" name="slider" id="slider-6" />
                                        <label htmlFor="slider-6"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>  */}

            <div className='container pt-5'>

                <div className='row '>
                <center>
                <div className='col-md-10 col-sm-10 col-12 glass mb-2'>
                <div className='col-12 fs-5'>CLICK ON ICONS TO VIEW THE ART WE HAVE DELIVERED</div>
                </div>
                    <div className='col-md-10 col-sm-10 col-12 glass'>
                        <div className='row px-2 pt-2'>
                        
                       <div className='col-lg-1 col-md-2 col-sm-2 col-2 '> <Link to ="baby"><input className="checkbox frst" type="radio" id="slide-1" name="slider"/>   <label className='animate-ping' htmlFor="slide-1"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="compilation"><input className="checkbox scnd" type="radio" name="slider" id="slider-2" />
                        <label htmlFor="slider-2"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="couple"><input className="checkbox thrd" type="radio" name="slider" id="slider-3" />
                        <label htmlFor="slider-3"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="family"><input className="checkbox foth" type="radio" name="slider" id="slider-4" />
                        <label htmlFor="slider-4"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="grandparent"><input className="checkbox fifth" type="radio" name="slider" id="slider-5" />
                        <label htmlFor="slider-5"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="house"><input className="checkbox six" type="radio" name="slider" id="slider-6" />
                        <label htmlFor="slider-6"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="human"><input className="checkbox seven" type="radio" id="slide-7" name="slider" />   <label htmlFor="slide-7"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="landscape"><input className="checkbox eight" type="radio" id="slide-8" name="slider" />   <label htmlFor="slide-8"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="parent"><input className="checkbox nine" type="radio" id="slide-19" name="slider" />   <label htmlFor="slide-9"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="people"><input className="checkbox ten" type="radio" id="slide-10" name="slider" />   <label htmlFor="slide-10"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="pet"><input className="checkbox eleven" type="radio" id="slide-11" name="slider" />   <label htmlFor="slide-11"></label></Link>
                        </div>
                        <div className='col-lg-1 col-md-2 col-sm-2 col-2'><Link to="vechile"><input className="checkbox twelve" type="radio" id="slide-12" name="slider" />   <label htmlFor="slide-12"></label></Link>
                        </div>
                    </div>
                </div>
                </center>
            </div>
            
          
</div>
      <Outlet/>
        </div>
    );
}

export default Gallery;