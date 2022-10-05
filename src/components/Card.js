import React from 'react';

function Card(props) {
let {date , name , review } = props.data;
    return (
        <div>
            <div className="card card-slider pb-4" style={{width:"270px"}}>
                    <div className="car-body ">
                        <p className="text-muted "> {date}</p><br/>
                        
                        <h4 style={{fontWeight:"bold"}}>{name}</h4>
                            <br/>
                        <h4>{review}
                        </h4> <br />

                
                </div>
              </div>
        </div>
    );
}

export default Card;