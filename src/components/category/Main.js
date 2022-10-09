import React, {useState,useEffect} from 'react';
import data from "./category.json";
import "./category.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux"
import { Button } from '@mui/material';
import {client,urlFor} from "../../sanity"
function Main() {
 
const [category ,setCategory] = useState("");
const [selected , setSelected] = useState(false);
const dispatch = useDispatch();
const handleClick = (e) => {
  setCategory(e.target.value)
  console.log(e.target.value);
dispatch({
    type:"CATEGORY_SELECTED",
    payload : e.target.value
});
setSelected(true);
}
const [data, setData] = useState([])
  const getData = async() => {
    const query = `*[_type=="Category"] | order(title){
      _id,
      title,
      image,
      alt,
      description,
    }`;
    const posts = await client.fetch(query);
    setData(posts)
  }
    useEffect(() => {
        getData()
      }, []);

    return (
        <div>
         
            <div className="header mt-5 ">
            <hr className='h-rule'/>
            
    <h2 className='fs-3' style={{fontWeight:"600"}}>GET YOUR PICTURES TURNED INTO PAINTING</h2>
</div>
<center>  <h1 style={{fontSize: "20px", fontWeight:"500"}} className="pb-4">Choose Category
</h1></center>

<div className='container '>
    <div className='row'>
    {data.map(data => {
        return (
            <div className=' col-lg-3 col-md-4 col-sm-4 col-6' key={data._id}><center>
<div className=' category-container'>

<div className="card">

<div className="image">
<img src={urlFor(data.image).url()} alt={data.alt} />
</div>
<div className="des">
<p>{data.title}</p>
<Link to="/product-medium" ><button value={data.title} onClick={handleClick} >Order Now</button></Link>
{/* {!selected ? (<button value={data.title} onClick={handleClick} className='button button-shake'>Select</button>) : (<Link to="/product-medium" className='button button-pulse'><button value={data.title} onClick={handleClick} className='button button-shake'>Select</button></Link>)} */}

</div>
</div>
</div>

</center>
</div>
          
        )
    })}
       
    </div>
</div>
        </div>
    );
}

export default Main;



{/* <div className=' col-lg-3 col-md-4 col-sm-4 col-6' key={data.id}><center>
<div className=' category-container'>

<div className="card">

<div className="image">
<img src={data.image} alt={data.alt} />
</div>
<div className="des">
<p>{data.title}</p>
<Link to="/product-medium">

<button value={data.title} onClick={(e) => onButtonClick(e.target.value)}>Order now</button></Link>
</div>
</div>
</div>

</center>
</div> */}