import React , {useState} from 'react';
import {Link} from "react-router-dom"
import "./cart.css";
import data from "./cart.json"
function Cart() {

  const [state, setState] = useState(1);
  const decrease = () => {
    if (state === 0) return;
    setState(state - 1);
  };
  const increase = () => {
    setState(state + 1);
  };
    return (
        <div className='cart'>
               <div class="shopping-cart">
      
      <div class="title">
        Shopping Cart
      </div>

    {data.map((data) => {
        return (
            <div class="item">
        <div class="buttons">
          <span class="delete-btn"></span>
          <span class="like-btn"></span>
        </div>

        <div class="image">
          <img src={data.image} alt="" />
        </div>

        <div class="description">
          <span>Category : {data.category}</span>
          <span>Medium : {data.medium}</span>
       
        </div>

        <div class="quantity">
        <span>Character : {data.character}</span><br/>
        <span>Size : {data.size}</span>
        </div>
        <div class="quantity">
        <div className="value-button ms-3" id="decrease" >-</div>
            <input type="number" id="number" value={state} />
            <div className="value-button" id="increase">+</div>
        </div>

        <div class="total-price"><Link to="/checkout" ><button className='btn btn-danger'>Checkout</button></Link></div>
      </div>
        )
        

    })}
     
     
      </div>
    </div>
  

  
    );
}

export default Cart;