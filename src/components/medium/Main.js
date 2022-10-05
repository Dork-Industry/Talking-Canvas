import React, {useState} from 'react';
import Searchbar from '../Searchbar';
import data from "./medium.json";
import {useDispatch} from "react-redux";
import "./medium.css";
import {Link} from "react-router-dom";
function Main() {
    const [medium, setMedium] = useState("");
    const [selected, setSelected] = useState(false);
    const dispatch = useDispatch();
    const handleClick = (e) => {
        setMedium(e.target.value);
        dispatch({
            type: "MEDIUM_SELECTED",
            payload : e.target.value
        });

    setSelected(true);
    }

    return (
        <div>
            
        <div className="header mt-5 pt-5">
        <Searchbar />
        <h2>choose your medium</h2>
        </div>


        <div className="main">
            <h3>Choose the Medium of your desired handmade painting from photos and press on ‘Continue’</h3>
        </div>

<div className='container'>
    <div className='row'>
    {data.map(data => {
        return (
            
            <div className=' col-lg-3 col-md-4 col-sm-4 col-6' key={data.id}><center>
            <div className=' category-container'>
            <div className=''>
        <div className="card">

<div className="image">
   <img src={data.image} alt={data.alt}/>
</div>
<div className="des">
 <p>{data.title}</p>
 <div>
 <Link to={data.linkUrl}><button className='px-3' value={data.title} onClick={handleClick}>Select</button></Link>
 </div>


{/* {selected && <Link to={data.linkUrl}>
<button>Order now</button>
</Link>} */}
</div>
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