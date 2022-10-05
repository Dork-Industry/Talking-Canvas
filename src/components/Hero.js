import React, {useEffect,useState} from 'react';
import stand from "../images/stand.png";
import Button from './Home/Button';
import { client, urlFor } from "../sanity";

function Hero() {
  const [state, setstate] = useState([])
  const getData = async() => {
    const query = `*[_type=="topframe"]{
      _id,
      name,
      image,
    }`;
    const posts = await client.fetch(query);
    setstate(posts)
  }
    useEffect(() => {
        window.scrollTo(0, 0)
        getData()
      }, []);
    return (
        <div >
     <section className="text-gray-600 body-font mt-5 pt-5  home pb-5 " >
  <div className="container home-container  flex   md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 px-3 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
      <h1 className=" sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">Memories do talk...</h1>
      <p className="mb-8  sm:text-1xl text-1xl leading-relaxed" >Beyond just taking pictures, let our expert artists turn them into real paintings.
 </p>
     <div className=' flex   md:flex-row flex-col items-center' >
     <div class="col-6  btn-container ">
     <Button/>
     </div>     
     </div>
    </div>
    <div className="lg:max-w-xl book-container lg:w-full md:w-1/2 w-11/12">
        <div className='row'>
        {state.map((item) => (
          
            <div key={item._id} className='col-4 book flex-row'><img src={urlFor(item.image).url()} alt={item.name}></img></div>
        ))}
            
        </div>
        <div className='row'>
        <div className='col-12'><img src={stand} alt=""></img></div>
        </div>
    </div>
  </div>
 
</section>
        </div>
    );
}

export default Hero;