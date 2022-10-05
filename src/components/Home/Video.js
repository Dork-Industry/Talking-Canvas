import React,{useEffect,useState} from 'react';
import {client,urlFor} from "../../sanity"

function Video() {
  const [state, setstate] = useState([])
  const getData = async() => {
    const query = `*[_type=="blogvideo"]{
      _id,
      link
    }`;
    const posts = await client.fetch(query);
    setstate(posts)
  }
    useEffect(() => {
        getData()
      }, []);
    return (
        <div>
           <div className='container video-cont mb-5'>
           <hr className='h-rule pb-4'/>
           <h1 className='fs-2 text-center mb-5'>Video Gallery</h1>
            <div className='row'>
              {state.map((item ) => (
                
                  <div key={item._id} className='col-md-4'>
                <center>
                    <div className='video-card'>
                    <iframe width="100%" height="100%"
src={item.link}>
</iframe>
                    </div>
                    </center>
                </div>
              ))}
              </div>
        </div>
        
        
           <section className='video-slider'>
           <hr className='h-rule pb-3'></hr>
           <h1 className='fs-2 text-center mb-2'>Video Gallery</h1>
    <div id="video" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    
      {state.map((item) => (
        <div key={item._id} className="carousel-item py-5">
        <center>
                        <div className='video-card'>
                        <iframe width="100%" height="100%"
    src={item.link}>
    </iframe>
                        </div>
                        </center>
        </div>
      ))}
  </div>
  <button class="carousel-control-prev " style={{color:"#000"}} type="button" data-bs-target="#video" data-bs-slide="prev">
    <span class="carousel-control-prev-icon  " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#video" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </section>
        </div>
    );
}

export default Video;