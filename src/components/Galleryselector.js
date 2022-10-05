import React from 'react';

function Galleryselector() {
    return (
        <div>
            <div className='container gallery' id="gallery">
            <div className='row  justify-content-center mt-5 mb-5 pb-5'>
                <div className='col-11 glass' >
                <div className='row pt-2 pb-2'>
              
                    {/* <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2022/03/Couple.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Couple.jpg")}

                    /></a></div>
                   <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2020/10/pet-portraits.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2020/10/pet-portraits.jpg")}

                    /></a></div>
                   <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2020/10/Baby-portraits.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2020/10/Baby-portraits.jpg")}

                    /></a></div>
                   <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2022/03/Family.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Family.jpg")}

                    /></a></div>
                   <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2022/03/Christmas.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Christmas.jpg")}

                    /></a></div>
                   <div className='col-2'> <a href="#gallery"> <img src="https://www.portraitflip.com/wp-content/uploads/2022/03/Compilation.jpg" alt=""  className="rounded-circle "
                    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Compilation.jpg")}

                    /></a></div> */}

                    <div class="section full-height over-hide px-4 px-sm-0">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-lg-10 col-xl-8 align-self-center padding-tb">
					<div class="section mx-auto text-center slider-height-padding">
			          	<input class="checkbox frst" type="radio" id="slide-1" name="slider"       onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Family.jpg")}
/>
			          	<label for="slide-1"></label>
			          	<input class="checkbox scnd" type="radio" name="slider" id="slider-2"    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Couple.jpg")}/>
			          	<label for="slider-2"></label>
			          	<input class="checkbox thrd" type="radio" name="slider" id="slider-3"    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2020/10/pet-portraits.jpg")}/>
			          	<label for="slider-3"></label>
			          	<input class="checkbox foth" type="radio" name="slider" id="slider-4"   onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2020/10/Baby-portraits.jpg")}/>
			          	<label for="slider-4"></label>
                          <input class="checkbox fifth" type="radio" name="slider" id="slider-5"      onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Christmas.jpg")}/>
			          	<label for="slider-5"></label>
                          <input class="checkbox six" type="radio" name="slider" id="slider-6"    onClick={(e) => setImage("https://www.portraitflip.com/wp-content/uploads/2022/03/Compilation.jpg")}/ >
			          	<label for="slider-6"></label>
				    </div>
			    </div>
	      	</div>
	    </div>
	</div>
                </div>
               
                       
                </div>
            </div>
           </div> 
        </div>
    );
}

export default Galleryselector;