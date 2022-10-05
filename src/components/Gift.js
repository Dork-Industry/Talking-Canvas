import React , {useEffect,useState}from 'react';
import {Link} from "react-router-dom";
import vector from "../images/vector1.png";
import { client } from "../sanity";

function Gift() {
    const [state, setstate] = useState([])
    const getData = async() => {
      const query = `*[_type=="gift"]{
        _id,
       description,
      }`;
      const posts = await client.fetch(query);
      setstate(posts)
    }
      useEffect(() => {
          window.scrollTo(0, 0)
          getData()
        }, []);
    return (
        <div>
         <section class="gift-section py-5" id="gift" style={{marginTop: "-80px" }}>
        <div class="container md:full lg:w-4/5" style={{marginTop: "120px", }}>
            <div class="row gift-row gift-bg glass  mx-3" >
               
               <div class="col-md-7 pb-5 px-5" >
                <h1 style={{fontSize: "33px" }} className="font-bold">A gift for your loved one's</h1><br />
                {state.map((item) => (
                        <p key={item._id} style={{fontSize:"12px"}} class="mt-2">{item.description}</p>
                ))}
                
                <Link to="/product-category" class=" btn btn-1 btn-danger">Get Started</Link>
               </div>
              
               <div class="col-md-5 ">
               <center>
                <img src={vector} alt="Book" class="img-fluid"  />
                </center>
               </div>
        </div>
        </div>
    </section>
        </div>
    );
}

export default Gift;