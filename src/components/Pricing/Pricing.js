import React , {useEffect} from 'react';
import Heading from './Pricecard';
function Pricing() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div>
       <Heading/>
        </div>
    );
}

export default Pricing;