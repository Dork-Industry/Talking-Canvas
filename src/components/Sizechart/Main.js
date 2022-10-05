import React from 'react';
import data from "./sizechart.json";
import Searchbar from '../Searchbar';
function Main() {
    return (
        <div>
            <div className='size-chart-container mt-5 pt-5'>
            <Searchbar />
                <div id="size-chart-heading " className='px-3 text-center'>
                   <h1 className='fs-2 '>CANVAS SIZE CHART</h1> 
                   <p style={{fontSize: "0.7rem"}}>Choosing the right canvas size for your painting is essential. You don’t want your painting to look too small or big once it is put up on the wall. <br/>
                   In fact, the size of the canvas also depends on the number of characters you want us to include in your handmade painting. <br/>
                   Use our Canvas Size Chart guide to understand what size suits your imagination and the walls the best.</p>
                </div>
            </div>
            {data.map(data => {
                return (
                    <section className="overlap-img pt-5" key={data.id}>
                    <h1 className='fs-3 text-center pb-3'>{data.heading}</h1>
    <div className="sm:wrap sm:w-5/6 sm:mx-auto">
        <div className="sm:grid sm:grid-cols-10 ">
          <div className="sm:row-span-full sm:col-start-1 sm:col-span-6 sm:self-center mx-5">
            <img className="object-cover rounded-2xl" src={data.image} alt="" />
          </div>
          <div className="sm:row-span-full size-chart-des sm:col-span-6 sm:col-end-11 sm:self-center sm:p-4 sm:text-black bg-white  sm:rounded-3xl sm:p-10  sm:bg-clip-padding shadow-2xl  mx-4 px-4 pt-4">
            <h1 className="text-2xl font-bold">{data.size}</h1>
            <p className="mb-2 " style={{fontSize: "0.9rem"}}>{data.paragraph}
            </p> <br/>
            <p className="mb-4" style={{fontSize: "0.9rem"}}>{data.paragraph2}
            </p> 
            

          </div>
        </div>
      </div>
    </section>
                )
            })}
        </div>
    );
}

export default Main;