import React from 'react';
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
import step4 from "../images/step4.png";
function Description() {
    return (
        <div>
           <div className='constainer'>
           <center>
            <div className='description-img'>
                <img src={step1} alt=""></img>
            </div>
            <div className='description-img'>
                <img src={step2} alt=""></img>
            </div>
            <div className='description-img'>
                <img src={step3} alt=""></img>
            </div>
            <div className='description-img'>
                <img src={step4} alt=""></img>
            </div>
            </center>
           </div> 
        </div>
    );
}

export default Description;