import React , {useEffect} from 'react';

import Main from '../medium/Main' ;
function Medium() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div>
          
            <Main />
       

        </div>
    );
}

export default Medium;