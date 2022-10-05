import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./styles.css";
import List from './List';
function Searchbar() {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
      };
      

      const [inputText, setInputText] = useState("");
      let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
      const [search , setSearch] = useState(false);

      const changeClass = () => {
        setSearch(!search);
      }
    return (
        
        <div>
        {/* <div className='hide'><div className='container search-container w-80'>
       <div ><form className='search-bar'>
        <input type="text" placeholder="search"></input>
        <button type="submit"><i class="fa fa-search search-icon"></i></button>
        </form></div>
        <div onClick={toggleClass}>
        <i class="fas fa-sliders-h"></i>
        </div> 
        </div>
</div>  */}
<div className='hide'>
<section class="container-search">
<div class="search-container">
        <div class="search-input"  onClick={changeClass}>
            <input type="text" placeholder="Search here ..." onChange={inputHandler}/>
        </div>
        <div class="search-btn" onClick={changeClass}>
            <i class='bx bx-search-alt-2'></i>
        </div>
        <div onClick={toggleClass} class="burger-menu">
        <i class='bx bx-slider-alt' ></i>
        </div>
    </div>
    <div className={search ? "search-box" :"search-hide"}>
<List input={inputText}/>
</div>
    </section>
   
</div>


<div className={isActive ? "sidenav" :"sidenav-hide"}>
            <ul>
            <p className='head text-left'><Link to="/gallery">Gallery</Link></p>
                <hr/>
            <p className='head text-left'>By Theme</p>
                <hr/>
                <Link to="/gallery/oil-painting"><li>Oil Painting Gallery</li></Link>
                <Link to="/gallery/pencil-painting"><li>Pencil Sketch Gallery</li></Link>
                <Link to= "/gallery/charcoal-painting"><li>Charcoal Drawing Gallery</li></Link>
                <Link to="/gallery/watercolor-painting"><li>Watercolor Painting Gallery</li></Link>
                <Link to= "/gallery/colored-pencil-painting"><li>Colored Pencil Drawing Gallery</li></Link>
                <Link to= "/gallery/acrylic-painting"><li>Acrylic Painting Gallery</li></Link>
                <Link to= "/gallery/pastel-painting"><li>Pastel Painting Gallery</li></Link>
             
            
                <p className='head text-left'>By Theme</p>
                <hr/>
                <Link to="/product-medium"><li>Compilation Portraits</li></Link>
                <Link to="/product-medium"><li>Pet Portraits</li></Link>
                <Link to="/product-medium"><li>Family Portraits</li></Link>
                <Link to="/product-medium"><li>Christmas Portraits</li></Link>
                <Link to="/product-medium"><li>Couple Portraits</li></Link>
                <Link to="/product-medium"><li>Baby Portraits</li></Link>
                <Link to="/product-medium"><li>Memorial Portraits</li></Link>
               
            </ul>
         </div>   
        </div>
    );
}

export default Searchbar;