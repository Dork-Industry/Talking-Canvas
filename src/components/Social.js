import React from 'react';

function Social() {
    return (
        <div>
           <div className='container px-5 mt-5  '>
           <div className='row '>
            <div className='col-md-3 col-6 d-flex justify-content-center  ico mb-5 '>
            <div className='row'>
            <div className='col-2'><i className="fas fa-shipping-fast "></i></div>
            <div className="content icons col ps-4">
                <h3 className='font-bold'>free shipping</h3>
                <p>order over $100</p>
            </div>
            </div>
            </div>
            <div className='col-md-3 col-6 ps-3 ico d-flex justify-content-center'> 
            <div className='row'>
            <div className='col-2'>
            <i className="fas fa-lock"></i></div>
            <div className="content icons col  ps-3">
                <h3 className='font-bold'>secure payment</h3>
                <p>100 secure payment</p>
                </div>
            </div>
            </div>
            <div className='col-md-3 col-6 ico d-flex justify-content-center'>
            <div className='row'>
            <div className='col-2'><i className="fas fa-redo-alt"></i></div>
            <div className="content icons col ps-4">
                <h3 className='font-bold'>easy returns</h3>
                <p>10 days returns</p>
                </div>
            </div></div>
            <div className='col-md-3 col-6 ico d-flex justify-content-center'>
            <div className='row'>
            <div className='col-2'> <i className="fas fa-headset me-5"></i></div>
            <div className="content icons col ps-3">
                <h3 className='font-bold '>24/7 support</h3>
                <p>call us anytime</p>
                </div>
            </div></div>
           </div>
            </div>
           
        </div>
    );
}

export default Social;