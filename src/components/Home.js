import React , {useEffect} from 'react';
import Hero from './Hero';
import Social from './Social';
import Gallery from './Home/Gallery';
import Gift from './Gift';
import Blog  from './Blog';
import Testimonial from './Testimonial';
import Work from './Work';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
         
            <Hero />
            <Social />
           <Gallery />
            <Work />
            <Gift />
            <Blog />
            <Testimonial />
         
        </div>
    );
}

export default Home;