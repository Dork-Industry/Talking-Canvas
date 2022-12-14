import React, {useState, useEffect} from 'react';
import {Link } from "react-router-dom"
import "./product.css";
import Description from '../Description';
import data from "./oilpainting.json";
import data1 from "../category/oilpaint.json";
import img1 from "./oil/oil (1).jpg"
import img2 from "./oil/oil (2).jpg"
import img3 from "./oil/oil (3).jpg"
import img4 from "./oil/oil (4).jpg"
import img5 from "./oil/oil (5).jpg"
import img6 from "./oil/oil (6).jpg"
import img7 from "./oil/oil (7).jpg"
import img8 from "./oil/oil (8).jpg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Swiper, SwiperSlide } from "swiper/react";
import Searchbar from '../Searchbar';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../Home/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
} from "../../reducers/CartSlice";


// import required modules
import { FreeMode ,Pagination } from "swiper";
function Oil() {
  const id = Math.floor(Math.round() * 1000)
  const dispatch = useDispatch();
    const addItemsToBasket = () => {
      dispatch(addToBasket({id,category,medium,framesize,framechar,file,fileName}));
  
    };
  const [fileName,setFileName] = useState([])
  const [val , setVal] = useState("");
  const [open, setOpen] = useState("custom-model-main")
  const handleClick = (e) => {
    const a = e.target.dataset.tag;
    console.log(a)
    setVal(a);
    setOpen("custom-model-main model-open")
  }
  const sizes = [
    {id : "1", name: "12\" X 12\""},
    {id : "2", name: "12\" X 16\""},
    {id : "3", name: "16\" X 20\""},
    {id : "4", name: "18\" X 24\""},
    {id : "5", name: "20\" X 30\""},
    {id : "6", name: "24\" X 36\""},
    {id : "7", name: "30\" X 40\""},
  ];
  
  const characters = [
    {id : "1" , sizeId : "1", name: "1 Characters"},
    {id : "2" , sizeId : "2", name: "1 Characters"},
    {id : "3" , sizeId : "2", name: "2 Characters"},
    {id : "4" , sizeId : "3", name: "1 Characters"},
    {id : "5" , sizeId : "3", name: "2 Characters"},
    {id : "6" , sizeId : "3", name: "3 Characters"},
    {id : "7" , sizeId : "4", name: "1 Characters"},
    {id : "8" , sizeId : "4", name: "2 Characters"},
    {id : "9" , sizeId : "4", name: "3 Characters"},
    {id : "10" , sizeId : "4", name: "4 Characters"},
    {id : "11" , sizeId : "5", name: "1 Characters"},
    {id : "12" , sizeId : "5", name: "2 Characters"},
    {id : "13" , sizeId : "5", name: "3 Characters"},
    {id : "14" , sizeId : "5", name: "4 Characters"},
    {id : "15" , sizeId : "5", name: "5 Characters"},
    {id : "16" , sizeId : "6", name: "1 Characters"},
    {id : "17" , sizeId : "6", name: "2 Characters"},
    {id : "18" , sizeId : "6", name: "3 Characters"},
    {id : "19" , sizeId : "6", name: "4 Characters"},
    {id : "20" , sizeId : "6", name: "5 Characters"},
    {id : "21" , sizeId : "6", name: "6 Characters"},
    {id : "22" , sizeId : "6", name: "7 Characters"},
    {id : "23" , sizeId : "7", name: "1 Characters"},
    {id : "24" , sizeId : "7", name: "2 Characters"},
    {id : "25" , sizeId : "7", name: "3 Characters"},
    {id : "26" , sizeId : "7", name: "4 Characters"},
    {id : "27" , sizeId : "7", name: "5 Characters"},
    {id : "28" , sizeId : "7", name: "6 Characters"},
    {id : "29" , sizeId : "7", name: "7 Characters"},
    {id : "30" , sizeId : "7", name: "8 Characters"},
    {id : "31" , sizeId : "7", name: "9 Characters"},
  ];
  const[size , setSize] = useState([]);
  const[character , setCharacter] = useState([]);
  const[framesize, setFrameSize] = useState();
  const [framechar,setFrameChar] = useState([]);
  useEffect(() => {
    setSize(sizes);
    window.scrollTo(0, 0)
  }, []);

  const handleSize = (id) => {
    
    const dt = characters.filter(x => x.sizeId === id);
    setCharacter(dt);
    const sz = sizes.filter(x=> x.id === id)
    sz.map((item) => setFrameSize(item.name));
  } 
  const handleChar = (id) => {
    
    const dt = characters.filter(x => x.id === id);
    character.map((item) => setFrameChar(item.name));
  } 
  const [file,setFile] = useState(null)
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
    console.log(data1);
    const [state, setState] = useState(1);
  const decrease = () => {
    if (state === 0) return;
    setState(state - 1);
  };
  const increase = () => {
    setState(state + 1);
  };
  
const faq = [
  {
      "id": 1 ,
      "question" : "1. What is the difference between Oil and Acrylic painting mediums?",
      "answer" : "An oil painting is painted using oil paints and is a traditional painting method. Oil paints need time to dry, and hence the artis paints it layer by layer. Acrylic paintings are a modern way of painting; while the result looks the same, there is a lot of difference in longevity.Oil paintings last much longer as compared to acrylic paintings."
  },
  {
      "id": 2 ,
      "question" : "2. How to clean an oil painting?",
      "answer" : "There are many easy ways to clean an oil painting, and believe it or not, one among them is using saliva. To know everything about it, please visit this blog."
  },
  {
      "id": 3 ,
      "question" : "3. How much does it cost to get an Oil Painting?",
      "answer" : "Our Oil Paintings start from $130. The prices of all Oil Paintings depend upon Size and Characters. Please continue placing the order or visit our pricing page."
  },
  {
      "id": 4 ,
      "question" : "4. Which is the best painting medium for my handmade portrait?",
      "answer" : "While we offer paintings in all six mediums (Oil, Acrylic, Watercolour, Charcoal, Pencil, and Coloured Pencil), we recommend you get an Oil Painting considering its durability and realistic outcome."
  },
  {
    "id": 5 ,
    "question" : "5. I am ordering a Compilation Painting, which medium will be the best?",
    "answer" : "Compilation paintings turn out best in Oil Medium because they turn out realistic and well blended. If you want to merge photos that are blurred, go with watercolor portraits."
},
{
  "id": 6 ,
  "question" : "6. How do you paint oil paintings?",
  "answer" : "Compilation paintings turn out best in Oil Medium because they turn out realistic and well blended.If you want to merge photos that are blurred, go with watercolor portraits."
}
];
const { category, medium } = useSelector((state) => ({ ...state }));
    return (
        <div>
        <div className='pro-heading mt-5  text-center'>
        <Searchbar/>
            <h1>Oil Painting</h1>
        </div>
            <div className='pro-container '>
                <div id='pro-slider '>
                <div id="carouselExampleControls" class="carousel slide pro-slider" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <center><img src={img1} class="d-block " alt="..."/></center>
      
    </div>
    <div class="carousel-item">
    <center><img src={img2} class="d-block " alt="..."/></center>
      
    </div>
    <div class="carousel-item">
    <center>  <img src={img3} class="d-block " alt="..."/></center>
    
    </div>
    <div class="carousel-item">
    <center> <img src={img4} class="d-block " alt="..."/></center>
     
    </div>
    <div class="carousel-item">
    <center> <img src={img5} class="d-block" alt="..."/></center>
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                </div>
                <div id="pro-info">
                {data.map(data => {
                    return(
                        <div className='info-card mx-3'>
                    <div className='info-card-heading'>
                        <h3>{data.title}</h3>
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
                {data.map(data => {
                    return(
                        <div className='info-card mx-3'>
                    <div className='info-card-heading'>
                        <h3>Select you choice :</h3>
                        <form>
        <div className='select-container size'>
    <div><p>Select frame Size <span className='inches'>(Inches)</span>  : </p></div>
    <div>
   <select id="size" className='form-control form-control--size' onChange={(e) => handleSize(e.target.value)}>
    <option value="0" > Click here to select the size (Inch)</option>
    {
        size &&
        size !== undefined ?
        size.map((sze,index) => {
          return (
              <option key={index} value={sze.id}>{sze.name}</option>
          )
        })
        : "No-Sizes"
      }
      </select>
    </div>
</div>
        <div className='select-container '>
        
      
        <div><p>Select No of Character<span className='inches'>(s)</span> : </p></div>
        <div >
        <select className='form-control form-control--character' onChange={(e) => handleChar(e.target.value)} >
    <option value="0" > Click here to select the Character </option>
    {
        character &&
        character !== undefined ?
        character.map((sze,index) => {
          return (
              <option key={index} value={sze.id}>{sze.name}</option>
          )
        })
        : "No-Character"
      }
      </select>
      </div>
 
            </div>
            <div className='poduct-input '> <input  className='border border-secondary 
             py-2 w-4/5 rounded-pill px-3 bg-orange-100  text-center' onChange={(e) => setFile(e.target.files[0])}   type="file" name="myfile" /> <br/></div>
           
           <Link to="/checkout" state={{size: framesize, char: framechar, data:file,dataName:fileName}} class="button button-pulse"><i class='bx bx-purchase-tag px-2' ></i>Order Now</Link>
            <Link to="/Cart" onClick={addItemsToBasket}><button className='button button-pulse'><i class='bx bx-cart px-2'></i>Add To cart</button></Link>
             
        </form>
                    </div>
                </div>
                    )
                })}
                
                
                {/* <div id="content" className='content'>
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
</div> */}
                </div>
              
            </div>
            <div className='container w-4/5 gallery-container mt-5 px-4'>
<div className='glass'>
<div className='row gallery-bg'>
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
    className="mySwiper mt-5 pt-5"
    
  >
  {slider.map(data => {
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
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
    <Description/>
  </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0"><div className='pricing-faq-container'>
    <h2 className='bold'>Frequently Asked Question</h2>
    <hr/>
    <div className="container faq-container px-5">
    {faq.map(data => {
      return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id={data.id}
        >
          <Typography>{data.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         {data.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
    })} 
    </div> 
</div></div>
  
</div>
</div>
  

        </div>
    );
}

export default Oil;