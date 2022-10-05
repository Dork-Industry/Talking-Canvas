
import React, {useEffect} from 'react';

import Main from './Main' ;
function Frameoption() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div>
          
            <Main />
            
        </div>
    );
}

export default Frameoption;