import React from 'react';
import delivery from "../images/Delivery.gif";
import upload from "../images/upload.gif";
import paint from "../images/Paint.gif";
import preview from "../images/Preview.gif";

function Work() {
    return (
        <div className='work-bg'>
         <hr className='h-rule'/>
         <center>
        <h1 className="py-5 font-bold" style={{fontSize: "33px"}}>HOW WE WORK?</h1>
        <p style={{fontSize: "23px", fontWeight:"500"}}>Your Artwork is ready in 4 Easy Steps</p>
        <br /><br/>
        <div className="row mb-5" style={{marginTop: "-50px"}}>
            <div className="col-md-3 col-sm-6" style={{backgroundColor:"rgba(194, 194, 194, 0)"}} >
                <img src={upload} alt="" length="200" width="200" style={{marginBottom: "-30px" }}/>
                <h2 className='font-bold'>Upload Photo & Order</h2>
                <p>No hidden charges.</p>
            </div>
            <div className="col-md-3 col-sm-6" style={{backgroundColor:"rgba(194, 194, 194, 0)"}} >
                <img src={paint} alt="" length="200" width="200" style={{marginBottom: "-30px" }}/>
                <h2 className='font-bold'>Painting Starts</h2>
                <p>Enjoy support along the process.</p>
            </div>
            <div className="col-md-3 col-sm-6" style={{backgroundColor:"rgba(194, 194, 194, 0)"}}>
                <img src={preview} alt="" length="200" width="200" style={{marginBottom: "-30px" }} />
                <h2 className='font-bold'>Preview your Painting</h2>
                <p>Get unlimited revisions.</p>
            </div>
            <div className="col-md-3 col-sm-6" style={{backgroundColor:"rgba(194, 194, 194, 0)"}}>
                <img src={delivery} alt="" length="200" width="200" style={{marginBottom: "-30px" }} />
                <h2 className='font-bold'>Framed & Delivered</h2>
                <p>Shipping is super fast and free.</p>
            </div>
        </div>
    </center>   
        </div>
    );
}

export default Work;