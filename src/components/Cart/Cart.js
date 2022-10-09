import React , {useState} from 'react';
import {Link} from "react-router-dom"
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
} from "../../reducers/CartSlice";

function Cart() {
  const [id,setId] = useState(0)
  const { cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const data = cart.items
  const removeItemsFromBasket = () => {
    if (!data.length > 0) return;
    dispatch(removeFromBasket({id}));
  };
  console.log(cart);
    return (
        <div className='cart'>
               <div class="shopping-cart">
      <div class="title">
        Shopping Cart
      </div>
    {data.map((data) => {
        return (
            <div key={data.id}  class="item">
        <div class="buttons">
          <span onClick={() => {
            setId(data.id)
            removeItemsFromBasket()
          }} class="delete-btn"></span>
        </div>
        <div class="image">
          <img src={data.file} alt="" />
        </div>
        <div class="description">
          <span>Category : {data.category}</span>
          <span>Medium : {data.medium}</span>
        </div>
        <div class="quantity">
        <span>Character : {data.framechar}</span><br/>
        <span>Size : {data.framesize}</span>
        </div>
        <div class="total-price"><Link to="/checkout" state={{size: data.framesize, char: data.framechar, data:data.file,dataName:data.fileName}} ><button className='btn btn-danger'>Checkout</button></Link></div>
      </div>
        )
    })}
      </div>
    </div>
    );
}

export default Cart;