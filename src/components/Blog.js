import React from 'react';
import {Link} from 'react-router-dom'
function Blog() {
    return (
        <div>
             {/* <section class="testimonial-card">
        <div class="container">
            <div class="row  ">
            <div className='col-md-4 col-12'>
            <center>
            <div class="card px-3 mt-5"  style={{width: "50%", height: "100%" }}>
                    <div class="card-body tes">
                        <img src={profile} alt="Person1" class="rounded-circle  shadow-sm  card-image-top" style={{height: "30%" , width:"30% "}} />
                   
                        <div class="d-flex " id="review">
                            <ul class="list-unstyled d-flex text-warning mb-0">
                                <li><i class="fas fa-star "></i></li>
                                <li><i class="fas fa-star "></i></li>
                                <li><i class="fas fa-star "></i></li>
                                <li><i class="fas fa-star "></i></li>
                                <li><i class="fas fa-star "></i></li>
                              </ul>
                        </div><br/>
                        <h3>Person One</h3> <br />
                       
                        <p class="mb-2">
                            <i class="fas fa-quote-left pe-2"></i>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nisi officiis ipsum eligendi quam facilis pariatur, ex dolore architecto cupiditate.
                          </p>
                    </div>
                </div>
                </center>
            </div>
              
                </div>
            </div>
            </section> */}
            
<section className='testimonial-bg '>
<hr className='h-rule pb-4'></hr>
<center>  <h1 style={{fontSize: "29px"}} className="pb-2 font-bold ">Recent Blog</h1></center>
    <div className=' testimonial-container pt-3 container'>
        <div className='row d-flex justify-content-center'>
       
        <div className='col-md-4 col-sm-12 py-5' >
        <center>
        <div className="card" style={{width:"300px" }}>

                    <div className="car-body card-body px-3">
                  
                        <p className="text-muted pt-3">Date : 22 August</p><br />
                      
                        <h4 style={{fontWeight: "bold"}}> Hello World !! </h4>
                            <br/>
                            <h4 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit
                        </h4> 
                      
                        <br/>
                        <Link to="/blog-section" class="blog-btn px-3">Read More </Link>
                    </div>
                </div>
                </center>
        </div>
        <div className='col-md-4 col-sm-12 py-5' >
        <center>
        <div className="card" style={{width:"300px" }}>

                    <div className="car-body card-body px-3">
                   
                    <p className="text-muted pt-3">Date : 22 August</p><br />
                      
                        <h4 style={{fontWeight: "bold"}}>Hello World !!</h4>
                            <br/>
                            <h4 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit
                        </h4> <br/>
                        <Link to="/blog-section" class="blog-btn px-3">Read More </Link>
                    </div>
                </div>
                </center>
        </div>
        <div className='col-md-4 col-sm-12 py-5' >
        <center>
        <div className="card" style={{width:"300px" }}>

                    <div className="car-body card-body px-3">
                  

                    <p className="text-muted pt-3">Date : 22 August</p><br />
                      
                        <h4 style={{fontWeight: "bold"}}> Hello World !! </h4>
                            <br/>
                            <h4 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit
                        </h4> <br/>
                        <Link to="/blog-section" class="blog-btn px-3">Read More </Link>
                    </div>
                </div>
                </center>
        </div>
        </div>
    </div>

  
    <section className='testimonial-slider'>
    <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <center>
                <div className="card card-slider pt-4 pb-4" style={{width:"300px"}}>
                    <div className="car-body card-body">
                   
                    <p className="text-muted"> Date : 22 Aug</p><br />
                      
                        <h4 style={{fontWeight: "bold"}}> Hello World !! </h4>
                            <br/>
                        <h4 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit
                        </h4> <br/>
                        <Link to="/blog-section" class="blog-btn px-3">Read More </Link>
                </div>
              </div>
              </center>
    </div>
    <div class="carousel-item">
    <center>
                <div className="card card-slider pt-4 pb-4" style={{width:"300px"}}>
                    <div className="car-body card-body">
                
                    <p className="text-muted pt-3">Date : 22 August</p><br />
                      
                        <h4 style={{fontWeight: "bold"}}> Hello World !! </h4>
                            <br/>
                            <h4 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit
                        </h4> <br/>
                        <Link to="/blog-section" class="blog-btn px-3">Read More </Link>
                </div>
              </div>
              </center>
    </div>
    <div class="carousel-item">
    <center>
                <div className="card card-slider pt-4 pb-4" style={{width:"300px"}}>
                    <div className="car-body card-body">
               
                    <p className="text-muted pt-3">Date : 22 August</p><br />
                      
                        <h4 style={{fontWeight: "bold"}}> Hello World !! </h4>
                            <br/>
                            <h4 className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus diam ut mi tincidunt sodales. Praesent volutpat nisi id ex sollicitudin, et mollis dolor ultricies. Mauris varius tristique massa a suscipit
                        </h4> <br/>
                        <Link to="/blog-section" class="blog-btn px-3">Read More </Link>
                </div>
              </div>
              </center>
    </div>
  </div>
  <button class="carousel-control-prev " style={{color:"#000"}} type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon  " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </section>
    </section>
        </div>
 
       
    );
}

export default Blog;