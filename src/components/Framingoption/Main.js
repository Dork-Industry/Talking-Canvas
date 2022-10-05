import React from 'react';
import Searchbar from '../Searchbar';
import data from "./frameoption.json";
import "./frame.css";
function Main() {
    const type = [
        {
            "id" : 1 ,
            "image" : "./image/Brown-Ornate.jpg"
        },
        {
            "id" : 2 ,
            "image" : "./image/Coffee-Brown-2.jpg"
        },
        {
            "id" : 3 ,
            "image" : "./image/Cream-White.jpg"
        },
        {
            "id" : 4 ,
            "image" : "./image/Matte-Black.jpg"
        },
        {
            "id" : 5 ,
            "image" : "./image/Shining-Wood.jpg"
        },
        {
            "id" : 6 ,
            "image" : "./image/Whiskey-Brown.jpg"
        },

    ] ;
    return (
        <div>
            <Searchbar/>
            <section class="finishing-sections">
        <div class="finishing-container">
            <div class="finishing-card">
                <div class="finishing-imgBox">
                   <img src="https://www.portraitflip.com/wp-content/uploads/2022/08/rolled-image-01.png" alt="#" /> 
                </div>
                <div class="finishing-content">
                    <h2>Rolled</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet animi aspernatur enim dolore reprehenderit minima odio rem! Porro, expedita.</p>
                </div>
            </div>
            <div class="finishing-card">
                <div class="finishing-imgBox">
                   <img src="https://www.portraitflip.com/wp-content/uploads/2022/08/framed-image-02.png" alt="#" /> 
                </div>
                <div class="finishing-content">
                    <h2>Framed</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet animi aspernatur enim dolore reprehenderit minima odio rem! Porro, expedita.</p>
                </div>
            </div>
            <div class="finishing-card">
                <div class="finishing-imgBox">
                   <img src="https://www.portraitflip.com/wp-content/uploads/2022/08/gallery-wrapped-image-03.png" alt="#" /> 
                </div>
                <div class="finishing-content">
                    <h2>Gallery Wrapped</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet animi aspernatur enim dolore reprehenderit minima odio rem! Porro, expedita.</p>
                </div>
            </div>

        </div>
    </section>
            {data.map(data => {
                return (
                    <section class="overlap-img pt-5" key={data.id}>
    <div class="sm:wrap sm:w-5/6 sm:mx-auto">
        <div class="sm:grid sm:grid-cols-10 ">
          <div class="sm:row-span-full sm:col-start-1 sm:col-span-6 sm:self-center mx-5">
            <img class="object-cover rounded-2xl" src="https://images.unsplash.com/photo-1610212411735-e68d49920025?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
          </div>
          <div class="sm:row-span-full sm:col-span-6 sm:col-end-11 sm:self-center sm:p-4 sm:text-black bg-white  sm:rounded-3xl sm:p-10  sm:bg-clip-padding shadow-2xl mx-4 px-4 pt-4">
            <h1 class="text-2xl font-bold">{data.title}</h1>
            <p class="mb-2">{data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
                )
            })}

<div className='container frame-type'>
<h1>Frame Design</h1>
            <div className='row mt-5'>
            {type.map(type => {
                return (
                    <div className=' col-lg-4 col-md-4 col-sm-4 col-6' key={data.id}><center>
            <div className=' category-container'>
            <div className=''>
        <div className="card">

                <div className="image">
                <img src={type.image}/>
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