import React from 'react';

function Video(props) {
    return (
        <div>
              <div class="oil-painting-video-testimonial mt-5">
        <div class="video-testimonial-heading">
            <center><h1 style={{fontSize: "29px", fontWeight:"500"}} > VIDEO TESTIMONIALS</h1></center>
        </div>
        <div class="video-testimonial-grid-container">
            <div class="video--testimonial video--testimonial--card1">
            <iframe width="100%" height="100%"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
            </div>
            <div class="video--testimonial video--testimonial--card2">
               <iframe width="100%" height="100%"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Video;