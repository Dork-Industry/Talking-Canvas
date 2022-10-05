import React, {useState, useEffect} from 'react'
import $ from "jquery";
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import data from "../oilpainting.json";
import Button from '../Home/Button';

import SimpleAccordion from '../Pricing/Faq';
import Searchbar from '../Searchbar';


export default function Slider() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
    $(document).ready(function(){
        $("#search").focus(function() {
          $(".search-box").addClass("border-searching");
          $(".search-icon").addClass("si-rotate");
        });
        $("#search").blur(function() {
          $(".search-box").removeClass("border-searching");
          $(".search-icon").removeClass("si-rotate");
        });
        $("#search").keyup(function() {
            if($(this).val().length > 0) {
              $(".go-icon").addClass("go-in");
            }
            else {
              $(".go-icon").removeClass("go-in");
            }
        });
        $(".go-icon").click(function(){
          $(".search-form").submit();
        });
    });
   

    const [slideIndex, setSlideIndex] = useState(1);
    const [state, setState] = useState(1);
  const decrease = () => {
    if (state === 0) return;
    setState(state - 1);
  };
  const increase = () => {
    setState(state + 1);
  };

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
       
<div>



{/* <div className="search-box"> */}
			
			
        <div className='slider-container'>
       <div id="gallery-heading">
       <Searchbar/>
        <h1>Oil painting gallery</h1>
       </div>
            <main> <div className='product'>
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={`/Imgs/img${index + 1}.jpg`} 
                        alt=""
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

           
            </div>
            <div> <div className="container-dots ">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div></div>
           
        </div>
       
        </main>
            <div id="content" className='content'>
  <div className="content-cards">
  {data.map( data =>{
    return(
        <div className="card " key={data.id}>
        
      <div className="body">
        <h3 className="content">{data.title}</h3>
        <p className="text-muted"> <ul className="list-unstyled d-flex text-warning pt-2">
                                <li><i className="fas fa-star "></i></li>
                                <li><i className="fas fa-star "></i></li>
                                <li><i className="fas fa-star "></i></li>
                                <li><i className="fas fa-star "></i></li>
                                <li><i className="fas fa-star "></i></li>
                              </ul></p>
        <div className='mt-4 price'>{data.pricing}</div>
        <p className="text-muted mt-4">{data.description}</p>
      </div>
    </div>
    )
  })}
   
    </div>
</div>
    <div id="select" className='select'>
       <div className="content-cards">
  

        <div className="card " key={data.id}>
        
      <div className="body">
      <h3 className="content">Select you Choise :</h3>
        <h3 className="content">
        <form>
        <div className='select-container '>
    <div><p>Select frame Size : </p></div>
    <div><select>
    <option>12" X 12"</option>
    <option>12" X 16"</option>
    <option>16" X 20"</option>
    <option>18" X 24"</option>
    <option>20" X 30"</option>
    <option>24" X 36"</option>
    <option>30" X 40"</option>
    <option>36" X 48"</option>
    <option>48" X 72"</option>
    </select></div>
</div>
        <div className='select-container'>
        
        <div className='label'><label for="decrease">Number Of Character(s) or Person(s) :</label></div>
        
            <div className="value-button ms-3" id="decrease" onClick={decrease}>-</div>
            <input type="number" id="number" value={state} />
            <div className="value-button" id="increase" onClick={increase}>+</div>
            </div>

        </form></h3>
        <div class="button-container">
     {/* <input type="file"  class="button">Upload File <i class="fas fa-upload"></i></input> */}
     <label for="myfile">Select a file:</label>
  <input class="button" type="file" id="myfile" name="myfile" />
  <a href="#" class="button button-pulse">Order Now</a>
  
  </div>

        <div className='mt-4 price'>{data.pricing}</div>
        <p className="text-muted mt-4">{data.description}</p>
      </div>
    </div>
    </div>    
    </div>
        </div>

        <div className='sample-container'>
        
        </div>
        <div className='tab-container'>
        <ul className="nav nav-tabs ms-5" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active ms-5" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Reviews</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Description</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">FAQ</button>
  </li>
  
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

  <div className='container mt-5'>
    <div className='row'>
      <div className='col-md-6 col-sm-6 col-12 pb-4 px-5'>
        <h1>Comments</h1>
        <div className="comment mt-4 text-justify float-left">
                    <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                    <h4>Jhon Doe</h4>
                    <span>- 20 October, 2018</span>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>
                <div className="text-justify darker mx-3 mt-4 float-right">
                    <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" className="rounded-circle" width="40" height="40" />
                    <h4>Rob Simpson</h4>
                    <span>- 20 October, 2018</span>
                    <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>
                <div className="comment mt-4 text-justify">
                    <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width="40" height="40" />
                    <h4>Jhon Doe</h4>
                    <span>- 20 October, 2018</span>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>
                <div className="darker  mx-3 text-justify">
                    <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" className="rounded-circle" width="40" height="40" />
                    <h4>Rob Simpson</h4>
                    <span>- 20 October, 2019</span>
                    <br/>
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                </div>
      </div>
      <div className='col-md-6 col-sm-6 col-12 pb-4'>
      <div className="form-style-2">
<div className="form-style-2-heading">Add a review</div>
<div>
<form action="" method="post">

<label for="field5"><span>Review <span className="required">*</span></span><textarea name="field5" className="textarea-field"></textarea></label>
<label for="field1"><span>Name <span className="required">*</span></span><input type="text" className="input-field" name="field1" value="" /></label>
<label for="field2"><span>Email <span className="required">*</span></span><input type="text" className="input-field" name="field2" value="" /></label>

<label><span> </span><input type="submit" value="Submit" /></label>
</form>
</div>
</div>
      </div>
    </div>
  </div>
  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere et ante vel laoreet. Donec porttitor ante id lectus dapibus, eu semper erat aliquam. Integer mattis odio vitae nisl iaculis consectetur. Aliquam augue dolor, efficitur ut sapien sit amet, dignissim tristique justo. Mauris eget dictum leo. Vestibulum eu tincidunt augue. Vivamus auctor convallis tincidunt. Integer vitae arcu massa. Nam quis orci lacinia, hendrerit lorem at,</div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"><div className='pricing-faq-container'>
    <h2 className='bold'>Frequently Asked Question</h2>
    <hr/>
    <SimpleAccordion/>  
</div></div>
  
</div>
</div>
       
     
        
        </div>
        
    )
}
